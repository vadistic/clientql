import { UnionTypeDefinitionNode, UnionTypeExtensionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { naming } from '../naming'
import { printNamedType, withDescription } from '../type-reference'

/**
 * prints UnionTypeDefinitionNode | UnionTypeExtensionNode
 *
 * supports:
 * -  `useInterfacePrefixForUnion`
 */
export const printUnion = (props: CodegenProps) => (
  node: UnionTypeDefinitionNode | UnionTypeExtensionNode,
) => {
  const name = props.config.useInterfacePrefixForUnion
    ? naming.interfaceName(props.config)(node.name.value)
    : node.name.value
  const addDescription = withDescription(props)
  const namedTypePrinter = printNamedType(props)

  const types =
    !node.types || node.types.length === 0
      ? // any for unions without members
        ['any']
      : node.types.map(type => namedTypePrinter(type))

  let result = `export type ${name} = `

  // inline for one memebr
  if (types.length === 1) {
    result += types[0]
  }

  // otherwise multiline
  if (types.length > 1) {
    result += '\n' + types.map(type => `  | ${type}`).join('\n')
  }

  return addDescription(node)(result)
}
