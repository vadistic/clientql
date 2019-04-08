/* SCALAR TYPES */ 

export type ID = string

export type DateTime = string

export type Json = any

export type Long = any

/* CLIENT TYPES */ 

export interface AccessPayloadClient {
  token: () => Promise<string | null>
}

export interface AggregateApplicationClient {
  count: () => Promise<number | null>
}

export interface AggregateCandidateClient {
  count: () => Promise<number | null>
}

export interface AggregateJobClient {
  count: () => Promise<number | null>
}

export interface AggregateSourceClient {
  count: () => Promise<number | null>
}

export interface AggregateTagClient {
  count: () => Promise<number | null>
}

export interface AggregateTaskClient {
  count: () => Promise<number | null>
}

export interface AggregateUserClient {
  count: () => Promise<number | null>
}

export interface AggregateWorkflowClient {
  count: () => Promise<number | null>
}

export interface ApplicationClient {
  createdAt: () => Promise<DateTime | null>
  id: () => Promise<ID | null>
  updatedAt: () => Promise<DateTime | null>
  type: () => Promise<ApplicationType | null>
  disqualification: () => Promise<DisqualificationInstance> & DisqualificationInstanceClient
  stage: () => Promise<Stage | null> & StageClient
  reviews: (args: {
    where: ReviewInstanceWhereInput
    orderBy: ReviewInstanceOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<ReviewInstance>> & ReviewInstanceClient
  job: () => Promise<Job | null> & JobClient
  candidate: () => Promise<Candidate | null> & CandidateClient
}

export interface ApplicationConnectionClient {
  pageInfo: () => Promise<PageInfo | null> & PageInfoClient
  edges: () => Promise<Array<ApplicationEdge | null> | null> & ApplicationEdgeClient
  aggregate: () => Promise<AggregateApplication | null> & AggregateApplicationClient
}

export interface ApplicationEdgeClient {
  node: () => Promise<Application | null> & ApplicationClient
  cursor: () => Promise<string | null>
}

export interface AuthPayloadClient {
  token: () => Promise<string | null>
  refresh: () => Promise<string | null>
}

export interface BatchPayloadClient {
  count: () => Promise<number | null>
}

export interface CandidateClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  firstName: () => Promise<string>
  lastName: () => Promise<string>
  emails: () => Promise<string[] | null>
  phones: () => Promise<string[] | null>
  links: () => Promise<string[] | null>
  avatar: () => Promise<File> & FileClient
  company: () => Promise<string>
  headline: () => Promise<string>
  position: () => Promise<string>
  resumesString: () => Promise<string[] | null>
  resumesFile: (args: {
    where: FileWhereInput
    orderBy: FileOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<File>> & FileClient
  coverLettersString: () => Promise<string[] | null>
  coverLettersFile: (args: {
    where: FileWhereInput
    orderBy: FileOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<File>> & FileClient
  tags: (args: {
    where: TagWhereInput
    orderBy: TagOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Tag>> & TagClient
  sources: (args: {
    where: SourceWhereInput
    orderBy: SourceOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Source>> & SourceClient
  fields: (args: {
    where: FieldInstanceWhereInput
    orderBy: FieldInstanceOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<FieldInstance>> & FieldInstanceClient
  tasks: (args: {
    where: TaskWhereInput
    orderBy: TaskOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Task>> & TaskClient
  applications: (args: {
    where: ApplicationWhereInput
    orderBy: ApplicationOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Application>> & ApplicationClient
  comments: (args: {
    where: CommentWhereInput
    orderBy: CommentOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Comment>> & CommentClient
}

export interface CandidateConnectionClient {
  pageInfo: () => Promise<PageInfo | null> & PageInfoClient
  edges: () => Promise<Array<CandidateEdge | null> | null> & CandidateEdgeClient
  aggregate: () => Promise<AggregateCandidate | null> & AggregateCandidateClient
}

export interface CandidateEdgeClient {
  node: () => Promise<Candidate | null> & CandidateClient
  cursor: () => Promise<string | null>
}

export interface CommentClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  createdBy: () => Promise<User | null> & UserClient
  parent: () => Promise<Comment> & CommentClient
  content: () => Promise<string | null>
}

export interface DisqualificationClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  name: () => Promise<string | null>
  description: () => Promise<string>
}

export interface DisqualificationInstanceClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  prototype: () => Promise<Disqualification | null> & DisqualificationClient
  createdBy: () => Promise<User | null> & UserClient
  content: () => Promise<string>
}

export interface FieldClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  type: () => Promise<FieldType | null>
  label: () => Promise<string | null>
  description: () => Promise<string>
}

export interface FieldInstanceClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  prototype: () => Promise<Field | null> & FieldClient
  value: () => Promise<string>
}

export interface FileClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  size: () => Promise<number | null>
  type: () => Promise<string | null>
  name: () => Promise<string | null>
  url: () => Promise<string | null>
}

export interface InviteClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  email: () => Promise<string | null>
  expireAt: () => Promise<DateTime | null>
  invitedBy: () => Promise<User | null> & UserClient
}

export interface JobClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  workspace: () => Promise<Workspace | null> & WorkspaceClient
  applications: (args: {
    where: ApplicationWhereInput
    orderBy: ApplicationOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Application>> & ApplicationClient
  workflow: () => Promise<Workflow | null> & WorkflowClient
  comments: (args: {
    where: CommentWhereInput
    orderBy: CommentOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Comment>> & CommentClient
  type: () => Promise<JobType | null>
  department: () => Promise<string>
  locations: (args: {
    where: LocationWhereInput
    orderBy: LocationOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Location>> & LocationClient
  name: () => Promise<string | null>
  excerpt: () => Promise<string>
  companyDescription: () => Promise<string>
  description: () => Promise<string>
  requirements: () => Promise<string>
}

export interface JobConnectionClient {
  pageInfo: () => Promise<PageInfo | null> & PageInfoClient
  edges: () => Promise<Array<JobEdge | null> | null> & JobEdgeClient
  aggregate: () => Promise<AggregateJob | null> & AggregateJobClient
}

export interface JobEdgeClient {
  node: () => Promise<Job | null> & JobClient
  cursor: () => Promise<string | null>
}

export interface LocationClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  country: () => Promise<string | null>
  region: () => Promise<string>
  city: () => Promise<string | null>
  zip: () => Promise<string>
}

export interface PageInfoClient {
  hasNextPage: () => Promise<boolean | null>
  hasPreviousPage: () => Promise<boolean | null>
  startCursor: () => Promise<string>
  endCursor: () => Promise<string>
}

export interface ReviewClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  name: () => Promise<string | null>
  fields: (args: {
    where: FieldWhereInput
    orderBy: FieldOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Field>> & FieldClient
}

export interface ReviewInstanceClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  prototype: () => Promise<Review> & ReviewClient
  fields: (args: {
    where: FieldInstanceWhereInput
    orderBy: FieldInstanceOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<FieldInstance>> & FieldInstanceClient
  createdBy: () => Promise<User | null> & UserClient
  rating: () => Promise<number>
  content: () => Promise<string>
}

export interface SourceClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  label: () => Promise<string | null>
  description: () => Promise<string>
}

export interface SourceConnectionClient {
  pageInfo: () => Promise<PageInfo | null> & PageInfoClient
  edges: () => Promise<Array<SourceEdge | null> | null> & SourceEdgeClient
  aggregate: () => Promise<AggregateSource | null> & AggregateSourceClient
}

export interface SourceEdgeClient {
  node: () => Promise<Source | null> & SourceClient
  cursor: () => Promise<string | null>
}

export interface StageClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  name: () => Promise<string | null>
  description: () => Promise<string>
  type: () => Promise<StageType | null>
  index: () => Promise<number | null>
}

export interface TagClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  label: () => Promise<string | null>
  description: () => Promise<string>
}

export interface TagConnectionClient {
  pageInfo: () => Promise<PageInfo | null> & PageInfoClient
  edges: () => Promise<Array<TagEdge | null> | null> & TagEdgeClient
  aggregate: () => Promise<AggregateTag | null> & AggregateTagClient
}

export interface TagEdgeClient {
  node: () => Promise<Tag | null> & TagClient
  cursor: () => Promise<string | null>
}

export interface TaskClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  owners: (args: {
    where: UserWhereInput
    orderBy: UserOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<User>> & UserClient
  candidate: () => Promise<Candidate> & CandidateClient
  title: () => Promise<string>
  description: () => Promise<string>
  dueAt: () => Promise<DateTime>
}

export interface TaskConnectionClient {
  pageInfo: () => Promise<PageInfo | null> & PageInfoClient
  edges: () => Promise<Array<TaskEdge | null> | null> & TaskEdgeClient
  aggregate: () => Promise<AggregateTask | null> & AggregateTaskClient
}

export interface TaskEdgeClient {
  node: () => Promise<Task | null> & TaskClient
  cursor: () => Promise<string | null>
}

export interface UserClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  settings: () => Promise<Json>
  tasks: (args: {
    where: TaskWhereInput
    orderBy: TaskOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Task>> & TaskClient
  firstName: () => Promise<string | null>
  lastName: () => Promise<string | null>
  email: () => Promise<string | null>
  username: () => Promise<string | null>
  lastLogin: () => Promise<DateTime>
  deletedAt: () => Promise<DateTime>
  position: () => Promise<string>
  avatar: () => Promise<File> & FileClient
}

export interface UserConnectionClient {
  pageInfo: () => Promise<PageInfo | null> & PageInfoClient
  edges: () => Promise<Array<UserEdge | null> | null> & UserEdgeClient
  aggregate: () => Promise<AggregateUser | null> & AggregateUserClient
}

export interface UserEdgeClient {
  node: () => Promise<User | null> & UserClient
  cursor: () => Promise<string | null>
}

export interface WorkflowClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  jobs: (args: {
    where: JobWhereInput
    orderBy: JobOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Job>> & JobClient
  name: () => Promise<string | null>
  description: () => Promise<string>
  stages: (args: {
    where: StageWhereInput
    orderBy: StageOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Stage>> & StageClient
  disqualifications: (args: {
    where: DisqualificationWhereInput
    orderBy: DisqualificationOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Disqualification>> & DisqualificationClient
  fields: (args: {
    where: FieldWhereInput
    orderBy: FieldOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Field>> & FieldClient
  reviews: (args: {
    where: ReviewWhereInput
    orderBy: ReviewOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Review>> & ReviewClient
}

export interface WorkflowConnectionClient {
  pageInfo: () => Promise<PageInfo | null> & PageInfoClient
  edges: () => Promise<Array<WorkflowEdge | null> | null> & WorkflowEdgeClient
  aggregate: () => Promise<AggregateWorkflow | null> & AggregateWorkflowClient
}

export interface WorkflowEdgeClient {
  node: () => Promise<Workflow | null> & WorkflowClient
  cursor: () => Promise<string | null>
}

export interface WorkspaceClient {
  id: () => Promise<ID | null>
  createdAt: () => Promise<DateTime | null>
  updatedAt: () => Promise<DateTime | null>
  users: (args: {
    where: UserWhereInput
    orderBy: UserOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<User>> & UserClient
  jobs: (args: {
    where: JobWhereInput
    orderBy: JobOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Job>> & JobClient
  candidates: (args: {
    where: CandidateWhereInput
    orderBy: CandidateOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Candidate>> & CandidateClient
  settings: () => Promise<Json>
  workflows: (args: {
    where: WorkflowWhereInput
    orderBy: WorkflowOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Workflow>> & WorkflowClient
  invites: (args: {
    where: InviteWhereInput
    orderBy: InviteOrderByInput
    skip: number
    after: string
    before: string
    first: number
    last: number
  }) => Promise<Array<Invite>> & InviteClient
  name: () => Promise<string | null>
}

/* OBJECT TYPES */ 

export interface AccessPayload {
  token?: string | null
}

export interface AggregateApplication {
  count?: number | null
}

export interface AggregateCandidate {
  count?: number | null
}

export interface AggregateJob {
  count?: number | null
}

export interface AggregateSource {
  count?: number | null
}

export interface AggregateTag {
  count?: number | null
}

export interface AggregateTask {
  count?: number | null
}

export interface AggregateUser {
  count?: number | null
}

export interface AggregateWorkflow {
  count?: number | null
}

export interface Application {
  createdAt?: DateTime | null
  id?: ID | null
  updatedAt?: DateTime | null
  type?: ApplicationType | null
  disqualification: DisqualificationInstance
  stage?: Stage | null
  reviews: Array<ReviewInstance>
  job?: Job | null
  candidate?: Candidate | null
}

export interface ApplicationConnection {
  pageInfo?: PageInfo | null
  edges?: Array<ApplicationEdge | null> | null
  aggregate?: AggregateApplication | null
}

export interface ApplicationEdge {
  node?: Application | null
  cursor?: string | null
}

export interface AuthPayload {
  token?: string | null
  refresh?: string | null
}

export interface BatchPayload {
  count?: number | null
}

export interface Candidate {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  firstName: string
  lastName: string
  emails?: string[] | null
  phones?: string[] | null
  links?: string[] | null
  avatar: File
  company: string
  headline: string
  position: string
  resumesString?: string[] | null
  resumesFile: Array<File>
  coverLettersString?: string[] | null
  coverLettersFile: Array<File>
  tags: Array<Tag>
  sources: Array<Source>
  fields: Array<FieldInstance>
  tasks: Array<Task>
  applications: Array<Application>
  comments: Array<Comment>
}

export interface CandidateConnection {
  pageInfo?: PageInfo | null
  edges?: Array<CandidateEdge | null> | null
  aggregate?: AggregateCandidate | null
}

export interface CandidateEdge {
  node?: Candidate | null
  cursor?: string | null
}

export interface Comment {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  createdBy?: User | null
  parent: Comment
  content?: string | null
}

export interface Disqualification {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  name?: string | null
  description: string
}

export interface DisqualificationInstance {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  prototype?: Disqualification | null
  createdBy?: User | null
  content: string
}

export interface Field {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  type?: FieldType | null
  label?: string | null
  description: string
}

export interface FieldInstance {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  prototype?: Field | null
  value: string
}

export interface File {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  size?: number | null
  type?: string | null
  name?: string | null
  url?: string | null
}

export interface Invite {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  email?: string | null
  expireAt?: DateTime | null
  invitedBy?: User | null
}

export interface Job {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  workspace?: Workspace | null
  applications: Array<Application>
  workflow?: Workflow | null
  comments: Array<Comment>
  type?: JobType | null
  department: string
  locations: Array<Location>
  name?: string | null
  excerpt: string
  companyDescription: string
  description: string
  requirements: string
}

export interface JobConnection {
  pageInfo?: PageInfo | null
  edges?: Array<JobEdge | null> | null
  aggregate?: AggregateJob | null
}

export interface JobEdge {
  node?: Job | null
  cursor?: string | null
}

export interface Location {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  country?: string | null
  region: string
  city?: string | null
  zip: string
}

export interface PageInfo {
  hasNextPage?: boolean | null
  hasPreviousPage?: boolean | null
  startCursor: string
  endCursor: string
}

export interface Review {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  name?: string | null
  fields: Array<Field>
}

export interface ReviewInstance {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  prototype: Review
  fields: Array<FieldInstance>
  createdBy?: User | null
  rating: number
  content: string
}

export interface Source {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  label?: string | null
  description: string
}

export interface SourceConnection {
  pageInfo?: PageInfo | null
  edges?: Array<SourceEdge | null> | null
  aggregate?: AggregateSource | null
}

export interface SourceEdge {
  node?: Source | null
  cursor?: string | null
}

export interface Stage {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  name?: string | null
  description: string
  type?: StageType | null
  index?: number | null
}

export interface Tag {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  label?: string | null
  description: string
}

export interface TagConnection {
  pageInfo?: PageInfo | null
  edges?: Array<TagEdge | null> | null
  aggregate?: AggregateTag | null
}

export interface TagEdge {
  node?: Tag | null
  cursor?: string | null
}

export interface Task {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  owners: Array<User>
  candidate: Candidate
  title: string
  description: string
  dueAt: DateTime
}

export interface TaskConnection {
  pageInfo?: PageInfo | null
  edges?: Array<TaskEdge | null> | null
  aggregate?: AggregateTask | null
}

export interface TaskEdge {
  node?: Task | null
  cursor?: string | null
}

export interface User {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  settings: Json
  tasks: Array<Task>
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  username?: string | null
  lastLogin: DateTime
  deletedAt: DateTime
  position: string
  avatar: File
}

export interface UserConnection {
  pageInfo?: PageInfo | null
  edges?: Array<UserEdge | null> | null
  aggregate?: AggregateUser | null
}

export interface UserEdge {
  node?: User | null
  cursor?: string | null
}

export interface Workflow {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  jobs: Array<Job>
  name?: string | null
  description: string
  stages: Array<Stage>
  disqualifications: Array<Disqualification>
  fields: Array<Field>
  reviews: Array<Review>
}

export interface WorkflowConnection {
  pageInfo?: PageInfo | null
  edges?: Array<WorkflowEdge | null> | null
  aggregate?: AggregateWorkflow | null
}

export interface WorkflowEdge {
  node?: Workflow | null
  cursor?: string | null
}

export interface Workspace {
  id?: ID | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  users: Array<User>
  jobs: Array<Job>
  candidates: Array<Candidate>
  settings: Json
  workflows: Array<Workflow>
  invites: Array<Invite>
  name?: string | null
}

/* INPUT OBJECT TYPES */ 

export interface ApplicationCreateInput {
  type?: ApplicationType | null
  disqualification: DisqualificationInstanceCreateOneInput
  stage?: StageCreateOneInput | null
  reviews: ReviewInstanceCreateManyInput
  job?: JobCreateOneWithoutApplicationsInput | null
  candidate?: CandidateCreateOneWithoutApplicationsInput | null
}

export interface ApplicationCreateManyWithoutCandidateInput {
  create: Array<ApplicationCreateWithoutCandidateInput>
  connect: Array<ApplicationWhereUniqueInput>
}

export interface ApplicationCreateManyWithoutJobInput {
  create: Array<ApplicationCreateWithoutJobInput>
  connect: Array<ApplicationWhereUniqueInput>
}

export interface ApplicationCreateWithoutCandidateInput {
  type?: ApplicationType | null
  disqualification: DisqualificationInstanceCreateOneInput
  stage?: StageCreateOneInput | null
  reviews: ReviewInstanceCreateManyInput
  job?: JobCreateOneWithoutApplicationsInput | null
}

export interface ApplicationCreateWithoutJobInput {
  type?: ApplicationType | null
  disqualification: DisqualificationInstanceCreateOneInput
  stage?: StageCreateOneInput | null
  reviews: ReviewInstanceCreateManyInput
  candidate?: CandidateCreateOneWithoutApplicationsInput | null
}

export interface ApplicationScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: ApplicationType
  type_not: ApplicationType
  type_in: Array<ApplicationType>
  type_not_in: Array<ApplicationType>
  AND: Array<ApplicationScalarWhereInput>
  OR: Array<ApplicationScalarWhereInput>
  NOT: Array<ApplicationScalarWhereInput>
}

export interface ApplicationUpdateInput {
  type: ApplicationType
  disqualification: DisqualificationInstanceUpdateOneInput
  stage: StageUpdateOneRequiredInput
  reviews: ReviewInstanceUpdateManyInput
  job: JobUpdateOneRequiredWithoutApplicationsInput
  candidate: CandidateUpdateOneRequiredWithoutApplicationsInput
}

export interface ApplicationUpdateManyDataInput {
  type: ApplicationType
}

export interface ApplicationUpdateManyMutationInput {
  type: ApplicationType
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create: Array<ApplicationCreateWithoutCandidateInput>
  delete: Array<ApplicationWhereUniqueInput>
  connect: Array<ApplicationWhereUniqueInput>
  set: Array<ApplicationWhereUniqueInput>
  disconnect: Array<ApplicationWhereUniqueInput>
  update: Array<ApplicationUpdateWithWhereUniqueWithoutCandidateInput>
  upsert: Array<ApplicationUpsertWithWhereUniqueWithoutCandidateInput>
  deleteMany: Array<ApplicationScalarWhereInput>
  updateMany: Array<ApplicationUpdateManyWithWhereNestedInput>
}

export interface ApplicationUpdateManyWithoutJobInput {
  create: Array<ApplicationCreateWithoutJobInput>
  delete: Array<ApplicationWhereUniqueInput>
  connect: Array<ApplicationWhereUniqueInput>
  set: Array<ApplicationWhereUniqueInput>
  disconnect: Array<ApplicationWhereUniqueInput>
  update: Array<ApplicationUpdateWithWhereUniqueWithoutJobInput>
  upsert: Array<ApplicationUpsertWithWhereUniqueWithoutJobInput>
  deleteMany: Array<ApplicationScalarWhereInput>
  updateMany: Array<ApplicationUpdateManyWithWhereNestedInput>
}

export interface ApplicationUpdateManyWithWhereNestedInput {
  where?: ApplicationScalarWhereInput | null
  data?: ApplicationUpdateManyDataInput | null
}

export interface ApplicationUpdateWithoutCandidateDataInput {
  type: ApplicationType
  disqualification: DisqualificationInstanceUpdateOneInput
  stage: StageUpdateOneRequiredInput
  reviews: ReviewInstanceUpdateManyInput
  job: JobUpdateOneRequiredWithoutApplicationsInput
}

export interface ApplicationUpdateWithoutJobDataInput {
  type: ApplicationType
  disqualification: DisqualificationInstanceUpdateOneInput
  stage: StageUpdateOneRequiredInput
  reviews: ReviewInstanceUpdateManyInput
  candidate: CandidateUpdateOneRequiredWithoutApplicationsInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where?: ApplicationWhereUniqueInput | null
  data?: ApplicationUpdateWithoutCandidateDataInput | null
}

export interface ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where?: ApplicationWhereUniqueInput | null
  data?: ApplicationUpdateWithoutJobDataInput | null
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where?: ApplicationWhereUniqueInput | null
  update?: ApplicationUpdateWithoutCandidateDataInput | null
  create?: ApplicationCreateWithoutCandidateInput | null
}

export interface ApplicationUpsertWithWhereUniqueWithoutJobInput {
  where?: ApplicationWhereUniqueInput | null
  update?: ApplicationUpdateWithoutJobDataInput | null
  create?: ApplicationCreateWithoutJobInput | null
}

export interface ApplicationWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: ApplicationType
  type_not: ApplicationType
  type_in: Array<ApplicationType>
  type_not_in: Array<ApplicationType>
  disqualification: DisqualificationInstanceWhereInput
  stage: StageWhereInput
  reviews_every: ReviewInstanceWhereInput
  reviews_some: ReviewInstanceWhereInput
  reviews_none: ReviewInstanceWhereInput
  job: JobWhereInput
  candidate: CandidateWhereInput
  AND: Array<ApplicationWhereInput>
  OR: Array<ApplicationWhereInput>
  NOT: Array<ApplicationWhereInput>
}

export interface ApplicationWhereUniqueInput {
  id: ID
}

export interface CandidateCreatecoverLettersStringInput {
  set: string[]
}

export interface CandidateCreateemailsInput {
  set: string[]
}

export interface CandidateCreateInput {
  firstName: string
  lastName: string
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  company: string
  headline: string
  position: string
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  sources: SourceCreateManyInput
  fields: FieldInstanceCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

export interface CandidateCreatelinksInput {
  set: string[]
}

export interface CandidateCreateManyInput {
  create: Array<CandidateCreateInput>
  connect: Array<CandidateWhereUniqueInput>
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  connect: CandidateWhereUniqueInput
}

export interface CandidateCreateOneWithoutTasksInput {
  create: CandidateCreateWithoutTasksInput
  connect: CandidateWhereUniqueInput
}

export interface CandidateCreatephonesInput {
  set: string[]
}

export interface CandidateCreateresumesStringInput {
  set: string[]
}

export interface CandidateCreateWithoutApplicationsInput {
  firstName: string
  lastName: string
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  company: string
  headline: string
  position: string
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  sources: SourceCreateManyInput
  fields: FieldInstanceCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

export interface CandidateCreateWithoutTasksInput {
  firstName: string
  lastName: string
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  company: string
  headline: string
  position: string
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  sources: SourceCreateManyInput
  fields: FieldInstanceCreateManyInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

export interface CandidateScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: string
  firstName_not: string
  firstName_in: string[]
  firstName_not_in: string[]
  firstName_lt: string
  firstName_lte: string
  firstName_gt: string
  firstName_gte: string
  firstName_contains: string
  firstName_not_contains: string
  firstName_starts_with: string
  firstName_not_starts_with: string
  firstName_ends_with: string
  firstName_not_ends_with: string
  lastName: string
  lastName_not: string
  lastName_in: string[]
  lastName_not_in: string[]
  lastName_lt: string
  lastName_lte: string
  lastName_gt: string
  lastName_gte: string
  lastName_contains: string
  lastName_not_contains: string
  lastName_starts_with: string
  lastName_not_starts_with: string
  lastName_ends_with: string
  lastName_not_ends_with: string
  company: string
  company_not: string
  company_in: string[]
  company_not_in: string[]
  company_lt: string
  company_lte: string
  company_gt: string
  company_gte: string
  company_contains: string
  company_not_contains: string
  company_starts_with: string
  company_not_starts_with: string
  company_ends_with: string
  company_not_ends_with: string
  headline: string
  headline_not: string
  headline_in: string[]
  headline_not_in: string[]
  headline_lt: string
  headline_lte: string
  headline_gt: string
  headline_gte: string
  headline_contains: string
  headline_not_contains: string
  headline_starts_with: string
  headline_not_starts_with: string
  headline_ends_with: string
  headline_not_ends_with: string
  position: string
  position_not: string
  position_in: string[]
  position_not_in: string[]
  position_lt: string
  position_lte: string
  position_gt: string
  position_gte: string
  position_contains: string
  position_not_contains: string
  position_starts_with: string
  position_not_starts_with: string
  position_ends_with: string
  position_not_ends_with: string
  AND: Array<CandidateScalarWhereInput>
  OR: Array<CandidateScalarWhereInput>
  NOT: Array<CandidateScalarWhereInput>
}

export interface CandidateUpdatecoverLettersStringInput {
  set: string[]
}

export interface CandidateUpdateDataInput {
  firstName: string
  lastName: string
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: string
  headline: string
  position: string
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  sources: SourceUpdateManyInput
  fields: FieldInstanceUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

export interface CandidateUpdateemailsInput {
  set: string[]
}

export interface CandidateUpdateInput {
  firstName: string
  lastName: string
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: string
  headline: string
  position: string
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  sources: SourceUpdateManyInput
  fields: FieldInstanceUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

export interface CandidateUpdatelinksInput {
  set: string[]
}

export interface CandidateUpdateManyDataInput {
  firstName: string
  lastName: string
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  company: string
  headline: string
  position: string
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
}

export interface CandidateUpdateManyInput {
  create: Array<CandidateCreateInput>
  update: Array<CandidateUpdateWithWhereUniqueNestedInput>
  upsert: Array<CandidateUpsertWithWhereUniqueNestedInput>
  delete: Array<CandidateWhereUniqueInput>
  connect: Array<CandidateWhereUniqueInput>
  set: Array<CandidateWhereUniqueInput>
  disconnect: Array<CandidateWhereUniqueInput>
  deleteMany: Array<CandidateScalarWhereInput>
  updateMany: Array<CandidateUpdateManyWithWhereNestedInput>
}

export interface CandidateUpdateManyMutationInput {
  firstName: string
  lastName: string
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  company: string
  headline: string
  position: string
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
}

export interface CandidateUpdateManyWithWhereNestedInput {
  where?: CandidateScalarWhereInput | null
  data?: CandidateUpdateManyDataInput | null
}

export interface CandidateUpdateOneRequiredWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  update: CandidateUpdateWithoutApplicationsDataInput
  upsert: CandidateUpsertWithoutApplicationsInput
  connect: CandidateWhereUniqueInput
}

export interface CandidateUpdateOneWithoutTasksInput {
  create: CandidateCreateWithoutTasksInput
  update: CandidateUpdateWithoutTasksDataInput
  upsert: CandidateUpsertWithoutTasksInput
  delete: boolean
  disconnect: boolean
  connect: CandidateWhereUniqueInput
}

export interface CandidateUpdatephonesInput {
  set: string[]
}

export interface CandidateUpdateresumesStringInput {
  set: string[]
}

export interface CandidateUpdateWithoutApplicationsDataInput {
  firstName: string
  lastName: string
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: string
  headline: string
  position: string
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  sources: SourceUpdateManyInput
  fields: FieldInstanceUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

export interface CandidateUpdateWithoutTasksDataInput {
  firstName: string
  lastName: string
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: string
  headline: string
  position: string
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  sources: SourceUpdateManyInput
  fields: FieldInstanceUpdateManyInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

export interface CandidateUpdateWithWhereUniqueNestedInput {
  where?: CandidateWhereUniqueInput | null
  data?: CandidateUpdateDataInput | null
}

export interface CandidateUpsertWithoutApplicationsInput {
  update?: CandidateUpdateWithoutApplicationsDataInput | null
  create?: CandidateCreateWithoutApplicationsInput | null
}

export interface CandidateUpsertWithoutTasksInput {
  update?: CandidateUpdateWithoutTasksDataInput | null
  create?: CandidateCreateWithoutTasksInput | null
}

export interface CandidateUpsertWithWhereUniqueNestedInput {
  where?: CandidateWhereUniqueInput | null
  update?: CandidateUpdateDataInput | null
  create?: CandidateCreateInput | null
}

export interface CandidateWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: string
  firstName_not: string
  firstName_in: string[]
  firstName_not_in: string[]
  firstName_lt: string
  firstName_lte: string
  firstName_gt: string
  firstName_gte: string
  firstName_contains: string
  firstName_not_contains: string
  firstName_starts_with: string
  firstName_not_starts_with: string
  firstName_ends_with: string
  firstName_not_ends_with: string
  lastName: string
  lastName_not: string
  lastName_in: string[]
  lastName_not_in: string[]
  lastName_lt: string
  lastName_lte: string
  lastName_gt: string
  lastName_gte: string
  lastName_contains: string
  lastName_not_contains: string
  lastName_starts_with: string
  lastName_not_starts_with: string
  lastName_ends_with: string
  lastName_not_ends_with: string
  avatar: FileWhereInput
  company: string
  company_not: string
  company_in: string[]
  company_not_in: string[]
  company_lt: string
  company_lte: string
  company_gt: string
  company_gte: string
  company_contains: string
  company_not_contains: string
  company_starts_with: string
  company_not_starts_with: string
  company_ends_with: string
  company_not_ends_with: string
  headline: string
  headline_not: string
  headline_in: string[]
  headline_not_in: string[]
  headline_lt: string
  headline_lte: string
  headline_gt: string
  headline_gte: string
  headline_contains: string
  headline_not_contains: string
  headline_starts_with: string
  headline_not_starts_with: string
  headline_ends_with: string
  headline_not_ends_with: string
  position: string
  position_not: string
  position_in: string[]
  position_not_in: string[]
  position_lt: string
  position_lte: string
  position_gt: string
  position_gte: string
  position_contains: string
  position_not_contains: string
  position_starts_with: string
  position_not_starts_with: string
  position_ends_with: string
  position_not_ends_with: string
  resumesFile_every: FileWhereInput
  resumesFile_some: FileWhereInput
  resumesFile_none: FileWhereInput
  coverLettersFile_every: FileWhereInput
  coverLettersFile_some: FileWhereInput
  coverLettersFile_none: FileWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  sources_every: SourceWhereInput
  sources_some: SourceWhereInput
  sources_none: SourceWhereInput
  fields_every: FieldInstanceWhereInput
  fields_some: FieldInstanceWhereInput
  fields_none: FieldInstanceWhereInput
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  applications_every: ApplicationWhereInput
  applications_some: ApplicationWhereInput
  applications_none: ApplicationWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  AND: Array<CandidateWhereInput>
  OR: Array<CandidateWhereInput>
  NOT: Array<CandidateWhereInput>
}

export interface CandidateWhereUniqueInput {
  id: ID
}

export interface CommentCreateInput {
  createdBy?: UserCreateOneInput | null
  parent: CommentCreateOneInput
  content?: string | null
}

export interface CommentCreateManyInput {
  create: Array<CommentCreateInput>
  connect: Array<CommentWhereUniqueInput>
}

export interface CommentCreateOneInput {
  create: CommentCreateInput
  connect: CommentWhereUniqueInput
}

export interface CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  content: string
  content_not: string
  content_in: string[]
  content_not_in: string[]
  content_lt: string
  content_lte: string
  content_gt: string
  content_gte: string
  content_contains: string
  content_not_contains: string
  content_starts_with: string
  content_not_starts_with: string
  content_ends_with: string
  content_not_ends_with: string
  AND: Array<CommentScalarWhereInput>
  OR: Array<CommentScalarWhereInput>
  NOT: Array<CommentScalarWhereInput>
}

export interface CommentUpdateDataInput {
  createdBy: UserUpdateOneRequiredInput
  parent: CommentUpdateOneInput
  content: string
}

export interface CommentUpdateManyDataInput {
  content: string
}

export interface CommentUpdateManyInput {
  create: Array<CommentCreateInput>
  update: Array<CommentUpdateWithWhereUniqueNestedInput>
  upsert: Array<CommentUpsertWithWhereUniqueNestedInput>
  delete: Array<CommentWhereUniqueInput>
  connect: Array<CommentWhereUniqueInput>
  set: Array<CommentWhereUniqueInput>
  disconnect: Array<CommentWhereUniqueInput>
  deleteMany: Array<CommentScalarWhereInput>
  updateMany: Array<CommentUpdateManyWithWhereNestedInput>
}

export interface CommentUpdateManyWithWhereNestedInput {
  where?: CommentScalarWhereInput | null
  data?: CommentUpdateManyDataInput | null
}

export interface CommentUpdateOneInput {
  create: CommentCreateInput
  update: CommentUpdateDataInput
  upsert: CommentUpsertNestedInput
  delete: boolean
  disconnect: boolean
  connect: CommentWhereUniqueInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where?: CommentWhereUniqueInput | null
  data?: CommentUpdateDataInput | null
}

export interface CommentUpsertNestedInput {
  update?: CommentUpdateDataInput | null
  create?: CommentCreateInput | null
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where?: CommentWhereUniqueInput | null
  update?: CommentUpdateDataInput | null
  create?: CommentCreateInput | null
}

export interface CommentWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdBy: UserWhereInput
  parent: CommentWhereInput
  content: string
  content_not: string
  content_in: string[]
  content_not_in: string[]
  content_lt: string
  content_lte: string
  content_gt: string
  content_gte: string
  content_contains: string
  content_not_contains: string
  content_starts_with: string
  content_not_starts_with: string
  content_ends_with: string
  content_not_ends_with: string
  AND: Array<CommentWhereInput>
  OR: Array<CommentWhereInput>
  NOT: Array<CommentWhereInput>
}

export interface CommentWhereUniqueInput {
  id: ID
}

export interface Connect {
  connect: WhereUniqueInput
}

export interface ConnectDisconnect {
  connect: WhereUniqueInput
  disconnect: WhereUniqueInput
}

export interface ConnectDisconnectMany {
  connect: Array<WhereUniqueInput>
  disconnect: Array<WhereUniqueInput>
}

export interface ConnectMany {
  connect: Array<WhereUniqueInput>
}

export interface DisqualificationCreateInput {
  name?: string | null
  description: string
}

export interface DisqualificationCreateManyInput {
  create: Array<DisqualificationCreateInput>
  connect: Array<DisqualificationWhereUniqueInput>
}

export interface DisqualificationCreateOneInput {
  create: DisqualificationCreateInput
  connect: DisqualificationWhereUniqueInput
}

export interface DisqualificationInstanceCreateInput {
  prototype?: DisqualificationCreateOneInput | null
  createdBy?: UserCreateOneInput | null
  content: string
}

export interface DisqualificationInstanceCreateOneInput {
  create: DisqualificationInstanceCreateInput
  connect: DisqualificationInstanceWhereUniqueInput
}

export interface DisqualificationInstanceUpdateDataInput {
  prototype: DisqualificationUpdateOneRequiredInput
  createdBy: UserUpdateOneRequiredInput
  content: string
}

export interface DisqualificationInstanceUpdateOneInput {
  create: DisqualificationInstanceCreateInput
  update: DisqualificationInstanceUpdateDataInput
  upsert: DisqualificationInstanceUpsertNestedInput
  delete: boolean
  disconnect: boolean
  connect: DisqualificationInstanceWhereUniqueInput
}

export interface DisqualificationInstanceUpsertNestedInput {
  update?: DisqualificationInstanceUpdateDataInput | null
  create?: DisqualificationInstanceCreateInput | null
}

export interface DisqualificationInstanceWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  prototype: DisqualificationWhereInput
  createdBy: UserWhereInput
  content: string
  content_not: string
  content_in: string[]
  content_not_in: string[]
  content_lt: string
  content_lte: string
  content_gt: string
  content_gte: string
  content_contains: string
  content_not_contains: string
  content_starts_with: string
  content_not_starts_with: string
  content_ends_with: string
  content_not_ends_with: string
  AND: Array<DisqualificationInstanceWhereInput>
  OR: Array<DisqualificationInstanceWhereInput>
  NOT: Array<DisqualificationInstanceWhereInput>
}

export interface DisqualificationInstanceWhereUniqueInput {
  id: ID
}

export interface DisqualificationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  AND: Array<DisqualificationScalarWhereInput>
  OR: Array<DisqualificationScalarWhereInput>
  NOT: Array<DisqualificationScalarWhereInput>
}

export interface DisqualificationUpdateDataInput {
  name: string
  description: string
}

export interface DisqualificationUpdateManyDataInput {
  name: string
  description: string
}

export interface DisqualificationUpdateManyInput {
  create: Array<DisqualificationCreateInput>
  update: Array<DisqualificationUpdateWithWhereUniqueNestedInput>
  upsert: Array<DisqualificationUpsertWithWhereUniqueNestedInput>
  delete: Array<DisqualificationWhereUniqueInput>
  connect: Array<DisqualificationWhereUniqueInput>
  set: Array<DisqualificationWhereUniqueInput>
  disconnect: Array<DisqualificationWhereUniqueInput>
  deleteMany: Array<DisqualificationScalarWhereInput>
  updateMany: Array<DisqualificationUpdateManyWithWhereNestedInput>
}

export interface DisqualificationUpdateManyWithWhereNestedInput {
  where?: DisqualificationScalarWhereInput | null
  data?: DisqualificationUpdateManyDataInput | null
}

export interface DisqualificationUpdateOneRequiredInput {
  create: DisqualificationCreateInput
  update: DisqualificationUpdateDataInput
  upsert: DisqualificationUpsertNestedInput
  connect: DisqualificationWhereUniqueInput
}

export interface DisqualificationUpdateWithWhereUniqueNestedInput {
  where?: DisqualificationWhereUniqueInput | null
  data?: DisqualificationUpdateDataInput | null
}

export interface DisqualificationUpsertNestedInput {
  update?: DisqualificationUpdateDataInput | null
  create?: DisqualificationCreateInput | null
}

export interface DisqualificationUpsertWithWhereUniqueNestedInput {
  where?: DisqualificationWhereUniqueInput | null
  update?: DisqualificationUpdateDataInput | null
  create?: DisqualificationCreateInput | null
}

export interface DisqualificationWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  AND: Array<DisqualificationWhereInput>
  OR: Array<DisqualificationWhereInput>
  NOT: Array<DisqualificationWhereInput>
}

export interface DisqualificationWhereUniqueInput {
  id: ID
}

export interface FieldCreateInput {
  type?: FieldType | null
  label?: string | null
  description: string
}

export interface FieldCreateManyInput {
  create: Array<FieldCreateInput>
  connect: Array<FieldWhereUniqueInput>
}

export interface FieldCreateOneInput {
  create: FieldCreateInput
  connect: FieldWhereUniqueInput
}

export interface FieldInstanceCreateInput {
  prototype?: FieldCreateOneInput | null
  value: string
}

export interface FieldInstanceCreateManyInput {
  create: Array<FieldInstanceCreateInput>
  connect: Array<FieldInstanceWhereUniqueInput>
}

export interface FieldInstanceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  value: string
  value_not: string
  value_in: string[]
  value_not_in: string[]
  value_lt: string
  value_lte: string
  value_gt: string
  value_gte: string
  value_contains: string
  value_not_contains: string
  value_starts_with: string
  value_not_starts_with: string
  value_ends_with: string
  value_not_ends_with: string
  AND: Array<FieldInstanceScalarWhereInput>
  OR: Array<FieldInstanceScalarWhereInput>
  NOT: Array<FieldInstanceScalarWhereInput>
}

export interface FieldInstanceUpdateDataInput {
  prototype: FieldUpdateOneRequiredInput
  value: string
}

export interface FieldInstanceUpdateManyDataInput {
  value: string
}

export interface FieldInstanceUpdateManyInput {
  create: Array<FieldInstanceCreateInput>
  update: Array<FieldInstanceUpdateWithWhereUniqueNestedInput>
  upsert: Array<FieldInstanceUpsertWithWhereUniqueNestedInput>
  delete: Array<FieldInstanceWhereUniqueInput>
  connect: Array<FieldInstanceWhereUniqueInput>
  set: Array<FieldInstanceWhereUniqueInput>
  disconnect: Array<FieldInstanceWhereUniqueInput>
  deleteMany: Array<FieldInstanceScalarWhereInput>
  updateMany: Array<FieldInstanceUpdateManyWithWhereNestedInput>
}

export interface FieldInstanceUpdateManyWithWhereNestedInput {
  where?: FieldInstanceScalarWhereInput | null
  data?: FieldInstanceUpdateManyDataInput | null
}

export interface FieldInstanceUpdateWithWhereUniqueNestedInput {
  where?: FieldInstanceWhereUniqueInput | null
  data?: FieldInstanceUpdateDataInput | null
}

export interface FieldInstanceUpsertWithWhereUniqueNestedInput {
  where?: FieldInstanceWhereUniqueInput | null
  update?: FieldInstanceUpdateDataInput | null
  create?: FieldInstanceCreateInput | null
}

export interface FieldInstanceWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  prototype: FieldWhereInput
  value: string
  value_not: string
  value_in: string[]
  value_not_in: string[]
  value_lt: string
  value_lte: string
  value_gt: string
  value_gte: string
  value_contains: string
  value_not_contains: string
  value_starts_with: string
  value_not_starts_with: string
  value_ends_with: string
  value_not_ends_with: string
  AND: Array<FieldInstanceWhereInput>
  OR: Array<FieldInstanceWhereInput>
  NOT: Array<FieldInstanceWhereInput>
}

export interface FieldInstanceWhereUniqueInput {
  id: ID
}

export interface FieldScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: FieldType
  type_not: FieldType
  type_in: Array<FieldType>
  type_not_in: Array<FieldType>
  label: string
  label_not: string
  label_in: string[]
  label_not_in: string[]
  label_lt: string
  label_lte: string
  label_gt: string
  label_gte: string
  label_contains: string
  label_not_contains: string
  label_starts_with: string
  label_not_starts_with: string
  label_ends_with: string
  label_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  AND: Array<FieldScalarWhereInput>
  OR: Array<FieldScalarWhereInput>
  NOT: Array<FieldScalarWhereInput>
}

export interface FieldUpdateDataInput {
  type: FieldType
  label: string
  description: string
}

export interface FieldUpdateManyDataInput {
  type: FieldType
  label: string
  description: string
}

export interface FieldUpdateManyInput {
  create: Array<FieldCreateInput>
  update: Array<FieldUpdateWithWhereUniqueNestedInput>
  upsert: Array<FieldUpsertWithWhereUniqueNestedInput>
  delete: Array<FieldWhereUniqueInput>
  connect: Array<FieldWhereUniqueInput>
  set: Array<FieldWhereUniqueInput>
  disconnect: Array<FieldWhereUniqueInput>
  deleteMany: Array<FieldScalarWhereInput>
  updateMany: Array<FieldUpdateManyWithWhereNestedInput>
}

export interface FieldUpdateManyWithWhereNestedInput {
  where?: FieldScalarWhereInput | null
  data?: FieldUpdateManyDataInput | null
}

export interface FieldUpdateOneRequiredInput {
  create: FieldCreateInput
  update: FieldUpdateDataInput
  upsert: FieldUpsertNestedInput
  connect: FieldWhereUniqueInput
}

export interface FieldUpdateWithWhereUniqueNestedInput {
  where?: FieldWhereUniqueInput | null
  data?: FieldUpdateDataInput | null
}

export interface FieldUpsertNestedInput {
  update?: FieldUpdateDataInput | null
  create?: FieldCreateInput | null
}

export interface FieldUpsertWithWhereUniqueNestedInput {
  where?: FieldWhereUniqueInput | null
  update?: FieldUpdateDataInput | null
  create?: FieldCreateInput | null
}

export interface FieldWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: FieldType
  type_not: FieldType
  type_in: Array<FieldType>
  type_not_in: Array<FieldType>
  label: string
  label_not: string
  label_in: string[]
  label_not_in: string[]
  label_lt: string
  label_lte: string
  label_gt: string
  label_gte: string
  label_contains: string
  label_not_contains: string
  label_starts_with: string
  label_not_starts_with: string
  label_ends_with: string
  label_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  AND: Array<FieldWhereInput>
  OR: Array<FieldWhereInput>
  NOT: Array<FieldWhereInput>
}

export interface FieldWhereUniqueInput {
  id: ID
}

export interface FileCreateInput {
  size?: number | null
  type?: string | null
  name?: string | null
  url?: string | null
}

export interface FileCreateManyInput {
  create: Array<FileCreateInput>
  connect: Array<FileWhereUniqueInput>
}

export interface FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

export interface FileScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  size: number
  size_not: number
  size_in: number[]
  size_not_in: number[]
  size_lt: number
  size_lte: number
  size_gt: number
  size_gte: number
  type: string
  type_not: string
  type_in: string[]
  type_not_in: string[]
  type_lt: string
  type_lte: string
  type_gt: string
  type_gte: string
  type_contains: string
  type_not_contains: string
  type_starts_with: string
  type_not_starts_with: string
  type_ends_with: string
  type_not_ends_with: string
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  url: string
  url_not: string
  url_in: string[]
  url_not_in: string[]
  url_lt: string
  url_lte: string
  url_gt: string
  url_gte: string
  url_contains: string
  url_not_contains: string
  url_starts_with: string
  url_not_starts_with: string
  url_ends_with: string
  url_not_ends_with: string
  AND: Array<FileScalarWhereInput>
  OR: Array<FileScalarWhereInput>
  NOT: Array<FileScalarWhereInput>
}

export interface FileUpdateDataInput {
  size: number
  type: string
  name: string
  url: string
}

export interface FileUpdateManyDataInput {
  size: number
  type: string
  name: string
  url: string
}

export interface FileUpdateManyInput {
  create: Array<FileCreateInput>
  update: Array<FileUpdateWithWhereUniqueNestedInput>
  upsert: Array<FileUpsertWithWhereUniqueNestedInput>
  delete: Array<FileWhereUniqueInput>
  connect: Array<FileWhereUniqueInput>
  set: Array<FileWhereUniqueInput>
  disconnect: Array<FileWhereUniqueInput>
  deleteMany: Array<FileScalarWhereInput>
  updateMany: Array<FileUpdateManyWithWhereNestedInput>
}

export interface FileUpdateManyWithWhereNestedInput {
  where?: FileScalarWhereInput | null
  data?: FileUpdateManyDataInput | null
}

export interface FileUpdateOneInput {
  create: FileCreateInput
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
  delete: boolean
  disconnect: boolean
  connect: FileWhereUniqueInput
}

export interface FileUpdateWithWhereUniqueNestedInput {
  where?: FileWhereUniqueInput | null
  data?: FileUpdateDataInput | null
}

export interface FileUpsertNestedInput {
  update?: FileUpdateDataInput | null
  create?: FileCreateInput | null
}

export interface FileUpsertWithWhereUniqueNestedInput {
  where?: FileWhereUniqueInput | null
  update?: FileUpdateDataInput | null
  create?: FileCreateInput | null
}

export interface FileWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  size: number
  size_not: number
  size_in: number[]
  size_not_in: number[]
  size_lt: number
  size_lte: number
  size_gt: number
  size_gte: number
  type: string
  type_not: string
  type_in: string[]
  type_not_in: string[]
  type_lt: string
  type_lte: string
  type_gt: string
  type_gte: string
  type_contains: string
  type_not_contains: string
  type_starts_with: string
  type_not_starts_with: string
  type_ends_with: string
  type_not_ends_with: string
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  url: string
  url_not: string
  url_in: string[]
  url_not_in: string[]
  url_lt: string
  url_lte: string
  url_gt: string
  url_gte: string
  url_contains: string
  url_not_contains: string
  url_starts_with: string
  url_not_starts_with: string
  url_ends_with: string
  url_not_ends_with: string
  AND: Array<FileWhereInput>
  OR: Array<FileWhereInput>
  NOT: Array<FileWhereInput>
}

export interface FileWhereUniqueInput {
  id: ID
  url: string
}

export interface InviteCreateInput {
  email?: string | null
}

export interface InviteCreateManyInput {
  create: Array<InviteCreateInput>
  connect: Array<InviteWhereUniqueInput>
}

export interface InviteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  email: string
  email_not: string
  email_in: string[]
  email_not_in: string[]
  email_lt: string
  email_lte: string
  email_gt: string
  email_gte: string
  email_contains: string
  email_not_contains: string
  email_starts_with: string
  email_not_starts_with: string
  email_ends_with: string
  email_not_ends_with: string
  expireAt: DateTime
  expireAt_not: DateTime
  expireAt_in: Array<DateTime>
  expireAt_not_in: Array<DateTime>
  expireAt_lt: DateTime
  expireAt_lte: DateTime
  expireAt_gt: DateTime
  expireAt_gte: DateTime
  AND: Array<InviteScalarWhereInput>
  OR: Array<InviteScalarWhereInput>
  NOT: Array<InviteScalarWhereInput>
}

export interface InviteUpdateDataInput {
  email: string
  expireAt: DateTime
  invitedBy: UserUpdateOneRequiredInput
}

export interface InviteUpdateManyDataInput {
  email: string
  expireAt: DateTime
}

export interface InviteUpdateManyInput {
  create: Array<InviteCreateInput>
  update: Array<InviteUpdateWithWhereUniqueNestedInput>
  upsert: Array<InviteUpsertWithWhereUniqueNestedInput>
  delete: Array<InviteWhereUniqueInput>
  connect: Array<InviteWhereUniqueInput>
  set: Array<InviteWhereUniqueInput>
  disconnect: Array<InviteWhereUniqueInput>
  deleteMany: Array<InviteScalarWhereInput>
  updateMany: Array<InviteUpdateManyWithWhereNestedInput>
}

export interface InviteUpdateManyWithWhereNestedInput {
  where?: InviteScalarWhereInput | null
  data?: InviteUpdateManyDataInput | null
}

export interface InviteUpdateWithWhereUniqueNestedInput {
  where?: InviteWhereUniqueInput | null
  data?: InviteUpdateDataInput | null
}

export interface InviteUpsertWithWhereUniqueNestedInput {
  where?: InviteWhereUniqueInput | null
  update?: InviteUpdateDataInput | null
  create?: InviteCreateInput | null
}

export interface InviteWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  email: string
  email_not: string
  email_in: string[]
  email_not_in: string[]
  email_lt: string
  email_lte: string
  email_gt: string
  email_gte: string
  email_contains: string
  email_not_contains: string
  email_starts_with: string
  email_not_starts_with: string
  email_ends_with: string
  email_not_ends_with: string
  expireAt: DateTime
  expireAt_not: DateTime
  expireAt_in: Array<DateTime>
  expireAt_not_in: Array<DateTime>
  expireAt_lt: DateTime
  expireAt_lte: DateTime
  expireAt_gt: DateTime
  expireAt_gte: DateTime
  invitedBy: UserWhereInput
  AND: Array<InviteWhereInput>
  OR: Array<InviteWhereInput>
  NOT: Array<InviteWhereInput>
}

export interface InviteWhereUniqueInput {
  id: ID
}

export interface JobCreateInput {
  workspace?: WorkspaceCreateOneWithoutJobsInput | null
  applications: ApplicationCreateManyWithoutJobInput
  workflow?: WorkflowCreateOneWithoutJobsInput | null
  comments: CommentCreateManyInput
  type?: JobType | null
  department: string
  locations: LocationCreateManyInput
  name?: string | null
  excerpt: string
  companyDescription: string
  description: string
  requirements: string
}

export interface JobCreateManyWithoutWorkflowInput {
  create: Array<JobCreateWithoutWorkflowInput>
  connect: Array<JobWhereUniqueInput>
}

export interface JobCreateOneWithoutApplicationsInput {
  create: JobCreateWithoutApplicationsInput
  connect: JobWhereUniqueInput
}

export interface JobCreateWithoutApplicationsInput {
  workspace?: WorkspaceCreateOneWithoutJobsInput | null
  workflow?: WorkflowCreateOneWithoutJobsInput | null
  comments: CommentCreateManyInput
  type?: JobType | null
  department: string
  locations: LocationCreateManyInput
  name?: string | null
  excerpt: string
  companyDescription: string
  description: string
  requirements: string
}

export interface JobCreateWithoutWorkflowInput {
  workspace?: WorkspaceCreateOneWithoutJobsInput | null
  applications: ApplicationCreateManyWithoutJobInput
  comments: CommentCreateManyInput
  type?: JobType | null
  department: string
  locations: LocationCreateManyInput
  name?: string | null
  excerpt: string
  companyDescription: string
  description: string
  requirements: string
}

export interface JobScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: JobType
  type_not: JobType
  type_in: Array<JobType>
  type_not_in: Array<JobType>
  department: string
  department_not: string
  department_in: string[]
  department_not_in: string[]
  department_lt: string
  department_lte: string
  department_gt: string
  department_gte: string
  department_contains: string
  department_not_contains: string
  department_starts_with: string
  department_not_starts_with: string
  department_ends_with: string
  department_not_ends_with: string
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  excerpt: string
  excerpt_not: string
  excerpt_in: string[]
  excerpt_not_in: string[]
  excerpt_lt: string
  excerpt_lte: string
  excerpt_gt: string
  excerpt_gte: string
  excerpt_contains: string
  excerpt_not_contains: string
  excerpt_starts_with: string
  excerpt_not_starts_with: string
  excerpt_ends_with: string
  excerpt_not_ends_with: string
  companyDescription: string
  companyDescription_not: string
  companyDescription_in: string[]
  companyDescription_not_in: string[]
  companyDescription_lt: string
  companyDescription_lte: string
  companyDescription_gt: string
  companyDescription_gte: string
  companyDescription_contains: string
  companyDescription_not_contains: string
  companyDescription_starts_with: string
  companyDescription_not_starts_with: string
  companyDescription_ends_with: string
  companyDescription_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  requirements: string
  requirements_not: string
  requirements_in: string[]
  requirements_not_in: string[]
  requirements_lt: string
  requirements_lte: string
  requirements_gt: string
  requirements_gte: string
  requirements_contains: string
  requirements_not_contains: string
  requirements_starts_with: string
  requirements_not_starts_with: string
  requirements_ends_with: string
  requirements_not_ends_with: string
  AND: Array<JobScalarWhereInput>
  OR: Array<JobScalarWhereInput>
  NOT: Array<JobScalarWhereInput>
}

export interface JobUpdateInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredWithoutJobsInput
  comments: CommentUpdateManyInput
  type: JobType
  department: string
  locations: LocationUpdateManyInput
  name: string
  excerpt: string
  companyDescription: string
  description: string
  requirements: string
}

export interface JobUpdateManyDataInput {
  type: JobType
  department: string
  name: string
  excerpt: string
  companyDescription: string
  description: string
  requirements: string
}

export interface JobUpdateManyMutationInput {
  type: JobType
  department: string
  name: string
  excerpt: string
  companyDescription: string
  description: string
  requirements: string
}

export interface JobUpdateManyWithoutWorkflowInput {
  create: Array<JobCreateWithoutWorkflowInput>
  delete: Array<JobWhereUniqueInput>
  connect: Array<JobWhereUniqueInput>
  set: Array<JobWhereUniqueInput>
  disconnect: Array<JobWhereUniqueInput>
  update: Array<JobUpdateWithWhereUniqueWithoutWorkflowInput>
  upsert: Array<JobUpsertWithWhereUniqueWithoutWorkflowInput>
  deleteMany: Array<JobScalarWhereInput>
  updateMany: Array<JobUpdateManyWithWhereNestedInput>
}

export interface JobUpdateManyWithWhereNestedInput {
  where?: JobScalarWhereInput | null
  data?: JobUpdateManyDataInput | null
}

export interface JobUpdateOneRequiredWithoutApplicationsInput {
  create: JobCreateWithoutApplicationsInput
  update: JobUpdateWithoutApplicationsDataInput
  upsert: JobUpsertWithoutApplicationsInput
  connect: JobWhereUniqueInput
}

export interface JobUpdateWithoutApplicationsDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  workflow: WorkflowUpdateOneRequiredWithoutJobsInput
  comments: CommentUpdateManyInput
  type: JobType
  department: string
  locations: LocationUpdateManyInput
  name: string
  excerpt: string
  companyDescription: string
  description: string
  requirements: string
}

export interface JobUpdateWithoutWorkflowDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  applications: ApplicationUpdateManyWithoutJobInput
  comments: CommentUpdateManyInput
  type: JobType
  department: string
  locations: LocationUpdateManyInput
  name: string
  excerpt: string
  companyDescription: string
  description: string
  requirements: string
}

export interface JobUpdateWithWhereUniqueWithoutWorkflowInput {
  where?: JobWhereUniqueInput | null
  data?: JobUpdateWithoutWorkflowDataInput | null
}

export interface JobUpsertWithoutApplicationsInput {
  update?: JobUpdateWithoutApplicationsDataInput | null
  create?: JobCreateWithoutApplicationsInput | null
}

export interface JobUpsertWithWhereUniqueWithoutWorkflowInput {
  where?: JobWhereUniqueInput | null
  update?: JobUpdateWithoutWorkflowDataInput | null
  create?: JobCreateWithoutWorkflowInput | null
}

export interface JobWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  workspace: WorkspaceWhereInput
  applications_every: ApplicationWhereInput
  applications_some: ApplicationWhereInput
  applications_none: ApplicationWhereInput
  workflow: WorkflowWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  type: JobType
  type_not: JobType
  type_in: Array<JobType>
  type_not_in: Array<JobType>
  department: string
  department_not: string
  department_in: string[]
  department_not_in: string[]
  department_lt: string
  department_lte: string
  department_gt: string
  department_gte: string
  department_contains: string
  department_not_contains: string
  department_starts_with: string
  department_not_starts_with: string
  department_ends_with: string
  department_not_ends_with: string
  locations_every: LocationWhereInput
  locations_some: LocationWhereInput
  locations_none: LocationWhereInput
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  excerpt: string
  excerpt_not: string
  excerpt_in: string[]
  excerpt_not_in: string[]
  excerpt_lt: string
  excerpt_lte: string
  excerpt_gt: string
  excerpt_gte: string
  excerpt_contains: string
  excerpt_not_contains: string
  excerpt_starts_with: string
  excerpt_not_starts_with: string
  excerpt_ends_with: string
  excerpt_not_ends_with: string
  companyDescription: string
  companyDescription_not: string
  companyDescription_in: string[]
  companyDescription_not_in: string[]
  companyDescription_lt: string
  companyDescription_lte: string
  companyDescription_gt: string
  companyDescription_gte: string
  companyDescription_contains: string
  companyDescription_not_contains: string
  companyDescription_starts_with: string
  companyDescription_not_starts_with: string
  companyDescription_ends_with: string
  companyDescription_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  requirements: string
  requirements_not: string
  requirements_in: string[]
  requirements_not_in: string[]
  requirements_lt: string
  requirements_lte: string
  requirements_gt: string
  requirements_gte: string
  requirements_contains: string
  requirements_not_contains: string
  requirements_starts_with: string
  requirements_not_starts_with: string
  requirements_ends_with: string
  requirements_not_ends_with: string
  AND: Array<JobWhereInput>
  OR: Array<JobWhereInput>
  NOT: Array<JobWhereInput>
}

export interface JobWhereUniqueInput {
  id: ID
}

export interface LocationCreateInput {
  country?: string | null
  region: string
  city?: string | null
  zip: string
}

export interface LocationCreateManyInput {
  create: Array<LocationCreateInput>
  connect: Array<LocationWhereUniqueInput>
}

export interface LocationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  country: string
  country_not: string
  country_in: string[]
  country_not_in: string[]
  country_lt: string
  country_lte: string
  country_gt: string
  country_gte: string
  country_contains: string
  country_not_contains: string
  country_starts_with: string
  country_not_starts_with: string
  country_ends_with: string
  country_not_ends_with: string
  region: string
  region_not: string
  region_in: string[]
  region_not_in: string[]
  region_lt: string
  region_lte: string
  region_gt: string
  region_gte: string
  region_contains: string
  region_not_contains: string
  region_starts_with: string
  region_not_starts_with: string
  region_ends_with: string
  region_not_ends_with: string
  city: string
  city_not: string
  city_in: string[]
  city_not_in: string[]
  city_lt: string
  city_lte: string
  city_gt: string
  city_gte: string
  city_contains: string
  city_not_contains: string
  city_starts_with: string
  city_not_starts_with: string
  city_ends_with: string
  city_not_ends_with: string
  zip: string
  zip_not: string
  zip_in: string[]
  zip_not_in: string[]
  zip_lt: string
  zip_lte: string
  zip_gt: string
  zip_gte: string
  zip_contains: string
  zip_not_contains: string
  zip_starts_with: string
  zip_not_starts_with: string
  zip_ends_with: string
  zip_not_ends_with: string
  AND: Array<LocationScalarWhereInput>
  OR: Array<LocationScalarWhereInput>
  NOT: Array<LocationScalarWhereInput>
}

export interface LocationUpdateDataInput {
  country: string
  region: string
  city: string
  zip: string
}

export interface LocationUpdateManyDataInput {
  country: string
  region: string
  city: string
  zip: string
}

export interface LocationUpdateManyInput {
  create: Array<LocationCreateInput>
  update: Array<LocationUpdateWithWhereUniqueNestedInput>
  upsert: Array<LocationUpsertWithWhereUniqueNestedInput>
  delete: Array<LocationWhereUniqueInput>
  connect: Array<LocationWhereUniqueInput>
  set: Array<LocationWhereUniqueInput>
  disconnect: Array<LocationWhereUniqueInput>
  deleteMany: Array<LocationScalarWhereInput>
  updateMany: Array<LocationUpdateManyWithWhereNestedInput>
}

export interface LocationUpdateManyWithWhereNestedInput {
  where?: LocationScalarWhereInput | null
  data?: LocationUpdateManyDataInput | null
}

export interface LocationUpdateWithWhereUniqueNestedInput {
  where?: LocationWhereUniqueInput | null
  data?: LocationUpdateDataInput | null
}

export interface LocationUpsertWithWhereUniqueNestedInput {
  where?: LocationWhereUniqueInput | null
  update?: LocationUpdateDataInput | null
  create?: LocationCreateInput | null
}

export interface LocationWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  country: string
  country_not: string
  country_in: string[]
  country_not_in: string[]
  country_lt: string
  country_lte: string
  country_gt: string
  country_gte: string
  country_contains: string
  country_not_contains: string
  country_starts_with: string
  country_not_starts_with: string
  country_ends_with: string
  country_not_ends_with: string
  region: string
  region_not: string
  region_in: string[]
  region_not_in: string[]
  region_lt: string
  region_lte: string
  region_gt: string
  region_gte: string
  region_contains: string
  region_not_contains: string
  region_starts_with: string
  region_not_starts_with: string
  region_ends_with: string
  region_not_ends_with: string
  city: string
  city_not: string
  city_in: string[]
  city_not_in: string[]
  city_lt: string
  city_lte: string
  city_gt: string
  city_gte: string
  city_contains: string
  city_not_contains: string
  city_starts_with: string
  city_not_starts_with: string
  city_ends_with: string
  city_not_ends_with: string
  zip: string
  zip_not: string
  zip_in: string[]
  zip_not_in: string[]
  zip_lt: string
  zip_lte: string
  zip_gt: string
  zip_gte: string
  zip_contains: string
  zip_not_contains: string
  zip_starts_with: string
  zip_not_starts_with: string
  zip_ends_with: string
  zip_not_ends_with: string
  AND: Array<LocationWhereInput>
  OR: Array<LocationWhereInput>
  NOT: Array<LocationWhereInput>
}

export interface LocationWhereUniqueInput {
  id: ID
}

export interface LoginInput {
  email?: string | null
  password?: string | null
}

export interface RefreshInput {
  token?: string | null
}

export interface ReviewCreateInput {
  name?: string | null
  fields: FieldCreateManyInput
}

export interface ReviewCreateManyInput {
  create: Array<ReviewCreateInput>
  connect: Array<ReviewWhereUniqueInput>
}

export interface ReviewCreateOneInput {
  create: ReviewCreateInput
  connect: ReviewWhereUniqueInput
}

export interface ReviewInstanceCreateInput {
  prototype: ReviewCreateOneInput
  fields: FieldInstanceCreateManyInput
  createdBy?: UserCreateOneInput | null
  rating: number
  content: string
}

export interface ReviewInstanceCreateManyInput {
  create: Array<ReviewInstanceCreateInput>
  connect: Array<ReviewInstanceWhereUniqueInput>
}

export interface ReviewInstanceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  rating: number
  rating_not: number
  rating_in: number[]
  rating_not_in: number[]
  rating_lt: number
  rating_lte: number
  rating_gt: number
  rating_gte: number
  content: string
  content_not: string
  content_in: string[]
  content_not_in: string[]
  content_lt: string
  content_lte: string
  content_gt: string
  content_gte: string
  content_contains: string
  content_not_contains: string
  content_starts_with: string
  content_not_starts_with: string
  content_ends_with: string
  content_not_ends_with: string
  AND: Array<ReviewInstanceScalarWhereInput>
  OR: Array<ReviewInstanceScalarWhereInput>
  NOT: Array<ReviewInstanceScalarWhereInput>
}

export interface ReviewInstanceUpdateDataInput {
  prototype: ReviewUpdateOneInput
  fields: FieldInstanceUpdateManyInput
  createdBy: UserUpdateOneRequiredInput
  rating: number
  content: string
}

export interface ReviewInstanceUpdateManyDataInput {
  rating: number
  content: string
}

export interface ReviewInstanceUpdateManyInput {
  create: Array<ReviewInstanceCreateInput>
  update: Array<ReviewInstanceUpdateWithWhereUniqueNestedInput>
  upsert: Array<ReviewInstanceUpsertWithWhereUniqueNestedInput>
  delete: Array<ReviewInstanceWhereUniqueInput>
  connect: Array<ReviewInstanceWhereUniqueInput>
  set: Array<ReviewInstanceWhereUniqueInput>
  disconnect: Array<ReviewInstanceWhereUniqueInput>
  deleteMany: Array<ReviewInstanceScalarWhereInput>
  updateMany: Array<ReviewInstanceUpdateManyWithWhereNestedInput>
}

export interface ReviewInstanceUpdateManyWithWhereNestedInput {
  where?: ReviewInstanceScalarWhereInput | null
  data?: ReviewInstanceUpdateManyDataInput | null
}

export interface ReviewInstanceUpdateWithWhereUniqueNestedInput {
  where?: ReviewInstanceWhereUniqueInput | null
  data?: ReviewInstanceUpdateDataInput | null
}

export interface ReviewInstanceUpsertWithWhereUniqueNestedInput {
  where?: ReviewInstanceWhereUniqueInput | null
  update?: ReviewInstanceUpdateDataInput | null
  create?: ReviewInstanceCreateInput | null
}

export interface ReviewInstanceWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  prototype: ReviewWhereInput
  fields_every: FieldInstanceWhereInput
  fields_some: FieldInstanceWhereInput
  fields_none: FieldInstanceWhereInput
  createdBy: UserWhereInput
  rating: number
  rating_not: number
  rating_in: number[]
  rating_not_in: number[]
  rating_lt: number
  rating_lte: number
  rating_gt: number
  rating_gte: number
  content: string
  content_not: string
  content_in: string[]
  content_not_in: string[]
  content_lt: string
  content_lte: string
  content_gt: string
  content_gte: string
  content_contains: string
  content_not_contains: string
  content_starts_with: string
  content_not_starts_with: string
  content_ends_with: string
  content_not_ends_with: string
  AND: Array<ReviewInstanceWhereInput>
  OR: Array<ReviewInstanceWhereInput>
  NOT: Array<ReviewInstanceWhereInput>
}

export interface ReviewInstanceWhereUniqueInput {
  id: ID
}

export interface ReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  AND: Array<ReviewScalarWhereInput>
  OR: Array<ReviewScalarWhereInput>
  NOT: Array<ReviewScalarWhereInput>
}

export interface ReviewUpdateDataInput {
  name: string
  fields: FieldUpdateManyInput
}

export interface ReviewUpdateManyDataInput {
  name: string
}

export interface ReviewUpdateManyInput {
  create: Array<ReviewCreateInput>
  update: Array<ReviewUpdateWithWhereUniqueNestedInput>
  upsert: Array<ReviewUpsertWithWhereUniqueNestedInput>
  delete: Array<ReviewWhereUniqueInput>
  connect: Array<ReviewWhereUniqueInput>
  set: Array<ReviewWhereUniqueInput>
  disconnect: Array<ReviewWhereUniqueInput>
  deleteMany: Array<ReviewScalarWhereInput>
  updateMany: Array<ReviewUpdateManyWithWhereNestedInput>
}

export interface ReviewUpdateManyWithWhereNestedInput {
  where?: ReviewScalarWhereInput | null
  data?: ReviewUpdateManyDataInput | null
}

export interface ReviewUpdateOneInput {
  create: ReviewCreateInput
  update: ReviewUpdateDataInput
  upsert: ReviewUpsertNestedInput
  delete: boolean
  disconnect: boolean
  connect: ReviewWhereUniqueInput
}

export interface ReviewUpdateWithWhereUniqueNestedInput {
  where?: ReviewWhereUniqueInput | null
  data?: ReviewUpdateDataInput | null
}

export interface ReviewUpsertNestedInput {
  update?: ReviewUpdateDataInput | null
  create?: ReviewCreateInput | null
}

export interface ReviewUpsertWithWhereUniqueNestedInput {
  where?: ReviewWhereUniqueInput | null
  update?: ReviewUpdateDataInput | null
  create?: ReviewCreateInput | null
}

export interface ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  fields_every: FieldWhereInput
  fields_some: FieldWhereInput
  fields_none: FieldWhereInput
  AND: Array<ReviewWhereInput>
  OR: Array<ReviewWhereInput>
  NOT: Array<ReviewWhereInput>
}

export interface ReviewWhereUniqueInput {
  id: ID
}

export interface SignupInput {
  password?: string | null
  username?: string | null
  inviteId?: ID | null
}

export interface SourceCreateInput {
  label?: string | null
  description: string
}

export interface SourceCreateManyInput {
  create: Array<SourceCreateInput>
  connect: Array<SourceWhereUniqueInput>
}

export interface SourceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  label: string
  label_not: string
  label_in: string[]
  label_not_in: string[]
  label_lt: string
  label_lte: string
  label_gt: string
  label_gte: string
  label_contains: string
  label_not_contains: string
  label_starts_with: string
  label_not_starts_with: string
  label_ends_with: string
  label_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  AND: Array<SourceScalarWhereInput>
  OR: Array<SourceScalarWhereInput>
  NOT: Array<SourceScalarWhereInput>
}

export interface SourceUpdateDataInput {
  label: string
  description: string
}

export interface SourceUpdateInput {
  label: string
  description: string
}

export interface SourceUpdateManyDataInput {
  label: string
  description: string
}

export interface SourceUpdateManyInput {
  create: Array<SourceCreateInput>
  update: Array<SourceUpdateWithWhereUniqueNestedInput>
  upsert: Array<SourceUpsertWithWhereUniqueNestedInput>
  delete: Array<SourceWhereUniqueInput>
  connect: Array<SourceWhereUniqueInput>
  set: Array<SourceWhereUniqueInput>
  disconnect: Array<SourceWhereUniqueInput>
  deleteMany: Array<SourceScalarWhereInput>
  updateMany: Array<SourceUpdateManyWithWhereNestedInput>
}

export interface SourceUpdateManyMutationInput {
  label: string
  description: string
}

export interface SourceUpdateManyWithWhereNestedInput {
  where?: SourceScalarWhereInput | null
  data?: SourceUpdateManyDataInput | null
}

export interface SourceUpdateWithWhereUniqueNestedInput {
  where?: SourceWhereUniqueInput | null
  data?: SourceUpdateDataInput | null
}

export interface SourceUpsertWithWhereUniqueNestedInput {
  where?: SourceWhereUniqueInput | null
  update?: SourceUpdateDataInput | null
  create?: SourceCreateInput | null
}

export interface SourceWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  label: string
  label_not: string
  label_in: string[]
  label_not_in: string[]
  label_lt: string
  label_lte: string
  label_gt: string
  label_gte: string
  label_contains: string
  label_not_contains: string
  label_starts_with: string
  label_not_starts_with: string
  label_ends_with: string
  label_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  AND: Array<SourceWhereInput>
  OR: Array<SourceWhereInput>
  NOT: Array<SourceWhereInput>
}

export interface SourceWhereUniqueInput {
  id: ID
}

export interface StageCreateInput {
  name?: string | null
  description: string
  type?: StageType | null
  index?: number | null
}

export interface StageCreateManyInput {
  create: Array<StageCreateInput>
  connect: Array<StageWhereUniqueInput>
}

export interface StageCreateOneInput {
  create: StageCreateInput
  connect: StageWhereUniqueInput
}

export interface StageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  type: StageType
  type_not: StageType
  type_in: Array<StageType>
  type_not_in: Array<StageType>
  index: number
  index_not: number
  index_in: number[]
  index_not_in: number[]
  index_lt: number
  index_lte: number
  index_gt: number
  index_gte: number
  AND: Array<StageScalarWhereInput>
  OR: Array<StageScalarWhereInput>
  NOT: Array<StageScalarWhereInput>
}

export interface StageUpdateDataInput {
  name: string
  description: string
  type: StageType
  index: number
}

export interface StageUpdateManyDataInput {
  name: string
  description: string
  type: StageType
  index: number
}

export interface StageUpdateManyInput {
  create: Array<StageCreateInput>
  update: Array<StageUpdateWithWhereUniqueNestedInput>
  upsert: Array<StageUpsertWithWhereUniqueNestedInput>
  delete: Array<StageWhereUniqueInput>
  connect: Array<StageWhereUniqueInput>
  set: Array<StageWhereUniqueInput>
  disconnect: Array<StageWhereUniqueInput>
  deleteMany: Array<StageScalarWhereInput>
  updateMany: Array<StageUpdateManyWithWhereNestedInput>
}

export interface StageUpdateManyWithWhereNestedInput {
  where?: StageScalarWhereInput | null
  data?: StageUpdateManyDataInput | null
}

export interface StageUpdateOneRequiredInput {
  create: StageCreateInput
  update: StageUpdateDataInput
  upsert: StageUpsertNestedInput
  connect: StageWhereUniqueInput
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where?: StageWhereUniqueInput | null
  data?: StageUpdateDataInput | null
}

export interface StageUpsertNestedInput {
  update?: StageUpdateDataInput | null
  create?: StageCreateInput | null
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where?: StageWhereUniqueInput | null
  update?: StageUpdateDataInput | null
  create?: StageCreateInput | null
}

export interface StageWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  type: StageType
  type_not: StageType
  type_in: Array<StageType>
  type_not_in: Array<StageType>
  index: number
  index_not: number
  index_in: number[]
  index_not_in: number[]
  index_lt: number
  index_lte: number
  index_gt: number
  index_gte: number
  AND: Array<StageWhereInput>
  OR: Array<StageWhereInput>
  NOT: Array<StageWhereInput>
}

export interface StageWhereUniqueInput {
  id: ID
}

export interface TagCreateInput {
  label?: string | null
  description: string
}

export interface TagCreateManyInput {
  create: Array<TagCreateInput>
  connect: Array<TagWhereUniqueInput>
}

export interface TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  label: string
  label_not: string
  label_in: string[]
  label_not_in: string[]
  label_lt: string
  label_lte: string
  label_gt: string
  label_gte: string
  label_contains: string
  label_not_contains: string
  label_starts_with: string
  label_not_starts_with: string
  label_ends_with: string
  label_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  AND: Array<TagScalarWhereInput>
  OR: Array<TagScalarWhereInput>
  NOT: Array<TagScalarWhereInput>
}

export interface TagUpdateDataInput {
  label: string
  description: string
}

export interface TagUpdateInput {
  label: string
  description: string
}

export interface TagUpdateManyDataInput {
  label: string
  description: string
}

export interface TagUpdateManyInput {
  create: Array<TagCreateInput>
  update: Array<TagUpdateWithWhereUniqueNestedInput>
  upsert: Array<TagUpsertWithWhereUniqueNestedInput>
  delete: Array<TagWhereUniqueInput>
  connect: Array<TagWhereUniqueInput>
  set: Array<TagWhereUniqueInput>
  disconnect: Array<TagWhereUniqueInput>
  deleteMany: Array<TagScalarWhereInput>
  updateMany: Array<TagUpdateManyWithWhereNestedInput>
}

export interface TagUpdateManyMutationInput {
  label: string
  description: string
}

export interface TagUpdateManyWithWhereNestedInput {
  where?: TagScalarWhereInput | null
  data?: TagUpdateManyDataInput | null
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where?: TagWhereUniqueInput | null
  data?: TagUpdateDataInput | null
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where?: TagWhereUniqueInput | null
  update?: TagUpdateDataInput | null
  create?: TagCreateInput | null
}

export interface TagWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  label: string
  label_not: string
  label_in: string[]
  label_not_in: string[]
  label_lt: string
  label_lte: string
  label_gt: string
  label_gte: string
  label_contains: string
  label_not_contains: string
  label_starts_with: string
  label_not_starts_with: string
  label_ends_with: string
  label_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  AND: Array<TagWhereInput>
  OR: Array<TagWhereInput>
  NOT: Array<TagWhereInput>
}

export interface TagWhereUniqueInput {
  id: ID
}

export interface TaskCreateInput {
  owners: UserCreateManyWithoutTasksInput
  candidate: CandidateCreateOneWithoutTasksInput
  title: string
  description: string
  dueAt: DateTime
}

export interface TaskCreateManyWithoutCandidateInput {
  create: Array<TaskCreateWithoutCandidateInput>
  connect: Array<TaskWhereUniqueInput>
}

export interface TaskCreateManyWithoutOwnersInput {
  create: Array<TaskCreateWithoutOwnersInput>
  connect: Array<TaskWhereUniqueInput>
}

export interface TaskCreateWithoutCandidateInput {
  owners: UserCreateManyWithoutTasksInput
  title: string
  description: string
  dueAt: DateTime
}

export interface TaskCreateWithoutOwnersInput {
  candidate: CandidateCreateOneWithoutTasksInput
  title: string
  description: string
  dueAt: DateTime
}

export interface TaskScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: string
  title_not: string
  title_in: string[]
  title_not_in: string[]
  title_lt: string
  title_lte: string
  title_gt: string
  title_gte: string
  title_contains: string
  title_not_contains: string
  title_starts_with: string
  title_not_starts_with: string
  title_ends_with: string
  title_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  dueAt: DateTime
  dueAt_not: DateTime
  dueAt_in: Array<DateTime>
  dueAt_not_in: Array<DateTime>
  dueAt_lt: DateTime
  dueAt_lte: DateTime
  dueAt_gt: DateTime
  dueAt_gte: DateTime
  AND: Array<TaskScalarWhereInput>
  OR: Array<TaskScalarWhereInput>
  NOT: Array<TaskScalarWhereInput>
}

export interface TaskUpdateInput {
  owners: UserUpdateManyWithoutTasksInput
  candidate: CandidateUpdateOneWithoutTasksInput
  title: string
  description: string
  dueAt: DateTime
}

export interface TaskUpdateManyDataInput {
  title: string
  description: string
  dueAt: DateTime
}

export interface TaskUpdateManyMutationInput {
  title: string
  description: string
  dueAt: DateTime
}

export interface TaskUpdateManyWithoutCandidateInput {
  create: Array<TaskCreateWithoutCandidateInput>
  delete: Array<TaskWhereUniqueInput>
  connect: Array<TaskWhereUniqueInput>
  set: Array<TaskWhereUniqueInput>
  disconnect: Array<TaskWhereUniqueInput>
  update: Array<TaskUpdateWithWhereUniqueWithoutCandidateInput>
  upsert: Array<TaskUpsertWithWhereUniqueWithoutCandidateInput>
  deleteMany: Array<TaskScalarWhereInput>
  updateMany: Array<TaskUpdateManyWithWhereNestedInput>
}

export interface TaskUpdateManyWithoutOwnersInput {
  create: Array<TaskCreateWithoutOwnersInput>
  delete: Array<TaskWhereUniqueInput>
  connect: Array<TaskWhereUniqueInput>
  set: Array<TaskWhereUniqueInput>
  disconnect: Array<TaskWhereUniqueInput>
  update: Array<TaskUpdateWithWhereUniqueWithoutOwnersInput>
  upsert: Array<TaskUpsertWithWhereUniqueWithoutOwnersInput>
  deleteMany: Array<TaskScalarWhereInput>
  updateMany: Array<TaskUpdateManyWithWhereNestedInput>
}

export interface TaskUpdateManyWithWhereNestedInput {
  where?: TaskScalarWhereInput | null
  data?: TaskUpdateManyDataInput | null
}

export interface TaskUpdateWithoutCandidateDataInput {
  owners: UserUpdateManyWithoutTasksInput
  title: string
  description: string
  dueAt: DateTime
}

export interface TaskUpdateWithoutOwnersDataInput {
  candidate: CandidateUpdateOneWithoutTasksInput
  title: string
  description: string
  dueAt: DateTime
}

export interface TaskUpdateWithWhereUniqueWithoutCandidateInput {
  where?: TaskWhereUniqueInput | null
  data?: TaskUpdateWithoutCandidateDataInput | null
}

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where?: TaskWhereUniqueInput | null
  data?: TaskUpdateWithoutOwnersDataInput | null
}

export interface TaskUpsertWithWhereUniqueWithoutCandidateInput {
  where?: TaskWhereUniqueInput | null
  update?: TaskUpdateWithoutCandidateDataInput | null
  create?: TaskCreateWithoutCandidateInput | null
}

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where?: TaskWhereUniqueInput | null
  update?: TaskUpdateWithoutOwnersDataInput | null
  create?: TaskCreateWithoutOwnersInput | null
}

