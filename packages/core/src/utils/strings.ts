/**
 * indents string (WITH first line)
 *
 * generics to support flavours
 */

export const INDENT_WIDTH = 2

export const indent = <T extends string>(content: T, level = 1, trim = false) =>
  (' '.repeat(level * INDENT_WIDTH) +
    (trim
      ? content
          .replace(/^\s+/gm, '')
          .replace(/\n\s*/gm, '\n' + ' '.repeat(level * INDENT_WIDTH))
          .trim()
      : content
          .replace(/\n/gm, '\n' + ' '.repeat(level * INDENT_WIDTH))
          .trim())) as T

export const capitalise = <T extends string>(input: T) =>
  (input[0].toUpperCase() + input.slice(1)) as T
