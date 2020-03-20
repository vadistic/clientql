export const STAKEHOLDER_FLAT_FRAGMENT = gql`
  fragment StakeholderFlat on Stakeholder {
    __typename
    id
    name
    company
    stake
  }

  
`

export const CLIENT_FLAT_FRAGMENT = gql`
  fragment ClientFlat on Client {
    __typename
    id
    name
  }

  
`

export const EVENT_FLAT_FRAGMENT = gql`
  fragment EventFlat on Event {
    id
    name
    startsAt
    endsAt
    minAgeRestriction
  }

  
`

export const VENUE_FLAT_FRAGMENT = gql`
  fragment VenueFlat on Venue {
    __typename
    id
    name
    address
    maxOccupancy
  }

  
`

export const CONCERT_FLAT_FRAGMENT = gql`
  fragment ConcertFlat on Concert {
    __typename
    id
    name
    startsAt
    endsAt
    minAgeRestriction
  }

  
`

export const PERFORMER_FLAT_FRAGMENT = gql`
  fragment PerformerFlat on Performer {
    __typename
    id
    name
    contact
    speciality
    fee
  }

  
`

export const FESTIVAL_FLAT_FRAGMENT = gql`
  fragment FestivalFlat on Festival {
    __typename
    id
    name
    startsAt
    endsAt
    minAgeRestriction
  }

  
`

export const CONFERENCE_FLAT_FRAGMENT = gql`
  fragment ConferenceFlat on Conference {
    __typename
    id
    name
    startsAt
    endsAt
    minAgeRestriction
    workshops
  }

  
`

export const SPEAKER_FLAT_FRAGMENT = gql`
  fragment SpeakerFlat on Speaker {
    __typename
    id
    name
    contact
  }

  
`

export const STAKEHOLDER_FRAGMENT = gql`
  fragment Stakeholder on Stakeholder {
    ...StakeholderFlat
  }

  ${STAKEHOLDER_FLAT_FRAGMENT}
`

export const CLIENT_FRAGMENT = gql`
  fragment Client on Client {
    ...ClientFlat
    events {
      ...EventFlat
      venue {
        ...VenueFlat
      }
      ... on Concert {
        ...ConcertFlat
        venue {
          ...VenueFlat
        }
        previousVenues {
          ...VenueFlat
        }
        performingBand {
          ...PerformerFlat
        }
      }
      ... on Festival {
        ...FestivalFlat
        venue {
          ...VenueFlat
        }
        performers {
          ...PerformerFlat
        }
      }
      ... on Conference {
        ...ConferenceFlat
        venue {
          ...VenueFlat
        }
        speakers {
          ...SpeakerFlat
        }
      }
    }
  }

  ${CLIENT_FLAT_FRAGMENT}
  ${EVENT_FLAT_FRAGMENT}
  ${VENUE_FLAT_FRAGMENT}
  ${CONCERT_FLAT_FRAGMENT}
  ${PERFORMER_FLAT_FRAGMENT}
  ${FESTIVAL_FLAT_FRAGMENT}
  ${CONFERENCE_FLAT_FRAGMENT}
  ${SPEAKER_FLAT_FRAGMENT}
`

export const PERFORMER_FRAGMENT = gql`
  fragment Performer on Performer {
    ...PerformerFlat
  }

  ${PERFORMER_FLAT_FRAGMENT}
`

export const SPEAKER_FRAGMENT = gql`
  fragment Speaker on Speaker {
    ...SpeakerFlat
  }

  ${SPEAKER_FLAT_FRAGMENT}
`

export const PERSON_FRAGMENT = gql`
  fragment Person on Person {
    ... on Client {
      ...ClientFlat
      events {
        ...EventFlat
        venue {
          ...VenueFlat
        }
        ... on Concert {
          ...ConcertFlat
          venue {
            ...VenueFlat
          }
          previousVenues {
            ...VenueFlat
          }
          performingBand {
            ...PerformerFlat
          }
        }
        ... on Festival {
          ...FestivalFlat
          venue {
            ...VenueFlat
          }
          performers {
            ...PerformerFlat
          }
        }
        ... on Conference {
          ...ConferenceFlat
          venue {
            ...VenueFlat
          }
          speakers {
            ...SpeakerFlat
          }
        }
      }
    }
    ... on Stakeholder {
      ...StakeholderFlat
    }
    ... on Speaker {
      ...SpeakerFlat
    }
    ... on Performer {
      ...PerformerFlat
    }
  }

  ${CLIENT_FLAT_FRAGMENT}
  ${EVENT_FLAT_FRAGMENT}
  ${VENUE_FLAT_FRAGMENT}
  ${CONCERT_FLAT_FRAGMENT}
  ${PERFORMER_FLAT_FRAGMENT}
  ${FESTIVAL_FLAT_FRAGMENT}
  ${CONFERENCE_FLAT_FRAGMENT}
  ${SPEAKER_FLAT_FRAGMENT}
  ${STAKEHOLDER_FLAT_FRAGMENT}
`

export const VENUE_FRAGMENT = gql`
  fragment Venue on Venue {
    ...VenueFlat
  }

  ${VENUE_FLAT_FRAGMENT}
`

export const EVENT_FRAGMENT = gql`
  fragment Event on Event {
    ...EventFlat
    venue {
      ...VenueFlat
    }
    ... on Concert {
      ...ConcertFlat
      venue {
        ...VenueFlat
      }
      previousVenues {
        ...VenueFlat
      }
      performingBand {
        ...PerformerFlat
      }
    }
    ... on Festival {
      ...FestivalFlat
      venue {
        ...VenueFlat
      }
      performers {
        ...PerformerFlat
      }
    }
    ... on Conference {
      ...ConferenceFlat
      venue {
        ...VenueFlat
      }
      speakers {
        ...SpeakerFlat
      }
    }
  }

  ${EVENT_FLAT_FRAGMENT}
  ${VENUE_FLAT_FRAGMENT}
  ${CONCERT_FLAT_FRAGMENT}
  ${PERFORMER_FLAT_FRAGMENT}
  ${FESTIVAL_FLAT_FRAGMENT}
  ${CONFERENCE_FLAT_FRAGMENT}
  ${SPEAKER_FLAT_FRAGMENT}
`

export const CONCERT_FRAGMENT = gql`
  fragment Concert on Concert {
    ...ConcertFlat
    venue {
      ...VenueFlat
    }
    previousVenues {
      ...VenueFlat
    }
    performingBand {
      ...PerformerFlat
    }
  }

  ${CONCERT_FLAT_FRAGMENT}
  ${VENUE_FLAT_FRAGMENT}
  ${PERFORMER_FLAT_FRAGMENT}
`

export const FESTIVAL_FRAGMENT = gql`
  fragment Festival on Festival {
    ...FestivalFlat
    venue {
      ...VenueFlat
    }
    performers {
      ...PerformerFlat
    }
  }

  ${FESTIVAL_FLAT_FRAGMENT}
  ${VENUE_FLAT_FRAGMENT}
  ${PERFORMER_FLAT_FRAGMENT}
`

export const CONFERENCE_FRAGMENT = gql`
  fragment Conference on Conference {
    ...ConferenceFlat
    venue {
      ...VenueFlat
    }
    speakers {
      ...SpeakerFlat
    }
  }

  ${CONFERENCE_FLAT_FRAGMENT}
  ${VENUE_FLAT_FRAGMENT}
  ${SPEAKER_FLAT_FRAGMENT}
`