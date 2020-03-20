export const AGGREGATE_BOARD_FLAT_FRAGMENT = gql`
  fragment AggregateBoardFlat on AggregateBoard {
    __typename
    count
  }

  
`

export const AGGREGATE_POST_FLAT_FRAGMENT = gql`
  fragment AggregatePostFlat on AggregatePost {
    __typename
    count
  }

  
`

export const AGGREGATE_THREAD_FLAT_FRAGMENT = gql`
  fragment AggregateThreadFlat on AggregateThread {
    __typename
    count
  }

  
`

export const AGGREGATE_USER_FLAT_FRAGMENT = gql`
  fragment AggregateUserFlat on AggregateUser {
    __typename
    count
  }

  
`

export const BATCH_PAYLOAD_FLAT_FRAGMENT = gql`
  fragment BatchPayloadFlat on BatchPayload {
    __typename
    count
  }

  
`

export const BOARD_FLAT_PARTIAL_FRAGMENT = gql`
  fragment BoardFlatPartial on Board {
    __typename
    id
    createdAt
  }

  
`

export const USER_FLAT_PARTIAL_FRAGMENT = gql`
  fragment UserFlatPartial on User {
    __typename
    id
    nationality
    email
    name
  }

  
`

export const POST_FLAT_PARTIAL_FRAGMENT = gql`
  fragment PostFlatPartial on Post {
    __typename
    id
    content
    createdAt
    published
    title
    updatedAt
  }

  
`

export const THREAD_FLAT_PARTIAL_FRAGMENT = gql`
  fragment ThreadFlatPartial on Thread {
    __typename
    id
    createdAt
    name
  }

  
`

export const PAGE_INFO_FLAT_FRAGMENT = gql`
  fragment PageInfoFlat on PageInfo {
    __typename
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }

  
`

export const BOARD_EDGE_FLAT_PARTIAL_FRAGMENT = gql`
  fragment BoardEdgeFlatPartial on BoardEdge {
    __typename
    cursor
  }

  
`

export const BOARD_PREVIOUS_VALUES_FLAT_FRAGMENT = gql`
  fragment BoardPreviousValuesFlat on BoardPreviousValues {
    __typename
    id
    createdAt
  }

  
`

export const BOARD_SUBSCRIPTION_PAYLOAD_FLAT_PARTIAL_FRAGMENT = gql`
  fragment BoardSubscriptionPayloadFlatPartial on BoardSubscriptionPayload {
    __typename
    mutation
    updatedFields
  }

  
`

export const NODE_FLAT_FRAGMENT = gql`
  fragment NodeFlat on Node {
    id
  }

  
`

export const POST_EDGE_FLAT_PARTIAL_FRAGMENT = gql`
  fragment PostEdgeFlatPartial on PostEdge {
    __typename
    cursor
  }

  
`

export const POST_PREVIOUS_VALUES_FLAT_FRAGMENT = gql`
  fragment PostPreviousValuesFlat on PostPreviousValues {
    __typename
    id
    content
    createdAt
    published
    title
    updatedAt
  }

  
`

export const POST_SUBSCRIPTION_PAYLOAD_FLAT_PARTIAL_FRAGMENT = gql`
  fragment PostSubscriptionPayloadFlatPartial on PostSubscriptionPayload {
    __typename
    mutation
    updatedFields
  }

  
`

export const THREAD_EDGE_FLAT_PARTIAL_FRAGMENT = gql`
  fragment ThreadEdgeFlatPartial on ThreadEdge {
    __typename
    cursor
  }

  
`

export const THREAD_PREVIOUS_VALUES_FLAT_FRAGMENT = gql`
  fragment ThreadPreviousValuesFlat on ThreadPreviousValues {
    __typename
    id
    createdAt
    name
  }

  
`

export const THREAD_SUBSCRIPTION_PAYLOAD_FLAT_PARTIAL_FRAGMENT = gql`
  fragment ThreadSubscriptionPayloadFlatPartial on ThreadSubscriptionPayload {
    __typename
    mutation
    updatedFields
  }

  
`

