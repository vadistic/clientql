import { InputValueDefinitionNode } from 'graphql'
import { getTypeNodeMeta, TypeNodeMeta } from './type-meta'

// maybe unify with field definition meta?
export interface InputValueDefinitionNodeMeta {
  fieldname: string
  type: TypeNodeMeta
}

export const getInputValueDefinitionNodeMeta = (
  node: InputValueDefinitionNode
): InputValueDefinitionNodeMeta => ({
  fieldname: node.name.value,
  type: getTypeNodeMeta(node.type)
})
