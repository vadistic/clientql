/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { isString } from 'util'
import { isNotEmpty, isNullable, TypescriptString } from '@clientql/core'
import {
  InputObjectTypeDefinitionNode,
  InputObjectTypeExtensionNode,
  InputValueDefinitionNode,
} from 'graphql'
import { CodegenProps } from '../codegen'
import { printTsInterface } from '../print'
import { printInputValue, printType, withDescription } from '../type-reference'

/**
 * prints InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode
 *
 * supports:
 * - `transformInputValueType`
 */
export const printInputObject = (props: CodegenProps) => (
  node: InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode,
): TypescriptString => {
  const addDescription = withDescription(props.config)
  const inputValuePrinter = printInputValue(props)

  const nameTs = props.naming.interfaceName(node.name.value)

  // empty
  if (!isNotEmpty(node.fields)) {
    return addDescription(node)(printTsInterface(nameTs))
  }

  // standard
  if (!props.config.transformInputValueType) {
    const inputValuesTs = node.fields.map(inputValuePrinter)

    return addDescription(node)(printTsInterface(nameTs, inputValuesTs))
  }

  // allow customisations
  const inputValueTypePrinter = (field: InputValueDefinitionNode) => printType(props)(field.type)

  const modifiedInputValuesTs = (node.fields ?? [])
    // prebuild
    .map(field => ({
      fieldname: field.name.value,
      modifier: props.config.useOptionalModifier && isNullable(field.type) ? '?: ' : ': ',
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

  return addDescription(node)(printTsInterface(nameTs, modifiedInputValuesTs))
}
