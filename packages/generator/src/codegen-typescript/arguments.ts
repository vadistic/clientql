import { buildTypemap } from '@graphql-clientgen/core'
import { ObjectTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { codegenTsInputValue } from './input-value'

/**
 * this will allow codegen of arguments interfaces
 *
 * function as as plural and on object type for semantic naming
 * interfaceprefic + typename + capitalised fieldname + Args
 * e.g. `IQueryUsersArgs`
 */

export const codegenTsArguments = (props: GeneratorProps) => (
  node: ObjectTypeDefinitionNode,
) => {
  const parent = node.name.value

  const results: string[] = []

  for (const field of node.fields || []) {
    if (!field.arguments || field.arguments.length === 0) {
      continue
    }

    const { typename: target } = buildTypemap(field.type)

    const interfaceName = props.naming.getArgumentsInterfaceName(parent, target)

    let result = `export interface ${interfaceName} {\n`

    for (const arg of field.arguments || []) {
      result += '  ' + codegenTsInputValue(props)(arg) + '\n'
    }

    result += `}`

    results.push(result)
  }

  if (results.length === 0) {
    return
  }

  return results.join('\n\n')
}
