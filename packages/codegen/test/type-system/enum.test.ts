import { Kind, parse } from 'graphql'
import { defaultCodegen } from '../../src'

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

    expect(defaultCodegen(fixture)).toMatchInlineSnapshot(`
            "export interface MyEnum {
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

    const res = defaultCodegen(fixture, { useMapsForEnum: false })

    expect(res).toMatchInlineSnapshot(`
      "export enum MyEnum {
        /**
         * multiline
         * description
         */
        ABC = 'ABC',
        Value = 'Value',
        /**  my description  */
        ANOTHER = 'ANOTHER',
      }"
    `)
  })
})
