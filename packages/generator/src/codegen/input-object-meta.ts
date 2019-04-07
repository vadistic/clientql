import { InputObjectTypeDefinitionNode } from 'graphql'
import {
  getInputValueDefinitionNodeMeta,
  InputValueDefinitionNodeMeta
} from './input-value-meta'

export interface InputObjectTypeDefinitionNodeMeta {
  // maybe not typename to not confuse it with object types/ scalars
  typename: string
  fields?: InputValueDefinitionNodeMeta[]
}

export const getInputObjectTypeDefinitionNodeMeta = (
  node: InputObjectTypeDefinitionNode
): InputObjectTypeDefinitionNodeMeta => ({
  typename: node.name.value,
  fields: node.fields
    ? node.fields.map(getInputValueDefinitionNodeMeta)
    : undefined
})
