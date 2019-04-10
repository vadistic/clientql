import {
  GraphQLSchema,
  InputObjectTypeDefinitionNode,
  InputObjectTypeExtensionNode,
  InputValueDefinitionNode,
} from 'graphql'
import { isString } from 'util'
import { defaultConfig } from '../config'
import { naming } from '../naming'
import { printTSInterface } from '../strings'
import {
  isNullable,
  printInputValue,
  printType,
  withDescription,
} from '../type-reference'
import { isNotEmpty } from '../types'

/**
 * prints InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode
 *
 * supports:
 * - `transformInputValueType`
 */
export const printInputObject = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode) => {
  const name = naming.interfaceName(config)(node.name.value)
  const addDescription = withDescription(config, schema)

  // empty
  if (!isNotEmpty(node.fields)) {
    return addDescription(node)(printTSInterface(name, [], []))
  }

  // standard
  if (!config.transformInputValueType) {
    const inputValuesTs = node.fields.map(printInputValue(config, schema))

    return addDescription(node)(printTSInterface(name, [], inputValuesTs))
  }

  // custom
  const inputValueTypePrinter = (field: InputValueDefinitionNode) =>
    printType(config, schema)(field.type)

  const modifiedInputValuesTs = node.fields
    // prebuild
    .map(field => ({
      fieldname: field.name.value,
      modifier:
        config.useOptionalModifier && isNullable(field.type) ? '?: ' : ': ',
      type: inputValueTypePrinter(field),
      field,
    }))
    // modify
    .map((strings, i) => {
      const res = config.transformInputValueType!(
        node,
        node.fields![i],
        strings.type,
        inputValueTypePrinter,
      )

      if (isString(res) || res === null) {
        return { ...strings, type: res }
      }

      return strings
    })
    // remove nullified
    .filter(strings => strings.type !== null)
    // build strings
    .map(({ fieldname, modifier, type, field }) =>
      addDescription(field)(fieldname + modifier + type),
    )

  return addDescription(node)(printTSInterface(name, [], modifiedInputValuesTs))
}
