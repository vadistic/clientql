import { unwrapDocument } from '@clientql/core'
import gql from 'graphql-tag'
import { getGeneratorProps } from '../generator'
import { getMinimalTypedefs, stripLocationDescriptionAndEmpty } from '../utils'

describe('generator utils', () => {
  it('traverse tree to purge unused typedefs', () => {
    const defs = gql`
      type Query {
        users: User!
      }

      type User {
        name: String
        friends: Friend
      }

      type Friend {
        hobby: Hobby
      }

      enum Hobby {
        FOOTBAL
        POLITICS
        TRAVELLING
      }

      type Animal {
        kind: String
        owner: Friend!
      }
    `

    const res = getMinimalTypedefs(getGeneratorProps(defs))

    expect(
      unwrapDocument(res).some(
        node =>
          node.kind === 'ObjectTypeDefinition' && node.name.value === 'Animal',
      ),
    ).toBeFalsy()
  })

  it('strip location', () => {
    const fixture = {
      kind: 'Document',
      definitions: [
        {
          kind: 'ObjectTypeDefinition',
          name: {
            kind: 'Name',
            value: 'AccessPayload',
            loc: {
              start: 5,
              end: 18,
            },
          },
          interfaces: [],
          directives: [],
          fields: [
            {
              kind: 'FieldDefinition',
              name: {
                kind: 'Name',
                value: 'token',
                loc: {
                  start: 23,
                  end: 28,
                },
              },
              arguments: [],
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: {
                      start: 30,
                      end: 36,
                    },
                  },
                  loc: {
                    start: 30,
                    end: 36,
                  },
                },
                loc: {
                  start: 30,
                  end: 37,
                },
              },
              directives: [],
              loc: {
                start: 23,
                end: 37,
              },
            },
          ],
          loc: {
            start: 0,
            end: 39,
          },
        },
      ],
    }

    const res = stripLocationDescriptionAndEmpty(fixture)

    expect(res).toEqual({
      kind: 'Document',
      definitions: [
        {
          kind: 'ObjectTypeDefinition',
          name: {
            kind: 'Name',
            value: 'AccessPayload',
          },
          fields: [
            {
              kind: 'FieldDefinition',
              name: {
                kind: 'Name',
                value: 'token',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                  },
                },
              },
            },
          ],
        },
      ],
    })
  })
})
