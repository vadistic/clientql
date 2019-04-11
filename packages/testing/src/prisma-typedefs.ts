import gql from 'graphql-tag'

/**
 * Standard prisma schema
 * https://github.com/prisma/prisma-examples/blob/master/typescript/graphql-crud/src/generated/schema.graphql
 */

export const PRISMA_TYPEDEFS = gql`
  type AggregatePost {
    count: Int!
  }

  type AggregateUser {
    count: Int!
  }

  type BatchPayload {
    count: Long!
  }

  scalar DateTime

  scalar Long

  type Mutation {
    createPost(data: PostCreateInput!): Post!
    createUser(data: UserCreateInput!): User!
    deleteManyPosts(where: PostWhereInput): BatchPayload!
    deleteManyUsers(where: UserWhereInput): BatchPayload!
    deletePost(where: PostWhereUniqueInput!): Post
    deleteUser(where: UserWhereUniqueInput!): User
    updateManyPosts(
      data: PostUpdateManyMutationInput!
      where: PostWhereInput
    ): BatchPayload!
    updateManyUsers(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload!
    updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    upsertPost(
      create: PostCreateInput!
      update: PostUpdateInput!
      where: PostWhereUniqueInput!
    ): Post!
    upsertUser(
      create: UserCreateInput!
      update: UserUpdateInput!
      where: UserWhereUniqueInput!
    ): User!
  }

  interface Node {
    id: ID!
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
  }

  type Post {
    author: User!
    content: String
    createdAt: DateTime!
    id: ID!
    published: Boolean!
    title: String!
    updatedAt: DateTime!
  }

  type PostConnection {
    aggregate: AggregatePost!
    edges: [PostEdge!]!
    pageInfo: PageInfo!
  }

  input PostCreateInput {
    author: UserCreateOneWithoutPostsInput!
    content: String
    published: Boolean
    title: String!
  }

  input PostCreateManyWithoutAuthorInput {
    connect: [PostWhereUniqueInput!]
    create: [PostCreateWithoutAuthorInput!]
  }

  input PostCreateWithoutAuthorInput {
    content: String
    published: Boolean
    title: String!
  }

  type PostEdge {
    cursor: String!
    node: Post!
  }

  enum PostOrderByInput {
    content_ASC
    content_DESC
    createdAt_ASC
    createdAt_DESC
    id_ASC
    id_DESC
    published_ASC
    published_DESC
    title_ASC
    title_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  input PostScalarWhereInput {
    AND: [PostScalarWhereInput!]
    content: String
    content_contains: String
    content_ends_with: String
    content_gt: String
    content_gte: String
    content_in: [String!]
    content_lt: String
    content_lte: String
    content_not: String
    content_not_contains: String
    content_not_ends_with: String
    content_not_in: [String!]
    content_not_starts_with: String
    content_starts_with: String
    createdAt: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    createdAt_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_not: DateTime
    createdAt_not_in: [DateTime!]
    id: ID
    id_contains: ID
    id_ends_with: ID
    id_gt: ID
    id_gte: ID
    id_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_not: ID
    id_not_contains: ID
    id_not_ends_with: ID
    id_not_in: [ID!]
    id_not_starts_with: ID
    id_starts_with: ID
    NOT: [PostScalarWhereInput!]
    OR: [PostScalarWhereInput!]
    published: Boolean
    published_not: Boolean
    title: String
    title_contains: String
    title_ends_with: String
    title_gt: String
    title_gte: String
    title_in: [String!]
    title_lt: String
    title_lte: String
    title_not: String
    title_not_contains: String
    title_not_ends_with: String
    title_not_in: [String!]
    title_not_starts_with: String
    title_starts_with: String
    updatedAt: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_not: DateTime
    updatedAt_not_in: [DateTime!]
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

  input PostUpdateManyMutationInput {
    content: String
    published: Boolean
    title: String
  }

  input PostUpdateManyWithoutAuthorInput {
    connect: [PostWhereUniqueInput!]
    create: [PostCreateWithoutAuthorInput!]
    delete: [PostWhereUniqueInput!]
    deleteMany: [PostScalarWhereInput!]
    disconnect: [PostWhereUniqueInput!]
    set: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany: [PostUpdateManyWithWhereNestedInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  }

  input PostUpdateManyWithWhereNestedInput {
    data: PostUpdateManyDataInput!
    where: PostScalarWhereInput!
  }

  input PostUpdateWithoutAuthorDataInput {
    content: String
    published: Boolean
    title: String
  }

  input PostUpdateWithWhereUniqueWithoutAuthorInput {
    data: PostUpdateWithoutAuthorDataInput!
    where: PostWhereUniqueInput!
  }

  input PostUpsertWithWhereUniqueWithoutAuthorInput {
    create: PostCreateWithoutAuthorInput!
    update: PostUpdateWithoutAuthorDataInput!
    where: PostWhereUniqueInput!
  }

  input PostWhereInput {
    AND: [PostWhereInput!]
    author: UserWhereInput
    content: String
    content_contains: String
    content_ends_with: String
    content_gt: String
    content_gte: String
    content_in: [String!]
    content_lt: String
    content_lte: String
    content_not: String
    content_not_contains: String
    content_not_ends_with: String
    content_not_in: [String!]
    content_not_starts_with: String
    content_starts_with: String
    createdAt: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    createdAt_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_not: DateTime
    createdAt_not_in: [DateTime!]
    id: ID
    id_contains: ID
    id_ends_with: ID
    id_gt: ID
    id_gte: ID
    id_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_not: ID
    id_not_contains: ID
    id_not_ends_with: ID
    id_not_in: [ID!]
    id_not_starts_with: ID
    id_starts_with: ID
    NOT: [PostWhereInput!]
    OR: [PostWhereInput!]
    published: Boolean
    published_not: Boolean
    title: String
    title_contains: String
    title_ends_with: String
    title_gt: String
    title_gte: String
    title_in: [String!]
    title_lt: String
    title_lte: String
    title_not: String
    title_not_contains: String
    title_not_ends_with: String
    title_not_in: [String!]
    title_not_starts_with: String
    title_starts_with: String
    updatedAt: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_not: DateTime
    updatedAt_not_in: [DateTime!]
  }

  input PostWhereUniqueInput {
    id: ID
  }

  type Query {
    node(id: ID!): Node
    post(where: PostWhereUniqueInput!): Post
    posts(
      after: String
      before: String
      first: Int
      last: Int
      orderBy: PostOrderByInput
      skip: Int
      where: PostWhereInput
    ): [Post!]!
    postsConnection(
      after: String
      before: String
      first: Int
      last: Int
      orderBy: PostOrderByInput
      skip: Int
      where: PostWhereInput
    ): PostConnection!
    user(where: UserWhereUniqueInput!): User
    users(
      after: String
      before: String
      first: Int
      last: Int
      orderBy: UserOrderByInput
      skip: Int
      where: UserWhereInput
    ): [User!]!
    usersConnection(
      after: String
      before: String
      first: Int
      last: Int
      orderBy: UserOrderByInput
      skip: Int
      where: UserWhereInput
    ): UserConnection!
  }

  type User {
    email: String!
    id: ID!
    name: String
    posts(
      after: String
      before: String
      first: Int
      last: Int
      orderBy: PostOrderByInput
      skip: Int
      where: PostWhereInput
    ): [Post!]
  }

  type UserConnection {
    aggregate: AggregateUser!
    edges: [UserEdge!]!
    pageInfo: PageInfo!
  }

  input UserCreateInput {
    email: String!
    name: String
    posts: PostCreateManyWithoutAuthorInput
  }

  input UserCreateOneWithoutPostsInput {
    connect: UserWhereUniqueInput
    create: UserCreateWithoutPostsInput
  }

  input UserCreateWithoutPostsInput {
    email: String!
    name: String
  }

  type UserEdge {
    cursor: String!
    node: User!
  }

  enum UserOrderByInput {
    createdAt_ASC
    createdAt_DESC
    email_ASC
    email_DESC
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  input UserUpdateInput {
    email: String
    name: String
    posts: PostUpdateManyWithoutAuthorInput
  }

  input UserUpdateManyMutationInput {
    email: String
    name: String
  }

  input UserUpdateOneRequiredWithoutPostsInput {
    connect: UserWhereUniqueInput
    create: UserCreateWithoutPostsInput
    update: UserUpdateWithoutPostsDataInput
    upsert: UserUpsertWithoutPostsInput
  }

  input UserUpdateWithoutPostsDataInput {
    email: String
    name: String
  }

  input UserUpsertWithoutPostsInput {
    create: UserCreateWithoutPostsInput!
    update: UserUpdateWithoutPostsDataInput!
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    email: String
    email_contains: String
    email_ends_with: String
    email_gt: String
    email_gte: String
    email_in: [String!]
    email_lt: String
    email_lte: String
    email_not: String
    email_not_contains: String
    email_not_ends_with: String
    email_not_in: [String!]
    email_not_starts_with: String
    email_starts_with: String
    id: ID
    id_contains: ID
    id_ends_with: ID
    id_gt: ID
    id_gte: ID
    id_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_not: ID
    id_not_contains: ID
    id_not_ends_with: ID
    id_not_in: [ID!]
    id_not_starts_with: ID
    id_starts_with: ID
    name: String
    name_contains: String
    name_ends_with: String
    name_gt: String
    name_gte: String
    name_in: [String!]
    name_lt: String
    name_lte: String
    name_not: String
    name_not_contains: String
    name_not_ends_with: String
    name_not_in: [String!]
    name_not_starts_with: String
    name_starts_with: String
    NOT: [UserWhereInput!]
    OR: [UserWhereInput!]
    posts_every: PostWhereInput
    posts_none: PostWhereInput
    posts_some: PostWhereInput
  }

  input UserWhereUniqueInput {
    email: String
    id: ID
  }
`
