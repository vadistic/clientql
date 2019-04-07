import { DocumentNode, ObjectTypeDefinitionNode } from 'graphql'
import gql from 'graphql-tag'
import { codegenType } from '../../src'
import { getIsolatedGenProps } from '../fixture'

const getFields = (doc: DocumentNode) =>
  (doc.definitions[0] as ObjectTypeDefinitionNode)!.fields!

const docToFieldsReturnTsArray = (doc: DocumentNode) => {
  const fields = getFields(doc)
  const props = getIsolatedGenProps(doc)
  const fieldsReturnTypescript = fields.map(field =>
    codegenType(props)(field.type)
  )

  return fieldsReturnTypescript
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

    const result = docToFieldsReturnTsArray(fixture)

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

    const result = docToFieldsReturnTsArray(fixture)

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

    const result = docToFieldsReturnTsArray(fixture)

    expect(result).toEqual(expected)
  })
})
