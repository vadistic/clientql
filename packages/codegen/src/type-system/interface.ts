import {
  GraphQLSchema,
  InterfaceTypeDefinitionNode,
  InterfaceTypeExtensionNode,
} from 'graphql'
import { defaultCodegenConfig } from '../config'
import { naming } from '../naming'
import { printTSInterface } from '../strings'
import { withDescription } from '../type-reference'
import {
  printFieldArgumentsInterfaces,
  printObjectLikeFields,
} from './object-like'

/**
 * prints InterfaceTypeDefinitionNode | InterfaceTypeExtensionNode
 *
 * supports:
 * - `interfacePrefix`
 * - `useFieldArgumentsInterface`
 * - `addFieldsAsFunction`
 */
export const printInterface = (
  config = defaultCodegenConfig,
  schema?: GraphQLSchema,
) => (node: InterfaceTypeDefinitionNode | InterfaceTypeExtensionNode) => {
  const name = naming.interfaceName(config)(node.name.value)
  const addDescription = withDescription(config, schema)

  const fieldsTs = printObjectLikeFields(config, schema)(node)
  const interfaceTs = addDescription(node)(printTSInterface(name, [], fieldsTs))

  // without interfaces
  if (!config.useFieldArgumentsInterface) {
    return interfaceTs
  }

  // needs to generate field interfaces
  const fieldArgumentsInterfacesPrinter = printFieldArgumentsInterfaces(
    config,
    schema,
  )
  const argsInterfacesTs = fieldArgumentsInterfacesPrinter(node)

  return interfaceTs + (argsInterfacesTs ? '\n\n' + argsInterfacesTs : '')
}
