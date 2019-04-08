import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
import { codegenInputObject, codegenObjectToType } from '../..'
import { GeneratorConfig } from '../../config'
import { getGeneratorProps } from '../../generator'

const config: Partial<GeneratorConfig> = {
  prefixInterfaces: false,
}

const docToObjectTypescript = (doc: DocumentNode) => {
  const props = getGeneratorProps(doc, config)
  return codegenObjectToType(props)(doc.definitions[0] as any)
}

const docToInputObjectTypescript = (doc: DocumentNode) => {
  const props = getGeneratorProps(doc, { prefixInterfaces: false })
  return codegenInputObject(props)(doc.definitions[0] as any)
}

describe('codegen > codegen object definition nodes', () => {
  it('codegen graphql object definitions to typescript', () => {
    const fixture = gql`
      type MyType {
        prop: String!
        arr: [String!]!
        # ignores function
        fn(data: String!): String!
      }
    `

    expect(docToObjectTypescript(fixture)).toMatchInlineSnapshot(`
      "export interface MyType {
        prop: string
        arr: string[]
        fn: string
      }"
    `)
  })

  it('codegen input object definitions to typescript', () => {
    const fixture = gql`
      input MyInput {
        prop: String!
        arr: [String!]!
      }
    `

    expect(docToInputObjectTypescript(fixture)).toMatchInlineSnapshot(`
      "export interface MyInput {
        prop: string
        arr: string[]
      }"
    `)
  })
})
