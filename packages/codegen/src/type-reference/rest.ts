import {
  ArgumentNode,
  GraphQLSchema,
  Kind,
  ObjectFieldNode,
  SchemaDefinitionNode,
  SchemaExtensionNode,
  ValueNode,
} from 'graphql'
import { defaultConfig } from '../config'
import { naming } from '../naming'
import { indent, INDENT_WIDTH } from '../strings'

/**
 * This is all pointles but nvm...
 */
export const printObjectField = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: ObjectFieldNode) =>
  node.name.value + ': ' + printValue(config, schema)(node.value)

export const printValue = (config = defaultConfig, schema?: GraphQLSchema) => (
  node: ValueNode,
): string => {
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

      const listValue = node.values.map(printValue(config, schema))

      if (node.values.length <= 3) {
        return '[' + listValue.join(', ') + ']'
      }

      return '[\n' + indent(listValue.join('\n'), 1) + '\n]'

    case Kind.OBJECT:
      if (node.fields.length === 0) {
        return '{}'
      }

      const objectFieldPrinter = printObjectField(config, schema)

      return (
        '{\n' + indent(node.fields.map(objectFieldPrinter).join(',\n')) + '\n}'
      )
    case Kind.VARIABLE:
      return node.name.value
    /* noop */
    default:
      return ''
  }
}

export const printSchemaDefinition = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: SchemaDefinitionNode | SchemaExtensionNode) => {
  if (!node.operationTypes) {
    return null
  }

  const getName = naming.interfaceName(config)

  const result = node.operationTypes
    .map(el => [getName(el.operation), getName(el.type.name.value)])
    .map(([type, target]) => `export type ${type} = ${target}`)
    .join('\n\n')

  return result
}

/**
 * prints explicit argument value ?
 */
export const printArgument = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: ArgumentNode) => {
  const result = node.name + ': ' + printValue(config, schema)(node.value)

  return result
}