export const USER_EDGE_FLAT_PARTIAL_FRAGMENT = gql`
  fragment UserEdgeFlatPartial on UserEdge {
    __typename
    cursor
  }

  
`

export const USER_PREVIOUS_VALUES_FLAT_FRAGMENT = gql`
  fragment UserPreviousValuesFlat on UserPreviousValues {
    __typename
    id
    nationality
    email
    name
  }

  
`

export const USER_SUBSCRIPTION_PAYLOAD_FLAT_PARTIAL_FRAGMENT = gql`
  fragment UserSubscriptionPayloadFlatPartial on UserSubscriptionPayload {
    __typename
    mutation
    updatedFields
  }

  
`

export const AGGREGATE_BOARD_FRAGMENT = gql`
  fragment AggregateBoard on AggregateBoard {
    ...AggregateBoardFlat
  }

  ${AGGREGATE_BOARD_FLAT_FRAGMENT}
`

export const AGGREGATE_POST_FRAGMENT = gql`
  fragment AggregatePost on AggregatePost {
    ...AggregatePostFlat
  }

  ${AGGREGATE_POST_FLAT_FRAGMENT}
`

export const AGGREGATE_THREAD_FRAGMENT = gql`
  fragment AggregateThread on AggregateThread {
    ...AggregateThreadFlat
  }

  ${AGGREGATE_THREAD_FLAT_FRAGMENT}
`

export const AGGREGATE_USER_FRAGMENT = gql`
  fragment AggregateUser on AggregateUser {
    ...AggregateUserFlat
  }

  ${AGGREGATE_USER_FLAT_FRAGMENT}
`

export const BATCH_PAYLOAD_FRAGMENT = gql`
  fragment BatchPayload on BatchPayload {
    ...BatchPayloadFlat
  }

  ${BATCH_PAYLOAD_FLAT_FRAGMENT}
`

export const BOARD_FRAGMENT = gql`
  fragment Board on Board {
    ...BoardFlatPartial
    admins {
      ...UserFlatPartial
      posts {
        ...PostFlatPartial
      }
    }
    members {
      ...UserFlatPartial
      posts {
        ...PostFlatPartial
      }
    }
    threads {
      ...ThreadFlatPartial
      author {
        ...UserFlatPartial
        posts {
          ...PostFlatPartial
        }
      }
      entry {
        ...PostFlatPartial
        author {
          ...UserFlatPartial
        }
      }
      replies {
        ...PostFlatPartial
        author {
          ...UserFlatPartial
        }
      }
    }
  }

  ${BOARD_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${THREAD_FLAT_PARTIAL_FRAGMENT}
`

export const BOARD_CONNECTION_FRAGMENT = gql`
  fragment BoardConnection on BoardConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...BoardEdgeFlatPartial
      node {
        ...BoardFlatPartial
        admins {
          ...UserFlatPartial
        }
        members {
          ...UserFlatPartial
        }
        threads {
          ...ThreadFlatPartial
        }
      }
    }
    aggregate {
      ...AggregateBoardFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${BOARD_EDGE_FLAT_PARTIAL_FRAGMENT}
  ${BOARD_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${THREAD_FLAT_PARTIAL_FRAGMENT}
  ${AGGREGATE_BOARD_FLAT_FRAGMENT}
`

export const BOARD_EDGE_FRAGMENT = gql`
  fragment BoardEdge on BoardEdge {
    ...BoardEdgeFlatPartial
    node {
      ...BoardFlatPartial
      admins {
        ...UserFlatPartial
        posts {
          ...PostFlatPartial
        }
      }
      members {
        ...UserFlatPartial
        posts {
          ...PostFlatPartial
        }
      }
      threads {
        ...ThreadFlatPartial
        author {
          ...UserFlatPartial
        }
        entry {
          ...PostFlatPartial
        }
        replies {
          ...PostFlatPartial
        }
      }
    }
  }

  ${BOARD_EDGE_FLAT_PARTIAL_FRAGMENT}
  ${BOARD_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${THREAD_FLAT_PARTIAL_FRAGMENT}
`

