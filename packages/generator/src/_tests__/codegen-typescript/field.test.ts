import { getDocDefinition, Kind } from '@graphql-clientgen/core'
import { DocumentNode, ObjectTypeDefinitionNode } from 'graphql'
import gql from 'graphql-tag'
import { codegenFieldToType } from '../..'
import { codegenFieldToFunction } from '../../codegen-typescript'
import { getGeneratorProps } from '../../generator'

const docToFieldTypeTypings = (doc: DocumentNode) => {
  const fields = getDocDefinition(doc, Kind.OBJECT_TYPE_DEFINITION)!.fields!
  const props = getGeneratorProps(doc)
  return fields.map(codegenFieldToType(props)).join('\n')
}

const docToFieldFunctionsTypings = (doc: DocumentNode) => {
  const fields = getDocDefinition(doc, Kind.OBJECT_TYPE_DEFINITION)!.fields!
  const props = getGeneratorProps(doc)
  return fields.map(codegenFieldToFunction(props)).join('\n')
}

describe('codegen typescript > fields', () => {
  it('to nullable types', () => {
    const fixture = gql`
      type MyType {
        prop: String!
        arr: [String!]!
        nullableProp: String
        nullableArr: [String]
      }
    `

    const res = docToFieldTypeTypings(fixture)

    expect(res).toMatchInlineSnapshot(`
      "prop: string
      arr: string[]
      nullableProp?: string | null
      nullableArr?: (string | null)[] | null"
    `)
  })

  it('to to plain types (without args)', () => {
    const fixture = gql`
      type MyType {
        prop: String!
        arr: [String!]!
        # ignores args
        withArg(data: String!): [Value!]!
      }
    `

    const res = docToFieldTypeTypings(fixture)

    expect(res).toMatchInlineSnapshot(`
      "prop: string
      arr: string[]
      withArg: Array<Value>"
    `)
  })

  it('to to functions types', () => {
    const fixture = gql`
      type MyType {
        # ok without args
        prop: String!
        arr: [String!]!
        # handle one arg
        withArg(data: String!): [Value!]!
        # handle optional arg
        withOptArg(data: SomeInputType): [Value!]!
        # handle many args
        many(data: String, where: ID!, first: Int): [Value!]!
      }
    `

    const res = docToFieldFunctionsTypings(fixture)

    expect(res).toMatchInlineSnapshot(`
      "prop: () => string
      arr: () => string[]
      withArg: (data: string) => Array<Value>
      withOptArg: (data?: SomeInputType | null) => Array<Value>
      many: (args: {
        data?: string | null
        where: ID
        first?: number | null
      }) => Array<Value>"
    `)
  })
})
