import {
  GraphQLSchema,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
} from 'graphql'
import { CodegenProps } from '../codegen'
import { defaultCodegenConfig } from '../config'
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

export const printObject = (props: CodegenProps) => (
  node: ObjectTypeDefinitionNode | ObjectTypeExtensionNode,
) => {
  const name = naming.interfaceName(props.config)(node.name.value)
  const addDescription = withDescription(props)
  const objectLikeFieldsPrinter = printObjectLikeFields(props)

  const ownExtend =
    props.config.useExtendedInterfaces &&
    node.interfaces &&
    node.interfaces.map(inter =>
      naming.interfaceName(props.config)(inter.name.value),
    )

  const customExtend =
    props.config.transformIntefaceExtend &&
    props.config.transformIntefaceExtend(node, ownExtend || [])

  const fieldsTs = objectLikeFieldsPrinter(node)

  // add when typename when not function
  if (!props.config.addFieldAsFunction) {
    // non-literal when passed 'string'
    if (props.config.addTypename === 'string') {
      fieldsTs.unshift(`__typename: string`)
    }

    // typename otherwise
    if (props.config.addTypename === true) {
      fieldsTs.unshift(`__typename: '${node.name.value}'`)
    }
  }

  const objectTs = addDescription(node)(
    printTSInterface(name, customExtend || ownExtend, fieldsTs),
  )

  // without interfaces
  if (!props.config.useFieldArgumentsInterface) {
    return objectTs
  }

  const fieldArgumentsInterfacesPrinter = printFieldArgumentsInterfaces(props)

  const argsInterfacesTs = fieldArgumentsInterfacesPrinter(node)

  return objectTs + (argsInterfacesTs ? '\n\n' + argsInterfacesTs : '')
}
