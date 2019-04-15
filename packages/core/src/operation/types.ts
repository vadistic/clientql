import {
  FragmentDefinitionNode,
  OperationDefinitionNode,
  SelectionNode,
  VariableDefinitionNode,
} from 'graphql'
import { Fieldname, Fragmentname, Typename } from '../ast'

/**
 * represents operation nesting level
 *
 * Only fieldname => enter nesting level
 *
 * Only Typename => enter inline of union/interface
 */
export type OperationEdge = [Fieldname, undefined] | [undefined, Typename]

export interface OperationResult {
  operation: OperationDefinitionNode
  dependencies: string[]
  complete: boolean
  // flat operation would be simple (query {hello})...
  flat: boolean
}

export interface SelectionsResult {
  selections?: SelectionNode[]
  dependencies: Fragmentname[]
  complete: boolean
  flat: boolean
}

export interface FragmentResult {
  fragment: FragmentDefinitionNode
  dependencies: Fragmentname[]
  flat: boolean
  // I'm building & caching only complete fragments
  complete: true
}

/*
 * helper
 */
export interface NestableSelectionResult {
  selection?: SelectionNode
  dependencies: Fragmentname[]
  complete: boolean
  flat: boolean
}

export interface OperationSelectionResult {
  variables: VariableDefinitionNode[]
  dependencies: string[]
  selections: SelectionNode[]
  complete: boolean
  flat: boolean
}
