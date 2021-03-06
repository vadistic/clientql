export interface Query {
  board: (args: QueryBoardArgs) => Board | null
  boards: (args?: QueryBoardsArgs) => Array<Board | null>
  boardsConnection: (args?: QueryBoardsConnectionArgs) => BoardConnection
  post: (args: QueryPostArgs) => Post | null
  posts: (args?: QueryPostsArgs) => Array<Post | null>
  postsConnection: (args?: QueryPostsConnectionArgs) => PostConnection
  thread: (args: QueryThreadArgs) => Thread | null
  threads: (args?: QueryThreadsArgs) => Array<Thread | null>
  threadsConnection: (args?: QueryThreadsConnectionArgs) => ThreadConnection
  user: (args: QueryUserArgs) => User | null
  users: (args?: QueryUsersArgs) => Array<User | null>
  usersConnection: (args?: QueryUsersConnectionArgs) => UserConnection
  node: (args: QueryNodeArgs) => Node | null
}

export interface QueryBoardArgs {
  where: BoardWhereUniqueInput
}

export interface QueryBoardsArgs {
  where?: BoardWhereInput | null
  orderBy?: BoardOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}

export interface QueryBoardsConnectionArgs {
  where?: BoardWhereInput | null
  orderBy?: BoardOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}

export interface QueryPostArgs {
  where: PostWhereUniqueInput
}

export interface QueryPostsArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}

export interface QueryPostsConnectionArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}

export interface QueryThreadArgs {
  where: ThreadWhereUniqueInput
}

export interface QueryThreadsArgs {
  where?: ThreadWhereInput | null
  orderBy?: ThreadOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}

export interface QueryThreadsConnectionArgs {
  where?: ThreadWhereInput | null
  orderBy?: ThreadOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}

export interface QueryUserArgs {
  where: UserWhereUniqueInput
}

export interface QueryUsersArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}

export interface QueryUsersConnectionArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}

export interface QueryNodeArgs {
  id: string
}