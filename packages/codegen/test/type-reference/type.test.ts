import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { defaultCodegen } from '../../src'

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

    expect(defaultCodegen(fixture)).toMatchInlineSnapshot(`
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

    expect(defaultCodegen(fixture)).toMatchInlineSnapshot(`
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

    expect(defaultCodegen(fixture)).toMatchInlineSnapshot(`
      "export interface MyType {
        __typename: 'MyType'
        prop?: MyType | null
        prop: MyType
        prop?: Array<MyType | null> | null
        prop?: MyType[] | null
        prop: Array<MyType | null>
        prop: MyType[]
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

    const res = defaultCodegen(fixture, { useMaybeType: true })

    expect(res).toMatchInlineSnapshot(`
      "export interface MyType {
        __typename: 'MyType'
        prop?: Maybe<MyType>
        prop: MyType
        prop?: Maybe<Array<Maybe<MyType>>>
        prop?: Maybe<MyType[]>
        prop: Array<Maybe<MyType>>
        prop: MyType[]
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

    const res = defaultCodegen(fixture, { useOptionalModifier: false })

    expect(res).toMatchInlineSnapshot(`
      "export interface MyType {
        __typename: 'MyType'
        prop: MyType | null
        prop: MyType | null
        prop: Array<MyType | null> | null
        prop: MyType[] | null
        prop: Array<MyType | null>
        prop: MyType[]
      }"
    `)
  })
})
