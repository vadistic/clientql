/*
 *
 * Code generated by clientql generator.
 * DO NOT EDIT.
 * Please don't change this file manually but run generator to update it.
 * For more information check: https"//github.com/vadistic/clientql
 *
 */

import {
  DateTime,
  Long,
  BoardOrderByInput,
  MutationType,
  PostOrderByInput,
  ThreadOrderByInput,
  UserOrderByInput
} from './types'

/*
 *
 * Responses
 *
 */

export type BoardResponse = BoardFlatPartial & {
  admins?: UserFlatPartial & {
    posts?: PostFlatPartial
  }
  members?: UserFlatPartial & {
    posts?: PostFlatPartial
  }
  threads?: ThreadFlatPartial & {
    author: UserFlatPartial & {
      posts?: PostFlatPartial
    }
    entry: PostFlatPartial & {
      author: UserFlatPartial
    }
    replies?: PostFlatPartial & {
      author: UserFlatPartial
    }
  }
}

export type UserResponse = UserFlatPartial & {
  posts?: PostFlatPartial
}

export type PostResponse = PostFlatPartial & {
  author: UserFlatPartial
}

export type ThreadResponse = ThreadFlatPartial & {
  author: UserFlatPartial & {
    posts?: PostFlatPartial
  }
  entry: PostFlatPartial & {
    author: UserFlatPartial
  }
  replies?: PostFlatPartial & {
    author: UserFlatPartial
  }
}

export type BoardConnectionResponse = {
  __typename: 'BoardConnection'
  pageInfo: PageInfoFlat
  edges: BoardEdgeFlatPartial & {
    node: BoardFlatPartial & {
      admins?: UserFlatPartial
      members?: UserFlatPartial
      threads?: ThreadFlatPartial
    }
  }
  aggregate: AggregateBoardFlat
}

export type PageInfoResponse = PageInfoFlat

export type BoardEdgeResponse = BoardEdgeFlatPartial & {
  node: BoardFlatPartial & {
    admins?: UserFlatPartial & {
      posts?: PostFlatPartial
    }
    members?: UserFlatPartial & {
      posts?: PostFlatPartial
    }
    threads?: ThreadFlatPartial & {
      author: UserFlatPartial
      entry: PostFlatPartial
      replies?: PostFlatPartial
    }
  }
}

export type AggregateBoardResponse = AggregateBoardFlat

export type ThreadConnectionResponse = {
  __typename: 'ThreadConnection'
  pageInfo: PageInfoFlat
  edges: ThreadEdgeFlatPartial & {
    node: ThreadFlatPartial & {
      author: UserFlatPartial
      entry: PostFlatPartial
      replies?: PostFlatPartial
    }
  }
  aggregate: AggregateThreadFlat
}

export type ThreadEdgeResponse = ThreadEdgeFlatPartial & {
  node: ThreadFlatPartial & {
    author: UserFlatPartial & {
      posts?: PostFlatPartial
    }
    entry: PostFlatPartial & {
      author: UserFlatPartial
    }
    replies?: PostFlatPartial & {
      author: UserFlatPartial
    }
  }
}

export type AggregateThreadResponse = AggregateThreadFlat

export type UserConnectionResponse = {
  __typename: 'UserConnection'
  pageInfo: PageInfoFlat
  edges: UserEdgeFlatPartial & {
    node: UserFlatPartial & {
      posts?: PostFlatPartial
    }
  }
  aggregate: AggregateUserFlat
}

export type UserEdgeResponse = UserEdgeFlatPartial & {
  node: UserFlatPartial & {
    posts?: PostFlatPartial
  }
}

export type AggregateUserResponse = AggregateUserFlat

export type PostConnectionResponse = {
  __typename: 'PostConnection'
  pageInfo: PageInfoFlat
  edges: PostEdgeFlatPartial & {
    node: PostFlatPartial & {
      author: UserFlatPartial
    }
  }
  aggregate: AggregatePostFlat
}

export type PostEdgeResponse = PostEdgeFlatPartial & {
  node: PostFlatPartial & {
    author: UserFlatPartial
  }
}

export type AggregatePostResponse = AggregatePostFlat

export type NodeResponse = NodeFlatPartial & (BoardFlatPartial & {
  admins?: UserFlatPartial & {
    posts?: PostFlatPartial
  }
  members?: UserFlatPartial & {
    posts?: PostFlatPartial
  }
  threads?: ThreadFlatPartial & {
    author: UserFlatPartial & {
      posts?: PostFlatPartial
    }
    entry: PostFlatPartial & {
      author: UserFlatPartial
    }
    replies?: PostFlatPartial & {
      author: UserFlatPartial
    }
  }
} | PostFlatPartial & {
  author: UserFlatPartial
} | ThreadFlatPartial & {
  author: UserFlatPartial & {
    posts?: PostFlatPartial
  }
  entry: PostFlatPartial & {
    author: UserFlatPartial
  }
  replies?: PostFlatPartial & {
    author: UserFlatPartial
  }
} | UserFlatPartial & {
  posts?: PostFlatPartial
})

