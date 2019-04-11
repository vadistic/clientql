import { PRISMA_TYPEDEFS } from '@graphql-clientgen/testing'
import { buildASTSchema, Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegenPrinter } from '../../printer'

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

    const print = createCodegenPrinter({ addFieldAsFunction: true })

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

  it('useExtendedInterfaces: true', () => {
    const print = createCodegenPrinter({
      useExtendedInterfaces: true,
      useMapsForEnum: false,
    })

    const fixture = gql`
      interface Animal {
        sea: Boolean
        land: Boolean
      }

      type Dog implements Animal {
        sea: Boolean
        land: Boolean
        size: Size
      }

      enum Size {
        SMALL
        MEDIUM
        LARGE
      }
    `

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export interface Animal {
        sea?: boolean | null
        land?: boolean | null
      }
      
      export interface Dog extends Animal {
        __typename: 'Dog'
        size?: Size | null
      }
      
      export enum Size {
        SMALL = 'SMALL',
        MEDIUM = 'MEDIUM',
        LARGE = 'LARGE',
      }"
    `)
  })

  it('useFieldArgumentsInterfaces: true', () => {
    const schema = buildASTSchema(PRISMA_TYPEDEFS)

    const print = createCodegenPrinter(
      { addFieldAsFunction: true, useFieldArgumentsInterface: true },
      PRISMA_TYPEDEFS,
    )

    const fixture = schema.getQueryType()!.astNode!

    expect(print(fixture)).toMatchSnapshot()
  })
})
