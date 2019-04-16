import {
  ASTKindToNode,
  DocumentNode,
  FieldDefinitionNode,
  KindEnum,
  TypeDefinitionNode,
} from 'graphql'
import { Fieldname, getTypename, Kind, Typename } from '../ast'
import { nonNull } from '../utils'
import {
  Digraph,
  DigraphEdgeLinkEntry,
  DigraphEdgeWeigthEntry,
  DigraphVertex,
  DigraphVertexEntry,
} from './digraph'

export type Graph = Digraph<
  Typename,
  TypeDefinitionNode,
  Fieldname,
  FieldDefinitionNode
>

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

export const initGraph = (doc: DocumentNode) =>
  Digraph.from(getGraphEntries(doc))

const getGraphEntries = (ast: DocumentNode) =>
  ast.definitions
    .map<GraphEntry | undefined>(node => {
      if (
        node.kind === Kind.OBJECT_TYPE_DEFINITION ||
        node.kind === Kind.INTERFACE_TYPE_DEFINITION
      ) {
        const name = node.name.value
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
        const name = node.name.value
        const implementations = (node.types || []).map(type => type.name.value)

        return { name, implementations, value: node }
      }
    })
    .filter(nonNull)

export const getVerticiesOfKind = (graph: Graph) => (kind: KindEnum) => {
  const result: GraphVertex[] = []

  graph.forEach(vtx => {
    if (vtx.value.kind === kind) {
      result.push(vtx)
    }
  })

  return result
}

export const getNodesOfKind = (graph: Graph) => <K extends KindEnum>(
  kind: K,
) => {
  const result: Array<ASTKindToNode[K]> = []

  graph.forEach(vtx => {
    if (vtx.value.kind === kind) {
      result.push(vtx.value)
    }
  })

  return result
}