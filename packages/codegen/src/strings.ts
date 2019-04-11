import { indent, isNotEmpty, isString } from '@graphql-clientgen/core'

/**
 * prints block comment with some content
 */
export const printBlockComment = (content: string) => {
  const headerLines = content.split('\n').map(v => v.trim())

  let result = `/*\n *\n`

  headerLines.forEach(line => {
    result += ` * ` + line + '\n'
  })

  result += ` *\n */`

  return result
}

/**
 * prints JSDoc comment with some content
 */
export const printJSDoc = (content: string) => {
  const descriptionLines = content.split('\n')

  if (descriptionLines.length === 1) {
    return `/** ${content} */`
  }

  let result = `/**\n`

  descriptionLines.forEach(line => {
    result += ` * ` + line + '\n'
  })

  result += ` */`

  return result
}

/**
 * prints sections with header comments and uniform spacing
 */
export const printCodeSection = (comment: string, content: string) => {
  const result = printBlockComment(comment) + '\n\n' + content.trim() + '\n\n'

  return result
}

export type NullableString = string | null | boolean | undefined

/**
 * prints typescript interface
 */
export const printTSInterface = (
  interfacename: string,
  extend?: NullableString | NullableString[],
  content?: NullableString | NullableString[],
) => {
  let result = ''

  const interExtends =
    Array.isArray(extend) && isNotEmpty(extend)
      ? ` extends ` + extend.filter(isString).join(', ')
      : isString(extend)
      ? ` extends ${extend}`
      : ''

  result += `export interface ${interfacename + interExtends} {\n`

  // allow empty
  if (content) {
    result += Array.isArray(content)
      ? content
          .filter(isString)
          .map(field => indent(field, 1))
          .join('\n')
      : isString(content) && indent(content, 1)
  }

  result += '\n}'

  return result
}
