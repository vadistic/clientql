import { print } from 'graphql'
import gql from 'graphql-tag'
import { buildOperation } from '..'
import { extendFixtureProps, fixtureProps } from './fixture'
import { normalise } from './normalise'

describe('map & operation', () => {
  it('build map', () => {
    // console.log(map)
  })
  it('build non-nested operation', () => {
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

    const operation = buildOperation(fixtureProps, ['posts'])

    expect(normalise(operation)).toEqual(normalise(fixture))

    expect(print(operation)).toMatchInlineSnapshot(`
            "query PostQuery($after: String, $before: String, $first: Int, $last: Int, $orderBy: PostOrderByInput, $skip: Int, $where: PostWhereInput) {
              posts(after: $after, before: $before, first: $first, last: $last, orderBy: $orderBy, skip: $skip, where: $where) {
                __typename
                content
                createdAt
                id
                published
                title
                updatedAt
              }
            }
            "
        `)
  })

  it('handle non-nullable variables', () => {
    const typedefs = gql`
      type Query {
        something(where: PostWhereInput!): Post!
      }
    `

    const operation = buildOperation(extendFixtureProps(typedefs), [
      'something',
    ])

    expect(print(operation)).toMatchInlineSnapshot(`
      "query PostQuery($where: PostWhereInput!) {
        something(where: $where) {
          __typename
          content
          createdAt
          id
          published
          title
          updatedAt
        }
      }
      "
    `)
  })
})
