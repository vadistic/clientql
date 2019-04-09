import {
  indent,
  printBlockComment,
  printCodeSection,
  printTSInterface,
} from '../strings'

describe('string utils', () => {
  it('indent multiline strings', () => {
    const fixture = `
    something
newline
  indented
ok
    `

    expect(indent(fixture, 2)).toMatchInlineSnapshot(`
      "    something
          newline
            indented
          ok"
    `)
  })

  it('print block comment', () => {
    const fixture = printBlockComment('MY IMPORTANT BLOCK')

    expect(fixture).toMatchInlineSnapshot()
  })

  it('print sections', () => {
    const content = 'HELLO\n'.repeat(3)

    let fixture = ''

    fixture += printCodeSection('FIRST', content)
    fixture += printCodeSection('SECOND', content)

    expect(fixture).toMatchInlineSnapshot()
  })

  it('prints interface', () => {
    const arr = ['prop?: Value', 'arr?: any[]']
    const str = arr.join('\n')

    const name = 'MyInterface'
    const extend = ['First', 'Second']

    const res1 = printTSInterface(name, false, arr)
    const res2 = printTSInterface(name, extend, str)

    expect(res1).toMatchInlineSnapshot()

    expect(res2).toMatchInlineSnapshot()
  })
})
