import { DocumentNode, ObjectTypeDefinitionNode } from 'graphql'
import gql from 'graphql-tag'
import { codegenTypeMeta, getFieldDefinitionNodeMeta } from '../../src'

const getFields = (doc: DocumentNode) =>
  (doc.definitions[0] as ObjectTypeDefinitionNode)!.fields!

const docToFieldsValueTsArray = (doc: DocumentNode) => {
  const fields = getFields(doc)
  const fieldMetas = fields.map(getFieldDefinitionNodeMeta)
  const fieldsValueTypescript = fieldMetas.map(fieldMeta =>
    codegenTypeMeta(fieldMeta.type)
  )

  return fieldsValueTypescript
}

describe('codegen > type meta to typescript', () => {
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

    const expected = [
      `string | null`,
      `string`,
      `(string | null)[] | null`,
      `string[] | null`,
      `(string | null)[]`,
      `string[]`
    ]

    const result = docToFieldsValueTsArray(fixture)

    expect(result).toEqual(expected)
  })

  it('transpile different scalar values', () => {
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

    const expected = [
      `string | null`,
      `number`,
      `number | null`,
      `number | null`,
      `boolean | null`,
      `JSON | null`
    ]

    const result = docToFieldsValueTsArray(fixture)

    expect(result).toEqual(expected)
  })

  it('transpile named type values', () => {
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

    const expected = [
      `MyType | null`,
      `MyType`,
      `Array<MyType | null> | null`,
      `Array<MyType> | null`,
      `Array<MyType | null>`,
      `Array<MyType>`
    ]

    const result = docToFieldsValueTsArray(fixture)

    expect(result).toEqual(expected)
  })
})
