import { Typename, TypescriptString } from '@clientql/core'
import { UnionTypeDefinitionNode, UnionTypeExtensionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { printTsType } from '../print'
import { printNamedType, withDescription } from '../type-reference'

/**
 * prints UnionTypeDefinitionNode | UnionTypeExtensionNode
 *
 * supports:
 * -  `useInterfacePrefixForUnion`
 */
export const printUnion = (props: CodegenProps) => (
  node: UnionTypeDefinitionNode | UnionTypeExtensionNode,
): TypescriptString => {
  const nameTs = props.config.useInterfacePrefixForUnion
    ? props.naming.interfaceName(node.name.value)
    : node.name.value

  const addDescription = withDescription(props.config)
  const namedTypePrinter = printNamedType(props)

  const typesTs = node.types
    ? node.types.map(type => namedTypePrinter(type))
    : []

  let contentTs = ``

  // any for no members
  if (typesTs.length === 0) {
    contentTs += 'any'
  }

  // inline for one memebr
  if (typesTs.length === 1) {
    contentTs += typesTs[0]
  }

  // otherwise multiline
  if (typesTs.length > 1) {
    contentTs += '\n' + typesTs.map(typeTs => `  | ${typeTs}`).join('\n')
  }

  return addDescription(node)(printTsType(nameTs, contentTs))
}
