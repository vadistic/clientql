import { DocumentNode, FieldDefinitionNode, TypeDefinitionNode } from 'graphql'
import {
  Fieldname,
  getTypename,
  isTypeDefinitionNode,
  Kind,
  Typename,
} from './ast'
import {
  Digraph,
  DigraphEdgeLinkEntry,
  DigraphEdgeWeigthEntry,
  DigraphVertex,
  DigraphVertexEntry,
} from './digraph'

export type Graph = ReturnType<typeof createGraph>

export type Edge = DigraphEdgeLinkEntry<Fieldname, Typename>
export type EdgeField = DigraphEdgeWeigthEntry<Fieldname, FieldDefinitionNode>

export type GraphEntry = DigraphVertexEntry<
  Typename,
  TypeDefinitionNode,
  Fieldname,
  FieldDefinitionNode
>

export type GraphVertex = DigraphVertex<
  Typename,
  TypeDefinitionNode,
  Fieldname,
  FieldDefinitionNode
>

export const createGraph = (ast: DocumentNode) =>
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

      const fields: EdgeField[] = (node.fields || []).map(field => [
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
