import { Kind } from 'graphql'
import gql from 'graphql-tag'
import { createCodegen, defaultCodegen } from '../../src'

describe('printer > ' + Kind.UNION_TYPE_DEFINITION, () => {
  it('prints union inline with one value', () => {
    const fixture = gql`
      union MyUnion = Value
    `

    expect(defaultCodegen(fixture)).toMatchInlineSnapshot(`"export type MyUnion = Value"`)
  })

  it('prints union without members as any', () => {
    const fixture = gql`
      union MyUnion
    `

    expect(defaultCodegen(fixture)).toMatchInlineSnapshot(`"export type MyUnion = any"`)
  })

  it('prints union multiline', () => {
    const fixture = gql`
      union MyUnion = Value | AnotherValue | EvenAnotherValue
    `

    expect(defaultCodegen(fixture)).toMatchInlineSnapshot(`
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
    const res = createCodegen(fixture, {
      interfacePrefix: 'III',
      useInterfacePrefixForUnion: true,
    })(fixture)

    expect(res).toMatchInlineSnapshot(`
"export type IIIMyUnion = 
  | Value
  | AnotherValue
  | EvenAnotherValue"
`)
  })
})
