import { isNullable } from '@graphql-clientgen/shared'
import { InputValueDefinitionNode } from 'graphql'
import { GeneratorProps } from '../config'
import { codegenType } from './type'

/**
 * codegenFieldToTypes works just about the same but let's keep this one for semantics
 */
export const codegenInputValue = (props: GeneratorProps) => (
  node: InputValueDefinitionNode
) => {
  let result = node.name.value

  result += isNullable(node.type) ? '?: ' : ': '

  // using 1:1 orignal type names
  result += codegenType(props)(node.type)

  return result
}
