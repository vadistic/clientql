import { buildOperation, getDocDefinition } from '@graphql-clientgen/core'
import { COMPLEX_TYPEDEFS, PRISMA_TYPEDEFS } from '@graphql-clientgen/testing'
import { Kind } from 'graphql'
import { getCodegenProps } from '../../codegen'
import { printSelectionSet } from '../../type-execution'

/**
 * TODO: Update codegen api & bring this to fixture or smth
 */

const prismaProps = getCodegenProps(PRISMA_TYPEDEFS)

const complexProps = getCodegenProps(COMPLEX_TYPEDEFS)

describe('executable selection nodes', () => {
  it('prints simple prisma selections', () => {
    const fixture = buildOperation(prismaProps)(['users'])!

    const selectionSet = getDocDefinition(fixture, Kind.OPERATION_DEFINITION)!
      .selectionSet

    const res = printSelectionSet(prismaProps)('Query', selectionSet)

    expect(res).toMatchInlineSnapshot(`
      "{
        __typename: 'Query'
        users: UserFlat & {
          __typename: 'User'
          posts?: PostFlat & {
            __typename: 'Post'
          }
        }
      }"
    `)
  })

  it('prints complex  selections', () => {
    const fixture = buildOperation(complexProps)(['findEventsAtVenue'])!

    const selectionSet = getDocDefinition(fixture, Kind.OPERATION_DEFINITION)!
      .selectionSet

    const res = printSelectionSet(complexProps)('Query', selectionSet)

    expect(res).toMatchInlineSnapshot(`
      "{
        __typename: 'Query'
        findEventsAtVenue?: EventFlat & {
          venue?: VenueFlat & {
            __typename: 'Venue'
          }
        } & (ConcertFlat & {
          __typename: 'Concert'
          venue?: VenueFlat & {
            __typename: 'Venue'
          }
          previousVenues?: VenueFlat & {
            __typename: 'Venue'
          }
          performingBand?: PerformerFlat & {
            __typename: 'Performer'
          }
        } | FestivalFlat & {
          __typename: 'Festival'
          venue?: VenueFlat & {
            __typename: 'Venue'
          }
          performers?: PerformerFlat & {
            __typename: 'Performer'
          }
        } | ConferenceFlat & {
          __typename: 'Conference'
          venue?: VenueFlat & {
            __typename: 'Venue'
          }
          speakers?: SpeakerFlat & {
            __typename: 'Speaker'
          }
        })
      }"
    `)
  })
})
