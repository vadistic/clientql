import { Typename, TypescriptString } from '@graphql-clientgen/core'
import { ScalarTypeDefinitionNode, ScalarTypeExtensionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { printTsType } from '../print'
import { withDescription } from '../type-reference'

/**
 * print ScalarTypeDefinitionNode | ScalarTypeExtensionNode
 *
 * supports:
 * - `customScalars`
 */
export const printScalar = (props: CodegenProps) => (
  node: ScalarTypeDefinitionNode | ScalarTypeExtensionNode,
): TypescriptString => {
  const typename: Typename = node.name.value
  const addDescription = withDescription(props.config)

  const valueTs: TypescriptString =
    (props.config.customScalars && props.config.customScalars[typename]) ||
    'any'

  return addDescription(node)(printTsType(typename, valueTs))
}
