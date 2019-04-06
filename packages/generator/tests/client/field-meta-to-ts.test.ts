import { getFieldDefinitionNodeMeta } from '@graphql-clientgen/shared'
import { DocumentNode, ObjectTypeDefinitionNode } from 'graphql'
import gql from 'graphql-tag'
import { codegenFieldMetaToFunction, codegenFieldMetaToType } from '../../src'

const getFields = (doc: DocumentNode) =>
  (doc.definitions[0] as ObjectTypeDefinitionNode)!.fields!

const docToFieldsTypescript = (doc: DocumentNode) => {
  const fields = getFields(doc)
  const fieldMetas = fields.map(getFieldDefinitionNodeMeta)
  const fieldTypes = fieldMetas.map(codegenFieldMetaToType)

  const fieldFunctions = fieldMetas.map(codegenFieldMetaToFunction)

  return { fieldTypes, fieldFunctions }
}

describe('codegen > codegen fields', () => {
  it('to types', () => {
    const fixture = gql`
      type MyType {
        prop: String!
        arr: [String!]!
      }
    `

    const expectedTypes = [`prop: string`, `arr: string[]`]

    const { fieldTypes } = docToFieldsTypescript(fixture)

    expect(fieldTypes).toEqual(expectedTypes)
  })

  it('to to plain types', () => {
    const fixture = gql`
      type MyType {
        prop: String!
        arr: [String!]!
        # ignores args
        withArg(data: String!): [Value!]!
      }
    `

    const expectedTypes = [
      `prop: string`,
      `arr: string[]`,
      `withArg: Array<Value>`
    ]

    const { fieldTypes } = docToFieldsTypescript(fixture)

    expect(fieldTypes).toEqual(expectedTypes)
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

    const expectedTypes = [
      `prop: () => string`,
      `arr: () => string[]`,
      `withArg: (data: string) => Array<Value>`,
      `withOptArg: (data?: SomeInputType | null) => Array<Value>`,
      `many: (
data?: string | null
where: ID
first?: number | null
) => Array<Value>`
    ]

    const { fieldFunctions } = docToFieldsTypescript(fixture)

    expect(fieldFunctions).toEqual(expectedTypes)
  })
})
