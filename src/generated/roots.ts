import gql from 'graphql-tag'

export const Query = gql`
  type Query {
    application(where: ApplicationWhereUniqueInput!): Application
    applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application]!
    applicationsConnection(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicationConnection!
    candidate(where: CandidateWhereUniqueInput!): Candidate
    candidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate]!
    candidatesConnection(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CandidateConnection!
    job(where: JobWhereUniqueInput!): Job
    jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
    jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
    source(where: SourceWhereUniqueInput!): Source
    sources(where: SourceWhereInput, orderBy: SourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Source]!
    sourcesConnection(where: SourceWhereInput, orderBy: SourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SourceConnection!
    tag(where: TagWhereUniqueInput!): Tag
    tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
    tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
    task(where: TaskWhereUniqueInput!): Task
    tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
    tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
    user(where: UserWhereUniqueInput!): User
    users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
    usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
    workflow(where: WorkflowWhereUniqueInput!): Workflow
    workflows(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workflow]!
    workflowsConnection(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkflowConnection!
  }
`

export const Mutation = gql`
  type Mutation {
    createApplication(data: ApplicationCreateInput!): Application!
    updateApplication(data: ApplicationUpdateInput!, where: ApplicationWhereUniqueInput!): Application
    updateManyApplications(data: ApplicationUpdateManyMutationInput!, where: ApplicationWhereInput): BatchPayload!
    upsertApplication(where: ApplicationWhereUniqueInput!, create: ApplicationCreateInput!, update: ApplicationUpdateInput!): Application!
    deleteApplication(where: ApplicationWhereUniqueInput!): Application
    deleteManyApplications(where: ApplicationWhereInput): BatchPayload!
    createCandidate(data: CandidateCreateInput!): Candidate!
    updateCandidate(data: CandidateUpdateInput!, where: CandidateWhereUniqueInput!): Candidate
    updateManyCandidates(data: CandidateUpdateManyMutationInput!, where: CandidateWhereInput): BatchPayload!
    upsertCandidate(where: CandidateWhereUniqueInput!, create: CandidateCreateInput!, update: CandidateUpdateInput!): Candidate!
    deleteCandidate(where: CandidateWhereUniqueInput!): Candidate
    deleteManyCandidates(where: CandidateWhereInput): BatchPayload!
    createJob(data: JobCreateInput!): Job!
    updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
    updateManyJobs(data: JobUpdateManyMutationInput!, where: JobWhereInput): BatchPayload!
    upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
    deleteJob(where: JobWhereUniqueInput!): Job
    deleteManyJobs(where: JobWhereInput): BatchPayload!
    createSource(data: SourceCreateInput!): Source!
    updateSource(data: SourceUpdateInput!, where: SourceWhereUniqueInput!): Source
    updateManySources(data: SourceUpdateManyMutationInput!, where: SourceWhereInput): BatchPayload!
    upsertSource(where: SourceWhereUniqueInput!, create: SourceCreateInput!, update: SourceUpdateInput!): Source!
    deleteSource(where: SourceWhereUniqueInput!): Source
    deleteManySources(where: SourceWhereInput): BatchPayload!
    createTag(data: TagCreateInput!): Tag!
    updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
    updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
    upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
    deleteTag(where: TagWhereUniqueInput!): Tag
    deleteManyTags(where: TagWhereInput): BatchPayload!
    createTask(data: TaskCreateInput!): Task!
    updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
    updateManyTasks(data: TaskUpdateManyMutationInput!, where: TaskWhereInput): BatchPayload!
    upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
    deleteTask(where: TaskWhereUniqueInput!): Task
    deleteManyTasks(where: TaskWhereInput): BatchPayload!
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    createWorkflow(data: WorkflowCreateInput!): Workflow!
    updateWorkflow(data: WorkflowUpdateInput!, where: WorkflowWhereUniqueInput!): Workflow
    updateManyWorkflows(data: WorkflowUpdateManyMutationInput!, where: WorkflowWhereInput): BatchPayload!
    upsertWorkflow(where: WorkflowWhereUniqueInput!, create: WorkflowCreateInput!, update: WorkflowUpdateInput!): Workflow!
    deleteWorkflow(where: WorkflowWhereUniqueInput!): Workflow
    deleteManyWorkflows(where: WorkflowWhereInput): BatchPayload!
  }
`