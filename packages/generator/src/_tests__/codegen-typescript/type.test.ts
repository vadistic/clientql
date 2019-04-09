import { getDocDefinition, Kind } from '@graphql-clientgen/core'
import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
import { codegenTsType } from '../..'
import { getGeneratorProps } from '../../generator'

const docToFieldsReturnTypings = (doc: DocumentNode) => {
  const fields = getDocDefinition(doc, Kind.OBJECT_TYPE_DEFINITION)!.fields!
  const props = getGeneratorProps(doc)
  return fields.map(field => codegenTsType(props)(field.type)).join('\n')
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
      "IMyType | null
      IMyType
      Array<IMyType | null> | null
      Array<IMyType> | null
      Array<IMyType | null>
      Array<IMyType>"
    `)
  })
})
