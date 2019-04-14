import {
  EnumValueDefinitionNode,
  FieldDefinitionNode,
  GraphQLSchema,
  InputValueDefinitionNode,
  TypeDefinitionNode,
  TypeExtensionNode,
} from 'graphql'
import { defaultCodegenConfig } from '../config'
import { printJSDoc } from '../strings'

type DescribableNode =
  | TypeDefinitionNode
  | FieldDefinitionNode
  | InputValueDefinitionNode
  | EnumValueDefinitionNode

/**
 * prints StringValue of description props as JSDoc comment
 */
export const printDescription = (
  config = defaultCodegenConfig,
  schema?: GraphQLSchema,
) => (node: DescribableNode) => {
  if (node.description) {
    return printJSDoc(node.description.value)
  }
}

/**
 * hook? to just add description to the result string
 *
 * -  fallthrough on disabled
 */
export const withDescription = (
  config = defaultCodegenConfig,
  schema?: GraphQLSchema,
) => (node: DescribableNode | TypeExtensionNode) => (content: string) => {
  // this to allow handling of extension nodes
  const describable = 'description' in node && !!node.description

  if (!describable || !config.addDescription) {
    return content
  }

  const description = printDescription(config, schema)(node as DescribableNode)

  if (description) {
    return description + '\n' + content
  }

  return content
}
