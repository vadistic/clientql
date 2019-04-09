import {
  GraphQLSchema,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
} from 'graphql'
import { defaultConfig } from '../config'
import { naming } from '../naming'
import { printTSInterface } from '../strings'
import { printField, printFieldArguments } from '../type-reference/field'
import { isNullable, printType } from '../type-reference/type'
import { isString } from '../utils'

export const printObject = (config = defaultConfig, schema?: GraphQLSchema) => (
  node: ObjectTypeDefinitionNode | ObjectTypeExtensionNode,
) => {
  const name = naming.interfaceName(config)(node.name.value)

  const ownExtend =
    config.useExtendedInterfaces &&
    node.interfaces &&
    node.interfaces.map(inter => naming.interfaceName(config)(inter.name.value))

  const customExtend =
    config.extendObjectInterface &&
    config.extendObjectInterface(node, ownExtend || [])

  const fieldsTs =
    config.transformFieldArguments || config.transformFieldType
      ? printCustomObjectFields(config, schema)(node)
      : (node.fields || []).map(printField(config, schema))

  // add typename when not function
  if (!config.addFieldsAsFunction) {
    if (config.addTypename === 'string' && fieldsTs) {
      fieldsTs.unshift(`__typename: string`)
    }

    if (config.addTypename === true && fieldsTs) {
      fieldsTs.unshift(`__typename: '${node.name.value}'`)
    }
  }

  const result = printTSInterface(name, customExtend || ownExtend, fieldsTs)

  return result
}

/**
 * To support custom configs
 */
const printCustomObjectFields = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: ObjectTypeDefinitionNode | ObjectTypeExtensionNode) => {
  if (!node.fields) {
    return []
  }

  const argsPrinter = printFieldArguments(config, schema)
  const typePrinter = printType(config, schema)

  const result = node.fields
    .map(field => {
      // modifier only when not using field arguments
      const modifier =
        isNullable(field.type) &&
        config.useOptionalModifier &&
        !config.addFieldsAsFunction
          ? '?: '
          : ': '

      const args = config.addFieldsAsFunction
        ? printFieldArguments(config, schema)(field)
        : undefined

      return {
        fieldname: field.name.value,
        modifier,
        args,
        type: printType(config, schema)(field.type),
      }
    })
    .map((prev, i) => {
      const next = { ...prev }

      // apply arguments transformation
      if (config.transformFieldArguments) {
        const res = config.transformFieldArguments(
          node,
          node.fields![i],
          prev.args,
          argsPrinter,
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
    // put it together
    .map(
      ({ fieldname, type, args, modifier }) =>
        fieldname + modifier + (args ? `${args} => ${type}` : type),
    )

  return result
}
