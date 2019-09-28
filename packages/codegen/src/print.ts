import { indent, isNotEmpty, TypescriptString } from '@clientql/core'

/**
 * prints block comment with some content
 */
export const printBlockComment = (content: string): TypescriptString => {
  const headerLines = content.split('\n').map(v => v.trim())

  let resultTs = `/*\n *\n`

  headerLines.forEach(line => {
    resultTs += ` * ` + line + '\n'
  })

  resultTs += ` *\n */`

  return resultTs
}

/**
 * prints JSDoc comment with some content
 */
export const printJSDoc = (content: string): TypescriptString => {
  const descriptionLines = content.split('\n')

  if (descriptionLines.length === 1) {
    return `/** ${content} */`
  }

  let resultTs = `/**\n`

  descriptionLines.forEach(line => {
    resultTs += ` * ` + line + '\n'
  })

  resultTs += ` */`

  return resultTs
}

/**
 * prints sections with header comments and uniform spacing
 */
export const printCodeSection = (
  comment: string,
  content: TypescriptString,
): TypescriptString =>
  printBlockComment(comment) + '\n\n' + content.trim() + '\n\n'

/**
 * prints typescript interface
 */
export const printTsInterface = (
  name: TypescriptString,
  content?: TypescriptString | TypescriptString[],
  extend?: TypescriptString | TypescriptString[],
): TypescriptString => {
  let resultTs = ''

  const interExtendsTs = !isNotEmpty(extend)
    ? ''
    : Array.isArray(extend)
    ? ` extends ` + extend.join(', ')
    : ` extends ${extend}`

  resultTs += `export interface ${name + interExtendsTs} {\n`

  // allow empty
  if (content) {
    resultTs += Array.isArray(content)
      ? content.map(field => indent(field, 1)).join('\n')
      : indent(content, 1)
  }

  resultTs += '\n}'

  return resultTs
}

export const printTsType = (
  name: string,
  content: TypescriptString,
): TypescriptString => `export type ${name} = ${content}`

export const printTsImports = (
  names: TypescriptString[],
  from: string,
): TypescriptString | undefined => {
  if (names.length === 0) {
    return
  }

  let resultTs = 'import {'

  if (names.length < 3) {
    resultTs += ' ' + names.join(', ') + ` } from '${from}'`
    return resultTs
  }

  resultTs += '\n'

  resultTs += indent(names.join(',\n'), 1)

  resultTs += `\n} from '${from}'`

  return resultTs
}
