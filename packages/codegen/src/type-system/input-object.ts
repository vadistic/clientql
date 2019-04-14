import { isNotEmpty, isNullable } from '@graphql-clientgen/core'
import {
  GraphQLSchema,
  InputObjectTypeDefinitionNode,
  InputObjectTypeExtensionNode,
  InputValueDefinitionNode,
} from 'graphql'
import { isString } from 'util'
import { CodegenProps } from '../codegen'
import { defaultCodegenConfig } from '../config'
import { naming } from '../naming'
import { printTSInterface } from '../strings'
import { printInputValue, printType, withDescription } from '../type-reference'

/**
 * prints InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode
 *
 * supports:
 * - `transformInputValueType`
 */
export const printInputObject = (props: CodegenProps) => (
  node: InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode,
) => {
  const name = naming.interfaceName(props.config)(node.name.value)
  const addDescription = withDescription(props)
  const inputValuePrinter = printInputValue(props)

  // empty
  if (!isNotEmpty(node.fields)) {
    return addDescription(node)(printTSInterface(name, [], []))
  }

  // standard
  if (!props.config.transformInputValueType) {
    const inputValuesTs = node.fields.map(inputValuePrinter)

    return addDescription(node)(printTSInterface(name, [], inputValuesTs))
  }

  // custom
  const inputValueTypePrinter = (field: InputValueDefinitionNode) =>
    printType(props)(field.type)

  const modifiedInputValuesTs = node.fields
    // prebuild
    .map(field => ({
      fieldname: field.name.value,
      modifier:
        props.config.useOptionalModifier && isNullable(field.type)
          ? '?: '
          : ': ',
      type: inputValueTypePrinter(field),
      field,
    }))
    // modify
    .map((strings, i) => {
      const res = props.config.transformInputValueType!(
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
