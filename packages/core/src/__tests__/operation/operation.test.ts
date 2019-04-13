import { print } from 'graphql'
import { buildOperation } from '../../operation'
import { complexProps, prismaProps } from '../fixture'

describe('operation', () => {
  it('non nested query', () => {
    const op = buildOperation(prismaProps)(['user'])!

    expect(print(op)).toMatchInlineSnapshot(`
                        "query TODO($where: UserWhereUniqueInput!) {
                          user(where: $where) {
                            ...UserFlat
                            posts {
                              ...PostFlat
                            }
                          }
                        }

                        fragment UserFlat on User {
                          __typename
                          id
                          nationality
                          email
                          name
                        }

                        fragment PostFlat on Post {
                          __typename
                          id
                          content
                          createdAt
                          published
                          title
                          updatedAt
                        }
                        "
                `)
  })

  it('nested query', () => {
    const op = buildOperation(prismaProps)(['user', 'posts'])!

    expect(print(op)).toMatchInlineSnapshot(`
                        "query TODO($where: UserWhereUniqueInput!, $where1: PostWhereInput, $orderBy1: PostOrderByInput, $skip1: Int, $after1: String, $before1: String, $first1: Int, $last1: Int) {
                          user(where: $where) {
                            posts(where: $where1, orderBy: $orderBy1, skip: $skip1, after: $after1, before: $before1, first: $first1, last: $last1) {
                              ...PostFlat
                              author {
                                ...UserFlat
                              }
                            }
                          }
                        }

                        fragment PostFlat on Post {
                          __typename
                          id
                          content
                          createdAt
                          published
                          title
                          updatedAt
                        }

                        fragment UserFlat on User {
                          __typename
                          id
                          nationality
                          email
                          name
                        }
                        "
                `)
  })

  it('something complicated', () => {
    const op = buildOperation(complexProps)(['findEventsAtVenue'])!

    expect(print(op)).toMatchSnapshot()
  })
})
