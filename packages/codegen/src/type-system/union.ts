import {
  GraphQLSchema,
  UnionTypeDefinitionNode,
  UnionTypeExtensionNode,
} from 'graphql'
import { defaultConfig } from '../config'
import { naming } from '../naming'
import { printNamedType, withDescription } from '../type-reference'

/**
 * prints UnionTypeDefinitionNode | UnionTypeExtensionNode
 *
 * supports:
 * -  `useInterfacePrefixForUnion`
 */
export const printUnion = (config = defaultConfig, schema?: GraphQLSchema) => (
  node: UnionTypeDefinitionNode | UnionTypeExtensionNode,
) => {
  const name = config.useInterfacePrefixForUnion
    ? naming.interfaceName(config)(node.name.value)
    : node.name.value
  const addDescription = withDescription(config, schema)
  const namedTypePrinter = printNamedType(config, schema)

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
