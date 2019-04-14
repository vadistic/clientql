import {
  EnumValueDefinitionNode,
  FieldDefinitionNode,
  InputValueDefinitionNode,
  TypeDefinitionNode,
  TypeExtensionNode,
} from 'graphql'
import { CodegenProps } from '../codegen'
import { printJSDoc } from '../strings'

type DescribableNode =
  | TypeDefinitionNode
  | FieldDefinitionNode
  | InputValueDefinitionNode
  | EnumValueDefinitionNode

/**
 * prints StringValue of description props as JSDoc comment
 */
export const printDescription = (node: DescribableNode) => {
  if (node.description) {
    return printJSDoc(node.description.value)
  }
}

/**
 * hook? to just add description to the result string
 *
 * -  fallthrough on disabled
 */
export const withDescription = (props: CodegenProps) => (
  node: DescribableNode | TypeExtensionNode,
) => (content: string) => {
  // this to allow handling of extension nodes
  const describable = 'description' in node && !!node.description

  if (!describable || !props.config.addDescription) {
    return content
  }

  const description = printDescription(node as DescribableNode)

  if (description) {
    return description + '\n' + content
  }

  return content
}
