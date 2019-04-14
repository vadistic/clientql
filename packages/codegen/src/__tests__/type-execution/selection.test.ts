import {
  buildOperation,
  defaultCoreConfig,
  getCoreProps,
  getDocDefinition,
} from '@graphql-clientgen/core'
import { COMPLEX_TYPEDEFS, PRISMA_TYPEDEFS } from '@graphql-clientgen/testing'
import { buildASTSchema, Kind } from 'graphql'
import { defaultCodegenConfig } from '../../config'
import { printSelectionSet } from '../../type-execution'

/**
 * TODO: Update codegen api & bring this to fixture or smth
 */

const prismaCore = getCoreProps(PRISMA_TYPEDEFS)
const prismaSchema = buildASTSchema(PRISMA_TYPEDEFS)

const prismaProps = {
  ...prismaCore,
  schema: prismaSchema,
  config: {
    ...defaultCoreConfig,
    ...defaultCodegenConfig,
  },
}

const complexCore = getCoreProps(COMPLEX_TYPEDEFS)
const complexSchema = buildASTSchema(COMPLEX_TYPEDEFS)

const complexProps = {
  ...complexCore,
  schema: complexSchema,
  config: {
    ...defaultCoreConfig,
    ...defaultCodegenConfig,
  },
}

describe('executable selection nodes', () => {
  it('prints simple prisma selections', () => {
    const fixture = buildOperation(prismaCore)(['users'])!

    const selectionSet = getDocDefinition(fixture, Kind.OPERATION_DEFINITION)!
      .selectionSet

    const res = printSelectionSet(prismaProps)('Query', selectionSet)

    expect(res).toMatchInlineSnapshot(`
      "{
        users: UserFlat & {
          posts?: PostFlat
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
