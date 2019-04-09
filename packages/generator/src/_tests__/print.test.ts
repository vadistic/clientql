import { print } from 'graphql'
import gql from 'graphql-tag'
import {
  indent,
  printJsBlockComment,
  printJsGraphql,
  printJsSection,
  printTsInterface,
} from '../print'

describe('print utils', () => {
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
    const fixture = printJsBlockComment('MY IMPORTANT BLOCK')

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

    fixture += printJsSection('FIRST', content)
    fixture += printJsSection('SECOND', content)

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

  it('print graphql to gql tagged const with deps', () => {
    const fixture = printJsGraphql(
      'MY_CONT_NAME',
      gql`
        query Myquery {
          prop
          ...SomeFragment
          ...SomeOtherFragment
        }
      `,
      ['SOME_FRAGMENT', 'SOME_OTHER_FRAGMENT'],
    )

    expect(fixture).toMatchInlineSnapshot(`
      "export const MY_CONT_NAME = gql\`
        query Myquery {
          prop
          ...SomeFragment
          ...SomeOtherFragment
        }
      
        \${SOME_FRAGMENT}
        \${SOME_OTHER_FRAGMENT}\`"
    `)
  })

  it('prints interface', () => {
    const arr = ['prop?: Value', 'arr?: any[]']
    const str = arr.join('\n')

    const name = 'MyInterface'
    const extend = ['First', 'Second']

    const res1 = printTsInterface(name, false, arr)
    const res2 = printTsInterface(name, extend, str)

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
