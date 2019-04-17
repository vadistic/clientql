import {
  FragmentDefinitionNode,
  OperationDefinitionNode,
  SelectionNode,
  VariableDefinitionNode,
} from 'graphql'
import { Fieldname, FragmentName, Typename } from '../ast'

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
  fragmentNames: FragmentName[]
  complete: boolean
  // flat operation would be simple (query {hello})...
  flat: boolean
}

export interface SelectionsResult {
  selections?: SelectionNode[]
  fragmentNames: FragmentName[]
  complete: boolean
  flat: boolean
}

export interface FragmentResult {
  fragment: FragmentDefinitionNode
  fragmentNames: FragmentName[]
  flat: boolean
  // I'm building & caching only complete fragments
  complete: boolean // true
}

/*
 * helper
 */
export interface NestableSelectionResult {
  selection?: SelectionNode
  fragmentNames: FragmentName[]
  complete: boolean
  flat: boolean
}

export interface OperationSelectionResult {
  variables: VariableDefinitionNode[]
  fragmentNames: FragmentName[]
  selections: SelectionNode[]
  complete: boolean
  flat: boolean
}