export interface TaskWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  owners_every: UserWhereInput
  owners_some: UserWhereInput
  owners_none: UserWhereInput
  candidate: CandidateWhereInput
  title: string
  title_not: string
  title_in: string[]
  title_not_in: string[]
  title_lt: string
  title_lte: string
  title_gt: string
  title_gte: string
  title_contains: string
  title_not_contains: string
  title_starts_with: string
  title_not_starts_with: string
  title_ends_with: string
  title_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  dueAt: DateTime
  dueAt_not: DateTime
  dueAt_in: Array<DateTime>
  dueAt_not_in: Array<DateTime>
  dueAt_lt: DateTime
  dueAt_lte: DateTime
  dueAt_gt: DateTime
  dueAt_gte: DateTime
  AND: Array<TaskWhereInput>
  OR: Array<TaskWhereInput>
  NOT: Array<TaskWhereInput>
}

export interface TaskWhereUniqueInput {
  id: ID
}

export interface UserCreateInput {
  settings: Json
  tasks: TaskCreateManyWithoutOwnersInput
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  username?: string | null
  lastLogin: DateTime
  deletedAt: DateTime
  position: string
  avatar: FileCreateOneInput
}

export interface UserCreateManyInput {
  create: Array<UserCreateInput>
  connect: Array<UserWhereUniqueInput>
}

