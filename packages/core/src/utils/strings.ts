/**
 * indents string (WITH first line)
 */

export const INDENT_WIDTH = 2

export const indent = (content: string, level = 1, trim = false) =>
  ' '.repeat(level * INDENT_WIDTH) +
  (trim
    ? content
        .replace(/^\s+/gm, '')
        .replace(/\n\s*/gm, '\n' + ' '.repeat(level * INDENT_WIDTH))
        .trim()
    : content.replace(/\n/gm, '\n' + ' '.repeat(level * INDENT_WIDTH)).trim())

export const capitalise = (input: string) =>
  input[0].toUpperCase() + input.slice(1)
