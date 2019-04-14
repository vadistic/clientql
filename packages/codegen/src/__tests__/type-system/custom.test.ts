import gql from 'graphql-tag'
import { CodegenConfig } from '../../config'
import { createCodegenPrinter } from '../../printer'

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

    const print = createCodegenPrinter({
      transformFieldArguments: transform,
      addFieldAsFunction: true,
    })

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export interface MyType {
        prop: () => string
        arr: (index: number) => string[]
        fn: () => string
      }"
    `)
  })
})
