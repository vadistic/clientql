import {
  buildSelection,
  createFragment,
  FragmentResult,
  getRootTypenames,
  isInterfaceTypeDefinitonNode,
  isObjectTypeDefinitionNode,
  isUnionTypeDefinitionNode,
  nonNull,
  onlyUnique,
  unwrapSelectionSet,
  wrapDocument,
} from '@graphql-clientgen/core'
import {
  InterfaceTypeDefinitionNode,
  ObjectTypeDefinitionNode,
  print,
  UnionTypeDefinitionNode,
} from 'graphql'
import { GeneratorProps } from '../generator'
import { naming } from '../naming'
import { printGqlTag } from '../print'

/**
 * generate FragmentResult[] + dependencies FragmentResult[]
 */

export const generateGraphqlFragments = (props: GeneratorProps) => {
  const rootNames = getRootTypenames(props)

  type NestableTypeNode =
    | ObjectTypeDefinitionNode
    | UnionTypeDefinitionNode
    | InterfaceTypeDefinitionNode

  const nestedTypes = props.doc.definitions.filter(
    (node): node is NestableTypeNode =>
      (isObjectTypeDefinitionNode(node) &&
        !rootNames.includes(node.name.value)) ||
      isInterfaceTypeDefinitonNode(node) ||
      isUnionTypeDefinitionNode(node),
  )

  const fragmentResults = nestedTypes
    .map(node => buildSelection(props)([['$ROOT', node.name.value]]))
    .map<FragmentResult | undefined>(
      ({ selection, fragmentnames, flat }, i) =>
        selection && {
          definition: createFragment({
            condition: nestedTypes[i].name.value,
            fragmentname: nestedTypes[i].name.value,
            selections: unwrapSelectionSet(selection)!,
          }),
          flat,
          deps: fragmentnames,
        },
    )
    .filter(nonNull)

  const dependencyResults = onlyUnique(
    fragmentResults.reduce(
      (acc, { deps }) => [...acc, ...deps],
      [] as string[],
    ),
  ).map(name => props.fragments.get(name)!)

  return { fragments: fragmentResults, dependencies: dependencyResults }
}

/**
 * separate because I may need those fragments for something else
 */
export const generateGraphqlFragmentsFile = (props: GeneratorProps) => {
  const { fragments, dependencies } = generateGraphqlFragments(props)

  const resolved = resolveFragmentDependencies([...dependencies, ...fragments])

  const getConstantName = naming.fragmentConstantName(props.config)

  if (!props.config.printGraphqlToJs) {
    return print(wrapDocument(...resolved.map(({ definition }) => definition)))
  }

  return resolved
    .map(({ definition, deps }) =>
      printGqlTag(
        getConstantName(definition.name.value),
        definition,
        deps.map(getConstantName),
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
    fragments.map(frag => [frag.definition.name.value, frag]),
  )

  // add no deps fragments
  fragments.forEach(frag => {
    if (frag.deps.length === 0) {
      resolvedNames.add(frag.definition.name.value)
    } else {
      unresolvedNames.add(frag.definition.name.value)
    }
  })

  // on when FragmentType.FLAT it just one loop
  const MAX = 50
  let counter = 0

  while (unresolvedNames.size !== 0) {
    unresolvedNames.forEach(name => {
      const frag = fragmentMap.get(name)!

      if (frag.deps.every(dep => resolvedNames.has(dep))) {
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