export const BOARD_PREVIOUS_VALUES_FRAGMENT = gql`
  fragment BoardPreviousValues on BoardPreviousValues {
    ...BoardPreviousValuesFlat
  }

  ${BOARD_PREVIOUS_VALUES_FLAT_FRAGMENT}
`

export const BOARD_SUBSCRIPTION_PAYLOAD_FRAGMENT = gql`
  fragment BoardSubscriptionPayload on BoardSubscriptionPayload {
    ...BoardSubscriptionPayloadFlatPartial
    node {
      ...BoardFlatPartial
      admins {
        ...UserFlatPartial
        posts {
          ...PostFlatPartial
        }
      }
      members {
        ...UserFlatPartial
        posts {
          ...PostFlatPartial
        }
      }
      threads {
        ...ThreadFlatPartial
        author {
          ...UserFlatPartial
        }
        entry {
          ...PostFlatPartial
        }
        replies {
          ...PostFlatPartial
        }
      }
    }
    previousValues {
      ...BoardPreviousValuesFlat
    }
  }

  ${BOARD_SUBSCRIPTION_PAYLOAD_FLAT_PARTIAL_FRAGMENT}
  ${BOARD_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${THREAD_FLAT_PARTIAL_FRAGMENT}
  ${BOARD_PREVIOUS_VALUES_FLAT_FRAGMENT}
`

export const NODE_FRAGMENT = gql`
  fragment Node on Node {
    ...NodeFlat
  }

  ${NODE_FLAT_FRAGMENT}
`

export const PAGE_INFO_FRAGMENT = gql`
  fragment PageInfo on PageInfo {
    ...PageInfoFlat
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
`

export const POST_FRAGMENT = gql`
  fragment Post on Post {
    ...PostFlatPartial
    author {
      ...UserFlatPartial
    }
  }

  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
`

export const POST_CONNECTION_FRAGMENT = gql`
  fragment PostConnection on PostConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...PostEdgeFlatPartial
      node {
        ...PostFlatPartial
        author {
          ...UserFlatPartial
        }
      }
    }
    aggregate {
      ...AggregatePostFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${POST_EDGE_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${AGGREGATE_POST_FLAT_FRAGMENT}
`

export const POST_EDGE_FRAGMENT = gql`
  fragment PostEdge on PostEdge {
    ...PostEdgeFlatPartial
    node {
      ...PostFlatPartial
      author {
        ...UserFlatPartial
      }
    }
  }

  ${POST_EDGE_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
`

export const POST_PREVIOUS_VALUES_FRAGMENT = gql`
  fragment PostPreviousValues on PostPreviousValues {
    ...PostPreviousValuesFlat
  }

  ${POST_PREVIOUS_VALUES_FLAT_FRAGMENT}
`

export const POST_SUBSCRIPTION_PAYLOAD_FRAGMENT = gql`
  fragment PostSubscriptionPayload on PostSubscriptionPayload {
    ...PostSubscriptionPayloadFlatPartial
    node {
      ...PostFlatPartial
      author {
        ...UserFlatPartial
      }
    }
    previousValues {
      ...PostPreviousValuesFlat
    }
  }

  ${POST_SUBSCRIPTION_PAYLOAD_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_PREVIOUS_VALUES_FLAT_FRAGMENT}
`

export const THREAD_FRAGMENT = gql`
  fragment Thread on Thread {
    ...ThreadFlatPartial
    author {
      ...UserFlatPartial
      posts {
        ...PostFlatPartial
      }
    }
    entry {
      ...PostFlatPartial
      author {
        ...UserFlatPartial
      }
    }
    replies {
      ...PostFlatPartial
      author {
        ...UserFlatPartial
      }
    }
  }

  ${THREAD_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
`

