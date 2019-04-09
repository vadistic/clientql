import { isNotEmpty } from '@graphql-clientgen/core'
import { InputObjectTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { printTsInterface } from '../print'
import { codegenTsInputValue } from './input-value'

export const codegenTsInputObject = (props: GeneratorProps) => (
  node: InputObjectTypeDefinitionNode,
) => {
  const name = props.naming.getInterfaceName(node.name.value)
  const fieldsTs =
    isNotEmpty(node.fields) && node.fields.map(codegenTsInputValue(props))

  const result = printTsInterface(name, false, fieldsTs)

  return result
}
