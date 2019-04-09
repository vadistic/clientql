import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegenPrinter } from '../printer'

describe(`printer > ${Kind.NON_NULL_TYPE} | ${Kind.LIST_TYPE}`, () => {
  it('transpile scalar nullable lists', () => {
    const fixture = gql`
      type MyType {
        prop: String
        prop: String!
        prop: [String]
        prop: [String!]
        prop: [String]!
        prop: [String!]!
      }
    `
    const print = createCodegenPrinter()

    expect(print(fixture)).toMatchInlineSnapshot(`
            "export interface MyType {
              __typename: 'MyType'
              prop?: string | null
              prop: string
              prop?: Array<string | null> | null
              prop?: string[] | null
              prop: Array<string | null>
              prop: string[]
            }"
        `)
  })

  it('transpile predefined scalar values', () => {
    const fixture = gql`
      type MyType {
        prop: String
        prop: Int!
        prop: Float
        prop: Long
        prop: Boolean
        prop: JSON
      }
    `

    const print = createCodegenPrinter()

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export interface MyType {
        __typename: 'MyType'
        prop?: string | null
        prop: number
        prop?: number | null
        prop?: number | null
        prop?: boolean | null
        prop?: any | null
      }"
    `)
  })

  it('transpile named types', () => {
    const fixture = gql`
      type MyType {
        prop: MyType
        prop: MyType!
        prop: [MyType]
        prop: [MyType!]
        prop: [MyType]!
        prop: [MyType!]!
      }
    `

    const print = createCodegenPrinter()

    expect(print(fixture)).toMatchInlineSnapshot(`
            "export interface MyType {
              __typename: 'MyType'
              prop?: MyType | null
              prop: MyType
              prop?: MyType | null
              prop?: Array<MyType> | null
              prop: MyType
              prop: Array<MyType>
            }"
        `)
  })

  it('useMaybeType: true', () => {
    const fixture = gql`
      type MyType {
        prop: MyType
        prop: MyType!
        prop: [MyType]
        prop: [MyType!]
        prop: [MyType]!
        prop: [MyType!]!
      }
    `

    const print = createCodegenPrinter({ useMaybeType: true })

    expect(print(fixture)).toMatchInlineSnapshot(`
            "export interface MyType {
              __typename: 'MyType'
              prop?: Maybe<MyType>
              prop: MyType
              prop?: Maybe<MyType>
              prop?: Maybe<Array<MyType>>
              prop: MyType
              prop: Array<MyType>
            }"
        `)
  })

  it('useOptionalModifier: false', () => {
    const fixture = gql`
      type MyType {
        prop: MyType
        prop: MyType
        prop: [MyType]
        prop: [MyType!]
        prop: [MyType]!
        prop: [MyType!]!
      }
    `

    const print = createCodegenPrinter({ useOptionalModifier: false })

    expect(print(fixture)).toMatchInlineSnapshot(`
            "export interface MyType {
              __typename: 'MyType'
              prop: MyType | null
              prop: MyType | null
              prop: MyType | null
              prop: Array<MyType> | null
              prop: MyType
              prop: Array<MyType>
            }"
        `)
  })
})
