import { isNullable } from '@graphql-clientgen/core'
import { InputValueDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { codegenTsType } from './type'

/**
 * codegenFieldToTypes works just about the same but let's keep this one for semantics
 */
export const codegenTsInputValue = (props: GeneratorProps) => (
  node: InputValueDefinitionNode,
) => {
  let result = node.name.value

  result += isNullable(node.type) ? '?: ' : ': '

  // using 1:1 orignal type names
  result += codegenTsType(props)(node.type)

  return result
}
