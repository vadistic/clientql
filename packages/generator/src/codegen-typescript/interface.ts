import { isNotEmpty } from '@graphql-clientgen/core'
import { InterfaceTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { printTsInterface } from '../print'
import { codegenTsFieldToType } from './field'

/**
 * codegen interface to TYPE
 */
export const codegenTsInterfaceToType = (props: GeneratorProps) => (
  node: InterfaceTypeDefinitionNode,
) => {
  const name = props.naming.getInterfaceName(node.name.value)

  const fieldsTs =
    isNotEmpty(node.fields) && node.fields.map(codegenTsFieldToType(props))

  const result = printTsInterface(name, false, fieldsTs)

  return result
}
