import { OperationTypeNode } from 'graphql'
import {
  createOperationArgument,
  createOperationVariable,
  Typename,
} from '../ast'
import { capitalise } from '../utils'

export const operationName = (
  typenames: Typename[],
  operation: OperationTypeNode,
) => typenames.join('') + capitalise(operation)

/**
 * namespacing variables/ arguments with nesting depth
 *
 * other idea would be to use field/type sufix for namespace
 */

export const operationVariable = (depth: number) =>
  createOperationVariable(depth > 0 ? '' + depth : '')

export const operationArgumnet = (depth: number) =>
  createOperationArgument(depth > 0 ? '' + depth : '')

export const flatFragmentName = (typename: Typename) => typename + 'Flat'