export interface UserCreateManyWithoutTasksInput {
  create: Array<UserCreateWithoutTasksInput>
  connect: Array<UserWhereUniqueInput>
}

export interface UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

export interface UserCreateWithoutTasksInput {
  settings: Json
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  username?: string | null
  lastLogin: DateTime
  deletedAt: DateTime
  position: string
  avatar: FileCreateOneInput
}

export interface UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: string
  firstName_not: string
  firstName_in: string[]
  firstName_not_in: string[]
  firstName_lt: string
  firstName_lte: string
  firstName_gt: string
  firstName_gte: string
  firstName_contains: string
  firstName_not_contains: string
  firstName_starts_with: string
  firstName_not_starts_with: string
  firstName_ends_with: string
  firstName_not_ends_with: string
  lastName: string
  lastName_not: string
  lastName_in: string[]
  lastName_not_in: string[]
  lastName_lt: string
  lastName_lte: string
  lastName_gt: string
  lastName_gte: string
  lastName_contains: string
  lastName_not_contains: string
  lastName_starts_with: string
  lastName_not_starts_with: string
  lastName_ends_with: string
  lastName_not_ends_with: string
  email: string
  email_not: string
  email_in: string[]
  email_not_in: string[]
  email_lt: string
  email_lte: string
  email_gt: string
  email_gte: string
  email_contains: string
  email_not_contains: string
  email_starts_with: string
  email_not_starts_with: string
  email_ends_with: string
  email_not_ends_with: string
  username: string
  username_not: string
  username_in: string[]
  username_not_in: string[]
  username_lt: string
  username_lte: string
  username_gt: string
  username_gte: string
  username_contains: string
  username_not_contains: string
  username_starts_with: string
  username_not_starts_with: string
  username_ends_with: string
  username_not_ends_with: string
  lastLogin: DateTime
  lastLogin_not: DateTime
  lastLogin_in: Array<DateTime>
  lastLogin_not_in: Array<DateTime>
  lastLogin_lt: DateTime
  lastLogin_lte: DateTime
  lastLogin_gt: DateTime
  lastLogin_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: Array<DateTime>
  deletedAt_not_in: Array<DateTime>
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  position: string
  position_not: string
  position_in: string[]
  position_not_in: string[]
  position_lt: string
  position_lte: string
  position_gt: string
  position_gte: string
  position_contains: string
  position_not_contains: string
  position_starts_with: string
  position_not_starts_with: string
  position_ends_with: string
  position_not_ends_with: string
  AND: Array<UserScalarWhereInput>
  OR: Array<UserScalarWhereInput>
  NOT: Array<UserScalarWhereInput>
}

