import { isNullable } from '@graphql-clientgen/core'
import { InputValueDefinitionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { withDescription } from './description'
import { printType } from './type'

/**
 * codegenFieldToTypes works just about the same but let's keep this one for semantics
 */
export const printInputValue = (props: CodegenProps) => (
  node: InputValueDefinitionNode,
) => {
  const addDescription = withDescription(props)
  const name = node.name.value
  const modifier =
    isNullable(node.type) && props.config.useOptionalModifier ? '?: ' : ': '
  const type = printType(props)(node.type)

  return addDescription(node)(name + modifier + type)
}
