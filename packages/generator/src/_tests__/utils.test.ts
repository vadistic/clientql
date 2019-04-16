import { unwrapDocument } from '@graphql-clientgen/core'
import gql from 'graphql-tag'
import { getGeneratorProps } from '../generator'
import { getMinimalTypedefs } from '../utils'

describe('check', () => {
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
})
