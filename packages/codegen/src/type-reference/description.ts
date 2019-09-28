import { TypescriptString } from '@clientql/core'
import {
  ASTNode,
  EnumValueDefinitionNode,
  FieldDefinitionNode,
  InputValueDefinitionNode,
  TypeDefinitionNode,
  TypeExtensionNode,
} from 'graphql'
import { CodegenConfig } from '../config'
import { printJSDoc } from '../print'

export type DescribableNode =
  | TypeDefinitionNode
  | FieldDefinitionNode
  | InputValueDefinitionNode
  | EnumValueDefinitionNode

export const isDescribableNode = (node: ASTNode): node is DescribableNode =>
  'description' in node

/**
 * prints StringValue of description props as JSDoc comment
 */
export const printDescription = (
  node: DescribableNode,
): TypescriptString | undefined =>
  !!node.description ? printJSDoc(node.description.value) : undefined

/**
 * hook? to just add description to the result string
 *
 * -  fallthrough on disabled
 */
export const withDescription = (config: CodegenConfig) => (
  node: DescribableNode | TypeExtensionNode,
) => (content: TypescriptString): TypescriptString => {
  if (!isDescribableNode(node) || !config.addDescription) {
    return content
  }

  const description = printDescription(node)

  if (description) {
    return description + '\n' + content
  }

  return content
}