export type BatchPayloadResponse = BatchPayloadFlat

export type BoardSubscriptionPayloadResponse = BoardSubscriptionPayloadFlatPartial & {
  node?: BoardFlatPartial & {
    admins?: UserFlatPartial & {
      posts?: PostFlatPartial
    }
    members?: UserFlatPartial & {
      posts?: PostFlatPartial
    }
    threads?: ThreadFlatPartial & {
      author: UserFlatPartial
      entry: PostFlatPartial
      replies?: PostFlatPartial
    }
  }
  previousValues?: BoardPreviousValuesFlat
}

export type BoardPreviousValuesResponse = BoardPreviousValuesFlat

export type ThreadSubscriptionPayloadResponse = ThreadSubscriptionPayloadFlatPartial & {
  node?: ThreadFlatPartial & {
    author: UserFlatPartial & {
      posts?: PostFlatPartial
    }
    entry: PostFlatPartial & {
      author: UserFlatPartial
    }
    replies?: PostFlatPartial & {
      author: UserFlatPartial
    }
  }
  previousValues?: ThreadPreviousValuesFlat
}

export type ThreadPreviousValuesResponse = ThreadPreviousValuesFlat

export type UserSubscriptionPayloadResponse = UserSubscriptionPayloadFlatPartial & {
  node?: UserFlatPartial & {
    posts?: PostFlatPartial
  }
  previousValues?: UserPreviousValuesFlat
}

export type UserPreviousValuesResponse = UserPreviousValuesFlat

export type PostSubscriptionPayloadResponse = PostSubscriptionPayloadFlatPartial & {
  node?: PostFlatPartial & {
    author: UserFlatPartial
  }
  previousValues?: PostPreviousValuesFlat
}

export type PostPreviousValuesResponse = PostPreviousValuesFlat

/*
 *
 * Fragments
 *
 */

export type BoardFlatPartial = {
  __typename: 'Board'
  id: string
  createdAt: string
}

export type UserFlatPartial = {
  __typename: 'User'
  id: string
  nationality?: string | null
  email: string
  name?: string | null
}

export type PostFlatPartial = {
  __typename: 'Post'
  id: string
  content?: string | null
  createdAt: string
  published: boolean
  title: string
  updatedAt: string
}

export type ThreadFlatPartial = {
  __typename: 'Thread'
  id: string
  createdAt: string
  name: string
}

export type PageInfoFlat = {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor?: string | null
  endCursor?: string | null
}

export type BoardEdgeFlatPartial = {
  __typename: 'BoardEdge'
  cursor: string
}

export type AggregateBoardFlat = {
  __typename: 'AggregateBoard'
  count: number
}

export type ThreadEdgeFlatPartial = {
  __typename: 'ThreadEdge'
  cursor: string
}

export type AggregateThreadFlat = {
  __typename: 'AggregateThread'
  count: number
}

export type UserEdgeFlatPartial = {
  __typename: 'UserEdge'
  cursor: string
}

export type AggregateUserFlat = {
  __typename: 'AggregateUser'
  count: number
}

export type PostEdgeFlatPartial = {
  __typename: 'PostEdge'
  cursor: string
}

export type AggregatePostFlat = {
  __typename: 'AggregatePost'
  count: number
}

export type NodeFlatPartial = {
  id: string
}

export type BatchPayloadFlat = {
  __typename: 'BatchPayload'
  count: number
}

export type BoardSubscriptionPayloadFlatPartial = {
  __typename: 'BoardSubscriptionPayload'
  mutation: MutationType
  updatedFields?: string[] | null
}

export type BoardPreviousValuesFlat = {
  __typename: 'BoardPreviousValues'
  id: string
  createdAt: string
}

export type ThreadSubscriptionPayloadFlatPartial = {
  __typename: 'ThreadSubscriptionPayload'
  mutation: MutationType
  updatedFields?: string[] | null
}

export type ThreadPreviousValuesFlat = {
  __typename: 'ThreadPreviousValues'
  id: string
  createdAt: string
  name: string
}

export type UserSubscriptionPayloadFlatPartial = {
  __typename: 'UserSubscriptionPayload'
  mutation: MutationType
  updatedFields?: string[] | null
}

export type UserPreviousValuesFlat = {
  __typename: 'UserPreviousValues'
  id: string
  nationality?: string | null
  email: string
  name?: string | null
}

export type PostSubscriptionPayloadFlatPartial = {
  __typename: 'PostSubscriptionPayload'
  mutation: MutationType
  updatedFields?: string[] | null
}

export type PostPreviousValuesFlat = {
  __typename: 'PostPreviousValues'
  id: string
  content?: string | null
  createdAt: string
  published: boolean
  title: string
  updatedAt: string
}

