import {
  EnumTypeDefinitionNodeMeta,
  isNotEmpty
} from '@graphql-clientgen/shared'

export const codegenEnumMeta = ({
  typename,
  values
}: EnumTypeDefinitionNodeMeta) => {
  let result = `export enum ${typename} {\n`

  if (isNotEmpty(values)) {
    values.forEach(value => {
      result += `  ${value} = '${value}',\n`
    })
  }

  result += '}'

  return result
}
