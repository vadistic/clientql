export interface AccessPayloadClient {
  token: () => Promise<string>
}

export interface AggregateApplicationClient {
  count: () => Promise<number>
}

export interface AggregateCandidateClient {
  count: () => Promise<number>
}

export interface AggregateJobClient {
  count: () => Promise<number>
}

export interface AggregateSourceClient {
  count: () => Promise<number>
}

export interface AggregateTagClient {
  count: () => Promise<number>
}

export interface AggregateTaskClient {
  count: () => Promise<number>
}

export interface AggregateUserClient {
  count: () => Promise<number>
}

export interface AggregateWorkflowClient {
  count: () => Promise<number>
}

export interface ApplicationClient {
  createdAt: () => Promise<DateTime>
  id: () => Promise<ID>
  updatedAt: () => Promise<DateTime>
  type: () => Promise<ApplicationType>
  disqualification: () => Promise<DisqualificationInstance | null> &
    DisqualificationInstanceClient
  stage: () => Promise<Stage> & StageClient
  reviews: (args?: {
    where?: ReviewInstanceWhereInput | null
    orderBy?: ReviewInstanceOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<ReviewInstance> | null> & ReviewInstanceClient
  job: () => Promise<Job> & JobClient
  candidate: () => Promise<Candidate> & CandidateClient
}

export interface ApplicationConnectionClient {
  pageInfo: () => Promise<PageInfo> & PageInfoClient
  edges: () => Promise<Array<ApplicationEdge | null>> & ApplicationEdgeClient
  aggregate: () => Promise<AggregateApplication> & AggregateApplicationClient
}

export interface ApplicationEdgeClient {
  node: () => Promise<Application> & ApplicationClient
  cursor: () => Promise<string>
}

export interface AuthPayloadClient {
  token: () => Promise<string>
  refresh: () => Promise<string>
}

export interface BatchPayloadClient {
  count: () => Promise<number>
}

export interface CandidateClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  firstName: () => Promise<string | null>
  lastName: () => Promise<string | null>
  emails: () => Promise<string[]>
  phones: () => Promise<string[]>
  links: () => Promise<string[]>
  avatar: () => Promise<File | null> & FileClient
  company: () => Promise<string | null>
  headline: () => Promise<string | null>
  position: () => Promise<string | null>
  resumesString: () => Promise<string[]>
  resumesFile: (args?: {
    where?: FileWhereInput | null
    orderBy?: FileOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<File> | null> & FileClient
  coverLettersString: () => Promise<string[]>
  coverLettersFile: (args?: {
    where?: FileWhereInput | null
    orderBy?: FileOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<File> | null> & FileClient
  tags: (args?: {
    where?: TagWhereInput | null
    orderBy?: TagOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Tag> | null> & TagClient
  sources: (args?: {
    where?: SourceWhereInput | null
    orderBy?: SourceOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Source> | null> & SourceClient
  fields: (args?: {
    where?: FieldInstanceWhereInput | null
    orderBy?: FieldInstanceOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<FieldInstance> | null> & FieldInstanceClient
  tasks: (args?: {
    where?: TaskWhereInput | null
    orderBy?: TaskOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Task> | null> & TaskClient
  applications: (args?: {
    where?: ApplicationWhereInput | null
    orderBy?: ApplicationOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Application> | null> & ApplicationClient
  comments: (args?: {
    where?: CommentWhereInput | null
    orderBy?: CommentOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Comment> | null> & CommentClient
}

export interface CandidateConnectionClient {
  pageInfo: () => Promise<PageInfo> & PageInfoClient
  edges: () => Promise<Array<CandidateEdge | null>> & CandidateEdgeClient
  aggregate: () => Promise<AggregateCandidate> & AggregateCandidateClient
}

export interface CandidateEdgeClient {
  node: () => Promise<Candidate> & CandidateClient
  cursor: () => Promise<string>
}

export interface CommentClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  createdBy: () => Promise<User> & UserClient
  parent: () => Promise<Comment | null> & CommentClient
  content: () => Promise<string>
}

export interface DisqualificationClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  name: () => Promise<string>
  description: () => Promise<string | null>
}

export interface DisqualificationInstanceClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  prototype: () => Promise<Disqualification> & DisqualificationClient
  createdBy: () => Promise<User> & UserClient
  content: () => Promise<string | null>
}

export interface FieldClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  type: () => Promise<FieldType>
  label: () => Promise<string>
  description: () => Promise<string | null>
}

export interface FieldInstanceClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  prototype: () => Promise<Field> & FieldClient
  value: () => Promise<string | null>
}

export interface FileClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  size: () => Promise<number>
  type: () => Promise<string>
  name: () => Promise<string>
  url: () => Promise<string>
}

export interface InviteClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  email: () => Promise<string>
  expireAt: () => Promise<DateTime>
  invitedBy: () => Promise<User> & UserClient
}

export interface JobClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  workspace: () => Promise<Workspace> & WorkspaceClient
  applications: (args?: {
    where?: ApplicationWhereInput | null
    orderBy?: ApplicationOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Application> | null> & ApplicationClient
  workflow: () => Promise<Workflow> & WorkflowClient
  comments: (args?: {
    where?: CommentWhereInput | null
    orderBy?: CommentOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Comment> | null> & CommentClient
  type: () => Promise<JobType>
  department: () => Promise<string | null>
  locations: (args?: {
    where?: LocationWhereInput | null
    orderBy?: LocationOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Location> | null> & LocationClient
  name: () => Promise<string>
  excerpt: () => Promise<string | null>
  companyDescription: () => Promise<string | null>
  description: () => Promise<string | null>
  requirements: () => Promise<string | null>
}

export interface JobConnectionClient {
  pageInfo: () => Promise<PageInfo> & PageInfoClient
  edges: () => Promise<Array<JobEdge | null>> & JobEdgeClient
  aggregate: () => Promise<AggregateJob> & AggregateJobClient
}

export interface JobEdgeClient {
  node: () => Promise<Job> & JobClient
  cursor: () => Promise<string>
}

export interface LocationClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  country: () => Promise<string>
  region: () => Promise<string | null>
  city: () => Promise<string>
  zip: () => Promise<string | null>
}

export interface MutationClient {
  createApplication: (
    data: ApplicationCreateInput
  ) => Promise<Application> & ApplicationClient
  updateApplication: (args: {
    data: ApplicationUpdateInput
    where: ApplicationWhereUniqueInput
  }) => Promise<Application | null> & ApplicationClient
  updateManyApplications: (args: {
    data: ApplicationUpdateManyMutationInput
    where?: ApplicationWhereInput | null
  }) => Promise<BatchPayload> & BatchPayloadClient
  upsertApplication: (args: {
    where: ApplicationWhereUniqueInput
    create: ApplicationCreateInput
    update: ApplicationUpdateInput
  }) => Promise<Application> & ApplicationClient
  deleteApplication: (
    where: ApplicationWhereUniqueInput
  ) => Promise<Application | null> & ApplicationClient
  deleteManyApplications: (
    where?: ApplicationWhereInput | null
  ) => Promise<BatchPayload> & BatchPayloadClient
  createCandidate: (
    data: CandidateCreateInput
  ) => Promise<Candidate> & CandidateClient
  updateCandidate: (args: {
    data: CandidateUpdateInput
    where: CandidateWhereUniqueInput
  }) => Promise<Candidate | null> & CandidateClient
  updateManyCandidates: (args: {
    data: CandidateUpdateManyMutationInput
    where?: CandidateWhereInput | null
  }) => Promise<BatchPayload> & BatchPayloadClient
  upsertCandidate: (args: {
    where: CandidateWhereUniqueInput
    create: CandidateCreateInput
    update: CandidateUpdateInput
  }) => Promise<Candidate> & CandidateClient
  deleteCandidate: (
    where: CandidateWhereUniqueInput
  ) => Promise<Candidate | null> & CandidateClient
  deleteManyCandidates: (
    where?: CandidateWhereInput | null
  ) => Promise<BatchPayload> & BatchPayloadClient
  createJob: (data: JobCreateInput) => Promise<Job> & JobClient
  updateJob: (args: {
    data: JobUpdateInput
    where: JobWhereUniqueInput
  }) => Promise<Job | null> & JobClient
  updateManyJobs: (args: {
    data: JobUpdateManyMutationInput
    where?: JobWhereInput | null
  }) => Promise<BatchPayload> & BatchPayloadClient
  upsertJob: (args: {
    where: JobWhereUniqueInput
    create: JobCreateInput
    update: JobUpdateInput
  }) => Promise<Job> & JobClient
  deleteJob: (where: JobWhereUniqueInput) => Promise<Job | null> & JobClient
  deleteManyJobs: (
    where?: JobWhereInput | null
  ) => Promise<BatchPayload> & BatchPayloadClient
  createSource: (data: SourceCreateInput) => Promise<Source> & SourceClient
  updateSource: (args: {
    data: SourceUpdateInput
    where: SourceWhereUniqueInput
  }) => Promise<Source | null> & SourceClient
  updateManySources: (args: {
    data: SourceUpdateManyMutationInput
    where?: SourceWhereInput | null
  }) => Promise<BatchPayload> & BatchPayloadClient
  upsertSource: (args: {
    where: SourceWhereUniqueInput
    create: SourceCreateInput
    update: SourceUpdateInput
  }) => Promise<Source> & SourceClient
  deleteSource: (
    where: SourceWhereUniqueInput
  ) => Promise<Source | null> & SourceClient
  deleteManySources: (
    where?: SourceWhereInput | null
  ) => Promise<BatchPayload> & BatchPayloadClient
  createTag: (data: TagCreateInput) => Promise<Tag> & TagClient
  updateTag: (args: {
    data: TagUpdateInput
    where: TagWhereUniqueInput
  }) => Promise<Tag | null> & TagClient
  updateManyTags: (args: {
    data: TagUpdateManyMutationInput
    where?: TagWhereInput | null
  }) => Promise<BatchPayload> & BatchPayloadClient
  upsertTag: (args: {
    where: TagWhereUniqueInput
    create: TagCreateInput
    update: TagUpdateInput
  }) => Promise<Tag> & TagClient
  deleteTag: (where: TagWhereUniqueInput) => Promise<Tag | null> & TagClient
  deleteManyTags: (
    where?: TagWhereInput | null
  ) => Promise<BatchPayload> & BatchPayloadClient
  createTask: (data: TaskCreateInput) => Promise<Task> & TaskClient
  updateTask: (args: {
    data: TaskUpdateInput
    where: TaskWhereUniqueInput
  }) => Promise<Task | null> & TaskClient
  updateManyTasks: (args: {
    data: TaskUpdateManyMutationInput
    where?: TaskWhereInput | null
  }) => Promise<BatchPayload> & BatchPayloadClient
  upsertTask: (args: {
    where: TaskWhereUniqueInput
    create: TaskCreateInput
    update: TaskUpdateInput
  }) => Promise<Task> & TaskClient
  deleteTask: (where: TaskWhereUniqueInput) => Promise<Task | null> & TaskClient
  deleteManyTasks: (
    where?: TaskWhereInput | null
  ) => Promise<BatchPayload> & BatchPayloadClient
  updateUser: (args: {
    data: UserUpdateInput
    where: UserWhereUniqueInput
  }) => Promise<User | null> & UserClient
  createWorkflow: (
    data: WorkflowCreateInput
  ) => Promise<Workflow> & WorkflowClient
  updateWorkflow: (args: {
    data: WorkflowUpdateInput
    where: WorkflowWhereUniqueInput
  }) => Promise<Workflow | null> & WorkflowClient
  updateManyWorkflows: (args: {
    data: WorkflowUpdateManyMutationInput
    where?: WorkflowWhereInput | null
  }) => Promise<BatchPayload> & BatchPayloadClient
  upsertWorkflow: (args: {
    where: WorkflowWhereUniqueInput
    create: WorkflowCreateInput
    update: WorkflowUpdateInput
  }) => Promise<Workflow> & WorkflowClient
  deleteWorkflow: (
    where: WorkflowWhereUniqueInput
  ) => Promise<Workflow | null> & WorkflowClient
  deleteManyWorkflows: (
    where?: WorkflowWhereInput | null
  ) => Promise<BatchPayload> & BatchPayloadClient
}

export interface PageInfoClient {
  hasNextPage: () => Promise<boolean>
  hasPreviousPage: () => Promise<boolean>
  startCursor: () => Promise<string | null>
  endCursor: () => Promise<string | null>
}

export interface QueryClient {
  application: (
    where: ApplicationWhereUniqueInput
  ) => Promise<Application | null> & ApplicationClient
  applications: (args?: {
    where?: ApplicationWhereInput | null
    orderBy?: ApplicationOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Application | null>> & ApplicationClient
  applicationsConnection: (args?: {
    where?: ApplicationWhereInput | null
    orderBy?: ApplicationOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<ApplicationConnection> & ApplicationConnectionClient
  candidate: (
    where: CandidateWhereUniqueInput
  ) => Promise<Candidate | null> & CandidateClient
  candidates: (args?: {
    where?: CandidateWhereInput | null
    orderBy?: CandidateOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Candidate | null>> & CandidateClient
  candidatesConnection: (args?: {
    where?: CandidateWhereInput | null
    orderBy?: CandidateOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<CandidateConnection> & CandidateConnectionClient
  job: (where: JobWhereUniqueInput) => Promise<Job | null> & JobClient
  jobs: (args?: {
    where?: JobWhereInput | null
    orderBy?: JobOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Job | null>> & JobClient
  jobsConnection: (args?: {
    where?: JobWhereInput | null
    orderBy?: JobOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<JobConnection> & JobConnectionClient
  source: (
    where: SourceWhereUniqueInput
  ) => Promise<Source | null> & SourceClient
  sources: (args?: {
    where?: SourceWhereInput | null
    orderBy?: SourceOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Source | null>> & SourceClient
  sourcesConnection: (args?: {
    where?: SourceWhereInput | null
    orderBy?: SourceOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<SourceConnection> & SourceConnectionClient
  tag: (where: TagWhereUniqueInput) => Promise<Tag | null> & TagClient
  tags: (args?: {
    where?: TagWhereInput | null
    orderBy?: TagOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Tag | null>> & TagClient
  tagsConnection: (args?: {
    where?: TagWhereInput | null
    orderBy?: TagOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<TagConnection> & TagConnectionClient
  task: (where: TaskWhereUniqueInput) => Promise<Task | null> & TaskClient
  tasks: (args?: {
    where?: TaskWhereInput | null
    orderBy?: TaskOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Task | null>> & TaskClient
  tasksConnection: (args?: {
    where?: TaskWhereInput | null
    orderBy?: TaskOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<TaskConnection> & TaskConnectionClient
  user: (where: UserWhereUniqueInput) => Promise<User | null> & UserClient
  users: (args?: {
    where?: UserWhereInput | null
    orderBy?: UserOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<User | null>> & UserClient
  usersConnection: (args?: {
    where?: UserWhereInput | null
    orderBy?: UserOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<UserConnection> & UserConnectionClient
  workflow: (
    where: WorkflowWhereUniqueInput
  ) => Promise<Workflow | null> & WorkflowClient
  workflows: (args?: {
    where?: WorkflowWhereInput | null
    orderBy?: WorkflowOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Workflow | null>> & WorkflowClient
  workflowsConnection: (args?: {
    where?: WorkflowWhereInput | null
    orderBy?: WorkflowOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<WorkflowConnection> & WorkflowConnectionClient
}

export interface ReviewClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  name: () => Promise<string>
  fields: (args?: {
    where?: FieldWhereInput | null
    orderBy?: FieldOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Field> | null> & FieldClient
}

export interface ReviewInstanceClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  prototype: () => Promise<Review | null> & ReviewClient
  fields: (args?: {
    where?: FieldInstanceWhereInput | null
    orderBy?: FieldInstanceOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<FieldInstance> | null> & FieldInstanceClient
  createdBy: () => Promise<User> & UserClient
  rating: () => Promise<number | null>
  content: () => Promise<string | null>
}

export interface SourceClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  label: () => Promise<string>
  description: () => Promise<string | null>
}

export interface SourceConnectionClient {
  pageInfo: () => Promise<PageInfo> & PageInfoClient
  edges: () => Promise<Array<SourceEdge | null>> & SourceEdgeClient
  aggregate: () => Promise<AggregateSource> & AggregateSourceClient
}

export interface SourceEdgeClient {
  node: () => Promise<Source> & SourceClient
  cursor: () => Promise<string>
}

export interface StageClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  name: () => Promise<string>
  description: () => Promise<string | null>
  type: () => Promise<StageType>
  index: () => Promise<number>
}

export interface TagClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  label: () => Promise<string>
  description: () => Promise<string | null>
}

export interface TagConnectionClient {
  pageInfo: () => Promise<PageInfo> & PageInfoClient
  edges: () => Promise<Array<TagEdge | null>> & TagEdgeClient
  aggregate: () => Promise<AggregateTag> & AggregateTagClient
}

export interface TagEdgeClient {
  node: () => Promise<Tag> & TagClient
  cursor: () => Promise<string>
}

export interface TaskClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  owners: (args?: {
    where?: UserWhereInput | null
    orderBy?: UserOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<User> | null> & UserClient
  candidate: () => Promise<Candidate | null> & CandidateClient
  title: () => Promise<string | null>
  description: () => Promise<string | null>
  dueAt: () => Promise<DateTime | null>
}

export interface TaskConnectionClient {
  pageInfo: () => Promise<PageInfo> & PageInfoClient
  edges: () => Promise<Array<TaskEdge | null>> & TaskEdgeClient
  aggregate: () => Promise<AggregateTask> & AggregateTaskClient
}

export interface TaskEdgeClient {
  node: () => Promise<Task> & TaskClient
  cursor: () => Promise<string>
}

export interface UserClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  settings: () => Promise<Json | null>
  tasks: (args?: {
    where?: TaskWhereInput | null
    orderBy?: TaskOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Task> | null> & TaskClient
  firstName: () => Promise<string>
  lastName: () => Promise<string>
  email: () => Promise<string>
  username: () => Promise<string>
  lastLogin: () => Promise<DateTime | null>
  deletedAt: () => Promise<DateTime | null>
  position: () => Promise<string | null>
  avatar: () => Promise<File | null> & FileClient
}

export interface UserConnectionClient {
  pageInfo: () => Promise<PageInfo> & PageInfoClient
  edges: () => Promise<Array<UserEdge | null>> & UserEdgeClient
  aggregate: () => Promise<AggregateUser> & AggregateUserClient
}

export interface UserEdgeClient {
  node: () => Promise<User> & UserClient
  cursor: () => Promise<string>
}

export interface WorkflowClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  jobs: (args?: {
    where?: JobWhereInput | null
    orderBy?: JobOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Job> | null> & JobClient
  name: () => Promise<string>
  description: () => Promise<string | null>
  stages: (args?: {
    where?: StageWhereInput | null
    orderBy?: StageOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Stage> | null> & StageClient
  disqualifications: (args?: {
    where?: DisqualificationWhereInput | null
    orderBy?: DisqualificationOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Disqualification> | null> & DisqualificationClient
  fields: (args?: {
    where?: FieldWhereInput | null
    orderBy?: FieldOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Field> | null> & FieldClient
  reviews: (args?: {
    where?: ReviewWhereInput | null
    orderBy?: ReviewOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Review> | null> & ReviewClient
}

export interface WorkflowConnectionClient {
  pageInfo: () => Promise<PageInfo> & PageInfoClient
  edges: () => Promise<Array<WorkflowEdge | null>> & WorkflowEdgeClient
  aggregate: () => Promise<AggregateWorkflow> & AggregateWorkflowClient
}

export interface WorkflowEdgeClient {
  node: () => Promise<Workflow> & WorkflowClient
  cursor: () => Promise<string>
}

export interface WorkspaceClient {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  users: (args?: {
    where?: UserWhereInput | null
    orderBy?: UserOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<User> | null> & UserClient
  jobs: (args?: {
    where?: JobWhereInput | null
    orderBy?: JobOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Job> | null> & JobClient
  candidates: (args?: {
    where?: CandidateWhereInput | null
    orderBy?: CandidateOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Candidate> | null> & CandidateClient
  settings: () => Promise<Json | null>
  workflows: (args?: {
    where?: WorkflowWhereInput | null
    orderBy?: WorkflowOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Workflow> | null> & WorkflowClient
  invites: (args?: {
    where?: InviteWhereInput | null
    orderBy?: InviteOrderByInput | null
    skip?: number | null
    after?: string | null
    before?: string | null
    first?: number | null
    last?: number | null
  }) => Promise<Array<Invite> | null> & InviteClient
  name: () => Promise<string>
}

/* SCALAR TYPES */

export type ID = string

export type DateTime = string

export type Json = any

export type Long = any

/* ENUM TYPES */

export enum ApplicationOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC'
}

export enum ApplicationType {
  QUALIFIED = 'QUALIFIED',
  DISQUALIFIED = 'DISQUALIFIED'
}

export enum CandidateOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  firstName_ASC = 'firstName_ASC',
  firstName_DESC = 'firstName_DESC',
  lastName_ASC = 'lastName_ASC',
  lastName_DESC = 'lastName_DESC',
  company_ASC = 'company_ASC',
  company_DESC = 'company_DESC',
  headline_ASC = 'headline_ASC',
  headline_DESC = 'headline_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC'
}

export enum CommentOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  content_ASC = 'content_ASC',
  content_DESC = 'content_DESC'
}

export enum DisqualificationOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC'
}

export enum FieldInstanceOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  value_ASC = 'value_ASC',
  value_DESC = 'value_DESC'
}

export enum FieldOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
  label_ASC = 'label_ASC',
  label_DESC = 'label_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC'
}

export enum FieldType {
  INT = 'INT',
  FLOAT = 'FLOAT',
  TEXT = 'TEXT',
  PARAGRAPH = 'PARAGRAPH',
  BOOLEAN = 'BOOLEAN',
  DATETIME = 'DATETIME'
}

export enum FileOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

export enum InviteOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  expireAt_ASC = 'expireAt_ASC',
  expireAt_DESC = 'expireAt_DESC'
}

export enum JobOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
  department_ASC = 'department_ASC',
  department_DESC = 'department_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  excerpt_ASC = 'excerpt_ASC',
  excerpt_DESC = 'excerpt_DESC',
  companyDescription_ASC = 'companyDescription_ASC',
  companyDescription_DESC = 'companyDescription_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  requirements_ASC = 'requirements_ASC',
  requirements_DESC = 'requirements_DESC'
}

export enum JobType {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
}

export enum LocationOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  country_ASC = 'country_ASC',
  country_DESC = 'country_DESC',
  region_ASC = 'region_ASC',
  region_DESC = 'region_DESC',
  city_ASC = 'city_ASC',
  city_DESC = 'city_DESC',
  zip_ASC = 'zip_ASC',
  zip_DESC = 'zip_DESC'
}

export enum ReviewInstanceOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  rating_ASC = 'rating_ASC',
  rating_DESC = 'rating_DESC',
  content_ASC = 'content_ASC',
  content_DESC = 'content_DESC'
}

export enum ReviewOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC'
}

export enum SourceOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  label_ASC = 'label_ASC',
  label_DESC = 'label_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC'
}

export enum StageOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
  index_ASC = 'index_ASC',
  index_DESC = 'index_DESC'
}

export enum StageType {
  NEW = 'NEW',
  PIPELINE = 'PIPELINE',
  FINAL = 'FINAL'
}

export enum TagOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  label_ASC = 'label_ASC',
  label_DESC = 'label_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC'
}

export enum TaskOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  dueAt_ASC = 'dueAt_ASC',
  dueAt_DESC = 'dueAt_DESC'
}

export enum UserOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  settings_ASC = 'settings_ASC',
  settings_DESC = 'settings_DESC',
  firstName_ASC = 'firstName_ASC',
  firstName_DESC = 'firstName_DESC',
  lastName_ASC = 'lastName_ASC',
  lastName_DESC = 'lastName_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  username_ASC = 'username_ASC',
  username_DESC = 'username_DESC',
  lastLogin_ASC = 'lastLogin_ASC',
  lastLogin_DESC = 'lastLogin_DESC',
  deletedAt_ASC = 'deletedAt_ASC',
  deletedAt_DESC = 'deletedAt_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC'
}

export enum WorkflowOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC'
}

/* INPUT OBJECT TYPES */

export interface ApplicationCreateInput {
  type: ApplicationType
  disqualification?: DisqualificationInstanceCreateOneInput | null
  stage: StageCreateOneInput
  reviews?: ReviewInstanceCreateManyInput | null
  job: JobCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
}

export interface ApplicationCreateManyWithoutCandidateInput {
  create?: Array<ApplicationCreateWithoutCandidateInput> | null
  connect?: Array<ApplicationWhereUniqueInput> | null
}

export interface ApplicationCreateManyWithoutJobInput {
  create?: Array<ApplicationCreateWithoutJobInput> | null
  connect?: Array<ApplicationWhereUniqueInput> | null
}

export interface ApplicationCreateWithoutCandidateInput {
  type: ApplicationType
  disqualification?: DisqualificationInstanceCreateOneInput | null
  stage: StageCreateOneInput
  reviews?: ReviewInstanceCreateManyInput | null
  job: JobCreateOneWithoutApplicationsInput
}

export interface ApplicationCreateWithoutJobInput {
  type: ApplicationType
  disqualification?: DisqualificationInstanceCreateOneInput | null
  stage: StageCreateOneInput
  reviews?: ReviewInstanceCreateManyInput | null
  candidate: CandidateCreateOneWithoutApplicationsInput
}

export interface ApplicationScalarWhereInput {
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: ApplicationType | null
  type_not?: ApplicationType | null
  type_in?: Array<ApplicationType> | null
  type_not_in?: Array<ApplicationType> | null
  AND?: Array<ApplicationScalarWhereInput> | null
  OR?: Array<ApplicationScalarWhereInput> | null
  NOT?: Array<ApplicationScalarWhereInput> | null
}

export interface ApplicationUpdateInput {
  type?: ApplicationType | null
  disqualification?: DisqualificationInstanceUpdateOneInput | null
  stage?: StageUpdateOneRequiredInput | null
  reviews?: ReviewInstanceUpdateManyInput | null
  job?: JobUpdateOneRequiredWithoutApplicationsInput | null
  candidate?: CandidateUpdateOneRequiredWithoutApplicationsInput | null
}

export interface ApplicationUpdateManyDataInput {
  type?: ApplicationType | null
}

export interface ApplicationUpdateManyMutationInput {
  type?: ApplicationType | null
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create?: Array<ApplicationCreateWithoutCandidateInput> | null
  delete?: Array<ApplicationWhereUniqueInput> | null
  connect?: Array<ApplicationWhereUniqueInput> | null
  set?: Array<ApplicationWhereUniqueInput> | null
  disconnect?: Array<ApplicationWhereUniqueInput> | null
  update?: Array<ApplicationUpdateWithWhereUniqueWithoutCandidateInput> | null
  upsert?: Array<ApplicationUpsertWithWhereUniqueWithoutCandidateInput> | null
  deleteMany?: Array<ApplicationScalarWhereInput> | null
  updateMany?: Array<ApplicationUpdateManyWithWhereNestedInput> | null
}

export interface ApplicationUpdateManyWithoutJobInput {
  create?: Array<ApplicationCreateWithoutJobInput> | null
  delete?: Array<ApplicationWhereUniqueInput> | null
  connect?: Array<ApplicationWhereUniqueInput> | null
  set?: Array<ApplicationWhereUniqueInput> | null
  disconnect?: Array<ApplicationWhereUniqueInput> | null
  update?: Array<ApplicationUpdateWithWhereUniqueWithoutJobInput> | null
  upsert?: Array<ApplicationUpsertWithWhereUniqueWithoutJobInput> | null
  deleteMany?: Array<ApplicationScalarWhereInput> | null
  updateMany?: Array<ApplicationUpdateManyWithWhereNestedInput> | null
}

export interface ApplicationUpdateManyWithWhereNestedInput {
  where: ApplicationScalarWhereInput
  data: ApplicationUpdateManyDataInput
}

export interface ApplicationUpdateWithoutCandidateDataInput {
  type?: ApplicationType | null
  disqualification?: DisqualificationInstanceUpdateOneInput | null
  stage?: StageUpdateOneRequiredInput | null
  reviews?: ReviewInstanceUpdateManyInput | null
  job?: JobUpdateOneRequiredWithoutApplicationsInput | null
}

export interface ApplicationUpdateWithoutJobDataInput {
  type?: ApplicationType | null
  disqualification?: DisqualificationInstanceUpdateOneInput | null
  stage?: StageUpdateOneRequiredInput | null
  reviews?: ReviewInstanceUpdateManyInput | null
  candidate?: CandidateUpdateOneRequiredWithoutApplicationsInput | null
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutCandidateDataInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutJobDataInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutCandidateDataInput
  create: ApplicationCreateWithoutCandidateInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutJobDataInput
  create: ApplicationCreateWithoutJobInput
}

export interface ApplicationWhereInput {
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: ApplicationType | null
  type_not?: ApplicationType | null
  type_in?: Array<ApplicationType> | null
  type_not_in?: Array<ApplicationType> | null
  disqualification?: DisqualificationInstanceWhereInput | null
  stage?: StageWhereInput | null
  reviews_every?: ReviewInstanceWhereInput | null
  reviews_some?: ReviewInstanceWhereInput | null
  reviews_none?: ReviewInstanceWhereInput | null
  job?: JobWhereInput | null
  candidate?: CandidateWhereInput | null
  AND?: Array<ApplicationWhereInput> | null
  OR?: Array<ApplicationWhereInput> | null
  NOT?: Array<ApplicationWhereInput> | null
}

export interface ApplicationWhereUniqueInput {
  id?: ID | null
}

export interface CandidateCreatecoverLettersStringInput {
  set?: string[] | null
}

export interface CandidateCreateemailsInput {
  set?: string[] | null
}

export interface CandidateCreateInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  sources?: SourceCreateManyInput | null
  fields?: FieldInstanceCreateManyInput | null
  tasks?: TaskCreateManyWithoutCandidateInput | null
  applications?: ApplicationCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreatelinksInput {
  set?: string[] | null
}

export interface CandidateCreateManyInput {
  create?: Array<CandidateCreateInput> | null
  connect?: Array<CandidateWhereUniqueInput> | null
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateCreateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateCreatephonesInput {
  set?: string[] | null
}

export interface CandidateCreateresumesStringInput {
  set?: string[] | null
}

export interface CandidateCreateWithoutApplicationsInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  sources?: SourceCreateManyInput | null
  fields?: FieldInstanceCreateManyInput | null
  tasks?: TaskCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreateWithoutTasksInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  sources?: SourceCreateManyInput | null
  fields?: FieldInstanceCreateManyInput | null
  applications?: ApplicationCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  firstName?: string | null
  firstName_not?: string | null
  firstName_in?: string[] | null
  firstName_not_in?: string[] | null
  firstName_lt?: string | null
  firstName_lte?: string | null
  firstName_gt?: string | null
  firstName_gte?: string | null
  firstName_contains?: string | null
  firstName_not_contains?: string | null
  firstName_starts_with?: string | null
  firstName_not_starts_with?: string | null
  firstName_ends_with?: string | null
  firstName_not_ends_with?: string | null
  lastName?: string | null
  lastName_not?: string | null
  lastName_in?: string[] | null
  lastName_not_in?: string[] | null
  lastName_lt?: string | null
  lastName_lte?: string | null
  lastName_gt?: string | null
  lastName_gte?: string | null
  lastName_contains?: string | null
  lastName_not_contains?: string | null
  lastName_starts_with?: string | null
  lastName_not_starts_with?: string | null
  lastName_ends_with?: string | null
  lastName_not_ends_with?: string | null
  company?: string | null
  company_not?: string | null
  company_in?: string[] | null
  company_not_in?: string[] | null
  company_lt?: string | null
  company_lte?: string | null
  company_gt?: string | null
  company_gte?: string | null
  company_contains?: string | null
  company_not_contains?: string | null
  company_starts_with?: string | null
  company_not_starts_with?: string | null
  company_ends_with?: string | null
  company_not_ends_with?: string | null
  headline?: string | null
  headline_not?: string | null
  headline_in?: string[] | null
  headline_not_in?: string[] | null
  headline_lt?: string | null
  headline_lte?: string | null
  headline_gt?: string | null
  headline_gte?: string | null
  headline_contains?: string | null
  headline_not_contains?: string | null
  headline_starts_with?: string | null
  headline_not_starts_with?: string | null
  headline_ends_with?: string | null
  headline_not_ends_with?: string | null
  position?: string | null
  position_not?: string | null
  position_in?: string[] | null
  position_not_in?: string[] | null
  position_lt?: string | null
  position_lte?: string | null
  position_gt?: string | null
  position_gte?: string | null
  position_contains?: string | null
  position_not_contains?: string | null
  position_starts_with?: string | null
  position_not_starts_with?: string | null
  position_ends_with?: string | null
  position_not_ends_with?: string | null
  AND?: Array<CandidateScalarWhereInput> | null
  OR?: Array<CandidateScalarWhereInput> | null
  NOT?: Array<CandidateScalarWhereInput> | null
}

export interface CandidateUpdatecoverLettersStringInput {
  set?: string[] | null
}

export interface CandidateUpdateDataInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateemailsInput {
  set?: string[] | null
}

export interface CandidateUpdateInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdatelinksInput {
  set?: string[] | null
}

export interface CandidateUpdateManyDataInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateUpdateresumesStringInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
}

export interface CandidateUpdateManyInput {
  create?: Array<CandidateCreateInput> | null
  update?: Array<CandidateUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<CandidateUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<CandidateWhereUniqueInput> | null
  connect?: Array<CandidateWhereUniqueInput> | null
  set?: Array<CandidateWhereUniqueInput> | null
  disconnect?: Array<CandidateWhereUniqueInput> | null
  deleteMany?: Array<CandidateScalarWhereInput> | null
  updateMany?: Array<CandidateUpdateManyWithWhereNestedInput> | null
}

export interface CandidateUpdateManyMutationInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateUpdateresumesStringInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
}

export interface CandidateUpdateManyWithWhereNestedInput {
  where: CandidateScalarWhereInput
  data: CandidateUpdateManyDataInput
}

export interface CandidateUpdateOneRequiredWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput | null
  update?: CandidateUpdateWithoutApplicationsDataInput | null
  upsert?: CandidateUpsertWithoutApplicationsInput | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateUpdateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput | null
  update?: CandidateUpdateWithoutTasksDataInput | null
  upsert?: CandidateUpsertWithoutTasksInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateUpdatephonesInput {
  set?: string[] | null
}

export interface CandidateUpdateresumesStringInput {
  set?: string[] | null
}

export interface CandidateUpdateWithoutApplicationsDataInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateWithoutTasksDataInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateDataInput
}

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput
  create: CandidateCreateWithoutApplicationsInput
}

export interface CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput
  create: CandidateCreateWithoutTasksInput
}

export interface CandidateUpsertWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateDataInput
  create: CandidateCreateInput
}

export interface CandidateWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  firstName?: string | null
  firstName_not?: string | null
  firstName_in?: string[] | null
  firstName_not_in?: string[] | null
  firstName_lt?: string | null
  firstName_lte?: string | null
  firstName_gt?: string | null
  firstName_gte?: string | null
  firstName_contains?: string | null
  firstName_not_contains?: string | null
  firstName_starts_with?: string | null
  firstName_not_starts_with?: string | null
  firstName_ends_with?: string | null
  firstName_not_ends_with?: string | null
  lastName?: string | null
  lastName_not?: string | null
  lastName_in?: string[] | null
  lastName_not_in?: string[] | null
  lastName_lt?: string | null
  lastName_lte?: string | null
  lastName_gt?: string | null
  lastName_gte?: string | null
  lastName_contains?: string | null
  lastName_not_contains?: string | null
  lastName_starts_with?: string | null
  lastName_not_starts_with?: string | null
  lastName_ends_with?: string | null
  lastName_not_ends_with?: string | null
  avatar?: FileWhereInput | null
  company?: string | null
  company_not?: string | null
  company_in?: string[] | null
  company_not_in?: string[] | null
  company_lt?: string | null
  company_lte?: string | null
  company_gt?: string | null
  company_gte?: string | null
  company_contains?: string | null
  company_not_contains?: string | null
  company_starts_with?: string | null
  company_not_starts_with?: string | null
  company_ends_with?: string | null
  company_not_ends_with?: string | null
  headline?: string | null
  headline_not?: string | null
  headline_in?: string[] | null
  headline_not_in?: string[] | null
  headline_lt?: string | null
  headline_lte?: string | null
  headline_gt?: string | null
  headline_gte?: string | null
  headline_contains?: string | null
  headline_not_contains?: string | null
  headline_starts_with?: string | null
  headline_not_starts_with?: string | null
  headline_ends_with?: string | null
  headline_not_ends_with?: string | null
  position?: string | null
  position_not?: string | null
  position_in?: string[] | null
  position_not_in?: string[] | null
  position_lt?: string | null
  position_lte?: string | null
  position_gt?: string | null
  position_gte?: string | null
  position_contains?: string | null
  position_not_contains?: string | null
  position_starts_with?: string | null
  position_not_starts_with?: string | null
  position_ends_with?: string | null
  position_not_ends_with?: string | null
  resumesFile_every?: FileWhereInput | null
  resumesFile_some?: FileWhereInput | null
  resumesFile_none?: FileWhereInput | null
  coverLettersFile_every?: FileWhereInput | null
  coverLettersFile_some?: FileWhereInput | null
  coverLettersFile_none?: FileWhereInput | null
  tags_every?: TagWhereInput | null
  tags_some?: TagWhereInput | null
  tags_none?: TagWhereInput | null
  sources_every?: SourceWhereInput | null
  sources_some?: SourceWhereInput | null
  sources_none?: SourceWhereInput | null
  fields_every?: FieldInstanceWhereInput | null
  fields_some?: FieldInstanceWhereInput | null
  fields_none?: FieldInstanceWhereInput | null
  tasks_every?: TaskWhereInput | null
  tasks_some?: TaskWhereInput | null
  tasks_none?: TaskWhereInput | null
  applications_every?: ApplicationWhereInput | null
  applications_some?: ApplicationWhereInput | null
  applications_none?: ApplicationWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
  AND?: Array<CandidateWhereInput> | null
  OR?: Array<CandidateWhereInput> | null
  NOT?: Array<CandidateWhereInput> | null
}

export interface CandidateWhereUniqueInput {
  id?: ID | null
}

export interface CommentCreateInput {
  createdBy: UserCreateOneInput
  parent?: CommentCreateOneInput | null
  content: string
}

export interface CommentCreateManyInput {
  create?: Array<CommentCreateInput> | null
  connect?: Array<CommentWhereUniqueInput> | null
}

export interface CommentCreateOneInput {
  create?: CommentCreateInput | null
  connect?: CommentWhereUniqueInput | null
}

export interface CommentScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  content?: string | null
  content_not?: string | null
  content_in?: string[] | null
  content_not_in?: string[] | null
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  AND?: Array<CommentScalarWhereInput> | null
  OR?: Array<CommentScalarWhereInput> | null
  NOT?: Array<CommentScalarWhereInput> | null
}

export interface CommentUpdateDataInput {
  createdBy?: UserUpdateOneRequiredInput | null
  parent?: CommentUpdateOneInput | null
  content?: string | null
}

export interface CommentUpdateManyDataInput {
  content?: string | null
}

export interface CommentUpdateManyInput {
  create?: Array<CommentCreateInput> | null
  update?: Array<CommentUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<CommentUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<CommentWhereUniqueInput> | null
  connect?: Array<CommentWhereUniqueInput> | null
  set?: Array<CommentWhereUniqueInput> | null
  disconnect?: Array<CommentWhereUniqueInput> | null
  deleteMany?: Array<CommentScalarWhereInput> | null
  updateMany?: Array<CommentUpdateManyWithWhereNestedInput> | null
}

export interface CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput
  data: CommentUpdateManyDataInput
}

export interface CommentUpdateOneInput {
  create?: CommentCreateInput | null
  update?: CommentUpdateDataInput | null
  upsert?: CommentUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: CommentWhereUniqueInput | null
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface CommentUpsertNestedInput {
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface CommentWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdBy?: UserWhereInput | null
  parent?: CommentWhereInput | null
  content?: string | null
  content_not?: string | null
  content_in?: string[] | null
  content_not_in?: string[] | null
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  AND?: Array<CommentWhereInput> | null
  OR?: Array<CommentWhereInput> | null
  NOT?: Array<CommentWhereInput> | null
}

export interface CommentWhereUniqueInput {
  id?: ID | null
}

export interface Connect {
  connect?: WhereUniqueInput | null
}

export interface ConnectDisconnect {
  connect?: WhereUniqueInput | null
  disconnect?: WhereUniqueInput | null
}

export interface ConnectDisconnectMany {
  connect?: Array<WhereUniqueInput> | null
  disconnect?: Array<WhereUniqueInput> | null
}

export interface ConnectMany {
  connect?: Array<WhereUniqueInput> | null
}

export interface DisqualificationCreateInput {
  name: string
  description?: string | null
}

export interface DisqualificationCreateManyInput {
  create?: Array<DisqualificationCreateInput> | null
  connect?: Array<DisqualificationWhereUniqueInput> | null
}

export interface DisqualificationCreateOneInput {
  create?: DisqualificationCreateInput | null
  connect?: DisqualificationWhereUniqueInput | null
}

export interface DisqualificationInstanceCreateInput {
  prototype: DisqualificationCreateOneInput
  createdBy: UserCreateOneInput
  content?: string | null
}

export interface DisqualificationInstanceCreateOneInput {
  create?: DisqualificationInstanceCreateInput | null
  connect?: DisqualificationInstanceWhereUniqueInput | null
}

export interface DisqualificationInstanceUpdateDataInput {
  prototype?: DisqualificationUpdateOneRequiredInput | null
  createdBy?: UserUpdateOneRequiredInput | null
  content?: string | null
}

export interface DisqualificationInstanceUpdateOneInput {
  create?: DisqualificationInstanceCreateInput | null
  update?: DisqualificationInstanceUpdateDataInput | null
  upsert?: DisqualificationInstanceUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: DisqualificationInstanceWhereUniqueInput | null
}

export interface DisqualificationInstanceUpsertNestedInput {
  update: DisqualificationInstanceUpdateDataInput
  create: DisqualificationInstanceCreateInput
}

export interface DisqualificationInstanceWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  prototype?: DisqualificationWhereInput | null
  createdBy?: UserWhereInput | null
  content?: string | null
  content_not?: string | null
  content_in?: string[] | null
  content_not_in?: string[] | null
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  AND?: Array<DisqualificationInstanceWhereInput> | null
  OR?: Array<DisqualificationInstanceWhereInput> | null
  NOT?: Array<DisqualificationInstanceWhereInput> | null
}

export interface DisqualificationInstanceWhereUniqueInput {
  id?: ID | null
}

export interface DisqualificationScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: Array<DisqualificationScalarWhereInput> | null
  OR?: Array<DisqualificationScalarWhereInput> | null
  NOT?: Array<DisqualificationScalarWhereInput> | null
}

export interface DisqualificationUpdateDataInput {
  name?: string | null
  description?: string | null
}

export interface DisqualificationUpdateManyDataInput {
  name?: string | null
  description?: string | null
}

export interface DisqualificationUpdateManyInput {
  create?: Array<DisqualificationCreateInput> | null
  update?: Array<DisqualificationUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<DisqualificationUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<DisqualificationWhereUniqueInput> | null
  connect?: Array<DisqualificationWhereUniqueInput> | null
  set?: Array<DisqualificationWhereUniqueInput> | null
  disconnect?: Array<DisqualificationWhereUniqueInput> | null
  deleteMany?: Array<DisqualificationScalarWhereInput> | null
  updateMany?: Array<DisqualificationUpdateManyWithWhereNestedInput> | null
}

export interface DisqualificationUpdateManyWithWhereNestedInput {
  where: DisqualificationScalarWhereInput
  data: DisqualificationUpdateManyDataInput
}

export interface DisqualificationUpdateOneRequiredInput {
  create?: DisqualificationCreateInput | null
  update?: DisqualificationUpdateDataInput | null
  upsert?: DisqualificationUpsertNestedInput | null
  connect?: DisqualificationWhereUniqueInput | null
}

export interface DisqualificationUpdateWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput
  data: DisqualificationUpdateDataInput
}

export interface DisqualificationUpsertNestedInput {
  update: DisqualificationUpdateDataInput
  create: DisqualificationCreateInput
}

export interface DisqualificationUpsertWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput
  update: DisqualificationUpdateDataInput
  create: DisqualificationCreateInput
}

export interface DisqualificationWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: Array<DisqualificationWhereInput> | null
  OR?: Array<DisqualificationWhereInput> | null
  NOT?: Array<DisqualificationWhereInput> | null
}

export interface DisqualificationWhereUniqueInput {
  id?: ID | null
}

export interface FieldCreateInput {
  type: FieldType
  label: string
  description?: string | null
}

export interface FieldCreateManyInput {
  create?: Array<FieldCreateInput> | null
  connect?: Array<FieldWhereUniqueInput> | null
}

export interface FieldCreateOneInput {
  create?: FieldCreateInput | null
  connect?: FieldWhereUniqueInput | null
}

export interface FieldInstanceCreateInput {
  prototype: FieldCreateOneInput
  value?: string | null
}

export interface FieldInstanceCreateManyInput {
  create?: Array<FieldInstanceCreateInput> | null
  connect?: Array<FieldInstanceWhereUniqueInput> | null
}

export interface FieldInstanceScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  value?: string | null
  value_not?: string | null
  value_in?: string[] | null
  value_not_in?: string[] | null
  value_lt?: string | null
  value_lte?: string | null
  value_gt?: string | null
  value_gte?: string | null
  value_contains?: string | null
  value_not_contains?: string | null
  value_starts_with?: string | null
  value_not_starts_with?: string | null
  value_ends_with?: string | null
  value_not_ends_with?: string | null
  AND?: Array<FieldInstanceScalarWhereInput> | null
  OR?: Array<FieldInstanceScalarWhereInput> | null
  NOT?: Array<FieldInstanceScalarWhereInput> | null
}

export interface FieldInstanceUpdateDataInput {
  prototype?: FieldUpdateOneRequiredInput | null
  value?: string | null
}

export interface FieldInstanceUpdateManyDataInput {
  value?: string | null
}

export interface FieldInstanceUpdateManyInput {
  create?: Array<FieldInstanceCreateInput> | null
  update?: Array<FieldInstanceUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<FieldInstanceUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<FieldInstanceWhereUniqueInput> | null
  connect?: Array<FieldInstanceWhereUniqueInput> | null
  set?: Array<FieldInstanceWhereUniqueInput> | null
  disconnect?: Array<FieldInstanceWhereUniqueInput> | null
  deleteMany?: Array<FieldInstanceScalarWhereInput> | null
  updateMany?: Array<FieldInstanceUpdateManyWithWhereNestedInput> | null
}

export interface FieldInstanceUpdateManyWithWhereNestedInput {
  where: FieldInstanceScalarWhereInput
  data: FieldInstanceUpdateManyDataInput
}

export interface FieldInstanceUpdateWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput
  data: FieldInstanceUpdateDataInput
}

export interface FieldInstanceUpsertWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput
  update: FieldInstanceUpdateDataInput
  create: FieldInstanceCreateInput
}

export interface FieldInstanceWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  prototype?: FieldWhereInput | null
  value?: string | null
  value_not?: string | null
  value_in?: string[] | null
  value_not_in?: string[] | null
  value_lt?: string | null
  value_lte?: string | null
  value_gt?: string | null
  value_gte?: string | null
  value_contains?: string | null
  value_not_contains?: string | null
  value_starts_with?: string | null
  value_not_starts_with?: string | null
  value_ends_with?: string | null
  value_not_ends_with?: string | null
  AND?: Array<FieldInstanceWhereInput> | null
  OR?: Array<FieldInstanceWhereInput> | null
  NOT?: Array<FieldInstanceWhereInput> | null
}

export interface FieldInstanceWhereUniqueInput {
  id?: ID | null
}

export interface FieldScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: FieldType | null
  type_not?: FieldType | null
  type_in?: Array<FieldType> | null
  type_not_in?: Array<FieldType> | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: Array<FieldScalarWhereInput> | null
  OR?: Array<FieldScalarWhereInput> | null
  NOT?: Array<FieldScalarWhereInput> | null
}

export interface FieldUpdateDataInput {
  type?: FieldType | null
  label?: string | null
  description?: string | null
}

export interface FieldUpdateManyDataInput {
  type?: FieldType | null
  label?: string | null
  description?: string | null
}

export interface FieldUpdateManyInput {
  create?: Array<FieldCreateInput> | null
  update?: Array<FieldUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<FieldUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<FieldWhereUniqueInput> | null
  connect?: Array<FieldWhereUniqueInput> | null
  set?: Array<FieldWhereUniqueInput> | null
  disconnect?: Array<FieldWhereUniqueInput> | null
  deleteMany?: Array<FieldScalarWhereInput> | null
  updateMany?: Array<FieldUpdateManyWithWhereNestedInput> | null
}

export interface FieldUpdateManyWithWhereNestedInput {
  where: FieldScalarWhereInput
  data: FieldUpdateManyDataInput
}

export interface FieldUpdateOneRequiredInput {
  create?: FieldCreateInput | null
  update?: FieldUpdateDataInput | null
  upsert?: FieldUpsertNestedInput | null
  connect?: FieldWhereUniqueInput | null
}

export interface FieldUpdateWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  data: FieldUpdateDataInput
}

export interface FieldUpsertNestedInput {
  update: FieldUpdateDataInput
  create: FieldCreateInput
}

export interface FieldUpsertWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  update: FieldUpdateDataInput
  create: FieldCreateInput
}

export interface FieldWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: FieldType | null
  type_not?: FieldType | null
  type_in?: Array<FieldType> | null
  type_not_in?: Array<FieldType> | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: Array<FieldWhereInput> | null
  OR?: Array<FieldWhereInput> | null
  NOT?: Array<FieldWhereInput> | null
}

export interface FieldWhereUniqueInput {
  id?: ID | null
}

export interface FileCreateInput {
  size: number
  type: string
  name: string
  url: string
}

export interface FileCreateManyInput {
  create?: Array<FileCreateInput> | null
  connect?: Array<FileWhereUniqueInput> | null
}

export interface FileCreateOneInput {
  create?: FileCreateInput | null
  connect?: FileWhereUniqueInput | null
}

export interface FileScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  size?: number | null
  size_not?: number | null
  size_in?: number[] | null
  size_not_in?: number[] | null
  size_lt?: number | null
  size_lte?: number | null
  size_gt?: number | null
  size_gte?: number | null
  type?: string | null
  type_not?: string | null
  type_in?: string[] | null
  type_not_in?: string[] | null
  type_lt?: string | null
  type_lte?: string | null
  type_gt?: string | null
  type_gte?: string | null
  type_contains?: string | null
  type_not_contains?: string | null
  type_starts_with?: string | null
  type_not_starts_with?: string | null
  type_ends_with?: string | null
  type_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  url?: string | null
  url_not?: string | null
  url_in?: string[] | null
  url_not_in?: string[] | null
  url_lt?: string | null
  url_lte?: string | null
  url_gt?: string | null
  url_gte?: string | null
  url_contains?: string | null
  url_not_contains?: string | null
  url_starts_with?: string | null
  url_not_starts_with?: string | null
  url_ends_with?: string | null
  url_not_ends_with?: string | null
  AND?: Array<FileScalarWhereInput> | null
  OR?: Array<FileScalarWhereInput> | null
  NOT?: Array<FileScalarWhereInput> | null
}

export interface FileUpdateDataInput {
  size?: number | null
  type?: string | null
  name?: string | null
  url?: string | null
}

export interface FileUpdateManyDataInput {
  size?: number | null
  type?: string | null
  name?: string | null
  url?: string | null
}

export interface FileUpdateManyInput {
  create?: Array<FileCreateInput> | null
  update?: Array<FileUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<FileUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<FileWhereUniqueInput> | null
  connect?: Array<FileWhereUniqueInput> | null
  set?: Array<FileWhereUniqueInput> | null
  disconnect?: Array<FileWhereUniqueInput> | null
  deleteMany?: Array<FileScalarWhereInput> | null
  updateMany?: Array<FileUpdateManyWithWhereNestedInput> | null
}

export interface FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput
  data: FileUpdateManyDataInput
}

export interface FileUpdateOneInput {
  create?: FileCreateInput | null
  update?: FileUpdateDataInput | null
  upsert?: FileUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: FileWhereUniqueInput | null
}

export interface FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  data: FileUpdateDataInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface FileWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  size?: number | null
  size_not?: number | null
  size_in?: number[] | null
  size_not_in?: number[] | null
  size_lt?: number | null
  size_lte?: number | null
  size_gt?: number | null
  size_gte?: number | null
  type?: string | null
  type_not?: string | null
  type_in?: string[] | null
  type_not_in?: string[] | null
  type_lt?: string | null
  type_lte?: string | null
  type_gt?: string | null
  type_gte?: string | null
  type_contains?: string | null
  type_not_contains?: string | null
  type_starts_with?: string | null
  type_not_starts_with?: string | null
  type_ends_with?: string | null
  type_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  url?: string | null
  url_not?: string | null
  url_in?: string[] | null
  url_not_in?: string[] | null
  url_lt?: string | null
  url_lte?: string | null
  url_gt?: string | null
  url_gte?: string | null
  url_contains?: string | null
  url_not_contains?: string | null
  url_starts_with?: string | null
  url_not_starts_with?: string | null
  url_ends_with?: string | null
  url_not_ends_with?: string | null
  AND?: Array<FileWhereInput> | null
  OR?: Array<FileWhereInput> | null
  NOT?: Array<FileWhereInput> | null
}

export interface FileWhereUniqueInput {
  id?: ID | null
  url?: string | null
}

export interface InviteCreateInput {
  email: string
}

export interface InviteCreateManyInput {
  create?: Array<InviteCreateInput> | null
  connect?: Array<InviteWhereUniqueInput> | null
}

export interface InviteScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  expireAt?: DateTime | null
  expireAt_not?: DateTime | null
  expireAt_in?: Array<DateTime> | null
  expireAt_not_in?: Array<DateTime> | null
  expireAt_lt?: DateTime | null
  expireAt_lte?: DateTime | null
  expireAt_gt?: DateTime | null
  expireAt_gte?: DateTime | null
  AND?: Array<InviteScalarWhereInput> | null
  OR?: Array<InviteScalarWhereInput> | null
  NOT?: Array<InviteScalarWhereInput> | null
}

export interface InviteUpdateDataInput {
  email?: string | null
  expireAt?: DateTime | null
  invitedBy?: UserUpdateOneRequiredInput | null
}

export interface InviteUpdateManyDataInput {
  email?: string | null
  expireAt?: DateTime | null
}

export interface InviteUpdateManyInput {
  create?: Array<InviteCreateInput> | null
  update?: Array<InviteUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<InviteUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<InviteWhereUniqueInput> | null
  connect?: Array<InviteWhereUniqueInput> | null
  set?: Array<InviteWhereUniqueInput> | null
  disconnect?: Array<InviteWhereUniqueInput> | null
  deleteMany?: Array<InviteScalarWhereInput> | null
  updateMany?: Array<InviteUpdateManyWithWhereNestedInput> | null
}

export interface InviteUpdateManyWithWhereNestedInput {
  where: InviteScalarWhereInput
  data: InviteUpdateManyDataInput
}

export interface InviteUpdateWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput
  data: InviteUpdateDataInput
}

export interface InviteUpsertWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput
  update: InviteUpdateDataInput
  create: InviteCreateInput
}

export interface InviteWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  expireAt?: DateTime | null
  expireAt_not?: DateTime | null
  expireAt_in?: Array<DateTime> | null
  expireAt_not_in?: Array<DateTime> | null
  expireAt_lt?: DateTime | null
  expireAt_lte?: DateTime | null
  expireAt_gt?: DateTime | null
  expireAt_gte?: DateTime | null
  invitedBy?: UserWhereInput | null
  AND?: Array<InviteWhereInput> | null
  OR?: Array<InviteWhereInput> | null
  NOT?: Array<InviteWhereInput> | null
}

export interface InviteWhereUniqueInput {
  id?: ID | null
}

export interface JobCreateInput {
  workspace: WorkspaceCreateOneWithoutJobsInput
  applications?: ApplicationCreateManyWithoutJobInput | null
  workflow: WorkflowCreateOneWithoutJobsInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: string | null
  locations?: LocationCreateManyInput | null
  name: string
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobCreateManyWithoutWorkflowInput {
  create?: Array<JobCreateWithoutWorkflowInput> | null
  connect?: Array<JobWhereUniqueInput> | null
}

export interface JobCreateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput | null
  connect?: JobWhereUniqueInput | null
}

export interface JobCreateWithoutApplicationsInput {
  workspace: WorkspaceCreateOneWithoutJobsInput
  workflow: WorkflowCreateOneWithoutJobsInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: string | null
  locations?: LocationCreateManyInput | null
  name: string
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobCreateWithoutWorkflowInput {
  workspace: WorkspaceCreateOneWithoutJobsInput
  applications?: ApplicationCreateManyWithoutJobInput | null
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: string | null
  locations?: LocationCreateManyInput | null
  name: string
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: JobType | null
  type_not?: JobType | null
  type_in?: Array<JobType> | null
  type_not_in?: Array<JobType> | null
  department?: string | null
  department_not?: string | null
  department_in?: string[] | null
  department_not_in?: string[] | null
  department_lt?: string | null
  department_lte?: string | null
  department_gt?: string | null
  department_gte?: string | null
  department_contains?: string | null
  department_not_contains?: string | null
  department_starts_with?: string | null
  department_not_starts_with?: string | null
  department_ends_with?: string | null
  department_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  excerpt?: string | null
  excerpt_not?: string | null
  excerpt_in?: string[] | null
  excerpt_not_in?: string[] | null
  excerpt_lt?: string | null
  excerpt_lte?: string | null
  excerpt_gt?: string | null
  excerpt_gte?: string | null
  excerpt_contains?: string | null
  excerpt_not_contains?: string | null
  excerpt_starts_with?: string | null
  excerpt_not_starts_with?: string | null
  excerpt_ends_with?: string | null
  excerpt_not_ends_with?: string | null
  companyDescription?: string | null
  companyDescription_not?: string | null
  companyDescription_in?: string[] | null
  companyDescription_not_in?: string[] | null
  companyDescription_lt?: string | null
  companyDescription_lte?: string | null
  companyDescription_gt?: string | null
  companyDescription_gte?: string | null
  companyDescription_contains?: string | null
  companyDescription_not_contains?: string | null
  companyDescription_starts_with?: string | null
  companyDescription_not_starts_with?: string | null
  companyDescription_ends_with?: string | null
  companyDescription_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  requirements?: string | null
  requirements_not?: string | null
  requirements_in?: string[] | null
  requirements_not_in?: string[] | null
  requirements_lt?: string | null
  requirements_lte?: string | null
  requirements_gt?: string | null
  requirements_gte?: string | null
  requirements_contains?: string | null
  requirements_not_contains?: string | null
  requirements_starts_with?: string | null
  requirements_not_starts_with?: string | null
  requirements_ends_with?: string | null
  requirements_not_ends_with?: string | null
  AND?: Array<JobScalarWhereInput> | null
  OR?: Array<JobScalarWhereInput> | null
  NOT?: Array<JobScalarWhereInput> | null
}

export interface JobUpdateInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput | null
  applications?: ApplicationUpdateManyWithoutJobInput | null
  workflow?: WorkflowUpdateOneRequiredWithoutJobsInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: string | null
  locations?: LocationUpdateManyInput | null
  name?: string | null
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobUpdateManyDataInput {
  type?: JobType | null
  department?: string | null
  name?: string | null
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobUpdateManyMutationInput {
  type?: JobType | null
  department?: string | null
  name?: string | null
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobUpdateManyWithoutWorkflowInput {
  create?: Array<JobCreateWithoutWorkflowInput> | null
  delete?: Array<JobWhereUniqueInput> | null
  connect?: Array<JobWhereUniqueInput> | null
  set?: Array<JobWhereUniqueInput> | null
  disconnect?: Array<JobWhereUniqueInput> | null
  update?: Array<JobUpdateWithWhereUniqueWithoutWorkflowInput> | null
  upsert?: Array<JobUpsertWithWhereUniqueWithoutWorkflowInput> | null
  deleteMany?: Array<JobScalarWhereInput> | null
  updateMany?: Array<JobUpdateManyWithWhereNestedInput> | null
}

export interface JobUpdateManyWithWhereNestedInput {
  where: JobScalarWhereInput
  data: JobUpdateManyDataInput
}

export interface JobUpdateOneRequiredWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput | null
  update?: JobUpdateWithoutApplicationsDataInput | null
  upsert?: JobUpsertWithoutApplicationsInput | null
  connect?: JobWhereUniqueInput | null
}

export interface JobUpdateWithoutApplicationsDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput | null
  workflow?: WorkflowUpdateOneRequiredWithoutJobsInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: string | null
  locations?: LocationUpdateManyInput | null
  name?: string | null
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobUpdateWithoutWorkflowDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput | null
  applications?: ApplicationUpdateManyWithoutJobInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: string | null
  locations?: LocationUpdateManyInput | null
  name?: string | null
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobUpdateWithWhereUniqueWithoutWorkflowInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutWorkflowDataInput
}

export interface JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput
  create: JobCreateWithoutApplicationsInput
}

export interface JobUpsertWithWhereUniqueWithoutWorkflowInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutWorkflowDataInput
  create: JobCreateWithoutWorkflowInput
}

export interface JobWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  workspace?: WorkspaceWhereInput | null
  applications_every?: ApplicationWhereInput | null
  applications_some?: ApplicationWhereInput | null
  applications_none?: ApplicationWhereInput | null
  workflow?: WorkflowWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
  type?: JobType | null
  type_not?: JobType | null
  type_in?: Array<JobType> | null
  type_not_in?: Array<JobType> | null
  department?: string | null
  department_not?: string | null
  department_in?: string[] | null
  department_not_in?: string[] | null
  department_lt?: string | null
  department_lte?: string | null
  department_gt?: string | null
  department_gte?: string | null
  department_contains?: string | null
  department_not_contains?: string | null
  department_starts_with?: string | null
  department_not_starts_with?: string | null
  department_ends_with?: string | null
  department_not_ends_with?: string | null
  locations_every?: LocationWhereInput | null
  locations_some?: LocationWhereInput | null
  locations_none?: LocationWhereInput | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  excerpt?: string | null
  excerpt_not?: string | null
  excerpt_in?: string[] | null
  excerpt_not_in?: string[] | null
  excerpt_lt?: string | null
  excerpt_lte?: string | null
  excerpt_gt?: string | null
  excerpt_gte?: string | null
  excerpt_contains?: string | null
  excerpt_not_contains?: string | null
  excerpt_starts_with?: string | null
  excerpt_not_starts_with?: string | null
  excerpt_ends_with?: string | null
  excerpt_not_ends_with?: string | null
  companyDescription?: string | null
  companyDescription_not?: string | null
  companyDescription_in?: string[] | null
  companyDescription_not_in?: string[] | null
  companyDescription_lt?: string | null
  companyDescription_lte?: string | null
  companyDescription_gt?: string | null
  companyDescription_gte?: string | null
  companyDescription_contains?: string | null
  companyDescription_not_contains?: string | null
  companyDescription_starts_with?: string | null
  companyDescription_not_starts_with?: string | null
  companyDescription_ends_with?: string | null
  companyDescription_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  requirements?: string | null
  requirements_not?: string | null
  requirements_in?: string[] | null
  requirements_not_in?: string[] | null
  requirements_lt?: string | null
  requirements_lte?: string | null
  requirements_gt?: string | null
  requirements_gte?: string | null
  requirements_contains?: string | null
  requirements_not_contains?: string | null
  requirements_starts_with?: string | null
  requirements_not_starts_with?: string | null
  requirements_ends_with?: string | null
  requirements_not_ends_with?: string | null
  AND?: Array<JobWhereInput> | null
  OR?: Array<JobWhereInput> | null
  NOT?: Array<JobWhereInput> | null
}

export interface JobWhereUniqueInput {
  id?: ID | null
}

export interface LocationCreateInput {
  country: string
  region?: string | null
  city: string
  zip?: string | null
}

export interface LocationCreateManyInput {
  create?: Array<LocationCreateInput> | null
  connect?: Array<LocationWhereUniqueInput> | null
}

export interface LocationScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  country?: string | null
  country_not?: string | null
  country_in?: string[] | null
  country_not_in?: string[] | null
  country_lt?: string | null
  country_lte?: string | null
  country_gt?: string | null
  country_gte?: string | null
  country_contains?: string | null
  country_not_contains?: string | null
  country_starts_with?: string | null
  country_not_starts_with?: string | null
  country_ends_with?: string | null
  country_not_ends_with?: string | null
  region?: string | null
  region_not?: string | null
  region_in?: string[] | null
  region_not_in?: string[] | null
  region_lt?: string | null
  region_lte?: string | null
  region_gt?: string | null
  region_gte?: string | null
  region_contains?: string | null
  region_not_contains?: string | null
  region_starts_with?: string | null
  region_not_starts_with?: string | null
  region_ends_with?: string | null
  region_not_ends_with?: string | null
  city?: string | null
  city_not?: string | null
  city_in?: string[] | null
  city_not_in?: string[] | null
  city_lt?: string | null
  city_lte?: string | null
  city_gt?: string | null
  city_gte?: string | null
  city_contains?: string | null
  city_not_contains?: string | null
  city_starts_with?: string | null
  city_not_starts_with?: string | null
  city_ends_with?: string | null
  city_not_ends_with?: string | null
  zip?: string | null
  zip_not?: string | null
  zip_in?: string[] | null
  zip_not_in?: string[] | null
  zip_lt?: string | null
  zip_lte?: string | null
  zip_gt?: string | null
  zip_gte?: string | null
  zip_contains?: string | null
  zip_not_contains?: string | null
  zip_starts_with?: string | null
  zip_not_starts_with?: string | null
  zip_ends_with?: string | null
  zip_not_ends_with?: string | null
  AND?: Array<LocationScalarWhereInput> | null
  OR?: Array<LocationScalarWhereInput> | null
  NOT?: Array<LocationScalarWhereInput> | null
}

export interface LocationUpdateDataInput {
  country?: string | null
  region?: string | null
  city?: string | null
  zip?: string | null
}

export interface LocationUpdateManyDataInput {
  country?: string | null
  region?: string | null
  city?: string | null
  zip?: string | null
}

export interface LocationUpdateManyInput {
  create?: Array<LocationCreateInput> | null
  update?: Array<LocationUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<LocationUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<LocationWhereUniqueInput> | null
  connect?: Array<LocationWhereUniqueInput> | null
  set?: Array<LocationWhereUniqueInput> | null
  disconnect?: Array<LocationWhereUniqueInput> | null
  deleteMany?: Array<LocationScalarWhereInput> | null
  updateMany?: Array<LocationUpdateManyWithWhereNestedInput> | null
}

export interface LocationUpdateManyWithWhereNestedInput {
  where: LocationScalarWhereInput
  data: LocationUpdateManyDataInput
}

export interface LocationUpdateWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput
  data: LocationUpdateDataInput
}

export interface LocationUpsertWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface LocationWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  country?: string | null
  country_not?: string | null
  country_in?: string[] | null
  country_not_in?: string[] | null
  country_lt?: string | null
  country_lte?: string | null
  country_gt?: string | null
  country_gte?: string | null
  country_contains?: string | null
  country_not_contains?: string | null
  country_starts_with?: string | null
  country_not_starts_with?: string | null
  country_ends_with?: string | null
  country_not_ends_with?: string | null
  region?: string | null
  region_not?: string | null
  region_in?: string[] | null
  region_not_in?: string[] | null
  region_lt?: string | null
  region_lte?: string | null
  region_gt?: string | null
  region_gte?: string | null
  region_contains?: string | null
  region_not_contains?: string | null
  region_starts_with?: string | null
  region_not_starts_with?: string | null
  region_ends_with?: string | null
  region_not_ends_with?: string | null
  city?: string | null
  city_not?: string | null
  city_in?: string[] | null
  city_not_in?: string[] | null
  city_lt?: string | null
  city_lte?: string | null
  city_gt?: string | null
  city_gte?: string | null
  city_contains?: string | null
  city_not_contains?: string | null
  city_starts_with?: string | null
  city_not_starts_with?: string | null
  city_ends_with?: string | null
  city_not_ends_with?: string | null
  zip?: string | null
  zip_not?: string | null
  zip_in?: string[] | null
  zip_not_in?: string[] | null
  zip_lt?: string | null
  zip_lte?: string | null
  zip_gt?: string | null
  zip_gte?: string | null
  zip_contains?: string | null
  zip_not_contains?: string | null
  zip_starts_with?: string | null
  zip_not_starts_with?: string | null
  zip_ends_with?: string | null
  zip_not_ends_with?: string | null
  AND?: Array<LocationWhereInput> | null
  OR?: Array<LocationWhereInput> | null
  NOT?: Array<LocationWhereInput> | null
}

export interface LocationWhereUniqueInput {
  id?: ID | null
}

export interface LoginInput {
  email: string
  password: string
}

export interface RefreshInput {
  token: string
}

export interface ReviewCreateInput {
  name: string
  fields?: FieldCreateManyInput | null
}

export interface ReviewCreateManyInput {
  create?: Array<ReviewCreateInput> | null
  connect?: Array<ReviewWhereUniqueInput> | null
}

export interface ReviewCreateOneInput {
  create?: ReviewCreateInput | null
  connect?: ReviewWhereUniqueInput | null
}

export interface ReviewInstanceCreateInput {
  prototype?: ReviewCreateOneInput | null
  fields?: FieldInstanceCreateManyInput | null
  createdBy: UserCreateOneInput
  rating?: number | null
  content?: string | null
}

export interface ReviewInstanceCreateManyInput {
  create?: Array<ReviewInstanceCreateInput> | null
  connect?: Array<ReviewInstanceWhereUniqueInput> | null
}

export interface ReviewInstanceScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  rating?: number | null
  rating_not?: number | null
  rating_in?: number[] | null
  rating_not_in?: number[] | null
  rating_lt?: number | null
  rating_lte?: number | null
  rating_gt?: number | null
  rating_gte?: number | null
  content?: string | null
  content_not?: string | null
  content_in?: string[] | null
  content_not_in?: string[] | null
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  AND?: Array<ReviewInstanceScalarWhereInput> | null
  OR?: Array<ReviewInstanceScalarWhereInput> | null
  NOT?: Array<ReviewInstanceScalarWhereInput> | null
}

export interface ReviewInstanceUpdateDataInput {
  prototype?: ReviewUpdateOneInput | null
  fields?: FieldInstanceUpdateManyInput | null
  createdBy?: UserUpdateOneRequiredInput | null
  rating?: number | null
  content?: string | null
}

export interface ReviewInstanceUpdateManyDataInput {
  rating?: number | null
  content?: string | null
}

export interface ReviewInstanceUpdateManyInput {
  create?: Array<ReviewInstanceCreateInput> | null
  update?: Array<ReviewInstanceUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<ReviewInstanceUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<ReviewInstanceWhereUniqueInput> | null
  connect?: Array<ReviewInstanceWhereUniqueInput> | null
  set?: Array<ReviewInstanceWhereUniqueInput> | null
  disconnect?: Array<ReviewInstanceWhereUniqueInput> | null
  deleteMany?: Array<ReviewInstanceScalarWhereInput> | null
  updateMany?: Array<ReviewInstanceUpdateManyWithWhereNestedInput> | null
}

export interface ReviewInstanceUpdateManyWithWhereNestedInput {
  where: ReviewInstanceScalarWhereInput
  data: ReviewInstanceUpdateManyDataInput
}

export interface ReviewInstanceUpdateWithWhereUniqueNestedInput {
  where: ReviewInstanceWhereUniqueInput
  data: ReviewInstanceUpdateDataInput
}

export interface ReviewInstanceUpsertWithWhereUniqueNestedInput {
  where: ReviewInstanceWhereUniqueInput
  update: ReviewInstanceUpdateDataInput
  create: ReviewInstanceCreateInput
}

export interface ReviewInstanceWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  prototype?: ReviewWhereInput | null
  fields_every?: FieldInstanceWhereInput | null
  fields_some?: FieldInstanceWhereInput | null
  fields_none?: FieldInstanceWhereInput | null
  createdBy?: UserWhereInput | null
  rating?: number | null
  rating_not?: number | null
  rating_in?: number[] | null
  rating_not_in?: number[] | null
  rating_lt?: number | null
  rating_lte?: number | null
  rating_gt?: number | null
  rating_gte?: number | null
  content?: string | null
  content_not?: string | null
  content_in?: string[] | null
  content_not_in?: string[] | null
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  AND?: Array<ReviewInstanceWhereInput> | null
  OR?: Array<ReviewInstanceWhereInput> | null
  NOT?: Array<ReviewInstanceWhereInput> | null
}

export interface ReviewInstanceWhereUniqueInput {
  id?: ID | null
}

export interface ReviewScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: Array<ReviewScalarWhereInput> | null
  OR?: Array<ReviewScalarWhereInput> | null
  NOT?: Array<ReviewScalarWhereInput> | null
}

export interface ReviewUpdateDataInput {
  name?: string | null
  fields?: FieldUpdateManyInput | null
}

export interface ReviewUpdateManyDataInput {
  name?: string | null
}

export interface ReviewUpdateManyInput {
  create?: Array<ReviewCreateInput> | null
  update?: Array<ReviewUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<ReviewUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<ReviewWhereUniqueInput> | null
  connect?: Array<ReviewWhereUniqueInput> | null
  set?: Array<ReviewWhereUniqueInput> | null
  disconnect?: Array<ReviewWhereUniqueInput> | null
  deleteMany?: Array<ReviewScalarWhereInput> | null
  updateMany?: Array<ReviewUpdateManyWithWhereNestedInput> | null
}

export interface ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput
  data: ReviewUpdateManyDataInput
}

export interface ReviewUpdateOneInput {
  create?: ReviewCreateInput | null
  update?: ReviewUpdateDataInput | null
  upsert?: ReviewUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: ReviewWhereUniqueInput | null
}

export interface ReviewUpdateWithWhereUniqueNestedInput {
  where: ReviewWhereUniqueInput
  data: ReviewUpdateDataInput
}

export interface ReviewUpsertNestedInput {
  update: ReviewUpdateDataInput
  create: ReviewCreateInput
}

export interface ReviewUpsertWithWhereUniqueNestedInput {
  where: ReviewWhereUniqueInput
  update: ReviewUpdateDataInput
  create: ReviewCreateInput
}

export interface ReviewWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  fields_every?: FieldWhereInput | null
  fields_some?: FieldWhereInput | null
  fields_none?: FieldWhereInput | null
  AND?: Array<ReviewWhereInput> | null
  OR?: Array<ReviewWhereInput> | null
  NOT?: Array<ReviewWhereInput> | null
}

export interface ReviewWhereUniqueInput {
  id?: ID | null
}

export interface SignupInput {
  password: string
  username: string
  inviteId: ID
}

export interface SourceCreateInput {
  label: string
  description?: string | null
}

export interface SourceCreateManyInput {
  create?: Array<SourceCreateInput> | null
  connect?: Array<SourceWhereUniqueInput> | null
}

export interface SourceScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: Array<SourceScalarWhereInput> | null
  OR?: Array<SourceScalarWhereInput> | null
  NOT?: Array<SourceScalarWhereInput> | null
}

export interface SourceUpdateDataInput {
  label?: string | null
  description?: string | null
}

export interface SourceUpdateInput {
  label?: string | null
  description?: string | null
}

export interface SourceUpdateManyDataInput {
  label?: string | null
  description?: string | null
}

export interface SourceUpdateManyInput {
  create?: Array<SourceCreateInput> | null
  update?: Array<SourceUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<SourceUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<SourceWhereUniqueInput> | null
  connect?: Array<SourceWhereUniqueInput> | null
  set?: Array<SourceWhereUniqueInput> | null
  disconnect?: Array<SourceWhereUniqueInput> | null
  deleteMany?: Array<SourceScalarWhereInput> | null
  updateMany?: Array<SourceUpdateManyWithWhereNestedInput> | null
}

export interface SourceUpdateManyMutationInput {
  label?: string | null
  description?: string | null
}

export interface SourceUpdateManyWithWhereNestedInput {
  where: SourceScalarWhereInput
  data: SourceUpdateManyDataInput
}

export interface SourceUpdateWithWhereUniqueNestedInput {
  where: SourceWhereUniqueInput
  data: SourceUpdateDataInput
}

export interface SourceUpsertWithWhereUniqueNestedInput {
  where: SourceWhereUniqueInput
  update: SourceUpdateDataInput
  create: SourceCreateInput
}

export interface SourceWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: Array<SourceWhereInput> | null
  OR?: Array<SourceWhereInput> | null
  NOT?: Array<SourceWhereInput> | null
}

export interface SourceWhereUniqueInput {
  id?: ID | null
}

export interface StageCreateInput {
  name: string
  description?: string | null
  type: StageType
  index: number
}

export interface StageCreateManyInput {
  create?: Array<StageCreateInput> | null
  connect?: Array<StageWhereUniqueInput> | null
}

export interface StageCreateOneInput {
  create?: StageCreateInput | null
  connect?: StageWhereUniqueInput | null
}

export interface StageScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  type?: StageType | null
  type_not?: StageType | null
  type_in?: Array<StageType> | null
  type_not_in?: Array<StageType> | null
  index?: number | null
  index_not?: number | null
  index_in?: number[] | null
  index_not_in?: number[] | null
  index_lt?: number | null
  index_lte?: number | null
  index_gt?: number | null
  index_gte?: number | null
  AND?: Array<StageScalarWhereInput> | null
  OR?: Array<StageScalarWhereInput> | null
  NOT?: Array<StageScalarWhereInput> | null
}

export interface StageUpdateDataInput {
  name?: string | null
  description?: string | null
  type?: StageType | null
  index?: number | null
}

export interface StageUpdateManyDataInput {
  name?: string | null
  description?: string | null
  type?: StageType | null
  index?: number | null
}

export interface StageUpdateManyInput {
  create?: Array<StageCreateInput> | null
  update?: Array<StageUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<StageUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<StageWhereUniqueInput> | null
  connect?: Array<StageWhereUniqueInput> | null
  set?: Array<StageWhereUniqueInput> | null
  disconnect?: Array<StageWhereUniqueInput> | null
  deleteMany?: Array<StageScalarWhereInput> | null
  updateMany?: Array<StageUpdateManyWithWhereNestedInput> | null
}

export interface StageUpdateManyWithWhereNestedInput {
  where: StageScalarWhereInput
  data: StageUpdateManyDataInput
}

export interface StageUpdateOneRequiredInput {
  create?: StageCreateInput | null
  update?: StageUpdateDataInput | null
  upsert?: StageUpsertNestedInput | null
  connect?: StageWhereUniqueInput | null
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  data: StageUpdateDataInput
}

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface StageWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  type?: StageType | null
  type_not?: StageType | null
  type_in?: Array<StageType> | null
  type_not_in?: Array<StageType> | null
  index?: number | null
  index_not?: number | null
  index_in?: number[] | null
  index_not_in?: number[] | null
  index_lt?: number | null
  index_lte?: number | null
  index_gt?: number | null
  index_gte?: number | null
  AND?: Array<StageWhereInput> | null
  OR?: Array<StageWhereInput> | null
  NOT?: Array<StageWhereInput> | null
}

export interface StageWhereUniqueInput {
  id?: ID | null
}

export interface TagCreateInput {
  label: string
  description?: string | null
}

export interface TagCreateManyInput {
  create?: Array<TagCreateInput> | null
  connect?: Array<TagWhereUniqueInput> | null
}

export interface TagScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: Array<TagScalarWhereInput> | null
  OR?: Array<TagScalarWhereInput> | null
  NOT?: Array<TagScalarWhereInput> | null
}

export interface TagUpdateDataInput {
  label?: string | null
  description?: string | null
}

export interface TagUpdateInput {
  label?: string | null
  description?: string | null
}

export interface TagUpdateManyDataInput {
  label?: string | null
  description?: string | null
}

export interface TagUpdateManyInput {
  create?: Array<TagCreateInput> | null
  update?: Array<TagUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<TagUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<TagWhereUniqueInput> | null
  connect?: Array<TagWhereUniqueInput> | null
  set?: Array<TagWhereUniqueInput> | null
  disconnect?: Array<TagWhereUniqueInput> | null
  deleteMany?: Array<TagScalarWhereInput> | null
  updateMany?: Array<TagUpdateManyWithWhereNestedInput> | null
}

export interface TagUpdateManyMutationInput {
  label?: string | null
  description?: string | null
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput
  data: TagUpdateManyDataInput
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  data: TagUpdateDataInput
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  update: TagUpdateDataInput
  create: TagCreateInput
}

export interface TagWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: Array<TagWhereInput> | null
  OR?: Array<TagWhereInput> | null
  NOT?: Array<TagWhereInput> | null
}

export interface TagWhereUniqueInput {
  id?: ID | null
}

export interface TaskCreateInput {
  owners?: UserCreateManyWithoutTasksInput | null
  candidate?: CandidateCreateOneWithoutTasksInput | null
  title?: string | null
  description?: string | null
  dueAt?: DateTime | null
}

export interface TaskCreateManyWithoutCandidateInput {
  create?: Array<TaskCreateWithoutCandidateInput> | null
  connect?: Array<TaskWhereUniqueInput> | null
}

export interface TaskCreateManyWithoutOwnersInput {
  create?: Array<TaskCreateWithoutOwnersInput> | null
  connect?: Array<TaskWhereUniqueInput> | null
}

export interface TaskCreateWithoutCandidateInput {
  owners?: UserCreateManyWithoutTasksInput | null
  title?: string | null
  description?: string | null
  dueAt?: DateTime | null
}

export interface TaskCreateWithoutOwnersInput {
  candidate?: CandidateCreateOneWithoutTasksInput | null
  title?: string | null
  description?: string | null
  dueAt?: DateTime | null
}

export interface TaskScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  dueAt?: DateTime | null
  dueAt_not?: DateTime | null
  dueAt_in?: Array<DateTime> | null
  dueAt_not_in?: Array<DateTime> | null
  dueAt_lt?: DateTime | null
  dueAt_lte?: DateTime | null
  dueAt_gt?: DateTime | null
  dueAt_gte?: DateTime | null
  AND?: Array<TaskScalarWhereInput> | null
  OR?: Array<TaskScalarWhereInput> | null
  NOT?: Array<TaskScalarWhereInput> | null
}

export interface TaskUpdateInput {
  owners?: UserUpdateManyWithoutTasksInput | null
  candidate?: CandidateUpdateOneWithoutTasksInput | null
  title?: string | null
  description?: string | null
  dueAt?: DateTime | null
}

export interface TaskUpdateManyDataInput {
  title?: string | null
  description?: string | null
  dueAt?: DateTime | null
}

export interface TaskUpdateManyMutationInput {
  title?: string | null
  description?: string | null
  dueAt?: DateTime | null
}

export interface TaskUpdateManyWithoutCandidateInput {
  create?: Array<TaskCreateWithoutCandidateInput> | null
  delete?: Array<TaskWhereUniqueInput> | null
  connect?: Array<TaskWhereUniqueInput> | null
  set?: Array<TaskWhereUniqueInput> | null
  disconnect?: Array<TaskWhereUniqueInput> | null
  update?: Array<TaskUpdateWithWhereUniqueWithoutCandidateInput> | null
  upsert?: Array<TaskUpsertWithWhereUniqueWithoutCandidateInput> | null
  deleteMany?: Array<TaskScalarWhereInput> | null
  updateMany?: Array<TaskUpdateManyWithWhereNestedInput> | null
}

export interface TaskUpdateManyWithoutOwnersInput {
  create?: Array<TaskCreateWithoutOwnersInput> | null
  delete?: Array<TaskWhereUniqueInput> | null
  connect?: Array<TaskWhereUniqueInput> | null
  set?: Array<TaskWhereUniqueInput> | null
  disconnect?: Array<TaskWhereUniqueInput> | null
  update?: Array<TaskUpdateWithWhereUniqueWithoutOwnersInput> | null
  upsert?: Array<TaskUpsertWithWhereUniqueWithoutOwnersInput> | null
  deleteMany?: Array<TaskScalarWhereInput> | null
  updateMany?: Array<TaskUpdateManyWithWhereNestedInput> | null
}

export interface TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput
  data: TaskUpdateManyDataInput
}

export interface TaskUpdateWithoutCandidateDataInput {
  owners?: UserUpdateManyWithoutTasksInput | null
  title?: string | null
  description?: string | null
  dueAt?: DateTime | null
}

export interface TaskUpdateWithoutOwnersDataInput {
  candidate?: CandidateUpdateOneWithoutTasksInput | null
  title?: string | null
  description?: string | null
  dueAt?: DateTime | null
}

export interface TaskUpdateWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutCandidateDataInput
}

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutOwnersDataInput
}

