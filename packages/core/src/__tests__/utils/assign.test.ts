import { deepAssign } from '../../utils'

describe('deep assign', () => {
  it('will merge nested configs', () => {
    const a = {
      flat: 'string',
      nested: {
        moreNested: {
          array: [123],
          value: 1,
        },
      },
    }

    const b = {
      uniqueNested: {
        prop: 'ABC',
      },
      nested: {
        moreNested: {
          value: 123,
        },
      },
    }

    const res = deepAssign(a, b)

    expect(res).toEqual({
      flat: 'string',
      uniqueNested: {
        prop: 'ABC',
      },
      nested: {
        moreNested: {
          array: [123],
          value: 123,
        },
      },
    })
  })
})
