import gql from 'graphql-tag'
import { buildOperation } from '..'
import { coreProps } from './fixture'
import { normalise } from './normalise'

describe('map & operation', () => {
  it('build map', () => {
    // console.log(map)
  })

  it('build non-nested operation', () => {
    const operation = buildOperation(coreProps, ['posts'])

    const fixture = gql`
      query PostQuery(
        $after: String
        $before: String
        $first: Int
        $last: Int
        $orderBy: PostOrderByInput
        $skip: Int
        $where: PostWhereInput
      ) {
        posts(
          after: $after
          before: $before
          first: $first
          last: $last
          orderBy: $orderBy
          skip: $skip
          where: $where
        ) {
          __typename
          content
          createdAt
          id
          published
          title
          updatedAt
        }
      }
    `

    expect(normalise(operation)).toEqual(normalise(fixture))
  })
})