export interface UserUpdateDataInput {
  settings: Json
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: DateTime
  deletedAt: DateTime
  position: string
  avatar: FileUpdateOneInput
}

export interface UserUpdateInput {
  settings: Json
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: DateTime
  deletedAt: DateTime
  position: string
  avatar: FileUpdateOneInput
}

export interface UserUpdateManyDataInput {
  settings: Json
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: DateTime
  deletedAt: DateTime
  position: string
}

export interface UserUpdateManyInput {
  create: Array<UserCreateInput>
  update: Array<UserUpdateWithWhereUniqueNestedInput>
  upsert: Array<UserUpsertWithWhereUniqueNestedInput>
  delete: Array<UserWhereUniqueInput>
  connect: Array<UserWhereUniqueInput>
  set: Array<UserWhereUniqueInput>
  disconnect: Array<UserWhereUniqueInput>
  deleteMany: Array<UserScalarWhereInput>
  updateMany: Array<UserUpdateManyWithWhereNestedInput>
}

export interface UserUpdateManyWithoutTasksInput {
  create: Array<UserCreateWithoutTasksInput>
  delete: Array<UserWhereUniqueInput>
  connect: Array<UserWhereUniqueInput>
  set: Array<UserWhereUniqueInput>
  disconnect: Array<UserWhereUniqueInput>
  update: Array<UserUpdateWithWhereUniqueWithoutTasksInput>
  upsert: Array<UserUpsertWithWhereUniqueWithoutTasksInput>
  deleteMany: Array<UserScalarWhereInput>
  updateMany: Array<UserUpdateManyWithWhereNestedInput>
}

