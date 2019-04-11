import { indent } from '@graphql-clientgen/core'
import { ASTNode, print } from 'graphql'

/**
 *  prints graphql to gql tagged constant
 */
export const printGqlTag = (
  constant: string,
  content: ASTNode,
  deps?: string[],
) => {
  let result = ''

  result += `export const ${constant} = gql\`\n`
  result += indent(print(content), 1) + '\n'

  if (deps) {
    result += '\n'
    result += indent(deps.map(dep => '${' + dep + '}').join('\n'), 1)
  }

  result += `\``

  return result
}
