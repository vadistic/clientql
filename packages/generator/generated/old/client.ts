import {
  AggregateApplication,
  AggregateCandidate,
  AggregateJob,
  AggregateSource,
  AggregateTag,
  AggregateTask,
  AggregateUser,
  AggregateWorkflow,
  Application,
  ApplicationConnection,
  ApplicationReviewsArgs,
  BatchPayload,
  Candidate,
  CandidateApplicationsArgs,
  CandidateCommentsArgs,
  CandidateConnection,
  CandidateCoverLettersFileArgs,
  CandidateFieldsArgs,
  CandidateResumesFileArgs,
  CandidateSourcesArgs,
  CandidateTagsArgs,
  CandidateTasksArgs,
  Disqualification,
  DisqualificationInstance,
  File,
  Job,
  JobApplicationsArgs,
  JobCommentsArgs,
  JobConnection,
  JobLocationsArgs,
  MutationCreateApplicationArgs,
  MutationCreateCandidateArgs,
  MutationCreateJobArgs,
  MutationCreateSourceArgs,
  MutationCreateTagArgs,
  MutationCreateTaskArgs,
  MutationCreateWorkflowArgs,
  MutationDeleteApplicationArgs,
  MutationDeleteCandidateArgs,
  MutationDeleteJobArgs,
  MutationDeleteManyApplicationsArgs,
  MutationDeleteManyCandidatesArgs,
  MutationDeleteManyJobsArgs,
  MutationDeleteManySourcesArgs,
  MutationDeleteManyTagsArgs,
  MutationDeleteManyTasksArgs,
  MutationDeleteManyWorkflowsArgs,
  MutationDeleteSourceArgs,
  MutationDeleteTagArgs,
  MutationDeleteTaskArgs,
  MutationDeleteWorkflowArgs,
  MutationUpdateApplicationArgs,
  MutationUpdateCandidateArgs,
  MutationUpdateJobArgs,
  MutationUpdateManyApplicationsArgs,
  MutationUpdateManyCandidatesArgs,
  MutationUpdateManyJobsArgs,
  MutationUpdateManySourcesArgs,
  MutationUpdateManyTagsArgs,
  MutationUpdateManyTasksArgs,
  MutationUpdateManyWorkflowsArgs,
  MutationUpdateSourceArgs,
  MutationUpdateTagArgs,
  MutationUpdateTaskArgs,
  MutationUpdateUserArgs,
  MutationUpdateWorkflowArgs,
  MutationUpsertApplicationArgs,
  MutationUpsertCandidateArgs,
  MutationUpsertJobArgs,
  MutationUpsertSourceArgs,
  MutationUpsertTagArgs,
  MutationUpsertTaskArgs,
  MutationUpsertWorkflowArgs,
  PageInfo,
  QueryApplicationArgs,
  QueryApplicationsArgs,
  QueryApplicationsConnectionArgs,
  QueryCandidateArgs,
  QueryCandidatesArgs,
  QueryCandidatesConnectionArgs,
  QueryJobArgs,
  QueryJobsArgs,
  QueryJobsConnectionArgs,
  QuerySourceArgs,
  QuerySourcesArgs,
  QuerySourcesConnectionArgs,
  QueryTagArgs,
  QueryTagsArgs,
  QueryTagsConnectionArgs,
  QueryTaskArgs,
  QueryTasksArgs,
  QueryTasksConnectionArgs,
  QueryUserArgs,
  QueryUsersArgs,
  QueryUsersConnectionArgs,
  QueryWorkflowArgs,
  QueryWorkflowsArgs,
  QueryWorkflowsConnectionArgs,
  Source,
  SourceConnection,
  Stage,
  Tag,
  TagConnection,
  Task,
  TaskConnection,
  TaskOwnersArgs,
  User,
  UserConnection,
  UserTasksArgs,
  Workflow,
  WorkflowConnection,
  WorkflowDisqualificationsArgs,
  WorkflowFieldsArgs,
  WorkflowJobsArgs,
  WorkflowReviewsArgs,
  WorkflowStagesArgs,
  Workspace,
  WorkspaceCandidatesArgs,
  WorkspaceInvitesArgs,
  WorkspaceJobsArgs,
  WorkspaceUsersArgs,
  WorkspaceWorkflowsArgs,
  ApplicationType,
  ReviewInstance,
  ApplicationEdge,
  FieldInstance,
  CandidateEdge,
  JobType,
  JobEdge,
  SourceEdge,
  TagEdge,
  TaskEdge,
  UserEdge,
  Field,
  Review,
  WorkflowEdge,
  StageType,
  Invite
} from '../types'

