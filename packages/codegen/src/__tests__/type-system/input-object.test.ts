import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegenPrinter } from '../../printer'

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
    const print = createCodegenPrinter()

    expect(print(fixture)).toMatchInlineSnapshot(`
      "/** MyInput! */
      export interface MyInput {
        /** prop */
        prop: string
        arr: string[]
      }"
    `)
  })
})