export interface TaskUpsertWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutCandidateDataInput
  create: TaskCreateWithoutCandidateInput
}

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutOwnersDataInput
  create: TaskCreateWithoutOwnersInput
}

export interface TaskWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  owners_every?: UserWhereInput | null
  owners_some?: UserWhereInput | null
  owners_none?: UserWhereInput | null
  candidate?: CandidateWhereInput | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  dueAt?: DateTime | null
  dueAt_not?: DateTime | null
  dueAt_in?: Array<DateTime> | null
  dueAt_not_in?: Array<DateTime> | null
  dueAt_lt?: DateTime | null
  dueAt_lte?: DateTime | null
  dueAt_gt?: DateTime | null
  dueAt_gte?: DateTime | null
  AND?: Array<TaskWhereInput> | null
  OR?: Array<TaskWhereInput> | null
  NOT?: Array<TaskWhereInput> | null
}

export interface TaskWhereUniqueInput {
  id?: ID | null
}

export interface UserCreateInput {
  settings?: Json | null
  tasks?: TaskCreateManyWithoutOwnersInput | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: string | null
  avatar?: FileCreateOneInput | null
}

export interface UserCreateManyInput {
  create?: Array<UserCreateInput> | null
  connect?: Array<UserWhereUniqueInput> | null
}

