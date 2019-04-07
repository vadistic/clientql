import { ScalarTypeDefinitionNodeMeta } from '@graphql-clientgen/shared'

const defaultScalarValues = (scalarMeta: ScalarTypeDefinitionNodeMeta) => {
  switch (scalarMeta.typename) {
    case 'ID':
      return 'string'
    case 'DateTime':
      return 'string'
    case 'JSON':
      return 'any'
    default:
      return 'any'
  }
}

export const codegenScalarMeta = (scalarMeta: ScalarTypeDefinitionNodeMeta) => {
  const value = defaultScalarValues(scalarMeta)
  const name = scalarMeta.typename

  const result = `export type ${name} = ${value}`

  return result
}
