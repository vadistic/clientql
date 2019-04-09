import { getDocDefinition, Kind } from '@graphql-clientgen/core'
import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
import { codegenTsUnion } from '../../codegen-typescript'
import { GeneratorConfig } from '../../config'
import { getGeneratorProps } from '../../generator'

const docToUnionTypings = (
  doc: DocumentNode,
  config?: Partial<GeneratorConfig>,
) =>
  codegenTsUnion(getGeneratorProps(doc, config))(
    getDocDefinition(doc, Kind.UNION_TYPE_DEFINITION)!,
  )

describe('codegen typescript > unions', () => {
  it('codegens union inline', () => {
    const fixture = gql`
      union MyEnum = Value
    `

    const res = docToUnionTypings(fixture)

    expect(res).toMatchInlineSnapshot(`"export type IMyEnum = Value"`)
  })

  it('codegens union multiline', () => {
    const fixture = gql`
      union MyEnum = Value | AnotherValue | EvenAnotherValue
    `

    const res = docToUnionTypings(fixture)

    expect(res).toMatchInlineSnapshot(`
      "export type IMyEnum =
        | Value
        | AnotherValue
        | EvenAnotherValue"
    `)
  })

  it('respects interface naming convention (on referenced types)', () => {
    const fixture = gql`
      union MyEnum = Value | AnotherValue | EvenAnotherValue

      type Value {
        abc: String
      }

      type AnotherValue {
        abc: String
      }

      type EvenAnotherValue {
        abc: String
      }
    `

    const res = docToUnionTypings(fixture, {
      interfacePrefix: 'IIISuperInterface',
    })

    expect(res).toMatchInlineSnapshot(`
      "export type IIISuperInterfaceMyEnum =
        | IIISuperInterfaceValue
        | IIISuperInterfaceAnotherValue
        | IIISuperInterfaceEvenAnotherValue"
    `)
  })
})
