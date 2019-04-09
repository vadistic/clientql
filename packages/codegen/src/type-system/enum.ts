import {
  EnumTypeDefinitionNode,
  EnumTypeExtensionNode,
  GraphQLSchema,
} from 'graphql'
import { defaultConfig } from '../config'
import { isNotEmpty } from '../utils'

export const printEnum = (config = defaultConfig, schema?: GraphQLSchema) => (
  node: EnumTypeDefinitionNode | EnumTypeExtensionNode,
) => {
  const name = node.name.value
  const values = node.values && node.values.map(value => value.name.value)

  /**
   * opting for same const & interface name for declarations merging
   */
  if (config.useMapsForEnum) {
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
