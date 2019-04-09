import {
  GraphQLSchema,
  InputObjectTypeDefinitionNode,
  InputObjectTypeExtensionNode,
} from 'graphql'
import { defaultConfig } from '../config'
import { naming } from '../naming'
import { printTSInterface } from '../strings'
import { printInputValue } from '../type-reference/input-value'
import { isNotEmpty } from '../utils'

export const printInputObject = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode) => {
  const name = naming.interfaceName(config)(node.name.value)

  const inter =
    config.extendObjectInterface && config.extendObjectInterface(node, [])

  if (!isNotEmpty(node.fields)) {
    return printTSInterface(name, inter, [])
  }

  const fieldsTs = node.fields.map(printInputValue(config, schema))

  if (!config.transformInputValueType) {
    return printTSInterface(name, inter, fieldsTs)
  }

  /**
   * TODO: Implement custom fields printer
   */

  const result = printTSInterface(name, inter, fieldsTs)

  return result
}
