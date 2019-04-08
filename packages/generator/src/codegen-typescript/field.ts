import { isNotEmpty, isNullable } from '@graphql-clientgen/core'
import { FieldDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { indent } from '../print'
import { codegenInputValue } from './input-value'
import { codegenType } from './type'

/**
 *  Build simple type ingoring field arguments
 */

export const codegenFieldToType = (props: GeneratorProps) => (
  node: FieldDefinitionNode
) => {
  const name = node.name.value
  const nullable = isNullable(node.type)

  const type = codegenType(props)(node.type)

  return name + (nullable ? '?: ' : ': ') + type
}

/**
 *  Build field arguments
 */

const codegenFieldArguments = (props: GeneratorProps) => (
  node: FieldDefinitionNode
) => {
  if (!isNotEmpty(node.arguments)) {
    return `()`
  }

  // print inline
  if (props.config.deparametrizeSingleArgument && node.arguments.length === 1) {
    return '(' + codegenInputValue(props)(node.arguments[0]) + ')'
  }

  let result = '(args'
  result += isNullable(node.type) ? '?: ' : ': '
  result += '{' + '\n'

  node.arguments.forEach(inputValue => {
    result += indent(codegenInputValue(props)(inputValue), 1) + '\n'
  })

  result += '})'

  return result
}

// to allow custom return types, separate for cleaner use of previous fn with map
export type TransformFieldType = (props: {
  field: FieldDefinitionNode
  body: string
}) => string

export type TransformFieldArgs = (props: {
  field: FieldDefinitionNode
  body: string
}) => string

/**
 *  Build field typescript as function of args
 */

export const codegenFieldToFunction = (
  props: GeneratorProps,
  options: {
    transformType?: TransformFieldType
    transformArgs?: TransformFieldArgs
  } = {}
) => (node: FieldDefinitionNode) => {
  const fieldname = node.name.value

  const argsBody = codegenFieldArguments(props)(node)
  const typeBody = codegenType(props)(node.type)

  const argsTs = options.transformArgs
    ? options.transformArgs({ body: argsBody, field: node })
    : argsBody

  const typeTs = options.transformType
    ? options.transformType({ body: typeBody, field: node })
    : typeBody

  return fieldname + ': ' + argsTs + ' => ' + typeTs
}
