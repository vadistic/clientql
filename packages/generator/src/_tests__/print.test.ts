import { indent } from '../print'

describe('print utils', () => {
  it('indent multiline strings', () => {
    const fixture = `
something
newline
  indented
ok
    `.trim()

    const result =
      '  ' +
      `
  something
  newline
    indented
  ok
    `.trim()

    expect(indent(fixture, 1)).toBe(result)
  })
})
