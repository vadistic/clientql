import {
  GraphQLSchema,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
} from 'graphql'
import { defaultConfig } from '../config'
import { naming } from '../naming'
import { printTSInterface } from '../strings'
import { withDescription } from '../type-reference'
import {
  printFieldArgumentsInterfaces,
  printObjectLikeFields,
} from './object-like'

/**
 * prints ObjectTypeDefinitionNode | ObjectTypeExtensionNode
 *
 * supports:
 * - `interfacePrefix`
 * - `useExtendedInterfaces`
 * - `transformIntefaceExtend`
 * - `useFieldArgumentsInterface`
 * - `addFieldsAsFunction`
 */

export const printObject = (config = defaultConfig, schema?: GraphQLSchema) => (
  node: ObjectTypeDefinitionNode | ObjectTypeExtensionNode,
) => {
  const name = naming.interfaceName(config)(node.name.value)
  const addDescription = withDescription(config, schema)
  const objectLikeFieldsPrinter = printObjectLikeFields(config, schema)

  const ownExtend =
    config.useExtendedInterfaces &&
    node.interfaces &&
    node.interfaces.map(inter => naming.interfaceName(config)(inter.name.value))

  const customExtend =
    config.transformIntefaceExtend &&
    config.transformIntefaceExtend(node, ownExtend || [])

  const fieldsTs = objectLikeFieldsPrinter(node)

  // add when typename when not function
  if (!config.addFieldAsFunction) {
    // non-literal when passed 'string'
    if (config.addTypename === 'string') {
      fieldsTs.unshift(`__typename: string`)
    }

    // typename otherwise
    if (config.addTypename === true) {
      fieldsTs.unshift(`__typename: '${node.name.value}'`)
    }
  }

  const objectTs = addDescription(node)(
    printTSInterface(name, customExtend || ownExtend, fieldsTs),
  )

  // without interfaces
  if (!config.useFieldArgumentsInterface) {
    return objectTs
  }

  const fieldArgumentsInterfacesPrinter = printFieldArgumentsInterfaces(
    config,
    schema,
  )

  const argsInterfacesTs = fieldArgumentsInterfacesPrinter(node)

  return objectTs + (argsInterfacesTs ? '\n\n' + argsInterfacesTs : '')
}
