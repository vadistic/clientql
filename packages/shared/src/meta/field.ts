import { FieldDefinitionNode } from 'graphql'
import {
  getInputValueDefinitionNodeMeta,
  InputValueDefinitionNodeMeta
} from './input-value'
import { getTypeNodeMeta, TypeNodeMeta } from './type'

export interface FieldDefinitionNodeMeta {
  fieldname: string
  arguments?: InputValueDefinitionNodeMeta[] | undefined
  type: TypeNodeMeta
}

export const getFieldDefinitionNodeMeta = (
  node: FieldDefinitionNode
): FieldDefinitionNodeMeta => ({
  fieldname: node.name.value,
  arguments: node.arguments
    ? node.arguments.map(getInputValueDefinitionNodeMeta)
    : undefined,
  type: getTypeNodeMeta(node.type)
})
