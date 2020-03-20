import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { defaultCodegen } from '../../src'

describe('printer > ' + Kind.INPUT_OBJECT_TYPE_DEFINITION, () => {
  it('works', () => {
    const fixture = gql`
      """
      MyInput!
      """
      input MyInput {
        """
        prop
        """
        prop: String!
        arr: [String!]!
      }
    `

    expect(defaultCodegen(fixture)).toMatchInlineSnapshot(`
      "/** MyInput! */
      export interface MyInput {
        /** prop */
        prop: string
        arr: string[]
      }"
    `)
  })
})
