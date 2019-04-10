import { GraphQLSchema, InputValueDefinitionNode } from 'graphql'
import { defaultConfig } from '../config'
import { withDescription } from './description'
import { isNullable, printType } from './type'

/**
 * codegenFieldToTypes works just about the same but let's keep this one for semantics
 */
export const printInputValue = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: InputValueDefinitionNode) => {
  const addDescription = withDescription(config, schema)
  const name = node.name.value
  const modifier =
    isNullable(node.type) && config.useOptionalModifier ? '?: ' : ': '
  const type = printType(config, schema)(node.type)

  return addDescription(node)(name + modifier + type)
}
