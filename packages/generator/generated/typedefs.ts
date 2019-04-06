import gql from 'graphql-tag'

export const TYPEDEFS = gql`
  type Query {
    application(where: ApplicationWhereUniqueInput!): Application
    applications(
      where: ApplicationWhereInput
      orderBy: ApplicationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Application]!
    applicationsConnection(
      where: ApplicationWhereInput
      orderBy: ApplicationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): ApplicationConnection!
    candidate(where: CandidateWhereUniqueInput!): Candidate
    candidates(
      where: CandidateWhereInput
      orderBy: CandidateOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Candidate]!
    candidatesConnection(
      where: CandidateWhereInput
      orderBy: CandidateOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): CandidateConnection!
    job(where: JobWhereUniqueInput!): Job
    jobs(
      where: JobWhereInput
      orderBy: JobOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Job]!
    jobsConnection(
      where: JobWhereInput
      orderBy: JobOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): JobConnection!
    source(where: SourceWhereUniqueInput!): Source
    sources(
      where: SourceWhereInput
      orderBy: SourceOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Source]!
    sourcesConnection(
      where: SourceWhereInput
      orderBy: SourceOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): SourceConnection!
    tag(where: TagWhereUniqueInput!): Tag
    tags(
      where: TagWhereInput
      orderBy: TagOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Tag]!
    tagsConnection(
      where: TagWhereInput
      orderBy: TagOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): TagConnection!
    task(where: TaskWhereUniqueInput!): Task
    tasks(
      where: TaskWhereInput
      orderBy: TaskOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Task]!
    tasksConnection(
      where: TaskWhereInput
      orderBy: TaskOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): TaskConnection!
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
    workflow(where: WorkflowWhereUniqueInput!): Workflow
    workflows(
      where: WorkflowWhereInput
      orderBy: WorkflowOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Workflow]!
    workflowsConnection(
      where: WorkflowWhereInput
      orderBy: WorkflowOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): WorkflowConnection!
  }

  type Mutation {
    createApplication(data: ApplicationCreateInput!): Application!
    updateApplication(
      data: ApplicationUpdateInput!
      where: ApplicationWhereUniqueInput!
    ): Application
    updateManyApplications(
      data: ApplicationUpdateManyMutationInput!
      where: ApplicationWhereInput
    ): BatchPayload!
    upsertApplication(
      where: ApplicationWhereUniqueInput!
      create: ApplicationCreateInput!
      update: ApplicationUpdateInput!
    ): Application!
    deleteApplication(where: ApplicationWhereUniqueInput!): Application
    deleteManyApplications(where: ApplicationWhereInput): BatchPayload!
    createCandidate(data: CandidateCreateInput!): Candidate!
    updateCandidate(
      data: CandidateUpdateInput!
      where: CandidateWhereUniqueInput!
    ): Candidate
    updateManyCandidates(
      data: CandidateUpdateManyMutationInput!
      where: CandidateWhereInput
    ): BatchPayload!
    upsertCandidate(
      where: CandidateWhereUniqueInput!
      create: CandidateCreateInput!
      update: CandidateUpdateInput!
    ): Candidate!
    deleteCandidate(where: CandidateWhereUniqueInput!): Candidate
    deleteManyCandidates(where: CandidateWhereInput): BatchPayload!
    createJob(data: JobCreateInput!): Job!
    updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
    updateManyJobs(
      data: JobUpdateManyMutationInput!
      where: JobWhereInput
    ): BatchPayload!
    upsertJob(
      where: JobWhereUniqueInput!
      create: JobCreateInput!
      update: JobUpdateInput!
    ): Job!
    deleteJob(where: JobWhereUniqueInput!): Job
    deleteManyJobs(where: JobWhereInput): BatchPayload!
    createSource(data: SourceCreateInput!): Source!
    updateSource(
      data: SourceUpdateInput!
      where: SourceWhereUniqueInput!
    ): Source
    updateManySources(
      data: SourceUpdateManyMutationInput!
      where: SourceWhereInput
    ): BatchPayload!
    upsertSource(
      where: SourceWhereUniqueInput!
      create: SourceCreateInput!
      update: SourceUpdateInput!
    ): Source!
    deleteSource(where: SourceWhereUniqueInput!): Source
    deleteManySources(where: SourceWhereInput): BatchPayload!
    createTag(data: TagCreateInput!): Tag!
    updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
    updateManyTags(
      data: TagUpdateManyMutationInput!
      where: TagWhereInput
    ): BatchPayload!
    upsertTag(
      where: TagWhereUniqueInput!
      create: TagCreateInput!
      update: TagUpdateInput!
    ): Tag!
    deleteTag(where: TagWhereUniqueInput!): Tag
    deleteManyTags(where: TagWhereInput): BatchPayload!
    createTask(data: TaskCreateInput!): Task!
    updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
    updateManyTasks(
      data: TaskUpdateManyMutationInput!
      where: TaskWhereInput
    ): BatchPayload!
    upsertTask(
      where: TaskWhereUniqueInput!
      create: TaskCreateInput!
      update: TaskUpdateInput!
    ): Task!
    deleteTask(where: TaskWhereUniqueInput!): Task
    deleteManyTasks(where: TaskWhereInput): BatchPayload!
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    createWorkflow(data: WorkflowCreateInput!): Workflow!
    updateWorkflow(
      data: WorkflowUpdateInput!
      where: WorkflowWhereUniqueInput!
    ): Workflow
    updateManyWorkflows(
      data: WorkflowUpdateManyMutationInput!
      where: WorkflowWhereInput
    ): BatchPayload!
    upsertWorkflow(
      where: WorkflowWhereUniqueInput!
      create: WorkflowCreateInput!
      update: WorkflowUpdateInput!
    ): Workflow!
    deleteWorkflow(where: WorkflowWhereUniqueInput!): Workflow
    deleteManyWorkflows(where: WorkflowWhereInput): BatchPayload!
  }

  type AuthPayload {
    token: String!
    refresh: String!
  }

  type AccessPayload {
    token: String!
  }

  type Application {
    createdAt: DateTime!
    id: ID!
    updatedAt: DateTime!
    type: ApplicationType!
    disqualification: DisqualificationInstance
    stage: Stage!
    reviews(
      where: ReviewInstanceWhereInput
      orderBy: ReviewInstanceOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [ReviewInstance!]
    job: Job!
    candidate: Candidate!
  }

  type ApplicationConnection {
    pageInfo: PageInfo!
    edges: [ApplicationEdge]!
    aggregate: AggregateApplication!
  }

  type Candidate {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    firstName: String
    lastName: String
    emails: [String!]!
    phones: [String!]!
    links: [String!]!
    avatar: File
    company: String
    headline: String
    position: String
    resumesString: [String!]!
    resumesFile(
      where: FileWhereInput
      orderBy: FileOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [File!]
    coverLettersString: [String!]!
    coverLettersFile(
      where: FileWhereInput
      orderBy: FileOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [File!]
    tags(
      where: TagWhereInput
      orderBy: TagOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Tag!]
    sources(
      where: SourceWhereInput
      orderBy: SourceOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Source!]
    fields(
      where: FieldInstanceWhereInput
      orderBy: FieldInstanceOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [FieldInstance!]
    tasks(
      where: TaskWhereInput
      orderBy: TaskOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Task!]
    applications(
      where: ApplicationWhereInput
      orderBy: ApplicationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Application!]
    comments(
      where: CommentWhereInput
      orderBy: CommentOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Comment!]
  }

  type CandidateConnection {
    pageInfo: PageInfo!
    edges: [CandidateEdge]!
    aggregate: AggregateCandidate!
  }

  type Job {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    workspace: Workspace!
    applications(
      where: ApplicationWhereInput
      orderBy: ApplicationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Application!]
    workflow: Workflow!
    comments(
      where: CommentWhereInput
      orderBy: CommentOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Comment!]
    type: JobType!
    department: String
    locations(
      where: LocationWhereInput
      orderBy: LocationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Location!]
    name: String!
    excerpt: String
    companyDescription: String
    description: String
    requirements: String
  }

  type JobConnection {
    pageInfo: PageInfo!
    edges: [JobEdge]!
    aggregate: AggregateJob!
  }

  type Source {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    label: String!
    description: String
  }

  type SourceConnection {
    pageInfo: PageInfo!
    edges: [SourceEdge]!
    aggregate: AggregateSource!
  }

  type Tag {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    label: String!
    description: String
  }

  type TagConnection {
    pageInfo: PageInfo!
    edges: [TagEdge]!
    aggregate: AggregateTag!
  }

  type Task {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    owners(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User!]
    candidate: Candidate
    title: String
    description: String
    dueAt: DateTime
  }

  type TaskConnection {
    pageInfo: PageInfo!
    edges: [TaskEdge]!
    aggregate: AggregateTask!
  }

  type User {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    settings: Json
    tasks(
      where: TaskWhereInput
      orderBy: TaskOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Task!]
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    lastLogin: DateTime
    deletedAt: DateTime
    position: String
    avatar: File
  }

  type UserConnection {
    pageInfo: PageInfo!
    edges: [UserEdge]!
    aggregate: AggregateUser!
  }

  type Workflow {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    jobs(
      where: JobWhereInput
      orderBy: JobOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Job!]
    name: String!
    description: String
    stages(
      where: StageWhereInput
      orderBy: StageOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Stage!]
    disqualifications(
      where: DisqualificationWhereInput
      orderBy: DisqualificationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Disqualification!]
    fields(
      where: FieldWhereInput
      orderBy: FieldOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Field!]
    reviews(
      where: ReviewWhereInput
      orderBy: ReviewOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Review!]
  }

  type WorkflowConnection {
    pageInfo: PageInfo!
    edges: [WorkflowEdge]!
    aggregate: AggregateWorkflow!
  }

  type BatchPayload {
    count: Long!
  }

  type DisqualificationInstance {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    prototype: Disqualification!
    createdBy: User!
    content: String
  }

  type Stage {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String
    type: StageType!
    index: Int!
  }

  type ReviewInstance {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    prototype: Review
    fields(
      where: FieldInstanceWhereInput
      orderBy: FieldInstanceOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [FieldInstance!]
    createdBy: User!
    rating: Int
    content: String
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type ApplicationEdge {
    node: Application!
    cursor: String!
  }

  type AggregateApplication {
    count: Int!
  }

  type File {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    size: Int!
    type: String!
    name: String!
    url: String!
  }

  type FieldInstance {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    prototype: Field!
    value: String
  }

  type Comment {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    createdBy: User!
    parent: Comment
    content: String!
  }

  type CandidateEdge {
    node: Candidate!
    cursor: String!
  }

  type AggregateCandidate {
    count: Int!
  }

  type Workspace {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User!]
    jobs(
      where: JobWhereInput
      orderBy: JobOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Job!]
    candidates(
      where: CandidateWhereInput
      orderBy: CandidateOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Candidate!]
    settings: Json
    workflows(
      where: WorkflowWhereInput
      orderBy: WorkflowOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Workflow!]
    invites(
      where: InviteWhereInput
      orderBy: InviteOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Invite!]
    name: String!
  }

  type Location {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    country: String!
    region: String
    city: String!
    zip: String
  }

  type JobEdge {
    node: Job!
    cursor: String!
  }

  type AggregateJob {
    count: Int!
  }

  type SourceEdge {
    node: Source!
    cursor: String!
  }

  type AggregateSource {
    count: Int!
  }

  type TagEdge {
    node: Tag!
    cursor: String!
  }

  type AggregateTag {
    count: Int!
  }

  type TaskEdge {
    node: Task!
    cursor: String!
  }

  type AggregateTask {
    count: Int!
  }

  type UserEdge {
    node: User!
    cursor: String!
  }

  type AggregateUser {
    count: Int!
  }

  type Disqualification {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String
  }

  type Field {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    type: FieldType!
    label: String!
    description: String
  }

  type Review {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    fields(
      where: FieldWhereInput
      orderBy: FieldOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Field!]
  }

  type WorkflowEdge {
    node: Workflow!
    cursor: String!
  }

  type AggregateWorkflow {
    count: Int!
  }

  type Invite {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    expireAt: DateTime!
    invitedBy: User!
  }
`
