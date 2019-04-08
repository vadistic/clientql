import { isNotEmpty } from '@graphql-clientgen/core'
import { EnumTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'

export const codegenEnum = (props: GeneratorProps) => (
  node: EnumTypeDefinitionNode,
) => {
  const name = node.name.value
  const values = node.values && node.values.map(value => value.name.value)

  /**
   * I have a shizzle
   * Should name stay the same for declaration merging or interface prefix applied here
   * Let's apply it
   */
  if (props.config.useMapsForEnums) {
    const interfaceName = props.naming.getInterfaceName(name)

    let inter = `export interface ${interfaceName} {\n`
    let map = `export const ${name}: ${interfaceName} = {\n`

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
