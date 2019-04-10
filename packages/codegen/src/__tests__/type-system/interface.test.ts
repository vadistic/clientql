import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegenPrinter } from '../../printer'

describe('printer > ' + Kind.INTERFACE_TYPE_DEFINITION, () => {
  it('works', () => {
    const fixture = gql`
      interface MyInterface {
        field: String!
        fn(abc: InputAbc!): Post!
      }
    `

    const print = createCodegenPrinter()

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export interface MyInterface {
        field: string
        fn: Post
      }"
    `)
  })

  it('interfacePrefix', () => {
    const fixture = gql`
      interface MyInterface {
        field: String!
        fn(abc: InputAbc!): Post!
      }
    `

    const print = createCodegenPrinter({ interfacePrefix: 'III' })

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export interface IIIMyInterface {
        field: string
        fn: Post
      }"
    `)
  })
})