export interface UserUpdateManyWithWhereNestedInput {
  where?: UserScalarWhereInput | null
  data?: UserUpdateManyDataInput | null
}

export interface UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

export interface UserUpdateWithoutTasksDataInput {
  settings: Json
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: DateTime
  deletedAt: DateTime
  position: string
  avatar: FileUpdateOneInput
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where?: UserWhereUniqueInput | null
  data?: UserUpdateDataInput | null
}

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  where?: UserWhereUniqueInput | null
  data?: UserUpdateWithoutTasksDataInput | null
}

export interface UserUpsertNestedInput {
  update?: UserUpdateDataInput | null
  create?: UserCreateInput | null
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where?: UserWhereUniqueInput | null
  update?: UserUpdateDataInput | null
  create?: UserCreateInput | null
}

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  where?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutTasksDataInput | null
  create?: UserCreateWithoutTasksInput | null
}

export interface UserWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  firstName: string
  firstName_not: string
  firstName_in: string[]
  firstName_not_in: string[]
  firstName_lt: string
  firstName_lte: string
  firstName_gt: string
  firstName_gte: string
  firstName_contains: string
  firstName_not_contains: string
  firstName_starts_with: string
  firstName_not_starts_with: string
  firstName_ends_with: string
  firstName_not_ends_with: string
  lastName: string
  lastName_not: string
  lastName_in: string[]
  lastName_not_in: string[]
  lastName_lt: string
  lastName_lte: string
  lastName_gt: string
  lastName_gte: string
  lastName_contains: string
  lastName_not_contains: string
  lastName_starts_with: string
  lastName_not_starts_with: string
  lastName_ends_with: string
  lastName_not_ends_with: string
  email: string
  email_not: string
  email_in: string[]
  email_not_in: string[]
  email_lt: string
  email_lte: string
  email_gt: string
  email_gte: string
  email_contains: string
  email_not_contains: string
  email_starts_with: string
  email_not_starts_with: string
  email_ends_with: string
  email_not_ends_with: string
  username: string
  username_not: string
  username_in: string[]
  username_not_in: string[]
  username_lt: string
  username_lte: string
  username_gt: string
  username_gte: string
  username_contains: string
  username_not_contains: string
  username_starts_with: string
  username_not_starts_with: string
  username_ends_with: string
  username_not_ends_with: string
  lastLogin: DateTime
  lastLogin_not: DateTime
  lastLogin_in: Array<DateTime>
  lastLogin_not_in: Array<DateTime>
  lastLogin_lt: DateTime
  lastLogin_lte: DateTime
  lastLogin_gt: DateTime
  lastLogin_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: Array<DateTime>
  deletedAt_not_in: Array<DateTime>
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  position: string
  position_not: string
  position_in: string[]
  position_not_in: string[]
  position_lt: string
  position_lte: string
  position_gt: string
  position_gte: string
  position_contains: string
  position_not_contains: string
  position_starts_with: string
  position_not_starts_with: string
  position_ends_with: string
  position_not_ends_with: string
  avatar: FileWhereInput
  AND: Array<UserWhereInput>
  OR: Array<UserWhereInput>
  NOT: Array<UserWhereInput>
}