export interface UserCreateManyWithoutTasksInput {
  create?: Array<UserCreateWithoutTasksInput> | null
  connect?: Array<UserWhereUniqueInput> | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutTasksInput {
  settings?: Json | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: string | null
  avatar?: FileCreateOneInput | null
}

export interface UserScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  firstName?: string | null
  firstName_not?: string | null
  firstName_in?: string[] | null
  firstName_not_in?: string[] | null
  firstName_lt?: string | null
  firstName_lte?: string | null
  firstName_gt?: string | null
  firstName_gte?: string | null
  firstName_contains?: string | null
  firstName_not_contains?: string | null
  firstName_starts_with?: string | null
  firstName_not_starts_with?: string | null
  firstName_ends_with?: string | null
  firstName_not_ends_with?: string | null
  lastName?: string | null
  lastName_not?: string | null
  lastName_in?: string[] | null
  lastName_not_in?: string[] | null
  lastName_lt?: string | null
  lastName_lte?: string | null
  lastName_gt?: string | null
  lastName_gte?: string | null
  lastName_contains?: string | null
  lastName_not_contains?: string | null
  lastName_starts_with?: string | null
  lastName_not_starts_with?: string | null
  lastName_ends_with?: string | null
  lastName_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  username?: string | null
  username_not?: string | null
  username_in?: string[] | null
  username_not_in?: string[] | null
  username_lt?: string | null
  username_lte?: string | null
  username_gt?: string | null
  username_gte?: string | null
  username_contains?: string | null
  username_not_contains?: string | null
  username_starts_with?: string | null
  username_not_starts_with?: string | null
  username_ends_with?: string | null
  username_not_ends_with?: string | null
  lastLogin?: DateTime | null
  lastLogin_not?: DateTime | null
  lastLogin_in?: Array<DateTime> | null
  lastLogin_not_in?: Array<DateTime> | null
  lastLogin_lt?: DateTime | null
  lastLogin_lte?: DateTime | null
  lastLogin_gt?: DateTime | null
  lastLogin_gte?: DateTime | null
  deletedAt?: DateTime | null
  deletedAt_not?: DateTime | null
  deletedAt_in?: Array<DateTime> | null
  deletedAt_not_in?: Array<DateTime> | null
  deletedAt_lt?: DateTime | null
  deletedAt_lte?: DateTime | null
  deletedAt_gt?: DateTime | null
  deletedAt_gte?: DateTime | null
  position?: string | null
  position_not?: string | null
  position_in?: string[] | null
  position_not_in?: string[] | null
  position_lt?: string | null
  position_lte?: string | null
  position_gt?: string | null
  position_gte?: string | null
  position_contains?: string | null
  position_not_contains?: string | null
  position_starts_with?: string | null
  position_not_starts_with?: string | null
  position_ends_with?: string | null
  position_not_ends_with?: string | null
  AND?: Array<UserScalarWhereInput> | null
  OR?: Array<UserScalarWhereInput> | null
  NOT?: Array<UserScalarWhereInput> | null
}