/**
 * ADD THIS START
 */

type Maybe<T> = null | T
type ID = string
type DateTime = string
type Json = string
type Long = number

type Scalar = boolean | string | number | null

type ScalarKeys<T> = {
  [P in keyof T]: T[P] extends Scalar ? P : never
}[keyof T]

type FlatFragment<T> = { [K in ScalarKeys<Required<T>>]: T[K] }

/**
 * ADD THIS END
 */

export interface Client {
  application: (args: QueryApplicationArgs) => ApplicationPromise
  applications: (args?: QueryApplicationsArgs) => Promise<Array<Application>>
  applicationsConnection: (
    args?: QueryApplicationsConnectionArgs
  ) => ApplicationConnectionPromise
  candidate: (args: QueryCandidateArgs) => CandidatePromise
  candidates: (args?: QueryCandidatesArgs) => Promise<Array<Candidate>>
  candidatesConnection: (
    args?: QueryCandidatesConnectionArgs
  ) => CandidateConnectionPromise
  job: (args: QueryJobArgs) => JobPromise
  jobs: (args?: QueryJobsArgs) => Promise<Array<Job>>
  jobsConnection: (args?: QueryJobsConnectionArgs) => JobConnectionPromise
  source: (args: QuerySourceArgs) => SourcePromise
  sources: (args?: QuerySourcesArgs) => Promise<Array<Source>>
  sourcesConnection: (
    args?: QuerySourcesConnectionArgs
  ) => SourceConnectionPromise
  tag: (args: QueryTagArgs) => TagPromise
  tags: (args?: QueryTagsArgs) => Promise<Array<Tag>>
  tagsConnection: (args?: QueryTagsConnectionArgs) => TagConnectionPromise
  task: (args: QueryTaskArgs) => TaskPromise
  tasks: (args?: QueryTasksArgs) => Promise<Array<Task>>
  tasksConnection: (args?: QueryTasksConnectionArgs) => TaskConnectionPromise
  user: (args: QueryUserArgs) => UserPromise
  users: (args?: QueryUsersArgs) => Promise<Array<User>>
  usersConnection: (args?: QueryUsersConnectionArgs) => UserConnectionPromise
  workflow: (args: QueryWorkflowArgs) => WorkflowPromise
  workflows: (args?: QueryWorkflowsArgs) => Promise<Array<Workflow>>
  workflowsConnection: (
    args?: QueryWorkflowsConnectionArgs
  ) => WorkflowConnectionPromise
  createApplication: (args: MutationCreateApplicationArgs) => ApplicationPromise
  updateApplication: (args: MutationUpdateApplicationArgs) => ApplicationPromise
  updateManyApplications: (
    args: MutationUpdateManyApplicationsArgs
  ) => BatchPayloadPromise
  upsertApplication: (args: MutationUpsertApplicationArgs) => ApplicationPromise
  deleteApplication: (args: MutationDeleteApplicationArgs) => ApplicationPromise
  deleteManyApplications: (
    args?: MutationDeleteManyApplicationsArgs
  ) => BatchPayloadPromise
  createCandidate: (args: MutationCreateCandidateArgs) => CandidatePromise
  updateCandidate: (args: MutationUpdateCandidateArgs) => CandidatePromise
  updateManyCandidates: (
    args: MutationUpdateManyCandidatesArgs
  ) => BatchPayloadPromise
  upsertCandidate: (args: MutationUpsertCandidateArgs) => CandidatePromise
  deleteCandidate: (args: MutationDeleteCandidateArgs) => CandidatePromise
  deleteManyCandidates: (
    args?: MutationDeleteManyCandidatesArgs
  ) => BatchPayloadPromise
  createJob: (args: MutationCreateJobArgs) => JobPromise
  updateJob: (args: MutationUpdateJobArgs) => JobPromise
  updateManyJobs: (args: MutationUpdateManyJobsArgs) => BatchPayloadPromise
  upsertJob: (args: MutationUpsertJobArgs) => JobPromise
  deleteJob: (args: MutationDeleteJobArgs) => JobPromise
  deleteManyJobs: (args?: MutationDeleteManyJobsArgs) => BatchPayloadPromise
  createSource: (args: MutationCreateSourceArgs) => SourcePromise
  updateSource: (args: MutationUpdateSourceArgs) => SourcePromise
  updateManySources: (
    args: MutationUpdateManySourcesArgs
  ) => BatchPayloadPromise
  upsertSource: (args: MutationUpsertSourceArgs) => SourcePromise
  deleteSource: (args: MutationDeleteSourceArgs) => SourcePromise
  deleteManySources: (
    args?: MutationDeleteManySourcesArgs
  ) => BatchPayloadPromise
  createTag: (args: MutationCreateTagArgs) => TagPromise
  updateTag: (args: MutationUpdateTagArgs) => TagPromise
  updateManyTags: (args: MutationUpdateManyTagsArgs) => BatchPayloadPromise
  upsertTag: (args: MutationUpsertTagArgs) => TagPromise
  deleteTag: (args: MutationDeleteTagArgs) => TagPromise
  deleteManyTags: (args?: MutationDeleteManyTagsArgs) => BatchPayloadPromise
  createTask: (args: MutationCreateTaskArgs) => TaskPromise
  updateTask: (args: MutationUpdateTaskArgs) => TaskPromise
  updateManyTasks: (args: MutationUpdateManyTasksArgs) => BatchPayloadPromise
  upsertTask: (args: MutationUpsertTaskArgs) => TaskPromise
  deleteTask: (args: MutationDeleteTaskArgs) => TaskPromise
  deleteManyTasks: (args?: MutationDeleteManyTasksArgs) => BatchPayloadPromise
  updateUser: (args: MutationUpdateUserArgs) => UserPromise
  createWorkflow: (args: MutationCreateWorkflowArgs) => WorkflowPromise
  updateWorkflow: (args: MutationUpdateWorkflowArgs) => WorkflowPromise
  updateManyWorkflows: (
    args: MutationUpdateManyWorkflowsArgs
  ) => BatchPayloadPromise
  upsertWorkflow: (args: MutationUpsertWorkflowArgs) => WorkflowPromise
  deleteWorkflow: (args: MutationDeleteWorkflowArgs) => WorkflowPromise
  deleteManyWorkflows: (
    args?: MutationDeleteManyWorkflowsArgs
  ) => BatchPayloadPromise
}