export interface UserWhereUniqueInput {
  id: ID
  email: string
}

export interface WhereUniqueInput {
  id?: ID | null
}

export interface WorkflowCreateInput {
  jobs: JobCreateManyWithoutWorkflowInput
  name?: string | null
  description: string
  stages: StageCreateManyInput
  disqualifications: DisqualificationCreateManyInput
  fields: FieldCreateManyInput
  reviews: ReviewCreateManyInput
}

export interface WorkflowCreateManyInput {
  create: Array<WorkflowCreateInput>
  connect: Array<WorkflowWhereUniqueInput>
}

export interface WorkflowCreateOneWithoutJobsInput {
  create: WorkflowCreateWithoutJobsInput
  connect: WorkflowWhereUniqueInput
}

export interface WorkflowCreateWithoutJobsInput {
  name?: string | null
  description: string
  stages: StageCreateManyInput
  disqualifications: DisqualificationCreateManyInput
  fields: FieldCreateManyInput
  reviews: ReviewCreateManyInput
}

export interface WorkflowScalarWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  AND: Array<WorkflowScalarWhereInput>
  OR: Array<WorkflowScalarWhereInput>
  NOT: Array<WorkflowScalarWhereInput>
}

export interface WorkflowUpdateDataInput {
  jobs: JobUpdateManyWithoutWorkflowInput
  name: string
  description: string
  stages: StageUpdateManyInput
  disqualifications: DisqualificationUpdateManyInput
  fields: FieldUpdateManyInput
  reviews: ReviewUpdateManyInput
}

