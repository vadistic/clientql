import { indent, isNotEmpty } from '@graphql-clientgen/core'
import { EnumTypeDefinitionNode, EnumTypeExtensionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { withDescription } from '../type-reference'

/**
 * prints EnumTypeDefinitionNode | EnumTypeExtensionNode
 *
 * supports:
 * - `useMapsForEnum`
 */

export const printEnum = (props: CodegenProps) => (
  node: EnumTypeDefinitionNode | EnumTypeExtensionNode,
) => {
  const name = node.name.value
  const addDescription = withDescription(props)

  // opting for same const & interface name for declarations merging
  if (props.config.useMapsForEnum) {
    let inter = `export interface ${name} {\n`
    let map = `export const ${name}: ${name} = {\n`

    if (isNotEmpty(node.values)) {
      node.values.forEach(enumValue => {
        const value = enumValue.name.value

        inter +=
          indent(addDescription(enumValue)(`${value}: '${value}'`), 1) + '\n'
        map += `  ${value}: '${value}',\n`
      })
    }

    inter += '}'
    map += '}'

    return inter + '\n\n' + map
  } else {
    let result = `export enum ${name} {\n`

    if (isNotEmpty(node.values)) {
      node.values.forEach(enumValue => {
        const value = enumValue.name.value
        result +=
          indent(addDescription(enumValue)(`${value} = '${value}',`), 1) + '\n'
      })
    }

    result += '}'

    return addDescription(node)(result)
  }
}