export interface ApplicationPromise extends Promise<FlatFragment<Application>> {
  createdAt: () => Promise<DateTime>
  id: () => Promise<ID>
  updatedAt: () => Promise<DateTime>
  type: () => Promise<ApplicationType>
  disqualification: () => DisqualificationInstancePromise
  stage: () => StagePromise
  reviews: (args?: ApplicationReviewsArgs) => Promise<Array<ReviewInstance>>
  job: () => JobPromise
  candidate: () => CandidatePromise
}

export interface ApplicationConnectionPromise
  extends Promise<FlatFragment<ApplicationConnection>> {
  pageInfo: () => PageInfoPromise
  edges: () => Promise<Array<ApplicationEdge>>
  aggregate: () => AggregateApplicationPromise
}

export interface CandidatePromise extends Promise<FlatFragment<Candidate>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  firstName: () => Promise<Maybe<string>>
  lastName: () => Promise<Maybe<string>>
  emails: () => Promise<string[]>
  phones: () => Promise<string[]>
  links: () => Promise<string[]>
  avatar: () => FilePromise
  company: () => Promise<Maybe<string>>
  headline: () => Promise<Maybe<string>>
  position: () => Promise<Maybe<string>>
  resumesString: () => Promise<string[]>
  resumesFile: (args?: CandidateResumesFileArgs) => Promise<Array<File>>
  coverLettersString: () => Promise<string[]>
  coverLettersFile: (
    args?: CandidateCoverLettersFileArgs
  ) => Promise<Array<File>>
  tags: (args?: CandidateTagsArgs) => Promise<Array<Tag>>
  sources: (args?: CandidateSourcesArgs) => Promise<Array<Source>>
  fields: (args?: CandidateFieldsArgs) => Promise<Array<FieldInstance>>
  tasks: (args?: CandidateTasksArgs) => Promise<Array<Task>>
  applications: (
    args?: CandidateApplicationsArgs
  ) => Promise<Array<Application>>
  comments: (args?: CandidateCommentsArgs) => Promise<Array<Comment>>
}

