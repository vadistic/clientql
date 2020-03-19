import { FieldDefinitionNode, OperationTypeNode, TypeDefinitionNode } from 'graphql'
import { Fieldname, Typename } from '../ast'
import { Digraph } from './digraph'

/*
 * Digraph
 */

export type DigraphEdgeLinkEntry<EdgeKey, Name> = [EdgeKey, Name]
export type DigraphEdgeWeigthEntry<EdgeKey, Weigth> = [EdgeKey, Weigth]

export interface DigraphVertexEntry<Name, Value, EdgeKey, Weigth> {
  name: Name
  value: Value
  edgesArr?: Array<DigraphEdgeLinkEntry<EdgeKey, Name>>
  weigthsArr?: Array<DigraphEdgeWeigthEntry<EdgeKey, Weigth>>
  prototypes?: Name[]
  implementations?: Name[]
}

export interface DigraphVertex<Name, Value, EdgeKey, Weigth>
  extends DigraphVertexEntry<Name, Value, EdgeKey, Weigth> {
  edgesMap?: Map<EdgeKey, Name>
  weightsMap?: Map<EdgeKey, Weigth>
}

/*
 * Graph => my specific digraph
 */

export type Graph = Digraph<Typename, TypeDefinitionNode, Fieldname, FieldDefinitionNode>

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

/*
 * misc
 */

export const operationTypes: OperationTypeNode[] = ['query', 'mutation', 'subscription']
