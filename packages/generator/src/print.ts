import { isNotEmpty } from '@graphql-clientgen/core'
import { ASTNode, print } from 'graphql'

const INDENT_WIDTH = 2

/**
 * indents string (WITH first line)
 */
export const indent = (content: string, level = 1, trim = false) =>
  ' '.repeat(level * INDENT_WIDTH) +
  (trim
    ? content
        .replace(/^\s+/gm, '')
        .replace(/\n\s*/gm, '\n' + ' '.repeat(level * INDENT_WIDTH))
        .trim()
    : content.replace(/\n/gm, '\n' + ' '.repeat(level * INDENT_WIDTH)).trim())

/**
 *  prints block comment with some content
 */
export const printJsBlockComment = (content: string) => {
  const headerLines = content.split('\n').map(v => v.trim())

  let result = `/*\n *\n`

  headerLines.forEach(line => {
    result += ` * ` + line + '\n'
  })

  result += ` *\n */`

  return result
}

/**
 *  prints sections with header comments and uniform spacing
 */
export const printJsSection = (comment: string, content: string) => {
  const result = printJsBlockComment(comment) + '\n\n' + content.trim() + '\n\n'

  return result
}

/**
 *  prints graphql to gql tagged constant
 */
export const printJsGraphql = (
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

/**
 *  prints typescript interface
 */
export const printTsInterface = (
  interfacename: string,
  extend?: string[] | false,
  content?: string[] | string | false,
) => {
  let result = ''

  const interExtend = isNotEmpty(extend) ? ` extends ` + extend.join(', ') : ''

  result += `export interface ${interfacename + interExtend} {\n`

  // allow empty
  if (content) {
    result += Array.isArray(content)
      ? content.map(field => indent(field, 1)).join('\n')
      : indent(content, 1)
  }

  result += '\n}'

  return result
}
