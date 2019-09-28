import { capitalise, TypescriptString } from '@clientql/core'
import { SchemaDefinitionNode, SchemaExtensionNode } from 'graphql'
import { CodegenProps } from '../codegen'

/**
 * creates type aliases for renamed base operation types
 *
 * it may be prudent to generate interface Schema {...something},
 * but do not see the point, right now
 */

export const printSchemaDefinition = (props: CodegenProps) => (
  node: SchemaDefinitionNode | SchemaExtensionNode,
): TypescriptString | undefined => {
  if (!node.operationTypes) {
    return
  }

  const result = node.operationTypes
    .map(el => [
      props.naming.interfaceName(capitalise(el.operation)),
      props.naming.interfaceName(el.type.name.value),
    ])
    .map(([type, alias]) => `export type ${type} = ${alias}`)
    .join('\n\n')

  return result
}