export interface UserUpdateDataInput {
  settings?: Json | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  username?: string | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: string | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateInput {
  settings?: Json | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  username?: string | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: string | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateManyDataInput {
  settings?: Json | null
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  username?: string | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: string | null
}

export interface UserUpdateManyInput {
  create?: Array<UserCreateInput> | null
  update?: Array<UserUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<UserUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<UserWhereUniqueInput> | null
  connect?: Array<UserWhereUniqueInput> | null
  set?: Array<UserWhereUniqueInput> | null
  disconnect?: Array<UserWhereUniqueInput> | null
  deleteMany?: Array<UserScalarWhereInput> | null
  updateMany?: Array<UserUpdateManyWithWhereNestedInput> | null
}

export interface UserUpdateManyWithoutTasksInput {
  create?: Array<UserCreateWithoutTasksInput> | null
  delete?: Array<UserWhereUniqueInput> | null
  connect?: Array<UserWhereUniqueInput> | null
  set?: Array<UserWhereUniqueInput> | null
  disconnect?: Array<UserWhereUniqueInput> | null
  update?: Array<UserUpdateWithWhereUniqueWithoutTasksInput> | null
  upsert?: Array<UserUpsertWithWhereUniqueWithoutTasksInput> | null
  deleteMany?: Array<UserScalarWhereInput> | null
  updateMany?: Array<UserUpdateManyWithWhereNestedInput> | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateWithoutTasksDataInput {
  settings?: Json | null
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  username?: string | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: string | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTasksDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTasksDataInput
  create: UserCreateWithoutTasksInput
}

export interface UserWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  tasks_every?: TaskWhereInput | null
  tasks_some?: TaskWhereInput | null
  tasks_none?: TaskWhereInput | null
  firstName?: string | null
  firstName_not?: string | null
  firstName_in?: string[] | null
  firstName_not_in?: string[] | null
  firstName_lt?: string | null
  firstName_lte?: string | null
  firstName_gt?: string | null
  firstName_gte?: string | null
  firstName_contains?: string | null
  firstName_not_contains?: string | null
  firstName_starts_with?: string | null
  firstName_not_starts_with?: string | null
  firstName_ends_with?: string | null
  firstName_not_ends_with?: string | null
  lastName?: string | null
  lastName_not?: string | null
  lastName_in?: string[] | null
  lastName_not_in?: string[] | null
  lastName_lt?: string | null
  lastName_lte?: string | null
  lastName_gt?: string | null
  lastName_gte?: string | null
  lastName_contains?: string | null
  lastName_not_contains?: string | null
  lastName_starts_with?: string | null
  lastName_not_starts_with?: string | null
  lastName_ends_with?: string | null
  lastName_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  username?: string | null
  username_not?: string | null
  username_in?: string[] | null
  username_not_in?: string[] | null
  username_lt?: string | null
  username_lte?: string | null
  username_gt?: string | null
  username_gte?: string | null
  username_contains?: string | null
  username_not_contains?: string | null
  username_starts_with?: string | null
  username_not_starts_with?: string | null
  username_ends_with?: string | null
  username_not_ends_with?: string | null
  lastLogin?: DateTime | null
  lastLogin_not?: DateTime | null
  lastLogin_in?: Array<DateTime> | null
  lastLogin_not_in?: Array<DateTime> | null
  lastLogin_lt?: DateTime | null
  lastLogin_lte?: DateTime | null
  lastLogin_gt?: DateTime | null
  lastLogin_gte?: DateTime | null
  deletedAt?: DateTime | null
  deletedAt_not?: DateTime | null
  deletedAt_in?: Array<DateTime> | null
  deletedAt_not_in?: Array<DateTime> | null
  deletedAt_lt?: DateTime | null
  deletedAt_lte?: DateTime | null
  deletedAt_gt?: DateTime | null
  deletedAt_gte?: DateTime | null
  position?: string | null
  position_not?: string | null
  position_in?: string[] | null
  position_not_in?: string[] | null
  position_lt?: string | null
  position_lte?: string | null
  position_gt?: string | null
  position_gte?: string | null
  position_contains?: string | null
  position_not_contains?: string | null
  position_starts_with?: string | null
  position_not_starts_with?: string | null
  position_ends_with?: string | null
  position_not_ends_with?: string | null
  avatar?: FileWhereInput | null
  AND?: Array<UserWhereInput> | null
  OR?: Array<UserWhereInput> | null
  NOT?: Array<UserWhereInput> | null
}

export interface UserWhereUniqueInput {
  id?: ID | null
  email?: string | null
}

export interface WhereUniqueInput {
  id: ID
}

export interface WorkflowCreateInput {
  jobs?: JobCreateManyWithoutWorkflowInput | null
  name: string
  description?: string | null
  stages?: StageCreateManyInput | null
  disqualifications?: DisqualificationCreateManyInput | null
  fields?: FieldCreateManyInput | null
  reviews?: ReviewCreateManyInput | null
}

export interface WorkflowCreateManyInput {
  create?: Array<WorkflowCreateInput> | null
  connect?: Array<WorkflowWhereUniqueInput> | null
}

export interface WorkflowCreateOneWithoutJobsInput {
  create?: WorkflowCreateWithoutJobsInput | null
  connect?: WorkflowWhereUniqueInput | null
}

export interface WorkflowCreateWithoutJobsInput {
  name: string
  description?: string | null
  stages?: StageCreateManyInput | null
  disqualifications?: DisqualificationCreateManyInput | null
  fields?: FieldCreateManyInput | null
  reviews?: ReviewCreateManyInput | null
}

export interface WorkflowScalarWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: Array<WorkflowScalarWhereInput> | null
  OR?: Array<WorkflowScalarWhereInput> | null
  NOT?: Array<WorkflowScalarWhereInput> | null
}

export interface WorkflowUpdateDataInput {
  jobs?: JobUpdateManyWithoutWorkflowInput | null
  name?: string | null
  description?: string | null
  stages?: StageUpdateManyInput | null
  disqualifications?: DisqualificationUpdateManyInput | null
  fields?: FieldUpdateManyInput | null
  reviews?: ReviewUpdateManyInput | null
}

export interface WorkflowUpdateInput {
  jobs?: JobUpdateManyWithoutWorkflowInput | null
  name?: string | null
  description?: string | null
  stages?: StageUpdateManyInput | null
  disqualifications?: DisqualificationUpdateManyInput | null
  fields?: FieldUpdateManyInput | null
  reviews?: ReviewUpdateManyInput | null
}

export interface WorkflowUpdateManyDataInput {
  name?: string | null
  description?: string | null
}

export interface WorkflowUpdateManyInput {
  create?: Array<WorkflowCreateInput> | null
  update?: Array<WorkflowUpdateWithWhereUniqueNestedInput> | null
  upsert?: Array<WorkflowUpsertWithWhereUniqueNestedInput> | null
  delete?: Array<WorkflowWhereUniqueInput> | null
  connect?: Array<WorkflowWhereUniqueInput> | null
  set?: Array<WorkflowWhereUniqueInput> | null
  disconnect?: Array<WorkflowWhereUniqueInput> | null
  deleteMany?: Array<WorkflowScalarWhereInput> | null
  updateMany?: Array<WorkflowUpdateManyWithWhereNestedInput> | null
}

export interface WorkflowUpdateManyMutationInput {
  name?: string | null
  description?: string | null
}

export interface WorkflowUpdateManyWithWhereNestedInput {
  where: WorkflowScalarWhereInput
  data: WorkflowUpdateManyDataInput
}

export interface WorkflowUpdateOneRequiredWithoutJobsInput {
  create?: WorkflowCreateWithoutJobsInput | null
  update?: WorkflowUpdateWithoutJobsDataInput | null
  upsert?: WorkflowUpsertWithoutJobsInput | null
  connect?: WorkflowWhereUniqueInput | null
}

export interface WorkflowUpdateWithoutJobsDataInput {
  name?: string | null
  description?: string | null
  stages?: StageUpdateManyInput | null
  disqualifications?: DisqualificationUpdateManyInput | null
  fields?: FieldUpdateManyInput | null
  reviews?: ReviewUpdateManyInput | null
}

export interface WorkflowUpdateWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput
  data: WorkflowUpdateDataInput
}

