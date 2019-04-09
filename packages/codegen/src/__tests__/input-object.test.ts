import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegenPrinter } from '../printer'

describe('printer > ' + Kind.INPUT_OBJECT_TYPE_DEFINITION, () => {
  it('works', () => {
    const fixture = gql`
      input MyInput {
        prop: String!
        arr: [String!]!
      }
    `
    const print = createCodegenPrinter()

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export interface MyInput {
        prop: string
        arr: string[]
      }"
    `)
  })
})
