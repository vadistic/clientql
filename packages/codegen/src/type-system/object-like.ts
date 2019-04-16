import {
  Fieldname,
  isNotEmpty,
  isNullable,
  isString,
  nonNull,
  ObjectLikeNode,
  Typename,
  TypescriptString,
} from '@graphql-clientgen/core'
import {
  FieldDefinitionNode,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
} from 'graphql'
import { CodegenProps } from '../codegen'
import { printTsInterface } from '../print'
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
): TypescriptString[] => {
  const fields =
    'interfaces' in node ? filerObjectInterfaceFields(props)(node) : node.fields

  if (!isNotEmpty(fields)) {
    return []
  }
  const addDescription = withDescription(props.config)
  const typePrinter = printType(props)
  const argumentsPrinter = props.config.useFieldArgumentsInterface
    ? printInterfacedFieldArguments(props)(node)
    : printFieldArguments(props)

  const fieldStrings = fields.map(field => {
    const modifierTs: TypescriptString =
      // modifier only when not using fields as fn
      !props.config.addFieldAsFunction &&
      props.config.useOptionalModifier &&
      isNullable(field.type)
        ? '?: '
        : ': '

    // args when using fields as fn
    const argsTs = props.config.addFieldAsFunction
      ? argumentsPrinter(field)
      : undefined

    const typeTs = typePrinter(field.type)

    return {
      fieldname: field.name.value as Fieldname,
      modifierTs,
      argsTs,
      typeTs,
      field,
    }
  })

  const stringsPrinter = ({
    fieldname,
    typeTs,
    argsTs,
    modifierTs,
    field,
  }: typeof fieldStrings[0]) =>
    addDescription(field)(
      fieldname + modifierTs + (argsTs ? `${argsTs} => ${typeTs}` : typeTs),
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
          prev.argsTs,
          argumentsPrinter,
        )

        if (isString(res) || res === null) {
          next.argsTs = res as any
        }
      }

      // apply type transformation
      if (props.config.transformFieldType) {
        const res = props.config.transformFieldType(
          node,
          node.fields![i],
          prev.typeTs,
          typePrinter,
        )

        if (isString(res) || res === null) {
          next.typeTs = res as any
        }
      }

      return next
    })
    // remove nulled values
    .filter(el => el.argsTs !== null && el.typeTs !== null)

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
): TypescriptString | undefined => {
  const parent: Typename = node.name.value

  const fields =
    'interfaces' in node
      ? filerObjectInterfaceFields(props)(node)
      : node.fields || []

  const resultsTs: TypescriptString[] = []

  for (const field of fields) {
    if (!field.arguments || field.arguments.length === 0) {
      continue
    }

    const nameTs = props.naming.argumentsInterfaceName(parent, field.name.value)

    const inputValuesTs = field.arguments.map(printInputValue(props))

    resultsTs.push(printTsInterface(nameTs, inputValuesTs))
  }

  // no interfaces - undefined for easier formatting
  if (resultsTs.length === 0) {
    return
  }

  return resultsTs.join('\n\n')
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
) => (field: FieldDefinitionNode): TypescriptString => {
  if (!isNotEmpty(field.arguments)) {
    return `()`
  }

  const nameTs = props.naming.argumentsInterfaceName(
    parent.name.value,
    field.name.value,
  )

  const modifierTs =
    isNullable(field.type) && props.config.useOptionalModifier ? '?: ' : ': '

  return '(args' + modifierTs + nameTs + ')'
}
