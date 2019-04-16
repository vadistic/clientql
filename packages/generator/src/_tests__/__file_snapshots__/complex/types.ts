/*
 *
 * Code generated by Graphql Client Generator.
 * DO NOT EDIT.
 * Please don't change this file manually but run 'something' to update it.
 * For more information, please read the docs: https://doclink.com/
 *
 */

/*
 *
 * SchemaDefinition Typings
 *
 */

export type Query = MyQuery

export type Mutation = MyMutation



/*
 *
 * UnionTypeDefinition Typings
 *
 */

export type Person = 
  | Client
  | Stakeholder
  | Speaker
  | Performer



/*
 *
 * InterfaceTypeDefinition Typings
 *
 */

export interface Event {
  id: string
  name: string
  startsAt?: string | null
  endsAt?: string | null
  venue?: Venue | null
  minAgeRestriction?: number | null
}



/*
 *
 * ObjectTypeDefinition Typings
 *
 */

export interface MyQuery {
  __typename: 'MyQuery'
  findEventsAtVenue?: Array<Event | null> | null
  findPerson?: Person | null
}

export interface MyMutation {
  __typename: 'MyMutation'
  deleteEvent?: Array<Event | null> | null
}

export interface Stakeholder {
  __typename: 'Stakeholder'
  id: string
  name: string
  company?: string | null
  stake?: Stake | null
}

export interface Client {
  __typename: 'Client'
  id: string
  name: string
  events?: Array<Event | null> | null
}

export interface Performer {
  __typename: 'Performer'
  id: string
  name: string
  contact?: string | null
  speciality?: string | null
  fee?: number | null
}

export interface Speaker {
  __typename: 'Speaker'
  id: string
  name: string
  contact?: string | null
}

export interface Venue {
  __typename: 'Venue'
  id: string
  name: string
  address?: string | null
  maxOccupancy?: number | null
}

export interface Concert {
  __typename: 'Concert'
  id: string
  name: string
  startsAt?: string | null
  endsAt?: string | null
  venue?: Venue | null
  previousVenues?: Venue[] | null
  minAgeRestriction?: number | null
  performingBand?: Performer | null
}

export interface Festival {
  __typename: 'Festival'
  id: string
  name: string
  startsAt?: string | null
  endsAt?: string | null
  venue?: Venue | null
  minAgeRestriction?: number | null
  performers?: Array<Performer | null> | null
}

export interface Conference {
  __typename: 'Conference'
  id: string
  name: string
  startsAt?: string | null
  endsAt?: string | null
  venue?: Venue | null
  minAgeRestriction?: number | null
  speakers?: Array<Speaker | null> | null
  workshops?: Array<string | null> | null
}



/*
 *
 * EnumTypeDefinition Typings
 *
 */

export interface Stake {
  LOW: 'LOW'
  MEDIUM: 'MEDIUM'
  HIGH: 'HIGH'
}

export const Stake: Stake = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
}