export interface CandidateConnectionPromise
  extends Promise<FlatFragment<CandidateConnection>> {
  pageInfo: () => PageInfoPromise
  edges: () => Promise<Array<CandidateEdge>>
  aggregate: () => AggregateCandidatePromise
}

export interface JobPromise extends Promise<FlatFragment<Job>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  workspace: () => WorkspacePromise
  applications: (args?: JobApplicationsArgs) => Promise<Array<Application>>
  workflow: () => WorkflowPromise
  comments: (args?: JobCommentsArgs) => Promise<Array<Comment>>
  type: () => Promise<JobType>
  department: () => Promise<Maybe<string>>
  locations: (args?: JobLocationsArgs) => Promise<Array<Location>>
  name: () => Promise<string>
  excerpt: () => Promise<Maybe<string>>
  companyDescription: () => Promise<Maybe<string>>
  description: () => Promise<Maybe<string>>
  requirements: () => Promise<Maybe<string>>
}

export interface JobConnectionPromise
  extends Promise<FlatFragment<JobConnection>> {
  pageInfo: () => PageInfoPromise
  edges: () => Promise<Array<JobEdge>>
  aggregate: () => AggregateJobPromise
}

export interface SourcePromise extends Promise<FlatFragment<Source>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  label: () => Promise<string>
  description: () => Promise<Maybe<string>>
}

export interface SourceConnectionPromise
  extends Promise<FlatFragment<SourceConnection>> {
  pageInfo: () => PageInfoPromise
  edges: () => Promise<Array<SourceEdge>>
  aggregate: () => AggregateSourcePromise
}

export interface TagPromise extends Promise<FlatFragment<Tag>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  label: () => Promise<string>
  description: () => Promise<Maybe<string>>
}

export interface TagConnectionPromise
  extends Promise<FlatFragment<TagConnection>> {
  pageInfo: () => PageInfoPromise
  edges: () => Promise<Array<TagEdge>>
  aggregate: () => AggregateTagPromise
}

export interface TaskPromise extends Promise<FlatFragment<Task>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  owners: (args?: TaskOwnersArgs) => Promise<Array<User>>
  candidate: () => CandidatePromise
  title: () => Promise<Maybe<string>>
  description: () => Promise<Maybe<string>>
  dueAt: () => Promise<Maybe<DateTime>>
}

export interface TaskConnectionPromise
  extends Promise<FlatFragment<TaskConnection>> {
  pageInfo: () => PageInfoPromise
  edges: () => Promise<Array<TaskEdge>>
  aggregate: () => AggregateTaskPromise
}

export interface UserPromise extends Promise<FlatFragment<User>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  settings: () => Promise<Maybe<Json>>
  tasks: (args?: UserTasksArgs) => Promise<Array<Task>>
  firstName: () => Promise<string>
  lastName: () => Promise<string>
  email: () => Promise<string>
  username: () => Promise<string>
  lastLogin: () => Promise<Maybe<DateTime>>
  deletedAt: () => Promise<Maybe<DateTime>>
  position: () => Promise<Maybe<string>>
  avatar: () => FilePromise
}

export interface UserConnectionPromise
  extends Promise<FlatFragment<UserConnection>> {
  pageInfo: () => PageInfoPromise
  edges: () => Promise<Array<UserEdge>>
  aggregate: () => AggregateUserPromise
}

export interface WorkflowPromise extends Promise<FlatFragment<Workflow>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  jobs: (args?: WorkflowJobsArgs) => Promise<Array<Job>>
  name: () => Promise<string>
  description: () => Promise<Maybe<string>>
  stages: (args?: WorkflowStagesArgs) => Promise<Array<Stage>>
  disqualifications: (
    args?: WorkflowDisqualificationsArgs
  ) => Promise<Array<Disqualification>>
  fields: (args?: WorkflowFieldsArgs) => Promise<Array<Field>>
  reviews: (args?: WorkflowReviewsArgs) => Promise<Array<Review>>
}

