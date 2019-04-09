import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegenPrinter } from '../printer'

describe('printer > ' + Kind.ENUM_TYPE_DEFINITION, () => {
  it('codegens enum', () => {
    const fixture = gql`
      enum MyEnum {
        ABC
        Value
        ANOTHER
      }
    `
    const print = createCodegenPrinter({ useMapsForEnum: false })

    expect(print(fixture)).toMatchInlineSnapshot(`
            "export enum MyEnum {
              ABC = 'ABC',
              Value = 'Value',
              ANOTHER = 'ANOTHER',
            }"
        `)
  })

  it('codegens enum as map', () => {
    const fixture = gql`
      enum MyEnum {
        ABC
        Value
        ANOTHER
      }
    `

    const print = createCodegenPrinter({ useMapsForEnum: true })

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export interface MyEnum {
        ABC: 'ABC'
        Value: 'Value'
        ANOTHER: 'ANOTHER'
      }
      
      export const MyEnum: MyEnum = {
        ABC: 'ABC',
        Value: 'Value',
        ANOTHER: 'ANOTHER',
      }"
    `)
  })
})
