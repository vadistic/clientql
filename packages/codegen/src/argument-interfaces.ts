import { GraphQLSchema, ObjectTypeDefinitionNode } from 'graphql'
import { defaultConfig } from './config'
import { naming } from './naming'
import { printTSInterface } from './strings'
import { printInputValue } from './type-reference'
import { unwrapType } from './utils'

/**
 * this will allow codegen of arguments interfaces
 *
 * function as as plural and on object type for semantic naming as
 * interfaceprefix + typename + capitalised fieldname + Args
 * e.g. `IQueryUsersArgs`
 */

export const printArgumentInterfaces = (
  config = defaultConfig,
  schema?: GraphQLSchema,
) => (node: ObjectTypeDefinitionNode) => {
  const parent = node.name.value

  const results: string[] = []

  for (const field of node.fields || []) {
    if (!field.arguments || field.arguments.length === 0) {
      continue
    }

    const { typename: target } = unwrapType(field.type)
    const interfacename = naming.argumentsInterfaceName(config)(parent, target)

    const inputValuesTs = field.arguments.map(printInputValue(config, schema))

    results.push(printTSInterface(interfacename, false, inputValuesTs))
  }

  return results.join('\n\n')
}