export interface WorkflowConnectionPromise
  extends Promise<FlatFragment<WorkflowConnection>> {
  pageInfo: () => PageInfoPromise
  edges: () => Promise<Array<WorkflowEdge>>
  aggregate: () => AggregateWorkflowPromise
}

export interface BatchPayloadPromise
  extends Promise<FlatFragment<BatchPayload>> {
  count: () => Promise<Long>
}

export interface DisqualificationInstancePromise
  extends Promise<FlatFragment<DisqualificationInstance>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  prototype: () => DisqualificationPromise
  createdBy: () => UserPromise
  content: () => Promise<Maybe<string>>
}

export interface StagePromise extends Promise<FlatFragment<Stage>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  name: () => Promise<string>
  description: () => Promise<Maybe<string>>
  type: () => Promise<StageType>
  index: () => Promise<number>
}

export interface JobPromise extends Promise<FlatFragment<Job>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  workspace: () => WorkspacePromise
  applications: (args?: JobApplicationsArgs) => Promise<Array<Application>>
  workflow: () => WorkflowPromise
  comments: (args?: JobCommentsArgs) => Promise<Array<Comment>>
  type: () => Promise<JobType>
  department: () => Promise<Maybe<string>>
  locations: (args?: JobLocationsArgs) => Promise<Array<Location>>
  name: () => Promise<string>
  excerpt: () => Promise<Maybe<string>>
  companyDescription: () => Promise<Maybe<string>>
  description: () => Promise<Maybe<string>>
  requirements: () => Promise<Maybe<string>>
}

export interface CandidatePromise extends Promise<FlatFragment<Candidate>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  firstName: () => Promise<Maybe<string>>
  lastName: () => Promise<Maybe<string>>
  emails: () => Promise<string[]>
  phones: () => Promise<string[]>
  links: () => Promise<string[]>
  avatar: () => FilePromise
  company: () => Promise<Maybe<string>>
  headline: () => Promise<Maybe<string>>
  position: () => Promise<Maybe<string>>
  resumesString: () => Promise<string[]>
  resumesFile: (args?: CandidateResumesFileArgs) => Promise<Array<File>>
  coverLettersString: () => Promise<string[]>
  coverLettersFile: (
    args?: CandidateCoverLettersFileArgs
  ) => Promise<Array<File>>
  tags: (args?: CandidateTagsArgs) => Promise<Array<Tag>>
  sources: (args?: CandidateSourcesArgs) => Promise<Array<Source>>
  fields: (args?: CandidateFieldsArgs) => Promise<Array<FieldInstance>>
  tasks: (args?: CandidateTasksArgs) => Promise<Array<Task>>
  applications: (
    args?: CandidateApplicationsArgs
  ) => Promise<Array<Application>>
  comments: (args?: CandidateCommentsArgs) => Promise<Array<Comment>>
}

export interface PageInfoPromise extends Promise<FlatFragment<PageInfo>> {
  hasNextPage: () => Promise<boolean>
  hasPreviousPage: () => Promise<boolean>
  startCursor: () => Promise<Maybe<string>>
  endCursor: () => Promise<Maybe<string>>
}

export interface AggregateApplicationPromise
  extends Promise<FlatFragment<AggregateApplication>> {
  count: () => Promise<number>
}

export interface FilePromise extends Promise<FlatFragment<File>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  size: () => Promise<number>
  type: () => Promise<string>
  name: () => Promise<string>
  url: () => Promise<string>
}

export interface AggregateCandidatePromise
  extends Promise<FlatFragment<AggregateCandidate>> {
  count: () => Promise<number>
}