export interface WorkflowUpsertWithoutJobsInput {
  update: WorkflowUpdateWithoutJobsDataInput
  create: WorkflowCreateWithoutJobsInput
}

export interface WorkflowUpsertWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput
  update: WorkflowUpdateDataInput
  create: WorkflowCreateInput
}

export interface WorkflowWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  jobs_every?: JobWhereInput | null
  jobs_some?: JobWhereInput | null
  jobs_none?: JobWhereInput | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  stages_every?: StageWhereInput | null
  stages_some?: StageWhereInput | null
  stages_none?: StageWhereInput | null
  disqualifications_every?: DisqualificationWhereInput | null
  disqualifications_some?: DisqualificationWhereInput | null
  disqualifications_none?: DisqualificationWhereInput | null
  fields_every?: FieldWhereInput | null
  fields_some?: FieldWhereInput | null
  fields_none?: FieldWhereInput | null
  reviews_every?: ReviewWhereInput | null
  reviews_some?: ReviewWhereInput | null
  reviews_none?: ReviewWhereInput | null
  AND?: Array<WorkflowWhereInput> | null
  OR?: Array<WorkflowWhereInput> | null
  NOT?: Array<WorkflowWhereInput> | null
}

export interface WorkflowWhereUniqueInput {
  id?: ID | null
}

