import { DocumentNode, ObjectTypeDefinitionNode } from 'graphql'
import gql from 'graphql-tag'
import { codegenType } from '../..'
import { getGeneratorProps } from '../../generator'

const getFields = (doc: DocumentNode) =>
  (doc.definitions[0] as ObjectTypeDefinitionNode)!.fields!

const docToFieldsReturnTypings = (doc: DocumentNode) => {
  const fields = getFields(doc)
  const props = getGeneratorProps(doc)
  return fields.map(field => codegenType(props)(field.type)).join('\n')
}

describe('codegen typescript > types', () => {
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

    expect(docToFieldsReturnTypings(fixture)).toMatchInlineSnapshot(`
      "string | null
      string
      (string | null)[] | null
      string[] | null
      (string | null)[]
      string[]"
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

    expect(docToFieldsReturnTypings(fixture)).toMatchInlineSnapshot(`
      "string | null
      number
      number | null
      number | null
      boolean | null
      JSON | null"
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

    expect(docToFieldsReturnTypings(fixture)).toMatchInlineSnapshot(`
      "MyType | null
      MyType
      Array<MyType | null> | null
      Array<MyType> | null
      Array<MyType | null>
      Array<MyType>"
    `)
  })
})
