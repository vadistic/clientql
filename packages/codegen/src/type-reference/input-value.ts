import { isNullable, Typename, TypescriptString } from '@clientql/core'
import { InputValueDefinitionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { withDescription } from './description'
import { printType } from './type'

/**
 * printFieldDefinition works just about the same, but let's keep this one for semantics
 */
export const printInputValue = (props: CodegenProps) => (
  node: InputValueDefinitionNode,
): TypescriptString => {
  const addDescription = withDescription(props.config)

  const name: Typename = node.name.value
  const modifierTs = isNullable(node.type) && props.config.useOptionalModifier ? '?: ' : ': '
  const typeTs = printType(props)(node.type)

  return addDescription(node)(name + modifierTs + typeTs)
}
