import { Kind, ObjectValueNode } from 'graphql'
import { createCodegen } from '../codegen'

describe('printer > AST nodes', () => {
  it(Kind.OBJECT, () => {
    const obj: ObjectValueNode = {
      kind: Kind.OBJECT,
      fields: [
        {
          kind: Kind.OBJECT_FIELD,
          name: { value: 'someProp', kind: Kind.NAME },
          value: { kind: Kind.FLOAT, value: '123.123' },
        },
      ],
    }

    const print = createCodegen()

    expect(print(obj)).toMatchInlineSnapshot(`""`)
  })
})
