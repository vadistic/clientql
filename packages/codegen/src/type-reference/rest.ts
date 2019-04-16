import { capitalise, indent, TypescriptString } from '@graphql-clientgen/core'
import {
  ArgumentNode,
  Kind,
  ObjectFieldNode,
  SchemaDefinitionNode,
  SchemaExtensionNode,
  ValueNode,
} from 'graphql'
import { CodegenProps } from '../codegen'
import { CodegenConfig } from '../config'
import { initCodegenNaming } from '../naming'

/**
 * This is all pointles but nvm...
 */
export const printObjectField = (node: ObjectFieldNode): TypescriptString =>
  node.name.value + ': ' + printValue(node.value)

export const printValue = (node: ValueNode): TypescriptString => {
  switch (node.kind) {
    case Kind.INT:
    case Kind.FLOAT:
    case Kind.BOOLEAN:
      return `${node.value}`
    case Kind.STRING:
    case Kind.ENUM:
      return `'${node.value}'`
    case Kind.NULL:
      return 'null'
    case Kind.LIST:
      if (node.values.length === 0) {
        return '[]'
      }

      const listValue = node.values.map(printValue)

      // arbitrary - up to 3 values inline
      if (node.values.length <= 3) {
        return '[' + listValue.join(', ') + ']'
      }

      return '[\n' + indent(listValue.join('\n'), 1) + '\n]'

    case Kind.OBJECT:
      if (node.fields.length === 0) {
        return '{}'
      }

      return (
        '{\n' + indent(node.fields.map(printObjectField).join(',\n')) + '\n}'
      )
    case Kind.VARIABLE:
      return node.name.value
    /* noop */
    default:
      return ''
  }
}

/**
 * prints explicit argument value, why?
 */
export const printArgument = (node: ArgumentNode): TypescriptString => {
  const result = node.name + ': ' + printValue(node.value)

  return result
}
