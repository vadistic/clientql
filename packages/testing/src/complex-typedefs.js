import gql from 'graphql-tag';
export const COMPLEX_TYPEDEFS = gql `
  schema {
    query: MyQuery
    mutation: MyMutation
  }

  type MyQuery {
    findEventsAtVenue(venueId: ID!): [Event]
    findPerson(id: ID!): Person
  }

  type MyMutation {
    deleteEvent(eventId: ID!): [Event]
  }

  enum Stake {
    LOW
    MEDIUM
    HIGH
  }

  type Stakeholder {
    id: ID!
    name: String!
    company: String
    stake: Stake
  }

  type Client {
    id: ID!
    name: String!
    events: [Event]
  }

  type Performer {
    id: ID!
    name: String!
    contact: String
    speciality: String
    fee: Int
  }

  type Speaker {
    id: ID!
    name: String!
    contact: String
  }

  union Person = Client | Stakeholder | Speaker | Performer

  type Venue {
    id: ID!
    name: String!
    address: String
    maxOccupancy: Int
  }

  interface Event {
    id: ID!
    name: String!
    startsAt: String
    endsAt: String
    venue: Venue
    minAgeRestriction: Int
  }

  type Concert implements Event {
    id: ID!
    name: String!
    startsAt: String
    endsAt: String
    venue: Venue
    previousVenues: [Venue!]
    minAgeRestriction: Int
    performingBand: Performer
  }

  type Festival implements Event {
    id: ID!
    name: String!
    startsAt: String
    endsAt: String
    venue: Venue
    minAgeRestriction: Int
    performers: [Performer]
  }

  type Conference implements Event {
    id: ID!
    name: String!
    startsAt: String
    endsAt: String
    venue: Venue
    minAgeRestriction: Int
    speakers: [Speaker]
    workshops: [String]
  }
`;