export interface WorkflowUpdateInput {
  jobs: JobUpdateManyWithoutWorkflowInput
  name: string
  description: string
  stages: StageUpdateManyInput
  disqualifications: DisqualificationUpdateManyInput
  fields: FieldUpdateManyInput
  reviews: ReviewUpdateManyInput
}

export interface WorkflowUpdateManyDataInput {
  name: string
  description: string
}

export interface WorkflowUpdateManyInput {
  create: Array<WorkflowCreateInput>
  update: Array<WorkflowUpdateWithWhereUniqueNestedInput>
  upsert: Array<WorkflowUpsertWithWhereUniqueNestedInput>
  delete: Array<WorkflowWhereUniqueInput>
  connect: Array<WorkflowWhereUniqueInput>
  set: Array<WorkflowWhereUniqueInput>
  disconnect: Array<WorkflowWhereUniqueInput>
  deleteMany: Array<WorkflowScalarWhereInput>
  updateMany: Array<WorkflowUpdateManyWithWhereNestedInput>
}

export interface WorkflowUpdateManyMutationInput {
  name: string
  description: string
}

export interface WorkflowUpdateManyWithWhereNestedInput {
  where?: WorkflowScalarWhereInput | null
  data?: WorkflowUpdateManyDataInput | null
}

export interface WorkflowUpdateOneRequiredWithoutJobsInput {
  create: WorkflowCreateWithoutJobsInput
  update: WorkflowUpdateWithoutJobsDataInput
  upsert: WorkflowUpsertWithoutJobsInput
  connect: WorkflowWhereUniqueInput
}

