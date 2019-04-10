import {
  GraphQLSchema,
  ScalarTypeDefinitionNode,
  ScalarTypeExtensionNode,
} from 'graphql'
import { defaultConfig } from '../config'
import { withDescription } from '../type-reference'

/**
 * print ScalarTypeDefinitionNode | ScalarTypeExtensionNode
 *
 * supports:
 * - `customScalars`
 */
export const printScalar = (config = defaultConfig, schema?: GraphQLSchema) => (
  node: ScalarTypeDefinitionNode | ScalarTypeExtensionNode,
) => {
  const name = node.name.value
  const addDescription = withDescription(config, schema)

  const value = (config.customScalars && config.customScalars[name]) || 'any'

  const result = `export type ${name} = ${value}`

  return addDescription(node)(result)
}