export interface WorkspaceCreateInput {
  name: string
  firstName?: string | null
  lastName?: string | null
  email: string
  username: string
  password: string
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceCreateWithoutJobsInput {
  users?: UserCreateManyInput | null
  candidates?: CandidateCreateManyInput | null
  settings?: Json | null
  workflows?: WorkflowCreateManyInput | null
  invites?: InviteCreateManyInput | null
  name: string
}

export interface WorkspaceUpdateOneRequiredWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput | null
  update?: WorkspaceUpdateWithoutJobsDataInput | null
  upsert?: WorkspaceUpsertWithoutJobsInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  users?: UserUpdateManyInput | null
  candidates?: CandidateUpdateManyInput | null
  settings?: Json | null
  workflows?: WorkflowUpdateManyInput | null
  invites?: InviteUpdateManyInput | null
  name?: string | null
}

export interface WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput
  create: WorkspaceCreateWithoutJobsInput
}

export interface WorkspaceWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: Array<ID> | null
  id_not_in?: Array<ID> | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: Array<DateTime> | null
  createdAt_not_in?: Array<DateTime> | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: Array<DateTime> | null
  updatedAt_not_in?: Array<DateTime> | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  users_every?: UserWhereInput | null
  users_some?: UserWhereInput | null
  users_none?: UserWhereInput | null
  jobs_every?: JobWhereInput | null
  jobs_some?: JobWhereInput | null
  jobs_none?: JobWhereInput | null
  candidates_every?: CandidateWhereInput | null
  candidates_some?: CandidateWhereInput | null
  candidates_none?: CandidateWhereInput | null
  workflows_every?: WorkflowWhereInput | null
  workflows_some?: WorkflowWhereInput | null
  workflows_none?: WorkflowWhereInput | null
  invites_every?: InviteWhereInput | null
  invites_some?: InviteWhereInput | null
  invites_none?: InviteWhereInput | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: Array<WorkspaceWhereInput> | null
  OR?: Array<WorkspaceWhereInput> | null
  NOT?: Array<WorkspaceWhereInput> | null
}