export interface WorkspacePromise extends Promise<FlatFragment<Workspace>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  users: (args?: WorkspaceUsersArgs) => Promise<Array<User>>
  jobs: (args?: WorkspaceJobsArgs) => Promise<Array<Job>>
  candidates: (args?: WorkspaceCandidatesArgs) => Promise<Array<Candidate>>
  settings: () => Promise<Maybe<Json>>
  workflows: (args?: WorkspaceWorkflowsArgs) => Promise<Array<Workflow>>
  invites: (args?: WorkspaceInvitesArgs) => Promise<Array<Invite>>
  name: () => Promise<string>
}

export interface WorkflowPromise extends Promise<FlatFragment<Workflow>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  jobs: (args?: WorkflowJobsArgs) => Promise<Array<Job>>
  name: () => Promise<string>
  description: () => Promise<Maybe<string>>
  stages: (args?: WorkflowStagesArgs) => Promise<Array<Stage>>
  disqualifications: (
    args?: WorkflowDisqualificationsArgs
  ) => Promise<Array<Disqualification>>
  fields: (args?: WorkflowFieldsArgs) => Promise<Array<Field>>
  reviews: (args?: WorkflowReviewsArgs) => Promise<Array<Review>>
}

export interface AggregateJobPromise
  extends Promise<FlatFragment<AggregateJob>> {
  count: () => Promise<number>
}

export interface AggregateSourcePromise
  extends Promise<FlatFragment<AggregateSource>> {
  count: () => Promise<number>
}

export interface AggregateTagPromise
  extends Promise<FlatFragment<AggregateTag>> {
  count: () => Promise<number>
}

export interface AggregateTaskPromise
  extends Promise<FlatFragment<AggregateTask>> {
  count: () => Promise<number>
}

export interface AggregateUserPromise
  extends Promise<FlatFragment<AggregateUser>> {
  count: () => Promise<number>
}

export interface AggregateWorkflowPromise
  extends Promise<FlatFragment<AggregateWorkflow>> {
  count: () => Promise<number>
}

export interface DisqualificationPromise
  extends Promise<FlatFragment<Disqualification>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  name: () => Promise<string>
  description: () => Promise<Maybe<string>>
}

export interface UserPromise extends Promise<FlatFragment<User>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  settings: () => Promise<Maybe<Json>>
  tasks: (args?: UserTasksArgs) => Promise<Array<Task>>
  firstName: () => Promise<string>
  lastName: () => Promise<string>
  email: () => Promise<string>
  username: () => Promise<string>
  lastLogin: () => Promise<Maybe<DateTime>>
  deletedAt: () => Promise<Maybe<DateTime>>
  position: () => Promise<Maybe<string>>
  avatar: () => FilePromise
}

export interface WorkspacePromise extends Promise<FlatFragment<Workspace>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  users: (args?: WorkspaceUsersArgs) => Promise<Array<User>>
  jobs: (args?: WorkspaceJobsArgs) => Promise<Array<Job>>
  candidates: (args?: WorkspaceCandidatesArgs) => Promise<Array<Candidate>>
  settings: () => Promise<Maybe<Json>>
  workflows: (args?: WorkspaceWorkflowsArgs) => Promise<Array<Workflow>>
  invites: (args?: WorkspaceInvitesArgs) => Promise<Array<Invite>>
  name: () => Promise<string>
}

export interface WorkflowPromise extends Promise<FlatFragment<Workflow>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  jobs: (args?: WorkflowJobsArgs) => Promise<Array<Job>>
  name: () => Promise<string>
  description: () => Promise<Maybe<string>>
  stages: (args?: WorkflowStagesArgs) => Promise<Array<Stage>>
  disqualifications: (
    args?: WorkflowDisqualificationsArgs
  ) => Promise<Array<Disqualification>>
  fields: (args?: WorkflowFieldsArgs) => Promise<Array<Field>>
  reviews: (args?: WorkflowReviewsArgs) => Promise<Array<Review>>
}

export interface FilePromise extends Promise<FlatFragment<File>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  size: () => Promise<number>
  type: () => Promise<string>
  name: () => Promise<string>
  url: () => Promise<string>
}

export interface FilePromise extends Promise<FlatFragment<File>> {
  id: () => Promise<ID>
  createdAt: () => Promise<DateTime>
  updatedAt: () => Promise<DateTime>
  size: () => Promise<number>
  type: () => Promise<string>
  name: () => Promise<string>
  url: () => Promise<string>
}
