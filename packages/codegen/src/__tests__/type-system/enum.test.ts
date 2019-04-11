import { Kind, parse } from 'graphql'
import { createCodegenPrinter } from '../../printer'

describe('printer > ' + Kind.ENUM_TYPE_DEFINITION, () => {
  it('codegens enum', () => {
    const fixture = parse(`
      enum MyEnum {
        ABC
        # some description
        Value
        """ my description """
        ANOTHER
      }
    `)

    const print = createCodegenPrinter({ useMapsForEnum: false })

    expect(print(fixture)).toMatchInlineSnapshot(`
                  "export enum MyEnum {
                    ABC = 'ABC',
                    Value = 'Value',
                    /**  my description  */
                    ANOTHER = 'ANOTHER',
                  }"
            `)
  })

  it('codegens enum as map', () => {
    const fixture = parse(`
      enum MyEnum {
        """
        multiline
        description
        """
        ABC
        Value
        """ my description """
        ANOTHER
      }
    `)

    const print = createCodegenPrinter({ useMapsForEnum: true })

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export interface MyEnum {
        /**
         * multiline
         * description
         */
        ABC: 'ABC'
        Value: 'Value'
        /**  my description  */
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
