import { indent, isNotEmpty, TypescriptString } from '@clientql/core'
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
): TypescriptString => {
  const nameTs = node.name.value
  const addDescription = withDescription(props.config)

  // opting for same const & interface name for declarations merging
  if (props.config.useMapsForEnum) {
    let interTs = `export interface ${nameTs} {\n`
    let mapTs = `export const ${nameTs}: ${nameTs} = {\n`

    if (isNotEmpty(node.values)) {
      node.values.forEach(enumValue => {
        const value = enumValue.name.value

        interTs += indent(addDescription(enumValue)(`${value}: '${value}'`), 1) + '\n'
        mapTs += `  ${value}: '${value}',\n`
      })
    }

    interTs += '}'
    mapTs += '}'

    return interTs + '\n\n' + mapTs
  } else {
    let resultTs = `export enum ${nameTs} {\n`

    if (isNotEmpty(node.values)) {
      node.values.forEach(enumValue => {
        const valueTs = enumValue.name.value
        resultTs += indent(addDescription(enumValue)(`${valueTs} = '${valueTs}',`), 1) + '\n'
      })
    }

    resultTs += '}'

    return addDescription(node)(resultTs)
  }
}