export interface WorkflowUpdateWithoutJobsDataInput {
  name: string
  description: string
  stages: StageUpdateManyInput
  disqualifications: DisqualificationUpdateManyInput
  fields: FieldUpdateManyInput
  reviews: ReviewUpdateManyInput
}

export interface WorkflowUpdateWithWhereUniqueNestedInput {
  where?: WorkflowWhereUniqueInput | null
  data?: WorkflowUpdateDataInput | null
}

export interface WorkflowUpsertWithoutJobsInput {
  update?: WorkflowUpdateWithoutJobsDataInput | null
  create?: WorkflowCreateWithoutJobsInput | null
}

export interface WorkflowUpsertWithWhereUniqueNestedInput {
  where?: WorkflowWhereUniqueInput | null
  update?: WorkflowUpdateDataInput | null
  create?: WorkflowCreateInput | null
}

export interface WorkflowWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  description: string
  description_not: string
  description_in: string[]
  description_not_in: string[]
  description_lt: string
  description_lte: string
  description_gt: string
  description_gte: string
  description_contains: string
  description_not_contains: string
  description_starts_with: string
  description_not_starts_with: string
  description_ends_with: string
  description_not_ends_with: string
  stages_every: StageWhereInput
  stages_some: StageWhereInput
  stages_none: StageWhereInput
  disqualifications_every: DisqualificationWhereInput
  disqualifications_some: DisqualificationWhereInput
  disqualifications_none: DisqualificationWhereInput
  fields_every: FieldWhereInput
  fields_some: FieldWhereInput
  fields_none: FieldWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  AND: Array<WorkflowWhereInput>
  OR: Array<WorkflowWhereInput>
  NOT: Array<WorkflowWhereInput>
}

export interface WorkflowWhereUniqueInput {
  id: ID
}

export interface WorkspaceCreateInput {
  name?: string | null
  firstName: string
  lastName: string
  email?: string | null
  username?: string | null
  password?: string | null
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create: WorkspaceCreateWithoutJobsInput
  connect: WorkspaceWhereUniqueInput
}

export interface WorkspaceCreateWithoutJobsInput {
  users: UserCreateManyInput
  candidates: CandidateCreateManyInput
  settings: Json
  workflows: WorkflowCreateManyInput
  invites: InviteCreateManyInput
  name?: string | null
}

export interface WorkspaceUpdateOneRequiredWithoutJobsInput {
  create: WorkspaceCreateWithoutJobsInput
  update: WorkspaceUpdateWithoutJobsDataInput
  upsert: WorkspaceUpsertWithoutJobsInput
  connect: WorkspaceWhereUniqueInput
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  users: UserUpdateManyInput
  candidates: CandidateUpdateManyInput
  settings: Json
  workflows: WorkflowUpdateManyInput
  invites: InviteUpdateManyInput
  name: string
}

export interface WorkspaceUpsertWithoutJobsInput {
  update?: WorkspaceUpdateWithoutJobsDataInput | null
  create?: WorkspaceCreateWithoutJobsInput | null
}

export interface WorkspaceWhereInput {
  id: ID
  id_not: ID
  id_in: Array<ID>
  id_not_in: Array<ID>
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
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
  candidates_every: CandidateWhereInput
  candidates_some: CandidateWhereInput
  candidates_none: CandidateWhereInput
  workflows_every: WorkflowWhereInput
  workflows_some: WorkflowWhereInput
  workflows_none: WorkflowWhereInput
  invites_every: InviteWhereInput
  invites_some: InviteWhereInput
  invites_none: InviteWhereInput
  name: string
  name_not: string
  name_in: string[]
  name_not_in: string[]
  name_lt: string
  name_lte: string
  name_gt: string
  name_gte: string
  name_contains: string
  name_not_contains: string
  name_starts_with: string
  name_not_starts_with: string
  name_ends_with: string
  name_not_ends_with: string
  AND: Array<WorkspaceWhereInput>
  OR: Array<WorkspaceWhereInput>
  NOT: Array<WorkspaceWhereInput>
}

export interface WorkspaceWhereUniqueInput {
  id: ID
}

/* ENUM TYPES */ 

export enum ApplicationOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
}

export enum ApplicationType {
  QUALIFIED = 'QUALIFIED',
  DISQUALIFIED = 'DISQUALIFIED',
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
  position_DESC = 'position_DESC',
}

export enum CommentOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  content_ASC = 'content_ASC',
  content_DESC = 'content_DESC',
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
  description_DESC = 'description_DESC',
}

export enum FieldInstanceOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  value_ASC = 'value_ASC',
  value_DESC = 'value_DESC',
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
  description_DESC = 'description_DESC',
}

export enum FieldType {
  INT = 'INT',
  FLOAT = 'FLOAT',
  TEXT = 'TEXT',
  PARAGRAPH = 'PARAGRAPH',
  BOOLEAN = 'BOOLEAN',
  DATETIME = 'DATETIME',
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
  url_DESC = 'url_DESC',
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
  expireAt_DESC = 'expireAt_DESC',
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
  requirements_DESC = 'requirements_DESC',
}

export enum JobType {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
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
  zip_DESC = 'zip_DESC',
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
  content_DESC = 'content_DESC',
}

export enum ReviewOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
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
  description_DESC = 'description_DESC',
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
  index_DESC = 'index_DESC',
}

export enum StageType {
  NEW = 'NEW',
  PIPELINE = 'PIPELINE',
  FINAL = 'FINAL',
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
  description_DESC = 'description_DESC',
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
  dueAt_DESC = 'dueAt_DESC',
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
  position_DESC = 'position_DESC',
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
  description_DESC = 'description_DESC',
}

