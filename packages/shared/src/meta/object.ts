import { ObjectTypeDefinitionNode } from 'graphql'
import { FieldDefinitionNodeMeta, getFieldDefinitionNodeMeta } from './field'

export interface ObjectTypeDefinitionNodeMeta {
  typename: string
  fields?: FieldDefinitionNodeMeta[]
  interfaces?: string[]
}

/**
 * TODO: how to handle interface downstream?
 * TODO: Allow extendsion or merge them beforehand
 */
export const getObjectTypeDefinitionNodeMeta = (
  node: ObjectTypeDefinitionNode
): ObjectTypeDefinitionNodeMeta => ({
  typename: node.name.value,
  fields: node.fields ? node.fields.map(getFieldDefinitionNodeMeta) : undefined,
  interfaces: node.interfaces
    ? node.interfaces.map(el => el.name.value)
    : undefined
})
