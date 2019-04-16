import {
  printBlockComment,
  printCodeSection,
  printTsInterface,
} from '../print'

describe('print typescript utils', () => {
  it('print block comment', () => {
    const fixture = printBlockComment('MY IMPORTANT BLOCK')

    expect(fixture).toMatchInlineSnapshot(`
                  "/*
                   *
                   * MY IMPORTANT BLOCK
                   *
                   */"
            `)
  })

  it('print sections', () => {
    const content = 'HELLO\n'.repeat(3)

    let fixture = ''

    fixture += printCodeSection('FIRST', content)
    fixture += printCodeSection('SECOND', content)

    expect(fixture).toMatchInlineSnapshot(`
      "/*
       *
       * FIRST
       *
       */

      HELLO
      HELLO
      HELLO

      /*
       *
       * SECOND
       *
       */

      HELLO
      HELLO
      HELLO

      "
    `)
  })

  it('prints interface', () => {
    const arr = ['prop?: Value', 'arr?: any[]']
    const str = arr.join('\n')

    const name = 'MyInterface'
    const extend = ['First', 'Second']

    const res1 = printTsInterface(name, arr)
    const res2 = printTsInterface(name, str, extend)

    expect(res1).toMatchInlineSnapshot(`
                  "export interface MyInterface {
                    prop?: Value
                    arr?: any[]
                  }"
            `)

    expect(res2).toMatchInlineSnapshot(`
                  "export interface MyInterface extends First, Second {
                    prop?: Value
                    arr?: any[]
                  }"
            `)
  })
})
