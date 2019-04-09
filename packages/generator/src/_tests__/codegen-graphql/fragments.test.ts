import { getDocDefinition, Kind } from '@graphql-clientgen/core'
import gql from 'graphql-tag'
import { getFragmentDependencies } from '../../codegen-graphql'

describe('codegen graphql > fragments', () => {
  it('gets fragment dependencies', async () => {
    const fixture = gql`
      query MyQuery {
        __typename
        ...SomeFragment
        and {
          very {
            nested {
              ...FragmentSpread
            }
          }
        }
      }
    `

    const operation = getDocDefinition(fixture, Kind.OPERATION_DEFINITION)
    const deps = getFragmentDependencies(operation!)

    expect(deps).toEqual(['SomeFragment', 'FragmentSpread'])
  })
})
