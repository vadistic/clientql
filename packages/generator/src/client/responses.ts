import {
  printBlockComment,
  printFragment,
  printSelections,
  printTsImports,
  printTsType,
} from '@graphql-clientgen/codegen'
import {
  buildSelections,
  FragmentName,
  isEnumTypeDefinitionNode,
  isNotEmpty,
  isScalarTypeDefinitionNode,
  Typename,
  TypescriptString,
} from '@graphql-clientgen/core'
import { FragmentDefinitionNode, Kind, SelectionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { printYadaYada } from '../print'

export const printClientsResponses = (props: GeneratorProps) => (
  targets: Set<Typename>,
): TypescriptString => {
  const { fragments, selectionsMap } = buildClientSelections(props)(targets)

  // print responses
  const responsesTs: TypescriptString[] = []

  selectionsMap.forEach((selections, typename) => {
    const nameTs = props.naming.clientResponseName(typename)
    const contentTs = printSelections(props)(typename, selections)

    responsesTs.push(printTsType(nameTs, contentTs))
  })

  // print dependency fragments
  const fragmentsTs: TypescriptString[] = []

  fragments.forEach(fragment => {
    const fragmentTs = printFragment(props)(fragment)
    fragmentsTs.push(fragmentTs)
  })

  const importsTs = printClientResponsesImports(props)

  let resultTs = printYadaYada() + '\n\n'

  if (importsTs) {
    resultTs += importsTs + '\n\n'
  }

  resultTs += printBlockComment('Responses') + '\n\n'
  resultTs += responsesTs.join('\n\n') + '\n\n'

  resultTs += printBlockComment('Fragments') + '\n\n'
  resultTs += fragmentsTs.join('\n\n') + '\n\n'

  return resultTs
}

/**
 * needs to import scalars and enums from './types
 */
const printClientResponsesImports = (
  props: GeneratorProps,
): TypescriptString | undefined => {
  const scalarNamesTs = props.doc.definitions
    .filter(isScalarTypeDefinitionNode)
    .map(node => node.name.value)

  const enumNamesTs = props.doc.definitions
    .filter(isEnumTypeDefinitionNode)
    .map(node => node.name.value)

  // it would be better to import only those used but later
  const typesImportsTs = printTsImports(
    [...scalarNamesTs, ...enumNamesTs],
    props.paths.types,
  )

  return typesImportsTs
}

/**
 * selection of the same type will be the same even for diferent operation paths
 * (and so can be reused)
 *
 * this is crucial design consideration,
 * otherwise codegen will end up with 100k lines files
 */
const buildClientSelections = (props: GeneratorProps) => (
  targets: Set<Typename>,
) => {
  const selectionsMap = new Map<Typename, SelectionNode[]>()
  // resolve unique fragments
  const fragmentNamesSet = new Set<FragmentName>()

  targets.forEach(target => {
    const { selections, fragmentNames } = buildSelections(props)(target)

    // should be noop
    if (!isNotEmpty(selections)) {
      return
    }

    selectionsMap.set(target, selections)
    fragmentNames.forEach(name => {
      fragmentNamesSet.add(name)
    })
  })

  // retrive fragments form cache
  const fragments: FragmentDefinitionNode[] = []
  fragmentNamesSet.forEach(name => {
    fragments.push(props.cache.fragments.get(name)!.fragment)
  })

  return { selectionsMap, fragments }
}
