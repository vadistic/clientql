import { indent, isNotEmpty, isNullable } from '@graphql-clientgen/core'
import { FieldDefinitionNode, GraphQLSchema } from 'graphql'
import { defaultConfig } from '../config'
import { withDescription } from './description'
import { printInputValue } from './input-value'
import { printType } from './type'

/**
 * print FieldDefinitionNode
 *
 * supports:
 * - `useOptionalModifier`
 * - `addFieldAsFunction`
 */
export const printFieldDefinition = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: FieldDefinitionNode) => {
  const name = node.name.value
  const type = printType(config, schema)(node.type)
  const addDescription = withDescription(config, schema)

  // args empty when not printig them.... <== helpful, isn't it?
  const args = config.addFieldAsFunction
    ? printFieldArguments(config, schema)(node)
    : ''

  // modifier only when not using field arguments
  const modifier =
    isNullable(node.type) &&
    config.useOptionalModifier &&
    !config.addFieldAsFunction
      ? '?: '
      : ': '

  return addDescription(node)(
    name + modifier + (args ? `${args} => ${type}` : type),
  )
}

/**
 * print FieldDefinitionNode arguments
 *
 * supports:
 * - `useOptionalModifier`
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
