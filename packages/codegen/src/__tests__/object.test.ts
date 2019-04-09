import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegenPrinter } from '../printer'

describe('printer > ' + Kind.OBJECT_TYPE_DEFINITION, () => {
  it('addFieldsAsFunction: true', () => {
    const fixture = gql`
      type MyType {
        prop: String!
        arr: [String!]!
        # ignores function
        fn(data: String!): String!
      }
    `

    const print = createCodegenPrinter({ addFieldsAsFunction: true })

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export interface MyType {
        prop: () => string
        arr: () => string[]
        fn: (args: { data: string }) => string
      }"
    `)
  })

  it('addTypename: false', () => {
    const fixture = gql`
      type MyType {
        prop: String!
        arr: [String!]!
        # ignores function
        fn(data: String!): String!
      }
    `

    const print = createCodegenPrinter({ addTypename: false })

    expect(print(fixture)).toMatchInlineSnapshot(`
            "export interface MyType {
              prop: string
              arr: string[]
              fn: string
            }"
        `)
  })
})
