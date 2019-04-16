import { buildOperationDoc, getDocDefinition } from '@graphql-clientgen/core'
import { COMPLEX_TYPEDEFS, PRISMA_TYPEDEFS } from '@graphql-clientgen/testing'
import { Kind } from 'graphql'
import { getCodegenProps } from '../../codegen'
import { printSelections } from '../../type-execution'

const prismaProps = getCodegenProps(PRISMA_TYPEDEFS)

const complexProps = getCodegenProps(COMPLEX_TYPEDEFS)

describe('executable selection nodes', () => {
  it('prints simple prisma selections', () => {
    const fixture = buildOperationDoc(prismaProps)([
      ['query', undefined],
      ['users', undefined],
    ])!

    const selections = getDocDefinition(fixture, Kind.OPERATION_DEFINITION)!
      .selectionSet.selections

    const res = printSelections(prismaProps)('Query', selections)

    expect(res).toMatchInlineSnapshot(`
      "{
        users: UserFlat & {
          posts?: PostFlat
        }
      }"
    `)
  })

  it('prints complex  selections', () => {
    const fixture = buildOperationDoc(complexProps)([
      ['query', undefined],
      ['findEventsAtVenue', undefined],
    ])!

    const selections = getDocDefinition(fixture, Kind.OPERATION_DEFINITION)!
      .selectionSet.selections

    const res = printSelections(complexProps)('Query', selections)

    expect(res).toMatchInlineSnapshot(`
      "{
        findEventsAtVenue?: EventFlat & {
          venue?: VenueFlat
        } & (ConcertFlat & {
          venue?: VenueFlat
          previousVenues?: VenueFlat
          performingBand?: PerformerFlat
        } | FestivalFlat & {
          venue?: VenueFlat
          performers?: PerformerFlat
        } | ConferenceFlat & {
          venue?: VenueFlat
          speakers?: SpeakerFlat
        })
      }"
    `)
  })
})
