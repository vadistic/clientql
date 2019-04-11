import { DocumentNode } from 'graphql'
import { Digraph, Edge } from './digraph'
import {
  isInterfaceTypeDefinitonNode,
  isObjectTypeDefinitionNode,
  isTypeDefinitionNode,
  isUnionTypeDefinitionNode,
  unwrapType,
} from './graphql-ast'
import { tuplify } from './utils'

export type GraphQLGraph = ReturnType<typeof createGraphQLGraph>

export type TypeEdge = Edge<string, string>

export const createGraphQLGraph = (ast: DocumentNode) => {
  const entries = getTGraphQLGraphEntries(ast)
  const graph = Digraph.from(entries)

  return graph
}

const getTGraphQLGraphEntries = (ast: DocumentNode) => {
  const entries = ast.definitions.filter(isTypeDefinitionNode).map(node => {
    let edges: TypeEdge[] = []

    if (
      (isObjectTypeDefinitionNode(node) ||
        isInterfaceTypeDefinitonNode(node)) &&
      node.fields
    ) {
      edges = node.fields.map(field => [
        field.name.value,
        unwrapType(field.type).typename,
      ])
    }

    if (isUnionTypeDefinitionNode(node) && node.types) {
      edges = node.types.map((type, i) => ['' + i, type.name.value])
    }

    return tuplify([node.name.value, node, edges])
  })

  return entries
}
