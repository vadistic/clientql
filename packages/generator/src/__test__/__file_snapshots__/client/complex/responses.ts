/*
 *
 * Code generated by clientql generator.
 * DO NOT EDIT.
 * Please don't change this file manually but run generator to update it.
 * For more information check: https"//github.com/vadistic/clientql
 *
 */

import { Stake } from './types'

/*
 *
 * Responses
 *
 */

export type EventResponse = EventFlat & {
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

export type ConcertResponse = ConcertFlat & {
  venue?: VenueFlat
  previousVenues?: VenueFlat
  performingBand?: PerformerFlat
}

export type VenueResponse = VenueFlat

export type PerformerResponse = PerformerFlat

export type PersonResponse =  & (ClientFlat & {
  events?: EventFlat & {
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
} | StakeholderFlat | SpeakerFlat | PerformerFlat)

export type ClientResponse = ClientFlat & {
  events?: EventFlat & {
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
}

export type FestivalResponse = FestivalFlat & {
  venue?: VenueFlat
  performers?: PerformerFlat
}

export type StakeholderResponse = StakeholderFlat

export type SpeakerResponse = SpeakerFlat

export type ConferenceResponse = ConferenceFlat & {
  venue?: VenueFlat
  speakers?: SpeakerFlat
}

/*
 *
 * Fragments
 *
 */

export type EventFlat = {
  id: string
  name: string
  startsAt?: string | null
  endsAt?: string | null
  minAgeRestriction?: number | null
}

export type VenueFlat = {
  __typename: 'Venue'
  id: string
  name: string
  address?: string | null
  maxOccupancy?: number | null
}

export type ConcertFlat = {
  __typename: 'Concert'
  id: string
  name: string
  startsAt?: string | null
  endsAt?: string | null
  minAgeRestriction?: number | null
}

export type PerformerFlat = {
  __typename: 'Performer'
  id: string
  name: string
  contact?: string | null
  speciality?: string | null
  fee?: number | null
}

export type FestivalFlat = {
  __typename: 'Festival'
  id: string
  name: string
  startsAt?: string | null
  endsAt?: string | null
  minAgeRestriction?: number | null
}

export type ConferenceFlat = {
  __typename: 'Conference'
  id: string
  name: string
  startsAt?: string | null
  endsAt?: string | null
  minAgeRestriction?: number | null
  workshops?: Array<string | null> | null
}

export type SpeakerFlat = {
  __typename: 'Speaker'
  id: string
  name: string
  contact?: string | null
}

export type ClientFlat = {
  __typename: 'Client'
  id: string
  name: string
}

export type StakeholderFlat = {
  __typename: 'Stakeholder'
  id: string
  name: string
  company?: string | null
  stake?: Stake | null
}

