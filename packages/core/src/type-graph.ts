import { DocumentNode, FieldDefinitionNode, TypeDefinitionNode } from 'graphql'
import { getTypename, isTypeDefinitionNode, Kind } from './ast'
import {
  Digraph,
  DigraphEdgeLinkEntry,
  DigraphEdgeWeigthEntry,
  DigraphVertex,
  DigraphVertexEntry,
} from './digraph'

export type TypeGraph = ReturnType<typeof createTypeGraph>

export type Edge = DigraphEdgeLinkEntry<string, string>
export type EdgeType = DigraphEdgeWeigthEntry<string, FieldDefinitionNode>

export type GraphEntry = DigraphVertexEntry<
  string,
  TypeDefinitionNode,
  string,
  FieldDefinitionNode
>

export type GraphVertex = DigraphVertex<
  string,
  TypeDefinitionNode,
  string,
  FieldDefinitionNode
>

export const createTypeGraph = (ast: DocumentNode) =>
  Digraph.from(createGraphEntries(ast))

const createGraphEntries = (ast: DocumentNode) =>
  ast.definitions.filter(isTypeDefinitionNode).map<GraphEntry>(node => {
    const name = node.name.value

    if (
      node.kind === Kind.OBJECT_TYPE_DEFINITION ||
      node.kind === Kind.INTERFACE_TYPE_DEFINITION
    ) {
      const edgesArr: Edge[] = (node.fields || []).map(field => [
        field.name.value,
        getTypename(field.type),
      ])

      const fields: EdgeType[] = (node.fields || []).map(field => [
        field.name.value,
        field,
      ])

      const prototypes =
        node.kind === Kind.OBJECT_TYPE_DEFINITION && node.interfaces
          ? node.interfaces.map(inter => inter.name.value)
          : undefined

      return { name, edgesArr, weigthsArr: fields, prototypes, value: node }
    }

    if (node.kind === Kind.UNION_TYPE_DEFINITION) {
      const implementations = (node.types || []).map(type => type.name.value)

      return { name, implementations, value: node }
    }

    // Scalar
    // Enum
    // InputObject
    return { name, value: node }
  })
