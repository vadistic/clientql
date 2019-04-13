import { print } from 'graphql'
import { createFragment, createOperation, wrapDocument } from '../../ast'
import { buildSelections } from '../../operation'
import { complexProps, prismaProps } from '../fixture'

describe('selection', () => {
  it('deep fragment', () => {
    const selectionFn = buildSelections(prismaProps)

    const { selections, fragments } = selectionFn('Post')

    const op = createOperation({
      name: 'PostQuery',
      selections,
      type: 'query',
    })

    expect(print(wrapDocument(op, ...fragments))).toMatchInlineSnapshot(`
      "query PostQuery {
        ...PostFlat
        author {
          ...UserFlat
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

  it('deep interface fragment', () => {
    const selectionFn = buildSelections(complexProps)

    const { selections, fragments } = selectionFn('Query')

    const op = createOperation({
      name: 'MyOperation',
      selections,
      type: 'query',
    })

    expect(print(wrapDocument(op, ...fragments))).toMatchSnapshot()
  })

  it('deep interface fragment', () => {
    const selectionFn = buildSelections(complexProps)

    const { selections, fragments } = selectionFn('Event')

    const op = createOperation({
      name: 'EventOp',
      selections,
      type: 'query',
    })

    expect(print(wrapDocument(op, ...fragments))).toMatchInlineSnapshot(`
      "query EventOp {
        ...EventFlat
        venue {
          ...VenueFlat
        }
      }
      
      fragment EventFlat on Event {
        __typename
        id
        name
        startsAt
        endsAt
        minAgeRestriction
      }
      
      fragment VenueFlat on Venue {
        __typename
        id
        name
        address
        maxOccupancy
      }
      "
    `)
  })
})
