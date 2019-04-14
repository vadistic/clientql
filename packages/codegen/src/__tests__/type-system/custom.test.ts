import gql from 'graphql-tag'
import { defaultCodegen } from '../../codegen'
import { CodegenConfig } from '../../config'

describe('printer > custom transformations', () => {
  it('transformFieldArguments', () => {
    const fixture = gql`
      type MyType {
        prop: String!
        arr: [String!]!
        # ignores function
        fn(data: String!): String!
      }
    `

    const transform: CodegenConfig['transformFieldArguments'] = (
      parent,
      field,
      prev,
      printer,
    ) => {
      if (field.name.value === 'fn') {
        return `()`
      }

      if (field.name.value === 'arr') {
        return `(index: number)`
      }

      return
    }

    const res = defaultCodegen(fixture, {
      transformFieldArguments: transform,
      addFieldAsFunction: true,
    })

    expect(res).toMatchInlineSnapshot(`
      "export interface MyType {
        prop: () => string
        arr: (index: number) => string[]
        fn: () => string
      }"
    `)
  })
})
