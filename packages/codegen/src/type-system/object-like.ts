import {
  isNotEmpty,
  isNullable,
  isString,
  ObjectLikeNode,
  unwrapType,
} from '@graphql-clientgen/core'
import {
  assertInterfaceType,
  FieldDefinitionNode,
  GraphQLSchema,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
} from 'graphql'
import { defaultConfig } from '../config'
import { naming } from '../naming'
import { printTSInterface } from '../strings'
import {
  printFieldArguments,
  printInputValue,
  printType,
  withDescription,
} from '../type-reference'

/**
 * prints fields of ObjectLike (Obect + Interface types)
 *
 * supports:
 * - `transformFieldArguments`
 * - `transformFieldType`
 * - `useFieldArgumentsInterface`
 */
export const printObjectLikeFields = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: ObjectLikeNode) => {
  const fields =
    'interfaces' in node
      ? filerObjectInterfaceFields(config, schema)(node)
      : node.fields

  if (!isNotEmpty(fields)) {
    return []
  }
  const addDescription = withDescription(config, schema)

  const argumentsPrinter = config.useFieldArgumentsInterface
    ? printInterfacedFieldArguments(config, schema)(node)
    : printFieldArguments(config, schema)

  const typePrinter = printType(config, schema)

  const fieldStrings = fields.map(field => {
    const modifier =
      // modifier only when not using fields as fn
      !config.addFieldAsFunction &&
      config.useOptionalModifier &&
      isNullable(field.type)
        ? '?: '
        : ': '

    // args when using fields as fn
    const args = config.addFieldAsFunction ? argumentsPrinter(field) : undefined

    return {
      fieldname: field.name.value,
      modifier,
      args,
      type: typePrinter(field.type),
      field,
    }
  })

  const stringsPrinter = ({
    fieldname,
    type,
    args,
    modifier,
    field,
  }: typeof fieldStrings[0]) =>
    addDescription(field)(
      fieldname + modifier + (args ? `${args} => ${type}` : type),
    )

  // standard case
  if (!config.transformFieldArguments && !config.transformFieldType) {
    return fieldStrings.map(stringsPrinter)
  }

  // custom case
  const modifiedFieldStrings = fieldStrings
    .map((prev, i) => {
      const next = { ...prev }

      // apply arguments transformation
      if (config.transformFieldArguments) {
        const res = config.transformFieldArguments(
          node,
          node.fields![i],
          prev.args,
          argumentsPrinter,
        )

        if (isString(res) || res === null) {
          next.args = res as any
        }
      }

      // apply type transformation
      if (config.transformFieldType) {
        const res = config.transformFieldType(
          node,
          node.fields![i],
          prev.type,
          typePrinter,
        )

        if (isString(res) || res === null) {
          next.type = res as any
        }
      }

      return next
    })
    // remove nulled values
    .filter(el => el.args !== null && el.type !== null)

  return modifiedFieldStrings.map(stringsPrinter)
}

/**
 * print arguments interfaces for object-like nodes
 *
 * - for now it does not account for the case where field interface is removed/edited with custom transform
 *
 * supports:
 * - `useFieldArgumentsInterface`
 * - `useExtendedInterfaces`
 */

export const printFieldArgumentsInterfaces = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: ObjectLikeNode) => {
  const parent = node.name.value

  const fields =
    'interfaces' in node
      ? filerObjectInterfaceFields(config, schema)(node)
      : node.fields || []

  const results: string[] = []

  for (const field of fields) {
    if (!field.arguments || field.arguments.length === 0) {
      continue
    }

    const { typename: target } = unwrapType(field.type)
    const interfacename = naming.argumentsInterfaceName(config)(parent, target)

    const inputValuesTs = field.arguments.map(printInputValue(config, schema))

    results.push(printTSInterface(interfacename, false, inputValuesTs))
  }

  // no interfaces - undefined for easier formatting
  if (results.length === 0) {
    return
  }

  return results.join('\n\n')
}

/**
 * filter fields that are present in any of object's interfaces (fallthrough when disabled)
 *
 * supports:
 * - `useExtendedInterfaces`
 *
 */
const filerObjectInterfaceFields = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: ObjectTypeDefinitionNode | ObjectTypeExtensionNode) => {
  // cannot filter
  // - without schema
  // - when disabled
  // - when no interfaces
  // - when no fields
  if (
    !config.useExtendedInterfaces ||
    !schema ||
    !isNotEmpty(node.interfaces) ||
    !isNotEmpty(node.fields)
  ) {
    return node.fields || []
  }

  const interFieldnames: string[] = node.interfaces
    .map(named => {
      const inter = schema.getType(named.name.value)
      const interAst = assertInterfaceType(inter).astNode
      const fieldnames =
        interAst &&
        interAst.fields &&
        interAst.fields.map(field => field.name.value)

      return fieldnames || []
    })
    .flat(2)

  const filteredFields = node.fields.filter(
    field => !interFieldnames.includes(field.name.value),
  )

  return filteredFields
}

/**
 * substitute for `printFieldArguments` when `useFieldArgumentsInterface: true`
 *
 * supports:
 * - `useFieldArgumentsInterface`
 */

const printInterfacedFieldArguments = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (parent: ObjectLikeNode) => (field: FieldDefinitionNode) => {
  if (!isNotEmpty(field.arguments)) {
    return `()`
  }

  const { typename: target } = unwrapType(field.type)

  const interfacename = naming.argumentsInterfaceName(config)(
    parent.name.value,
    target,
  )

  const modifier =
    isNullable(field.type) && config.useOptionalModifier ? '?: ' : ': '

  return '(args' + modifier + interfacename + ')'
}
