import { isNotEmpty } from '@graphql-clientgen/core'
import { EnumTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'

export const codegenTsEnum = (props: GeneratorProps) => (
  node: EnumTypeDefinitionNode,
) => {
  const name = node.name.value
  const values = node.values && node.values.map(value => value.name.value)

  /**
   * opting for same const & interface name for declarations merging
   */
  if (props.config.useMapsForEnums) {
    let inter = `export interface ${name} {\n`
    let map = `export const ${name}: ${name} = {\n`

    if (isNotEmpty(values)) {
      values.forEach(value => {
        inter += `  ${value}: '${value}'\n`
        map += `  ${value}: '${value}',\n`
      })
    }

    inter += '}'
    map += '}'

    return inter + '\n\n' + map
  } else {
    let result = `export enum ${name} {\n`

    if (isNotEmpty(values)) {
      values.forEach(value => {
        result += `  ${value} = '${value}',\n`
      })
    }

    result += '}'

    return result
  }
}
