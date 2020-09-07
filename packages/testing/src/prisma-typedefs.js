import gql from 'graphql-tag';
/**
 * Standard prisma schema
 * https://github.com/prisma/prisma-examples/blob/master/typescript/graphql-crud/src/generated/schema.graphql
 */
export const PRISMA_TYPEDEFS = gql `
  type AggregateBoard {
    count: Int!
  }

  type AggregatePost {
    count: Int!
  }

  type AggregateThread {
    count: Int!
  }

  type AggregateUser {
    count: Int!
  }

  type BatchPayload {
    count: Long!
  }

  type Board {
    id: ID!
    createdAt: DateTime!
    admins(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User!]
    members(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User!]
    threads(
      where: ThreadWhereInput
      orderBy: ThreadOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Thread!]
  }

  type BoardConnection {
    pageInfo: PageInfo!
    edges: [BoardEdge]!
    aggregate: AggregateBoard!
  }

  input BoardCreateInput {
    admins: UserCreateManyInput
    members: UserCreateManyInput
    threads: ThreadCreateManyInput
  }

  type BoardEdge {
    node: Board!
    cursor: String!
  }

  enum BoardOrderByInput {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type BoardPreviousValues {
    id: ID!
    createdAt: DateTime!
  }

  type BoardSubscriptionPayload {
    mutation: MutationType!
    node: Board
    updatedFields: [String!]
    previousValues: BoardPreviousValues
  }

  input BoardSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: BoardWhereInput
    AND: [BoardSubscriptionWhereInput!]
    OR: [BoardSubscriptionWhereInput!]
    NOT: [BoardSubscriptionWhereInput!]
  }

  input BoardUpdateInput {
    admins: UserUpdateManyInput
    members: UserUpdateManyInput
    threads: ThreadUpdateManyInput
  }

  input BoardWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    admins_every: UserWhereInput
    admins_some: UserWhereInput
    admins_none: UserWhereInput
    members_every: UserWhereInput
    members_some: UserWhereInput
    members_none: UserWhereInput
    threads_every: ThreadWhereInput
    threads_some: ThreadWhereInput
    threads_none: ThreadWhereInput
    AND: [BoardWhereInput!]
    OR: [BoardWhereInput!]
    NOT: [BoardWhereInput!]
  }

  input BoardWhereUniqueInput {
    id: ID
  }

  scalar DateTime

  scalar Long

  type Mutation {
    createBoard(data: BoardCreateInput!): Board!
    updateBoard(data: BoardUpdateInput!, where: BoardWhereUniqueInput!): Board
    upsertBoard(
      where: BoardWhereUniqueInput!
      create: BoardCreateInput!
      update: BoardUpdateInput!
    ): Board!
    deleteBoard(where: BoardWhereUniqueInput!): Board
    deleteManyBoards(where: BoardWhereInput): BatchPayload!
    createPost(data: PostCreateInput!): Post!
    updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
    updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
    upsertPost(
      where: PostWhereUniqueInput!
      create: PostCreateInput!
      update: PostUpdateInput!
    ): Post!
    deletePost(where: PostWhereUniqueInput!): Post
    deleteManyPosts(where: PostWhereInput): BatchPayload!
    createThread(data: ThreadCreateInput!): Thread!
    updateThread(data: ThreadUpdateInput!, where: ThreadWhereUniqueInput!): Thread
    updateManyThreads(data: ThreadUpdateManyMutationInput!, where: ThreadWhereInput): BatchPayload!
    upsertThread(
      where: ThreadWhereUniqueInput!
      create: ThreadCreateInput!
      update: ThreadUpdateInput!
    ): Thread!
    deleteThread(where: ThreadWhereUniqueInput!): Thread
    deleteManyThreads(where: ThreadWhereInput): BatchPayload!
    createUser(data: UserCreateInput!): User!
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
    upsertUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User!
    deleteUser(where: UserWhereUniqueInput!): User
    deleteManyUsers(where: UserWhereInput): BatchPayload!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  interface Node {
    id: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Post {
    id: ID!
    author: User!
    content: String
    createdAt: DateTime!
    published: Boolean!
    title: String!
    updatedAt: DateTime!
  }

  type PostConnection {
    pageInfo: PageInfo!
    edges: [PostEdge]!
    aggregate: AggregatePost!
  }

  input PostCreateInput {
    author: UserCreateOneWithoutPostsInput!
    content: String
    published: Boolean!
    title: String!
  }

  input PostCreateManyInput {
    create: [PostCreateInput!]
    connect: [PostWhereUniqueInput!]
  }

  input PostCreateManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    connect: [PostWhereUniqueInput!]
  }

  input PostCreateOneInput {
    create: PostCreateInput
    connect: PostWhereUniqueInput
  }

  input PostCreateWithoutAuthorInput {
    content: String
    published: Boolean!
    title: String!
  }

  type PostEdge {
    node: Post!
    cursor: String!
  }

  enum PostOrderByInput {
    id_ASC
    id_DESC
    content_ASC
    content_DESC
    createdAt_ASC
    createdAt_DESC
    published_ASC
    published_DESC
    title_ASC
    title_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type PostPreviousValues {
    id: ID!
    content: String
    createdAt: DateTime!
    published: Boolean!
    title: String!
    updatedAt: DateTime!
  }

  input PostScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    content: String
    content_not: String
    content_in: [String!]
    content_not_in: [String!]
    content_lt: String
    content_lte: String
    content_gt: String
    content_gte: String
    content_contains: String
    content_not_contains: String
    content_starts_with: String
    content_not_starts_with: String
    content_ends_with: String
    content_not_ends_with: String
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    published: Boolean
    published_not: Boolean
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    AND: [PostScalarWhereInput!]
    OR: [PostScalarWhereInput!]
    NOT: [PostScalarWhereInput!]
  }

  type PostSubscriptionPayload {
    mutation: MutationType!
    node: Post
    updatedFields: [String!]
    previousValues: PostPreviousValues
  }

  input PostSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: PostWhereInput
    AND: [PostSubscriptionWhereInput!]
    OR: [PostSubscriptionWhereInput!]
    NOT: [PostSubscriptionWhereInput!]
  }

  input PostUpdateDataInput {
    author: UserUpdateOneRequiredWithoutPostsInput
    content: String
    published: Boolean
    title: String
  }

  input PostUpdateInput {
    author: UserUpdateOneRequiredWithoutPostsInput
    content: String
    published: Boolean
    title: String
  }

  input PostUpdateManyDataInput {
    content: String
    published: Boolean
    title: String
  }

  input PostUpdateManyInput {
    create: [PostCreateInput!]
    update: [PostUpdateWithWhereUniqueNestedInput!]
    upsert: [PostUpsertWithWhereUniqueNestedInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    deleteMany: [PostScalarWhereInput!]
    updateMany: [PostUpdateManyWithWhereNestedInput!]
  }

  input PostUpdateManyMutationInput {
    content: String
    published: Boolean
    title: String
  }

  input PostUpdateManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
    deleteMany: [PostScalarWhereInput!]
    updateMany: [PostUpdateManyWithWhereNestedInput!]
  }

  input PostUpdateManyWithWhereNestedInput {
    where: PostScalarWhereInput!
    data: PostUpdateManyDataInput!
  }

  input PostUpdateOneRequiredInput {
    create: PostCreateInput
    update: PostUpdateDataInput
    upsert: PostUpsertNestedInput
    connect: PostWhereUniqueInput
  }

  input PostUpdateWithoutAuthorDataInput {
    content: String
    published: Boolean
    title: String
  }

  input PostUpdateWithWhereUniqueNestedInput {
    where: PostWhereUniqueInput!
    data: PostUpdateDataInput!
  }

  input PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    data: PostUpdateWithoutAuthorDataInput!
  }

  input PostUpsertNestedInput {
    update: PostUpdateDataInput!
    create: PostCreateInput!
  }

  input PostUpsertWithWhereUniqueNestedInput {
    where: PostWhereUniqueInput!
    update: PostUpdateDataInput!
    create: PostCreateInput!
  }

  input PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    update: PostUpdateWithoutAuthorDataInput!
    create: PostCreateWithoutAuthorInput!
  }

  input PostWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    author: UserWhereInput
    content: String
    content_not: String
    content_in: [String!]
    content_not_in: [String!]
    content_lt: String
    content_lte: String
    content_gt: String
    content_gte: String
    content_contains: String
    content_not_contains: String
    content_starts_with: String
    content_not_starts_with: String
    content_ends_with: String
    content_not_ends_with: String
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    published: Boolean
    published_not: Boolean
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
  }

  input PostWhereUniqueInput {
    id: ID
  }

  type Query {
    board(where: BoardWhereUniqueInput!): Board
    boards(
      where: BoardWhereInput
      orderBy: BoardOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Board]!
    boardsConnection(
      where: BoardWhereInput
      orderBy: BoardOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): BoardConnection!
    post(where: PostWhereUniqueInput!): Post
    posts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Post]!
    postsConnection(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): PostConnection!
    thread(where: ThreadWhereUniqueInput!): Thread
    threads(
      where: ThreadWhereInput
      orderBy: ThreadOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Thread]!
    threadsConnection(
      where: ThreadWhereInput
      orderBy: ThreadOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): ThreadConnection!
    user(where: UserWhereUniqueInput!): User
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User]!
    usersConnection(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): UserConnection!
    node(id: ID!): Node
  }

  type Subscription {
    board(where: BoardSubscriptionWhereInput): BoardSubscriptionPayload
    post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
    thread(where: ThreadSubscriptionWhereInput): ThreadSubscriptionPayload
    user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  }

  type Thread {
    id: ID!
    createdAt: DateTime!
    author: User!
    name: String!
    entry: Post!
    replies(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Post!]
  }

  type ThreadConnection {
    pageInfo: PageInfo!
    edges: [ThreadEdge]!
    aggregate: AggregateThread!
  }

  input ThreadCreateInput {
    author: UserCreateOneInput!
    name: String!
    entry: PostCreateOneInput!
    replies: PostCreateManyInput
  }

  input ThreadCreateManyInput {
    create: [ThreadCreateInput!]
    connect: [ThreadWhereUniqueInput!]
  }

  type ThreadEdge {
    node: Thread!
    cursor: String!
  }

  enum ThreadOrderByInput {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    name_ASC
    name_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type ThreadPreviousValues {
    id: ID!
    createdAt: DateTime!
    name: String!
  }

  input ThreadScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    AND: [ThreadScalarWhereInput!]
    OR: [ThreadScalarWhereInput!]
    NOT: [ThreadScalarWhereInput!]
  }

  type ThreadSubscriptionPayload {
    mutation: MutationType!
    node: Thread
    updatedFields: [String!]
    previousValues: ThreadPreviousValues
  }

  input ThreadSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: ThreadWhereInput
    AND: [ThreadSubscriptionWhereInput!]
    OR: [ThreadSubscriptionWhereInput!]
    NOT: [ThreadSubscriptionWhereInput!]
  }

  input ThreadUpdateDataInput {
    author: UserUpdateOneRequiredInput
    name: String
    entry: PostUpdateOneRequiredInput
    replies: PostUpdateManyInput
  }

  input ThreadUpdateInput {
    author: UserUpdateOneRequiredInput
    name: String
    entry: PostUpdateOneRequiredInput
    replies: PostUpdateManyInput
  }

  input ThreadUpdateManyDataInput {
    name: String
  }

  input ThreadUpdateManyInput {
    create: [ThreadCreateInput!]
    update: [ThreadUpdateWithWhereUniqueNestedInput!]
    upsert: [ThreadUpsertWithWhereUniqueNestedInput!]
    delete: [ThreadWhereUniqueInput!]
    connect: [ThreadWhereUniqueInput!]
    set: [ThreadWhereUniqueInput!]
    disconnect: [ThreadWhereUniqueInput!]
    deleteMany: [ThreadScalarWhereInput!]
    updateMany: [ThreadUpdateManyWithWhereNestedInput!]
  }

  input ThreadUpdateManyMutationInput {
    name: String
  }

  input ThreadUpdateManyWithWhereNestedInput {
    where: ThreadScalarWhereInput!
    data: ThreadUpdateManyDataInput!
  }

  input ThreadUpdateWithWhereUniqueNestedInput {
    where: ThreadWhereUniqueInput!
    data: ThreadUpdateDataInput!
  }

  input ThreadUpsertWithWhereUniqueNestedInput {
    where: ThreadWhereUniqueInput!
    update: ThreadUpdateDataInput!
    create: ThreadCreateInput!
  }

  input ThreadWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    author: UserWhereInput
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    entry: PostWhereInput
    replies_every: PostWhereInput
    replies_some: PostWhereInput
    replies_none: PostWhereInput
    AND: [ThreadWhereInput!]
    OR: [ThreadWhereInput!]
    NOT: [ThreadWhereInput!]
  }

  input ThreadWhereUniqueInput {
    id: ID
  }

  type User {
    id: ID!
    nationality: String
    email: String!
    name: String
    posts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Post!]
  }

  type UserConnection {
    pageInfo: PageInfo!
    edges: [UserEdge]!
    aggregate: AggregateUser!
  }

  input UserCreateInput {
    nationality: String
    email: String!
    name: String
    posts: PostCreateManyWithoutAuthorInput
  }

  input UserCreateManyInput {
    create: [UserCreateInput!]
    connect: [UserWhereUniqueInput!]
  }

  input UserCreateOneInput {
    create: UserCreateInput
    connect: UserWhereUniqueInput
  }

  input UserCreateOneWithoutPostsInput {
    create: UserCreateWithoutPostsInput
    connect: UserWhereUniqueInput
  }

  input UserCreateWithoutPostsInput {
    nationality: String
    email: String!
    name: String
  }

  type UserEdge {
    node: User!
    cursor: String!
  }

  enum UserOrderByInput {
    id_ASC
    id_DESC
    nationality_ASC
    nationality_DESC
    email_ASC
    email_DESC
    name_ASC
    name_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type UserPreviousValues {
    id: ID!
    nationality: String
    email: String!
    name: String
  }

  input UserScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    nationality: String
    nationality_not: String
    nationality_in: [String!]
    nationality_not_in: [String!]
    nationality_lt: String
    nationality_lte: String
    nationality_gt: String
    nationality_gte: String
    nationality_contains: String
    nationality_not_contains: String
    nationality_starts_with: String
    nationality_not_starts_with: String
    nationality_ends_with: String
    nationality_not_ends_with: String
    email: String
    email_not: String
    email_in: [String!]
    email_not_in: [String!]
    email_lt: String
    email_lte: String
    email_gt: String
    email_gte: String
    email_contains: String
    email_not_contains: String
    email_starts_with: String
    email_not_starts_with: String
    email_ends_with: String
    email_not_ends_with: String
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    AND: [UserScalarWhereInput!]
    OR: [UserScalarWhereInput!]
    NOT: [UserScalarWhereInput!]
  }

  type UserSubscriptionPayload {
    mutation: MutationType!
    node: User
    updatedFields: [String!]
    previousValues: UserPreviousValues
  }

  input UserSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: UserWhereInput
    AND: [UserSubscriptionWhereInput!]
    OR: [UserSubscriptionWhereInput!]
    NOT: [UserSubscriptionWhereInput!]
  }

  input UserUpdateDataInput {
    nationality: String
    email: String
    name: String
    posts: PostUpdateManyWithoutAuthorInput
  }

  input UserUpdateInput {
    nationality: String
    email: String
    name: String
    posts: PostUpdateManyWithoutAuthorInput
  }

  input UserUpdateManyDataInput {
    nationality: String
    email: String
    name: String
  }

  input UserUpdateManyInput {
    create: [UserCreateInput!]
    update: [UserUpdateWithWhereUniqueNestedInput!]
    upsert: [UserUpsertWithWhereUniqueNestedInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    deleteMany: [UserScalarWhereInput!]
    updateMany: [UserUpdateManyWithWhereNestedInput!]
  }

  input UserUpdateManyMutationInput {
    nationality: String
    email: String
    name: String
  }

  input UserUpdateManyWithWhereNestedInput {
    where: UserScalarWhereInput!
    data: UserUpdateManyDataInput!
  }

  input UserUpdateOneRequiredInput {
    create: UserCreateInput
    update: UserUpdateDataInput
    upsert: UserUpsertNestedInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateOneRequiredWithoutPostsInput {
    create: UserCreateWithoutPostsInput
    update: UserUpdateWithoutPostsDataInput
    upsert: UserUpsertWithoutPostsInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateWithoutPostsDataInput {
    nationality: String
    email: String
    name: String
  }

  input UserUpdateWithWhereUniqueNestedInput {
    where: UserWhereUniqueInput!
    data: UserUpdateDataInput!
  }

  input UserUpsertNestedInput {
    update: UserUpdateDataInput!
    create: UserCreateInput!
  }

  input UserUpsertWithoutPostsInput {
    update: UserUpdateWithoutPostsDataInput!
    create: UserCreateWithoutPostsInput!
  }

  input UserUpsertWithWhereUniqueNestedInput {
    where: UserWhereUniqueInput!
    update: UserUpdateDataInput!
    create: UserCreateInput!
  }

  input UserWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    nationality: String
    nationality_not: String
    nationality_in: [String!]
    nationality_not_in: [String!]
    nationality_lt: String
    nationality_lte: String
    nationality_gt: String
    nationality_gte: String
    nationality_contains: String
    nationality_not_contains: String
    nationality_starts_with: String
    nationality_not_starts_with: String
    nationality_ends_with: String
    nationality_not_ends_with: String
    email: String
    email_not: String
    email_in: [String!]
    email_not_in: [String!]
    email_lt: String
    email_lte: String
    email_gt: String
    email_gte: String
    email_contains: String
    email_not_contains: String
    email_starts_with: String
    email_not_starts_with: String
    email_ends_with: String
    email_not_ends_with: String
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    posts_every: PostWhereInput
    posts_some: PostWhereInput
    posts_none: PostWhereInput
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
  }

  input UserWhereUniqueInput {
    id: ID
  }
`;