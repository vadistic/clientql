import { ScalarTypeDefinitionNode } from 'graphql'

export interface ScalarTypeDefinitionNodeMeta {
  typename: string
}
/**
 * Quite pointles but to keep semantics
 */

export const getScalarTypeDefinitionNodeMeta = (
  node: ScalarTypeDefinitionNode
): ScalarTypeDefinitionNodeMeta => ({
  typename: node.name.value
})