export interface WorkspaceWhereUniqueInput {
  id?: ID | null
}

/* OBJECT TYPES */

export interface AccessPayload {
  token: string
}

export interface AggregateApplication {
  count: number
}

export interface AggregateCandidate {
  count: number
}

export interface AggregateJob {
  count: number
}

export interface AggregateSource {
  count: number
}

export interface AggregateTag {
  count: number
}

export interface AggregateTask {
  count: number
}

export interface AggregateUser {
  count: number
}

export interface AggregateWorkflow {
  count: number
}

export interface Application {
  createdAt: DateTime
  id: ID
  updatedAt: DateTime
  type: ApplicationType
  disqualification?: DisqualificationInstance | null
  stage: Stage
  reviews?: Array<ReviewInstance> | null
  job: Job
  candidate: Candidate
}

export interface ApplicationConnection {
  pageInfo: PageInfo
  edges: Array<ApplicationEdge | null>
  aggregate: AggregateApplication
}

export interface ApplicationEdge {
  node: Application
  cursor: string
}

export interface AuthPayload {
  token: string
  refresh: string
}

export interface BatchPayload {
  count: number
}

export interface Candidate {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  firstName?: string | null
  lastName?: string | null
  emails: string[]
  phones: string[]
  links: string[]
  avatar?: File | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString: string[]
  resumesFile?: Array<File> | null
  coverLettersString: string[]
  coverLettersFile?: Array<File> | null
  tags?: Array<Tag> | null
  sources?: Array<Source> | null
  fields?: Array<FieldInstance> | null
  tasks?: Array<Task> | null
  applications?: Array<Application> | null
  comments?: Array<Comment> | null
}

