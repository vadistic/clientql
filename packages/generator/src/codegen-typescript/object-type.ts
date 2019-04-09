import { isNotEmpty } from '@graphql-clientgen/core'
import { ObjectTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { printTsInterface } from '../print'
import { codegenTsFieldToType } from './field'

/**
 * codegen to TYPE => as response shape, not as functions
 */
export const codegenTsObjectToType = (props: GeneratorProps) => (
  node: ObjectTypeDefinitionNode,
) => {
  const name = props.naming.getInterfaceName(node.name.value)

  const extend =
    node.interfaces &&
    node.interfaces.map(n => props.naming.getInterfaceName(n.name.value))

  const fieldsTs =
    isNotEmpty(node.fields) && node.fields.map(codegenTsFieldToType(props))

  if (props.config.addTypename === 'string' && fieldsTs) {
    fieldsTs.unshift(`__typename: string`)
  }

  if (props.config.addTypename === true && fieldsTs) {
    fieldsTs.unshift(`__typename: '${node.name.value}'`)
  }

  const result = printTsInterface(name, extend, fieldsTs)

  return result
}
