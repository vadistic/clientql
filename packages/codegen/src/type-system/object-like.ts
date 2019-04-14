import {
  isNotEmpty,
  isNullable,
  isString,
  nonNull,
  ObjectLikeNode,
  unwrapType,
} from '@graphql-clientgen/core'
import {
  FieldDefinitionNode,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
} from 'graphql'
import { CodegenProps } from '../codegen'
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
export const printObjectLikeFields = (props: CodegenProps) => (
  node: ObjectLikeNode,
) => {
  const fields =
    'interfaces' in node ? filerObjectInterfaceFields(props)(node) : node.fields

  if (!isNotEmpty(fields)) {
    return []
  }
  const addDescription = withDescription(props)

  const argumentsPrinter = props.config.useFieldArgumentsInterface
    ? printInterfacedFieldArguments(props)(node)
    : printFieldArguments(props)

  const typePrinter = printType(props)

  const fieldStrings = fields.map(field => {
    const modifier =
      // modifier only when not using fields as fn
      !props.config.addFieldAsFunction &&
      props.config.useOptionalModifier &&
      isNullable(field.type)
        ? '?: '
        : ': '

    // args when using fields as fn
    const args = props.config.addFieldAsFunction
      ? argumentsPrinter(field)
      : undefined

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
  if (
    !props.config.transformFieldArguments &&
    !props.config.transformFieldType
  ) {
    return fieldStrings.map(stringsPrinter)
  }

  // custom case
  const modifiedFieldStrings = fieldStrings
    .map((prev, i) => {
      const next = { ...prev }

      // apply arguments transformation
      if (props.config.transformFieldArguments) {
        const res = props.config.transformFieldArguments(
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
      if (props.config.transformFieldType) {
        const res = props.config.transformFieldType(
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

export const printFieldArgumentsInterfaces = (props: CodegenProps) => (
  node: ObjectLikeNode,
) => {
  const parent = node.name.value

  const fields =
    'interfaces' in node
      ? filerObjectInterfaceFields(props)(node)
      : node.fields || []

  const results: string[] = []

  for (const field of fields) {
    if (!field.arguments || field.arguments.length === 0) {
      continue
    }

    const { typename: target } = unwrapType(field.type)
    const interfacename = naming.argumentsInterfaceName(props.config)(
      parent,
      target,
    )

    const inputValuesTs = field.arguments.map(printInputValue(props))

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
const filerObjectInterfaceFields = (props: CodegenProps) => (
  node: ObjectTypeDefinitionNode | ObjectTypeExtensionNode,
) => {
  // cannot filter
  // - when disabled
  // - when no interfaces
  // - when no fields

  if (
    !props.config.useExtendedInterfaces ||
    !isNotEmpty(node.interfaces) ||
    !isNotEmpty(node.fields)
  ) {
    return node.fields || []
  }

  const inters = node.interfaces
    .map(inter => props.graph.get(inter.name.value))
    .filter(nonNull)

  // also when interfaces are not found
  if (!isNotEmpty(inters)) {
    return node.fields || []
  }

  const interFieldnames = inters.reduce(
    (acc, vtx) => {
      if (vtx.edgesArr) {
        return [...acc, ...vtx.edgesArr.map(([fieldname]) => fieldname)]
      }

      return acc
    },
    [] as string[],
  )

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

const printInterfacedFieldArguments = (props: CodegenProps) => (
  parent: ObjectLikeNode,
) => (field: FieldDefinitionNode) => {
  if (!isNotEmpty(field.arguments)) {
    return `()`
  }

  const { typename: target } = unwrapType(field.type)

  const interfacename = naming.argumentsInterfaceName(props.config)(
    parent.name.value,
    target,
  )

  const modifier =
    isNullable(field.type) && props.config.useOptionalModifier ? '?: ' : ': '

  return '(args' + modifier + interfacename + ')'
}
