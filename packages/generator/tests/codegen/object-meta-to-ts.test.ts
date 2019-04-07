import {
  getInputObjectTypeDefinitionNodeMeta,
  getObjectTypeDefinitionNodeMeta
} from '@graphql-clientgen/shared'
import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
import {
  codegenInputObjectMetaToType,
  codegenObjectMetaToType
} from '../../src'

const docToObjectTypescript = (doc: DocumentNode) => {
  const objectMeta = getObjectTypeDefinitionNodeMeta(doc.definitions[0] as any)

  return codegenObjectMetaToType(objectMeta)
}

const docToInputObjectTypescript = (doc: DocumentNode) => {
  const objectMeta = getInputObjectTypeDefinitionNodeMeta(doc
    .definitions[0] as any)

  return codegenInputObjectMetaToType(objectMeta)
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

    const expected = `
export interface MyType {
  prop: string
  arr: string[]
  fn: string
}
    `.trim()

    const result = docToObjectTypescript(fixture)

    expect(result).toBe(expected)
  })

  it('codegen input object definitions to typescript', () => {
    const fixture = gql`
      input MyInput {
        prop: String!
        arr: [String!]!
      }
    `

    const expected = `
export interface MyInput {
  prop: string
  arr: string[]
}
    `.trim()

    const result = docToInputObjectTypescript(fixture)

    expect(result).toBe(expected)
  })
})
