import { unwrapDocument } from '@graphql-clientgen/core'
import { PRISMA_TYPEDEFS } from '@graphql-clientgen/testing'
import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegen, defaultCodegen } from '../../codegen'

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

    const res = defaultCodegen(fixture, { addFieldAsFunction: true })

    expect(res).toMatchInlineSnapshot(`
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

    const res = defaultCodegen(fixture, { addTypename: false })

    expect(res).toMatchInlineSnapshot(`
            "export interface MyType {
              prop: string
              arr: string[]
              fn: string
            }"
        `)
  })

  it('useExtendedInterfaces: true', () => {
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

    const res = defaultCodegen(fixture, {
      useExtendedInterfaces: true,
      useMapsForEnum: false,
    })

    expect(res).toMatchInlineSnapshot(`
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
    const print = createCodegen(PRISMA_TYPEDEFS, {
      addFieldAsFunction: true,
      useFieldArgumentsInterface: true,
    })

    const fixture = unwrapDocument(PRISMA_TYPEDEFS).find(
      node =>
        node.kind === 'ObjectTypeDefinition' && node.name.value === 'Query',
    )!

    expect(print(fixture)).toMatchSnapshot()
  })
})
