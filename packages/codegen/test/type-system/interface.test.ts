import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegen, defaultCodegen } from '../../src'

describe('printer > ' + Kind.INTERFACE_TYPE_DEFINITION, () => {
  it('works', () => {
    const fixture = gql`
      interface MyInterface {
        field: String!
        fn(abc: InputAbc!): Post!
      }
    `

    expect(defaultCodegen(fixture)).toMatchInlineSnapshot(`
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

    const res = createCodegen(fixture, { interfacePrefix: 'III' })(fixture)

    expect(res).toMatchInlineSnapshot(`
      "export interface IIIMyInterface {
        field: string
        fn: Post
      }"
    `)
  })
})
