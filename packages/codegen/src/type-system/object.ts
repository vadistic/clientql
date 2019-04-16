import { TypescriptString } from '@graphql-clientgen/core'
import { ObjectTypeDefinitionNode, ObjectTypeExtensionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { printTsInterface } from '../print-ts'
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
): TypescriptString => {
  const addDescription = withDescription(props.config)
  const objectLikeFieldsPrinter = printObjectLikeFields(props)

  const nameTs = props.naming.interfaceName(node.name.value)

  const ownExtend =
    props.config.useExtendedInterfaces &&
    node.interfaces &&
    node.interfaces.map(inter => props.naming.interfaceName(inter.name.value))

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

    // strict typename otherwise
    if (props.config.addTypename === true) {
      fieldsTs.unshift(`__typename: '${node.name.value}'`)
    }
  }

  const objectTs = addDescription(node)(
    printTsInterface(nameTs, fieldsTs, customExtend || ownExtend || []),
  )

  // without field arguments interfaces
  if (!props.config.useFieldArgumentsInterface) {
    return objectTs
  }

  const fieldArgumentsInterfacesPrinter = printFieldArgumentsInterfaces(props)
  const argsInterfacesTs = fieldArgumentsInterfacesPrinter(node)

  return objectTs + (argsInterfacesTs ? '\n\n' + argsInterfacesTs : '')
}
