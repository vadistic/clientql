import { FieldNode, SelectionNode } from 'graphql'
import { CoreProps } from '../config'
import {
  createField,
  createFragment,
  isEnumTypeDefinitionNode,
  isObjectTypeDefinitionNode,
  isScalarTypeDefinitionNode,
  Typename,
} from '../graphql-ast'
import { TypeEdge } from '../graphql-graph'
import { tuplify } from '../utils'
import { flatFragmentName } from './name'

export const createFlatSelection = ({ graph, config }: CoreProps) => (
  typename: Typename,
) => {
  const entry = graph.get(typename)!
  const selections: FieldNode[] = []

  if (config.addTypename) {
    selections.push(createField({ fieldname: '__typename' }))
  }

  entry.edges.forEach((key, edgeKey) => {
    const target = graph.get(key)

    // undef => primitve/scalar not in schema
    // scalar => flat field
    // enum => flat field
    if (
      !target ||
      isScalarTypeDefinitionNode(target.value) ||
      isEnumTypeDefinitionNode(target.value)
    ) {
      selections.push(createField({ fieldname: edgeKey }))
      return
    }
  })

  return selections
}

export const createFlatFragment = (props: CoreProps) => (
  typename: Typename,
) => {
  const name = flatFragmentName(typename)
  const selections = createFlatSelection(props)(typename)

  return createFragment({ condition: typename, selections, fragmentname: name })
}

export const createDeepSelection = ({ graph, config }: CoreProps) => (
  typename: Typename,
  depth = config.operationDepth,
  stack: TypeEdge[] = [['__START__', typename]],
) => {
  const deepSelection = createDeepSelection({ graph, config })

  // tricky because I do not know edgeKey on the top level
  // so I'll just disable going back to the same typename
  // if the inital stack was not provided
  const isCircural = (edge: TypeEdge) =>
    stack.some(
      ([edgeKey, key]) =>
        ((stack[0][1] === '__START__' && stack.length === 2) ||
          edgeKey === edge[0]) &&
        key === edge[1],
    )

  const entry = graph.get(typename)!
  const selections: SelectionNode[] = []

  if (config.addTypename) {
    selections.push(createField({ fieldname: '__typename' }))
  }

  entry.edges.forEach((key, edgeKey) => {
    const target = graph.get(key)
    const edge = tuplify([edgeKey, key])

    // undef => primitve/scalar not in schema
    // scalar => flat field
    // enum => flat field

    // no check here because those cannot be recursive/nested
    if (
      !target ||
      isScalarTypeDefinitionNode(target.value) ||
      isEnumTypeDefinitionNode(target.value)
    ) {
      selections.push(createField({ fieldname: edgeKey }))
      return
    }

    // base case
    if (depth === 0) {
      return
    }

    // avoid circles
    if (isCircural(edge)) {
      return
    }

    if (isObjectTypeDefinitionNode(target.value)) {
      const nested = deepSelection(key, depth - 1, [...stack, edge])
      selections.push(createField({ fieldname: edgeKey, selections: nested }))
    }
  })

  return selections
}
