import { FieldDefinitionNode, Kind } from 'graphql'
import { createCodegenPrinter } from '../printer'

describe('printer > ' + Kind.FIELD_DEFINITION, () => {
  it('useFieldArguments: false', () => {
    const field: FieldDefinitionNode = {
      kind: Kind.FIELD_DEFINITION,
      name: {
        kind: Kind.NAME,
        value: 'My field',
      },
      type: {
        kind: Kind.NON_NULL_TYPE,
        type: {
          kind: Kind.NAMED_TYPE,
          name: {
            kind: Kind.NAME,
            value: 'Value',
          },
        },
      },
    }

    const print = createCodegenPrinter({ addFieldsAsFunction: false })

    expect(print(field)).toMatchInlineSnapshot(`"My field: Value"`)
  })

  it('useFieldArguments: true', () => {
    const field: FieldDefinitionNode = {
      kind: Kind.FIELD_DEFINITION,
      name: {
        kind: Kind.NAME,
        value: 'My field',
      },
      type: {
        kind: Kind.NON_NULL_TYPE,
        type: {
          kind: Kind.NAMED_TYPE,
          name: {
            kind: Kind.NAME,
            value: 'Value',
          },
        },
      },
    }

    const print = createCodegenPrinter({ addFieldsAsFunction: true })

    expect(print(field)).toMatchInlineSnapshot(`"My field: () => Value"`)
  })
})
