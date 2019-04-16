import {
  buildSelections,
  createFragment,
  FragmentResult,
  isInterfaceTypeDefinitonNode,
  isObjectTypeDefinitionNode,
  isUnionTypeDefinitionNode,
  nonNull,
  onlyUnique,
  wrapDocument,
} from '@graphql-clientgen/core'
import {
  InterfaceTypeDefinitionNode,
  ObjectTypeDefinitionNode,
  print,
  UnionTypeDefinitionNode,
} from 'graphql'
import { GeneratorProps } from '../generator'
import { printTsGql } from '../print'

/**
 * generate FragmentResult[] + dependencies FragmentResult[]
 */

export const generateGraphqlFragments = (props: GeneratorProps) => {
  const rootNames = Array.from(props.roots.values())

  type NestableTypeNode =
    | ObjectTypeDefinitionNode
    | UnionTypeDefinitionNode
    | InterfaceTypeDefinitionNode

  const nestableTypes = props.doc.definitions.filter(
    (node): node is NestableTypeNode =>
      (isObjectTypeDefinitionNode(node) &&
        !rootNames.includes(node.name.value)) ||
      isInterfaceTypeDefinitonNode(node) ||
      isUnionTypeDefinitionNode(node),
  )

  const fragmentResults = nestableTypes
    .map(node => buildSelections(props)(node.name.value))
    .map<FragmentResult | undefined>(
      ({ selections, ...rest }, i) =>
        selections && {
          fragment: createFragment({
            condition: nestableTypes[i].name.value,
            fragmentname: nestableTypes[i].name.value,
            selections,
          }),
          ...rest,
        },
    )
    .filter(nonNull)

  const dependencyResults = onlyUnique(
    fragmentResults.reduce(
      (acc, { dependencies }) => [...acc, ...dependencies],
      [] as string[],
    ),
  ).map(name => props.cache.fragments.get(name)!)

  return { fragments: fragmentResults, dependencies: dependencyResults }
}

/**
 * separate because I may need those fragments for something else
 */
export const generateGraphqlFragmentsFile = (props: GeneratorProps) => {
  const { fragments, dependencies } = generateGraphqlFragments(props)

  const resolvedDependencies = resolveFragmentDependencies([
    ...dependencies,
    ...fragments,
  ])

  if (!props.config.printGraphqlToJs) {
    return print(
      wrapDocument(...resolvedDependencies.map(({ fragment }) => fragment)),
    )
  }

  return resolvedDependencies
    .map(({ fragment, dependencies: deps }) =>
      printTsGql(
        props.naming.fragmentConstantName(fragment.name.value),
        fragment,
        deps.map(props.naming.fragmentConstantName),
      ),
    )
    .join('\n\n')
}

/**
 * cannot write to JS file if fragment was used before declaration
 *
 * it's kind of brute force approach,
 * (there should be some dependency graph algortihms) but it does not matter
 */
const resolveFragmentDependencies = (fragments: FragmentResult[]) => {
  const resolvedNames = new Set<string>()
  const unresolvedNames = new Set<string>()
  const fragmentMap = new Map(
    fragments.map(fragResult => [fragResult.fragment.name.value, fragResult]),
  )

  // add no deps fragments
  fragments.forEach(fragmentResult => {
    if (fragmentResult.dependencies.length === 0) {
      resolvedNames.add(fragmentResult.fragment.name.value)
    } else {
      unresolvedNames.add(fragmentResult.fragment.name.value)
    }
  })

  // on when FragmentType.FLAT it just one loop
  const MAX = 50
  let counter = 0

  while (unresolvedNames.size !== 0) {
    unresolvedNames.forEach(name => {
      const fragmentResult = fragmentMap.get(name)!

      if (fragmentResult.dependencies.every(dep => resolvedNames.has(dep))) {
        resolvedNames.add(name)
        unresolvedNames.delete(name)
      }
    })

    counter += 1
    if (counter >= MAX) {
      throw Error('Cannot resolve fragment dependencies')
    }
  }

  return Array.from(resolvedNames).map(name => fragmentMap.get(name)!)
}
