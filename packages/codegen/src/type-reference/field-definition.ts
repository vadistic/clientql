import {
  Fieldname,
  indent,
  isNotEmpty,
  isNullable,
  TypescriptString,
} from '@graphql-clientgen/core'
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
): TypescriptString => {
  const fieldname: Fieldname = node.name.value
  const typeTs = printType(props)(node.type)
  const addDescription = withDescription(props.config)

  // args empty when not printig them.... <== helpful, isn't it?
  const argsTs =
    props.config.addFieldAsFunction && printFieldArguments(props)(node)

  // modifier only when not using field arguments
  const modifierTs =
    isNullable(node.type) &&
    props.config.useOptionalModifier &&
    !props.config.addFieldAsFunction
      ? '?: '
      : ': '

  return addDescription(node)(
    fieldname + modifierTs + (argsTs ? `${argsTs} => ${typeTs}` : typeTs),
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
): TypescriptString => {
  if (!isNotEmpty(node.arguments)) {
    return `()`
  }

  // standard modifier
  const modifierTs =
    isNullable(node.type) && props.config.useOptionalModifier ? '?: ' : ': '

  let resultTs: TypescriptString = '(args' + modifierTs + '{'

  // print inline for single argument
  if (node.arguments.length === 1) {
    resultTs += ' ' + printInputValue(props)(node.arguments[0]) + ' ' + '})'

    return resultTs
  }

  resultTs += '\n'
  resultTs += indent(node.arguments.map(printInputValue(props)).join('\n'), 1)
  resultTs += '\n})'

  return resultTs
}
