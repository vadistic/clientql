import {
  GraphQLSchema,
  ScalarTypeDefinitionNode,
  ScalarTypeExtensionNode,
} from 'graphql'
import { defaultConfig } from '../config'

export const printScalar = (config = defaultConfig, schema?: GraphQLSchema) => (
  scalar: ScalarTypeDefinitionNode | ScalarTypeExtensionNode,
) => {
  const name = scalar.name.value

  const value = (config.customScalars && config.customScalars[name]) || 'any'

  const result = `export type ${name} = ${value}`

  return result
}
