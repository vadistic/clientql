import { GraphQLSchema, InputValueDefinitionNode, TypeNode } from 'graphql'
import { defaultConfig } from '../config'
import { isNullable, printType } from './type'

/**
 * codegenFieldToTypes works just about the same but let's keep this one for semantics
 */
export const printInputValue = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: InputValueDefinitionNode) => {
  let result = node.name.value

  result += isNullable(node.type) && config.useOptionalModifier ? '?: ' : ': '

  result += printType(config)(node.type)

  return result
}
