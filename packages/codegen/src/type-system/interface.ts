import {
  InterfaceTypeDefinitionNode,
  InterfaceTypeExtensionNode,
} from 'graphql'
import { CodegenProps } from '../codegen'
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
export const printInterface = (props: CodegenProps) => (
  node: InterfaceTypeDefinitionNode | InterfaceTypeExtensionNode,
) => {
  const name = naming.interfaceName(props.config)(node.name.value)
  const addDescription = withDescription(props)

  const fieldsTs = printObjectLikeFields(props)(node)
  const interfaceTs = addDescription(node)(printTSInterface(name, [], fieldsTs))

  // without interfaces
  if (!props.config.useFieldArgumentsInterface) {
    return interfaceTs
  }

  // needs to generate field interfaces
  const fieldArgumentsInterfacesPrinter = printFieldArgumentsInterfaces(props)
  const argsInterfacesTs = fieldArgumentsInterfacesPrinter(node)

  return interfaceTs + (argsInterfacesTs ? '\n\n' + argsInterfacesTs : '')
}
