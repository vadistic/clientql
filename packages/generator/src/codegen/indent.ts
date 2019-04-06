const INDENT_WIDTH = 2

/**
 * indents string (WITHOUT first line)
 */
export const indent = (body: string, level: number = 1) =>
  body.replace(/\n/gm, '\n' + ' '.repeat(level * INDENT_WIDTH)).trim()
