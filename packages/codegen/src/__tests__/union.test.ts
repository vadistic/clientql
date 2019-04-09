import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegenPrinter } from '../printer'

describe('printer > ' + Kind.UNION_TYPE_DEFINITION, () => {
  it('prints union inline with one value', () => {
    const fixture = gql`
      union MyUnion = Value
    `

    const print = createCodegenPrinter()

    expect(print(fixture)).toMatchInlineSnapshot(
      `"export type MyUnion = Value"`,
    )
  })

  it('prints union without members as any', () => {
    const fixture = gql`
      union MyUnion
    `

    const print = createCodegenPrinter()

    expect(print(fixture)).toMatchInlineSnapshot(`"export type MyUnion = any"`)
  })

  it('prints union multiline', () => {
    const fixture = gql`
      union MyUnion = Value | AnotherValue | EvenAnotherValue
    `
    const print = createCodegenPrinter({ interfacePrefix: 'III' })

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export type MyUnion = 
        | Value
        | AnotherValue
        | EvenAnotherValue"
    `)
  })

  it('useInterfacePrefixForUnion: true', () => {
    const fixture = gql`
      union MyUnion = Value | AnotherValue | EvenAnotherValue
    `
    const print = createCodegenPrinter({
      useInterfacePrefixForUnion: true,
      interfacePrefix: 'III',
    })

    expect(print(fixture)).toMatchInlineSnapshot(`
      "export type IIIMyUnion = 
        | Value
        | AnotherValue
        | EvenAnotherValue"
    `)
  })
})
