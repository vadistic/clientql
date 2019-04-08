import { ScalarTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'

const defaultScalarValues = (scalar: ScalarTypeDefinitionNode) => {
  switch (scalar.name.value) {
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

export const codegenScalar = (props: GeneratorProps) => (
  scalar: ScalarTypeDefinitionNode
) => {
  const value = defaultScalarValues(scalar)
  const name = scalar.name.value

  const result = `export type ${name} = ${value}`

  return result
}
