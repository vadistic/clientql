import { getDocDefinition, Kind } from '@graphql-clientgen/core'
import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
import { codegenTsInterfaceToType } from '../../codegen-typescript/interface'
import { getGeneratorProps } from '../../generator'

const docToInterfaceTypings = (doc: DocumentNode) =>
  codegenTsInterfaceToType(getGeneratorProps(doc))(
    getDocDefinition(doc, Kind.INTERFACE_TYPE_DEFINITION)!,
  )

describe('codegen typescript > interfaces', () => {
  it('codegens interface', () => {
    const fixture = gql`
      interface MyInterface {
        field: String!
        fn(abc: InputAbc!): Post!
      }
    `

    const res = docToInterfaceTypings(fixture)

    expect(res).toMatchInlineSnapshot(`
      "export interface IMyInterface {
        field: string
        fn: Post
      }"
    `)
  })
})
