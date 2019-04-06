import { EnumTypeDefinitionNode, EnumValueDefinitionNode } from 'graphql'

export interface EnumTypeDefinitionNodeMeta {
  typename: string
  values?: string[]
}

export const getEnumTypeDefinitionNodeMeta = (
  node: EnumTypeDefinitionNode
): EnumTypeDefinitionNodeMeta => ({
  typename: node.name.value,
  values: node.values ? node.values.map(el => el.name.value) : undefined
})
