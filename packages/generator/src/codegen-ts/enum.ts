import { isNotEmpty } from '@graphql-clientgen/shared'
import { EnumTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../config'

export const codegenEnum = (props: GeneratorProps) => (
  node: EnumTypeDefinitionNode
) => {
  const name = node.name.value
  const values = node.values && node.values.map(value => value.name.value)

  let result = `export enum ${name} {\n`

  if (isNotEmpty(values)) {
    values.forEach(value => {
      result += `  ${value} = '${value}',\n`
    })
  }

  result += '}'

  return result
}
