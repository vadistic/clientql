import {
  InterfaceTypeDefinitionNode,
  InterfaceTypeExtensionNode,
} from 'graphql'
import { CodegenProps } from '../codegen'
import { printTsInterface } from '../print'
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
  const addDescription = withDescription(props.config)

  const nameTs = props.naming.interfaceName(node.name.value)
  const fieldsTs = printObjectLikeFields(props)(node)
  const interfaceTs = addDescription(node)(printTsInterface(nameTs, fieldsTs))

  // without interfaces
  if (!props.config.useFieldArgumentsInterface) {
    return interfaceTs
  }

  // needs to generate field interfaces
  const fieldArgumentsInterfacesPrinter = printFieldArgumentsInterfaces(props)
  const argsInterfacesTs = fieldArgumentsInterfacesPrinter(node)

  return interfaceTs + (argsInterfacesTs ? '\n\n' + argsInterfacesTs : '')
}
