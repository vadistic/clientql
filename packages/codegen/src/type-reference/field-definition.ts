import { indent, isNotEmpty, isNullable } from '@graphql-clientgen/core'
import { FieldDefinitionNode } from 'graphql'
import { CodegenProps } from '../codegen'
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
export const printFieldDefinition = (props: CodegenProps) => (
  node: FieldDefinitionNode,
) => {
  const name = node.name.value
  const type = printType(props)(node.type)
  const addDescription = withDescription(props)

  // args empty when not printig them.... <== helpful, isn't it?
  const args = props.config.addFieldAsFunction
    ? printFieldArguments(props)(node)
    : ''

  // modifier only when not using field arguments
  const modifier =
    isNullable(node.type) &&
    props.config.useOptionalModifier &&
    !props.config.addFieldAsFunction
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
export const printFieldArguments = (props: CodegenProps) => (
  node: FieldDefinitionNode,
) => {
  if (!isNotEmpty(node.arguments)) {
    return `()`
  }

  // standard modifier
  const modifier =
    isNullable(node.type) && props.config.useOptionalModifier ? '?: ' : ': '

  let result = '(args' + modifier + '{'

  // print inline for single argument
  if (node.arguments.length === 1) {
    result += ' ' + printInputValue(props)(node.arguments[0]) + ' ' + '})'

    return result
  }

  result +=
    '\n' + indent(node.arguments.map(printInputValue(props)).join('\n'), 1)

  result += '\n})'

  return result
}
