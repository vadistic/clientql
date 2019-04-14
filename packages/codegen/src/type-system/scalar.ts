import { ScalarTypeDefinitionNode, ScalarTypeExtensionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { withDescription } from '../type-reference'

/**
 * print ScalarTypeDefinitionNode | ScalarTypeExtensionNode
 *
 * supports:
 * - `customScalars`
 */
export const printScalar = (props: CodegenProps) => (
  node: ScalarTypeDefinitionNode | ScalarTypeExtensionNode,
) => {
  const name = node.name.value
  const addDescription = withDescription(props)

  const value =
    (props.config.customScalars && props.config.customScalars[name]) || 'any'

  const result = `export type ${name} = ${value}`

  return addDescription(node)(result)
}