export interface CandidateConnection {
  pageInfo: PageInfo
  edges: Array<CandidateEdge | null>
  aggregate: AggregateCandidate
}

export interface CandidateEdge {
  node: Candidate
  cursor: string
}

export interface Comment {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  parent?: Comment | null
  content: string
}

export interface Disqualification {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  name: string
  description?: string | null
}

export interface DisqualificationInstance {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  prototype: Disqualification
  createdBy: User
  content?: string | null
}

export interface Field {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  type: FieldType
  label: string
  description?: string | null
}

export interface FieldInstance {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  prototype: Field
  value?: string | null
}

export interface File {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  size: number
  type: string
  name: string
  url: string
}

export interface Invite {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  email: string
  expireAt: DateTime
  invitedBy: User
}

export interface Job {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  applications?: Array<Application> | null
  workflow: Workflow
  comments?: Array<Comment> | null
  type: JobType
  department?: string | null
  locations?: Array<Location> | null
  name: string
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobConnection {
  pageInfo: PageInfo
  edges: Array<JobEdge | null>
  aggregate: AggregateJob
}

export interface JobEdge {
  node: Job
  cursor: string
}

export interface Location {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  country: string
  region?: string | null
  city: string
  zip?: string | null
}

export interface Mutation {
  createApplication: Application
  updateApplication?: Application | null
  updateManyApplications: BatchPayload
  upsertApplication: Application
  deleteApplication?: Application | null
  deleteManyApplications: BatchPayload
  createCandidate: Candidate
  updateCandidate?: Candidate | null
  updateManyCandidates: BatchPayload
  upsertCandidate: Candidate
  deleteCandidate?: Candidate | null
  deleteManyCandidates: BatchPayload
  createJob: Job
  updateJob?: Job | null
  updateManyJobs: BatchPayload
  upsertJob: Job
  deleteJob?: Job | null
  deleteManyJobs: BatchPayload
  createSource: Source
  updateSource?: Source | null
  updateManySources: BatchPayload
  upsertSource: Source
  deleteSource?: Source | null
  deleteManySources: BatchPayload
  createTag: Tag
  updateTag?: Tag | null
  updateManyTags: BatchPayload
  upsertTag: Tag
  deleteTag?: Tag | null
  deleteManyTags: BatchPayload
  createTask: Task
  updateTask?: Task | null
  updateManyTasks: BatchPayload
  upsertTask: Task
  deleteTask?: Task | null
  deleteManyTasks: BatchPayload
  updateUser?: User | null
  createWorkflow: Workflow
  updateWorkflow?: Workflow | null
  updateManyWorkflows: BatchPayload
  upsertWorkflow: Workflow
  deleteWorkflow?: Workflow | null
  deleteManyWorkflows: BatchPayload
}

export interface PageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor?: string | null
  endCursor?: string | null
}

export interface Query {
  application?: Application | null
  applications: Array<Application | null>
  applicationsConnection: ApplicationConnection
  candidate?: Candidate | null
  candidates: Array<Candidate | null>
  candidatesConnection: CandidateConnection
  job?: Job | null
  jobs: Array<Job | null>
  jobsConnection: JobConnection
  source?: Source | null
  sources: Array<Source | null>
  sourcesConnection: SourceConnection
  tag?: Tag | null
  tags: Array<Tag | null>
  tagsConnection: TagConnection
  task?: Task | null
  tasks: Array<Task | null>
  tasksConnection: TaskConnection
  user?: User | null
  users: Array<User | null>
  usersConnection: UserConnection
  workflow?: Workflow | null
  workflows: Array<Workflow | null>
  workflowsConnection: WorkflowConnection
}

export interface Review {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  name: string
  fields?: Array<Field> | null
}

export interface ReviewInstance {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  prototype?: Review | null
  fields?: Array<FieldInstance> | null
  createdBy: User
  rating?: number | null
  content?: string | null
}

export interface Source {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  label: string
  description?: string | null
}

export interface SourceConnection {
  pageInfo: PageInfo
  edges: Array<SourceEdge | null>
  aggregate: AggregateSource
}

export interface SourceEdge {
  node: Source
  cursor: string
}

export interface Stage {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  name: string
  description?: string | null
  type: StageType
  index: number
}

export interface Tag {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  label: string
  description?: string | null
}

export interface TagConnection {
  pageInfo: PageInfo
  edges: Array<TagEdge | null>
  aggregate: AggregateTag
}

export interface TagEdge {
  node: Tag
  cursor: string
}

export interface Task {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  owners?: Array<User> | null
  candidate?: Candidate | null
  title?: string | null
  description?: string | null
  dueAt?: DateTime | null
}

export interface TaskConnection {
  pageInfo: PageInfo
  edges: Array<TaskEdge | null>
  aggregate: AggregateTask
}

export interface TaskEdge {
  node: Task
  cursor: string
}

export interface User {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  settings?: Json | null
  tasks?: Array<Task> | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: string | null
  avatar?: File | null
}

export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

export interface UserEdge {
  node: User
  cursor: string
}

export interface Workflow {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  jobs?: Array<Job> | null
  name: string
  description?: string | null
  stages?: Array<Stage> | null
  disqualifications?: Array<Disqualification> | null
  fields?: Array<Field> | null
  reviews?: Array<Review> | null
}

export interface WorkflowConnection {
  pageInfo: PageInfo
  edges: Array<WorkflowEdge | null>
  aggregate: AggregateWorkflow
}

export interface WorkflowEdge {
  node: Workflow
  cursor: string
}

export interface Workspace {
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  users?: Array<User> | null
  jobs?: Array<Job> | null
  candidates?: Array<Candidate> | null
  settings?: Json | null
  workflows?: Array<Workflow> | null
  invites?: Array<Invite> | null
  name: string
}
