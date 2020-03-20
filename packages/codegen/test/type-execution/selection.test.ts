/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { buildOperationDoc, getDocDefinition } from '@clientql/core'
import { COMPLEX_TYPEDEFS, PRISMA_TYPEDEFS } from '@clientql/testing'
import { Kind } from 'graphql'
import { getCodegenProps, printSelections } from '../../src'

const prismaProps = getCodegenProps(PRISMA_TYPEDEFS)

const complexProps = getCodegenProps(COMPLEX_TYPEDEFS)

describe('executable codegen', () => {
  it('prints simple prisma selections', () => {
    const fixture = buildOperationDoc(prismaProps)([
      ['query', undefined],
      ['users', undefined],
    ])!

    const selections = getDocDefinition(fixture, Kind.OPERATION_DEFINITION)!.selectionSet.selections

    const res = printSelections(prismaProps)('Query', selections)

    expect(res).toMatchInlineSnapshot(`
      "{
        users: UserFlatPartial & {
          posts?: PostFlatPartial
        }
      }"
    `)
  })

  it('prints complex selections', () => {
    const fixture = buildOperationDoc(complexProps)([
      ['query', undefined],
      ['findEventsAtVenue', undefined],
    ])!

    const selections = getDocDefinition(fixture, Kind.OPERATION_DEFINITION)!.selectionSet.selections

    const res = printSelections(complexProps)(complexProps.roots.get('query')!, selections)

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
