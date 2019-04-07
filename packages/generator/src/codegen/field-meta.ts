import { FieldDefinitionNode } from 'graphql'
import {
  getInputValueDefinitionNodeMeta,
  InputValueDefinitionNodeMeta
} from './input-value-meta'
import { getTypeNodeMeta, isNullable, TypeNodeMeta } from './type-meta'

export interface FieldDefinitionNodeMeta {
  fieldname: string
  arguments?: InputValueDefinitionNodeMeta[] | undefined
  type: TypeNodeMeta
}

/**
 * Wherther all arguments can be nullable
 */
export const areArgsNullable = (fieldMeta: FieldDefinitionNodeMeta) =>
  !fieldMeta.arguments ||
  !fieldMeta.arguments.some(arg => !isNullable(arg.type))

export const getFieldDefinitionNodeMeta = (
  node: FieldDefinitionNode
): FieldDefinitionNodeMeta => ({
  fieldname: node.name.value,
  arguments: node.arguments
    ? node.arguments.map(getInputValueDefinitionNodeMeta)
    : undefined,
  type: getTypeNodeMeta(node.type)
})
