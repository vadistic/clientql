import { UnionTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { codegenTsTypeName } from './type'

export const codegenTsUnion = (props: GeneratorProps) => (
  node: UnionTypeDefinitionNode,
) => {
  // ! let's prefix unions since they are like interfaces in graphql
  const name = props.naming.getInterfaceName(node.name.value)

  const types = !node.types
    ? ['any']
    : node.types.map(type => codegenTsTypeName(props)(type))

  let result = `export type ${name} = `

  // let's print it nicely
  if (types.length === 1) {
    result += types[0]
  }

  if (types.length > 1) {
    result += '\n' + types.map(type => `  | ${type}`).join('\n')
  }

  return result
}
