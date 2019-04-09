import {
  GraphQLSchema,
  InterfaceTypeDefinitionNode,
  InterfaceTypeExtensionNode,
} from 'graphql'
import { defaultConfig } from '../config'
import { naming } from '../naming'
import { printTSInterface } from '../strings'
import { printField } from '../type-reference'
import { isNotEmpty } from '../utils'

/**
 * codegen interface to TYPE
 */
export const printInterface = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: InterfaceTypeDefinitionNode | InterfaceTypeExtensionNode) => {
  const name = naming.interfaceName(config)(node.name.value)

  const fieldsTs =
    isNotEmpty(node.fields) && node.fields.map(printField(config))

  return printTSInterface(name, false, fieldsTs)
}