export const THREAD_CONNECTION_FRAGMENT = gql`
  fragment ThreadConnection on ThreadConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...ThreadEdgeFlatPartial
      node {
        ...ThreadFlatPartial
        author {
          ...UserFlatPartial
        }
        entry {
          ...PostFlatPartial
        }
        replies {
          ...PostFlatPartial
        }
      }
    }
    aggregate {
      ...AggregateThreadFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${THREAD_EDGE_FLAT_PARTIAL_FRAGMENT}
  ${THREAD_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${AGGREGATE_THREAD_FLAT_FRAGMENT}
`

export const THREAD_EDGE_FRAGMENT = gql`
  fragment ThreadEdge on ThreadEdge {
    ...ThreadEdgeFlatPartial
    node {
      ...ThreadFlatPartial
      author {
        ...UserFlatPartial
        posts {
          ...PostFlatPartial
        }
      }
      entry {
        ...PostFlatPartial
        author {
          ...UserFlatPartial
        }
      }
      replies {
        ...PostFlatPartial
        author {
          ...UserFlatPartial
        }
      }
    }
  }

  ${THREAD_EDGE_FLAT_PARTIAL_FRAGMENT}
  ${THREAD_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
`

export const THREAD_PREVIOUS_VALUES_FRAGMENT = gql`
  fragment ThreadPreviousValues on ThreadPreviousValues {
    ...ThreadPreviousValuesFlat
  }

  ${THREAD_PREVIOUS_VALUES_FLAT_FRAGMENT}
`

export const THREAD_SUBSCRIPTION_PAYLOAD_FRAGMENT = gql`
  fragment ThreadSubscriptionPayload on ThreadSubscriptionPayload {
    ...ThreadSubscriptionPayloadFlatPartial
    node {
      ...ThreadFlatPartial
      author {
        ...UserFlatPartial
        posts {
          ...PostFlatPartial
        }
      }
      entry {
        ...PostFlatPartial
        author {
          ...UserFlatPartial
        }
      }
      replies {
        ...PostFlatPartial
        author {
          ...UserFlatPartial
        }
      }
    }
    previousValues {
      ...ThreadPreviousValuesFlat
    }
  }

  ${THREAD_SUBSCRIPTION_PAYLOAD_FLAT_PARTIAL_FRAGMENT}
  ${THREAD_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${THREAD_PREVIOUS_VALUES_FLAT_FRAGMENT}
`

export const USER_FRAGMENT = gql`
  fragment User on User {
    ...UserFlatPartial
    posts {
      ...PostFlatPartial
    }
  }

  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
`

export const USER_CONNECTION_FRAGMENT = gql`
  fragment UserConnection on UserConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...UserEdgeFlatPartial
      node {
        ...UserFlatPartial
        posts {
          ...PostFlatPartial
        }
      }
    }
    aggregate {
      ...AggregateUserFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${USER_EDGE_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${AGGREGATE_USER_FLAT_FRAGMENT}
`

export const USER_EDGE_FRAGMENT = gql`
  fragment UserEdge on UserEdge {
    ...UserEdgeFlatPartial
    node {
      ...UserFlatPartial
      posts {
        ...PostFlatPartial
      }
    }
  }

  ${USER_EDGE_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
`

export const USER_PREVIOUS_VALUES_FRAGMENT = gql`
  fragment UserPreviousValues on UserPreviousValues {
    ...UserPreviousValuesFlat
  }

  ${USER_PREVIOUS_VALUES_FLAT_FRAGMENT}
`

export const USER_SUBSCRIPTION_PAYLOAD_FRAGMENT = gql`
  fragment UserSubscriptionPayload on UserSubscriptionPayload {
    ...UserSubscriptionPayloadFlatPartial
    node {
      ...UserFlatPartial
      posts {
        ...PostFlatPartial
      }
    }
    previousValues {
      ...UserPreviousValuesFlat
    }
  }

  ${USER_SUBSCRIPTION_PAYLOAD_FLAT_PARTIAL_FRAGMENT}
  ${USER_FLAT_PARTIAL_FRAGMENT}
  ${POST_FLAT_PARTIAL_FRAGMENT}
  ${USER_PREVIOUS_VALUES_FLAT_FRAGMENT}
`