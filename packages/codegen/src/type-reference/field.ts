import { FieldDefinitionNode, GraphQLSchema } from 'graphql'
import { defaultConfig } from '../config'
import { indent } from '../strings'
import { isNotEmpty } from '../utils'
import { printInputValue } from './input-value'
import { isNullable, printType } from './type'

/**
 *  Build field arguments
 */
export const printFieldArguments = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: FieldDefinitionNode) => {
  if (!isNotEmpty(node.arguments)) {
    return `()`
  }

  // standard modifier
  const modifier =
    isNullable(node.type) && config.useOptionalModifier ? '?: ' : ': '

  let result = '(args' + modifier + '{'

  // print inline for single argument
  if (node.arguments.length === 1) {
    result +=
      ' ' + printInputValue(config, schema)(node.arguments[0]) + ' ' + '})'

    return result
  }

  result +=
    '\n' +
    indent(node.arguments.map(printInputValue(config, schema)).join('\n'), 1)

  result += '\n})'

  return result
}

export const printField = (config = defaultConfig, schema?: GraphQLSchema) => (
  node: FieldDefinitionNode,
) => {
  const name = node.name.value
  const type = printType(config, schema)(node.type)

  // args empty when not printig them.... <== helpful, isn't it?
  const args = config.addFieldsAsFunction
    ? printFieldArguments(config, schema)(node)
    : ''

  // modifier only when not using field arguments
  const modifier =
    isNullable(node.type) &&
    config.useOptionalModifier &&
    !config.addFieldsAsFunction
      ? '?: '
      : ': '

  const result = name + modifier + (args ? `${args} => ${type}` : type)

  return result
}
