import gql from 'graphql-tag'

export const VATS_TYPEDEFS = gql`
type AccessPayload {
  token: String!
}

type AggregateApplication {
  count: Int!
}

type AggregateCandidate {
  count: Int!
}

type AggregateJob {
  count: Int!
}

type AggregateSource {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateTask {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWorkflow {
  count: Int!
}

type Application {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: ApplicationType!
  disqualification: DisqualificationInstance
  stage: Stage!
  reviews(where: ReviewInstanceWhereInput, orderBy: ReviewInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReviewInstance!]
  job: Job!
  candidate: Candidate!
}

type ApplicationConnection {
  pageInfo: PageInfo!
  edges: [ApplicationEdge]!
  aggregate: AggregateApplication!
}

input ApplicationCreateInput {
  type: ApplicationType!
  disqualification: DisqualificationInstanceCreateOneInput
  stage: StageCreateOneInput!
  reviews: ReviewInstanceCreateManyInput
  job: JobCreateOneWithoutApplicationsInput!
  candidate: CandidateCreateOneWithoutApplicationsInput!
}

input ApplicationCreateManyWithoutCandidateInput {
  create: [ApplicationCreateWithoutCandidateInput!]
  connect: [ApplicationWhereUniqueInput!]
}

input ApplicationCreateManyWithoutJobInput {
  create: [ApplicationCreateWithoutJobInput!]
  connect: [ApplicationWhereUniqueInput!]
}

input ApplicationCreateWithoutCandidateInput {
  type: ApplicationType!
  disqualification: DisqualificationInstanceCreateOneInput
  stage: StageCreateOneInput!
  reviews: ReviewInstanceCreateManyInput
  job: JobCreateOneWithoutApplicationsInput!
}

input ApplicationCreateWithoutJobInput {
  type: ApplicationType!
  disqualification: DisqualificationInstanceCreateOneInput
  stage: StageCreateOneInput!
  reviews: ReviewInstanceCreateManyInput
  candidate: CandidateCreateOneWithoutApplicationsInput!
}

type ApplicationEdge {
  node: Application!
  cursor: String!
}

enum ApplicationOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
}

input ApplicationScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: ApplicationType
  type_not: ApplicationType
  type_in: [ApplicationType!]
  type_not_in: [ApplicationType!]
  AND: [ApplicationScalarWhereInput!]
  OR: [ApplicationScalarWhereInput!]
  NOT: [ApplicationScalarWhereInput!]
}

enum ApplicationType {
  QUALIFIED
  DISQUALIFIED
}

input ApplicationUpdateInput {
  type: ApplicationType
  disqualification: DisqualificationInstanceUpdateOneInput
  stage: StageUpdateOneRequiredInput
  reviews: ReviewInstanceUpdateManyInput
  job: JobUpdateOneRequiredWithoutApplicationsInput
  candidate: CandidateUpdateOneRequiredWithoutApplicationsInput
}

input ApplicationUpdateManyDataInput {
  type: ApplicationType
}

input ApplicationUpdateManyMutationInput {
  type: ApplicationType
}

input ApplicationUpdateManyWithoutCandidateInput {
  create: [ApplicationCreateWithoutCandidateInput!]
  delete: [ApplicationWhereUniqueInput!]
  connect: [ApplicationWhereUniqueInput!]
  set: [ApplicationWhereUniqueInput!]
  disconnect: [ApplicationWhereUniqueInput!]
  update: [ApplicationUpdateWithWhereUniqueWithoutCandidateInput!]
  upsert: [ApplicationUpsertWithWhereUniqueWithoutCandidateInput!]
  deleteMany: [ApplicationScalarWhereInput!]
  updateMany: [ApplicationUpdateManyWithWhereNestedInput!]
}

input ApplicationUpdateManyWithoutJobInput {
  create: [ApplicationCreateWithoutJobInput!]
  delete: [ApplicationWhereUniqueInput!]
  connect: [ApplicationWhereUniqueInput!]
  set: [ApplicationWhereUniqueInput!]
  disconnect: [ApplicationWhereUniqueInput!]
  update: [ApplicationUpdateWithWhereUniqueWithoutJobInput!]
  upsert: [ApplicationUpsertWithWhereUniqueWithoutJobInput!]
  deleteMany: [ApplicationScalarWhereInput!]
  updateMany: [ApplicationUpdateManyWithWhereNestedInput!]
}

input ApplicationUpdateManyWithWhereNestedInput {
  where: ApplicationScalarWhereInput!
  data: ApplicationUpdateManyDataInput!
}

input ApplicationUpdateWithoutCandidateDataInput {
  type: ApplicationType
  disqualification: DisqualificationInstanceUpdateOneInput
  stage: StageUpdateOneRequiredInput
  reviews: ReviewInstanceUpdateManyInput
  job: JobUpdateOneRequiredWithoutApplicationsInput
}

input ApplicationUpdateWithoutJobDataInput {
  type: ApplicationType
  disqualification: DisqualificationInstanceUpdateOneInput
  stage: StageUpdateOneRequiredInput
  reviews: ReviewInstanceUpdateManyInput
  candidate: CandidateUpdateOneRequiredWithoutApplicationsInput
}

input ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput!
  data: ApplicationUpdateWithoutCandidateDataInput!
}

input ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput!
  data: ApplicationUpdateWithoutJobDataInput!
}

input ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput!
  update: ApplicationUpdateWithoutCandidateDataInput!
  create: ApplicationCreateWithoutCandidateInput!
}

input ApplicationUpsertWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput!
  update: ApplicationUpdateWithoutJobDataInput!
  create: ApplicationCreateWithoutJobInput!
}

input ApplicationWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: ApplicationType
  type_not: ApplicationType
  type_in: [ApplicationType!]
  type_not_in: [ApplicationType!]
  disqualification: DisqualificationInstanceWhereInput
  stage: StageWhereInput
  reviews_every: ReviewInstanceWhereInput
  reviews_some: ReviewInstanceWhereInput
  reviews_none: ReviewInstanceWhereInput
  job: JobWhereInput
  candidate: CandidateWhereInput
  AND: [ApplicationWhereInput!]
  OR: [ApplicationWhereInput!]
  NOT: [ApplicationWhereInput!]
}

input ApplicationWhereUniqueInput {
  id: ID
}

type AuthPayload {
  token: String!
  refresh: String!
}

type BatchPayload {
  count: Long!
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
  resumesFile(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  coverLettersString: [String!]!
  coverLettersFile(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  sources(where: SourceWhereInput, orderBy: SourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Source!]
  fields(where: FieldInstanceWhereInput, orderBy: FieldInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FieldInstance!]
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type CandidateConnection {
  pageInfo: PageInfo!
  edges: [CandidateEdge]!
  aggregate: AggregateCandidate!
}

input CandidateCreatecoverLettersStringInput {
  set: [String!]
}

input CandidateCreateemailsInput {
  set: [String!]
}

input CandidateCreateInput {
  firstName: String
  lastName: String
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  company: String
  headline: String
  position: String
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

input CandidateCreatelinksInput {
  set: [String!]
}

input CandidateCreateManyInput {
  create: [CandidateCreateInput!]
  connect: [CandidateWhereUniqueInput!]
}

input CandidateCreateOneWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  connect: CandidateWhereUniqueInput
}

input CandidateCreateOneWithoutTasksInput {
  create: CandidateCreateWithoutTasksInput
  connect: CandidateWhereUniqueInput
}

input CandidateCreatephonesInput {
  set: [String!]
}

input CandidateCreateresumesStringInput {
  set: [String!]
}

input CandidateCreateWithoutApplicationsInput {
  firstName: String
  lastName: String
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  company: String
  headline: String
  position: String
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

input CandidateCreateWithoutTasksInput {
  firstName: String
  lastName: String
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  company: String
  headline: String
  position: String
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

type CandidateEdge {
  node: Candidate!
  cursor: String!
}

enum CandidateOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  company_ASC
  company_DESC
  headline_ASC
  headline_DESC
  position_ASC
  position_DESC
}

input CandidateScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  headline: String
  headline_not: String
  headline_in: [String!]
  headline_not_in: [String!]
  headline_lt: String
  headline_lte: String
  headline_gt: String
  headline_gte: String
  headline_contains: String
  headline_not_contains: String
  headline_starts_with: String
  headline_not_starts_with: String
  headline_ends_with: String
  headline_not_ends_with: String
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [CandidateScalarWhereInput!]
  OR: [CandidateScalarWhereInput!]
  NOT: [CandidateScalarWhereInput!]
}

input CandidateUpdatecoverLettersStringInput {
  set: [String!]
}

input CandidateUpdateDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: String
  headline: String
  position: String
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

input CandidateUpdateemailsInput {
  set: [String!]
}

input CandidateUpdateInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: String
  headline: String
  position: String
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

input CandidateUpdatelinksInput {
  set: [String!]
}

input CandidateUpdateManyDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  company: String
  headline: String
  position: String
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
}

input CandidateUpdateManyInput {
  create: [CandidateCreateInput!]
  update: [CandidateUpdateWithWhereUniqueNestedInput!]
  upsert: [CandidateUpsertWithWhereUniqueNestedInput!]
  delete: [CandidateWhereUniqueInput!]
  connect: [CandidateWhereUniqueInput!]
  set: [CandidateWhereUniqueInput!]
  disconnect: [CandidateWhereUniqueInput!]
  deleteMany: [CandidateScalarWhereInput!]
  updateMany: [CandidateUpdateManyWithWhereNestedInput!]
}

input CandidateUpdateManyMutationInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  company: String
  headline: String
  position: String
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
}

input CandidateUpdateManyWithWhereNestedInput {
  where: CandidateScalarWhereInput!
  data: CandidateUpdateManyDataInput!
}

input CandidateUpdateOneRequiredWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  update: CandidateUpdateWithoutApplicationsDataInput
  upsert: CandidateUpsertWithoutApplicationsInput
  connect: CandidateWhereUniqueInput
}

input CandidateUpdateOneWithoutTasksInput {
  create: CandidateCreateWithoutTasksInput
  update: CandidateUpdateWithoutTasksDataInput
  upsert: CandidateUpsertWithoutTasksInput
  delete: Boolean
  disconnect: Boolean
  connect: CandidateWhereUniqueInput
}

input CandidateUpdatephonesInput {
  set: [String!]
}

input CandidateUpdateresumesStringInput {
  set: [String!]
}

input CandidateUpdateWithoutApplicationsDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: String
  headline: String
  position: String
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

input CandidateUpdateWithoutTasksDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: String
  headline: String
  position: String
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

input CandidateUpdateWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput!
  data: CandidateUpdateDataInput!
}

input CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput!
  create: CandidateCreateWithoutApplicationsInput!
}

input CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput!
  create: CandidateCreateWithoutTasksInput!
}

input CandidateUpsertWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput!
  update: CandidateUpdateDataInput!
  create: CandidateCreateInput!
}

input CandidateWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  avatar: FileWhereInput
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  headline: String
  headline_not: String
  headline_in: [String!]
  headline_not_in: [String!]
  headline_lt: String
  headline_lte: String
  headline_gt: String
  headline_gte: String
  headline_contains: String
  headline_not_contains: String
  headline_starts_with: String
  headline_not_starts_with: String
  headline_ends_with: String
  headline_not_ends_with: String
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
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
  AND: [CandidateWhereInput!]
  OR: [CandidateWhereInput!]
  NOT: [CandidateWhereInput!]
}

input CandidateWhereUniqueInput {
  id: ID
}

type Comment {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  createdBy: User!
  parent: Comment
  content: String!
}

input CommentCreateInput {
  createdBy: UserCreateOneInput!
  parent: CommentCreateOneInput
  content: String!
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateOneInput {
  create: CommentCreateInput
  connect: CommentWhereUniqueInput
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  content_ASC
  content_DESC
}

input CommentScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

input CommentUpdateDataInput {
  createdBy: UserUpdateOneRequiredInput
  parent: CommentUpdateOneInput
  content: String
}

input CommentUpdateManyDataInput {
  content: String
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateOneInput {
  create: CommentCreateInput
  update: CommentUpdateDataInput
  upsert: CommentUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CommentWhereUniqueInput
}

input CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateDataInput!
}

input CommentUpsertNestedInput {
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdBy: UserWhereInput
  parent: CommentWhereInput
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
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

input Connect {
  connect: WhereUniqueInput
}

input ConnectDisconnect {
  connect: WhereUniqueInput
  disconnect: WhereUniqueInput
}

input ConnectDisconnectMany {
  connect: [WhereUniqueInput!]
  disconnect: [WhereUniqueInput!]
}

input ConnectMany {
  connect: [WhereUniqueInput!]
}

scalar DateTime

type Disqualification {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
}

input DisqualificationCreateInput {
  name: String!
  description: String
}

input DisqualificationCreateManyInput {
  create: [DisqualificationCreateInput!]
  connect: [DisqualificationWhereUniqueInput!]
}

input DisqualificationCreateOneInput {
  create: DisqualificationCreateInput
  connect: DisqualificationWhereUniqueInput
}

type DisqualificationInstance {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  prototype: Disqualification!
  createdBy: User!
  content: String
}

input DisqualificationInstanceCreateInput {
  prototype: DisqualificationCreateOneInput!
  createdBy: UserCreateOneInput!
  content: String
}

input DisqualificationInstanceCreateOneInput {
  create: DisqualificationInstanceCreateInput
  connect: DisqualificationInstanceWhereUniqueInput
}

input DisqualificationInstanceUpdateDataInput {
  prototype: DisqualificationUpdateOneRequiredInput
  createdBy: UserUpdateOneRequiredInput
  content: String
}

input DisqualificationInstanceUpdateOneInput {
  create: DisqualificationInstanceCreateInput
  update: DisqualificationInstanceUpdateDataInput
  upsert: DisqualificationInstanceUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: DisqualificationInstanceWhereUniqueInput
}

input DisqualificationInstanceUpsertNestedInput {
  update: DisqualificationInstanceUpdateDataInput!
  create: DisqualificationInstanceCreateInput!
}

input DisqualificationInstanceWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  prototype: DisqualificationWhereInput
  createdBy: UserWhereInput
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
  AND: [DisqualificationInstanceWhereInput!]
  OR: [DisqualificationInstanceWhereInput!]
  NOT: [DisqualificationInstanceWhereInput!]
}

input DisqualificationInstanceWhereUniqueInput {
  id: ID
}

enum DisqualificationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

input DisqualificationScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [DisqualificationScalarWhereInput!]
  OR: [DisqualificationScalarWhereInput!]
  NOT: [DisqualificationScalarWhereInput!]
}

input DisqualificationUpdateDataInput {
  name: String
  description: String
}

input DisqualificationUpdateManyDataInput {
  name: String
  description: String
}

input DisqualificationUpdateManyInput {
  create: [DisqualificationCreateInput!]
  update: [DisqualificationUpdateWithWhereUniqueNestedInput!]
  upsert: [DisqualificationUpsertWithWhereUniqueNestedInput!]
  delete: [DisqualificationWhereUniqueInput!]
  connect: [DisqualificationWhereUniqueInput!]
  set: [DisqualificationWhereUniqueInput!]
  disconnect: [DisqualificationWhereUniqueInput!]
  deleteMany: [DisqualificationScalarWhereInput!]
  updateMany: [DisqualificationUpdateManyWithWhereNestedInput!]
}

input DisqualificationUpdateManyWithWhereNestedInput {
  where: DisqualificationScalarWhereInput!
  data: DisqualificationUpdateManyDataInput!
}

input DisqualificationUpdateOneRequiredInput {
  create: DisqualificationCreateInput
  update: DisqualificationUpdateDataInput
  upsert: DisqualificationUpsertNestedInput
  connect: DisqualificationWhereUniqueInput
}

input DisqualificationUpdateWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput!
  data: DisqualificationUpdateDataInput!
}

input DisqualificationUpsertNestedInput {
  update: DisqualificationUpdateDataInput!
  create: DisqualificationCreateInput!
}

input DisqualificationUpsertWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput!
  update: DisqualificationUpdateDataInput!
  create: DisqualificationCreateInput!
}

input DisqualificationWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [DisqualificationWhereInput!]
  OR: [DisqualificationWhereInput!]
  NOT: [DisqualificationWhereInput!]
}

input DisqualificationWhereUniqueInput {
  id: ID
}

type Field {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: FieldType!
  label: String!
  description: String
}

input FieldCreateInput {
  type: FieldType!
  label: String!
  description: String
}

input FieldCreateManyInput {
  create: [FieldCreateInput!]
  connect: [FieldWhereUniqueInput!]
}

input FieldCreateOneInput {
  create: FieldCreateInput
  connect: FieldWhereUniqueInput
}

type FieldInstance {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  prototype: Field!
  value: String
}

input FieldInstanceCreateInput {
  prototype: FieldCreateOneInput!
  value: String
}

input FieldInstanceCreateManyInput {
  create: [FieldInstanceCreateInput!]
  connect: [FieldInstanceWhereUniqueInput!]
}

enum FieldInstanceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  value_ASC
  value_DESC
}

input FieldInstanceScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  AND: [FieldInstanceScalarWhereInput!]
  OR: [FieldInstanceScalarWhereInput!]
  NOT: [FieldInstanceScalarWhereInput!]
}

input FieldInstanceUpdateDataInput {
  prototype: FieldUpdateOneRequiredInput
  value: String
}

input FieldInstanceUpdateManyDataInput {
  value: String
}

input FieldInstanceUpdateManyInput {
  create: [FieldInstanceCreateInput!]
  update: [FieldInstanceUpdateWithWhereUniqueNestedInput!]
  upsert: [FieldInstanceUpsertWithWhereUniqueNestedInput!]
  delete: [FieldInstanceWhereUniqueInput!]
  connect: [FieldInstanceWhereUniqueInput!]
  set: [FieldInstanceWhereUniqueInput!]
  disconnect: [FieldInstanceWhereUniqueInput!]
  deleteMany: [FieldInstanceScalarWhereInput!]
  updateMany: [FieldInstanceUpdateManyWithWhereNestedInput!]
}

input FieldInstanceUpdateManyWithWhereNestedInput {
  where: FieldInstanceScalarWhereInput!
  data: FieldInstanceUpdateManyDataInput!
}

input FieldInstanceUpdateWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput!
  data: FieldInstanceUpdateDataInput!
}

input FieldInstanceUpsertWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput!
  update: FieldInstanceUpdateDataInput!
  create: FieldInstanceCreateInput!
}

input FieldInstanceWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  prototype: FieldWhereInput
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  AND: [FieldInstanceWhereInput!]
  OR: [FieldInstanceWhereInput!]
  NOT: [FieldInstanceWhereInput!]
}

input FieldInstanceWhereUniqueInput {
  id: ID
}

enum FieldOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
  label_ASC
  label_DESC
  description_ASC
  description_DESC
}

input FieldScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: FieldType
  type_not: FieldType
  type_in: [FieldType!]
  type_not_in: [FieldType!]
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [FieldScalarWhereInput!]
  OR: [FieldScalarWhereInput!]
  NOT: [FieldScalarWhereInput!]
}

enum FieldType {
  INT
  FLOAT
  TEXT
  PARAGRAPH
  BOOLEAN
  DATETIME
}

input FieldUpdateDataInput {
  type: FieldType
  label: String
  description: String
}

input FieldUpdateManyDataInput {
  type: FieldType
  label: String
  description: String
}

input FieldUpdateManyInput {
  create: [FieldCreateInput!]
  update: [FieldUpdateWithWhereUniqueNestedInput!]
  upsert: [FieldUpsertWithWhereUniqueNestedInput!]
  delete: [FieldWhereUniqueInput!]
  connect: [FieldWhereUniqueInput!]
  set: [FieldWhereUniqueInput!]
  disconnect: [FieldWhereUniqueInput!]
  deleteMany: [FieldScalarWhereInput!]
  updateMany: [FieldUpdateManyWithWhereNestedInput!]
}

input FieldUpdateManyWithWhereNestedInput {
  where: FieldScalarWhereInput!
  data: FieldUpdateManyDataInput!
}

input FieldUpdateOneRequiredInput {
  create: FieldCreateInput
  update: FieldUpdateDataInput
  upsert: FieldUpsertNestedInput
  connect: FieldWhereUniqueInput
}

input FieldUpdateWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput!
  data: FieldUpdateDataInput!
}

input FieldUpsertNestedInput {
  update: FieldUpdateDataInput!
  create: FieldCreateInput!
}

input FieldUpsertWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput!
  update: FieldUpdateDataInput!
  create: FieldCreateInput!
}

input FieldWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: FieldType
  type_not: FieldType
  type_in: [FieldType!]
  type_not_in: [FieldType!]
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [FieldWhereInput!]
  OR: [FieldWhereInput!]
  NOT: [FieldWhereInput!]
}

input FieldWhereUniqueInput {
  id: ID
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

input FileCreateInput {
  size: Int!
  type: String!
  name: String!
  url: String!
}

input FileCreateManyInput {
  create: [FileCreateInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  size_ASC
  size_DESC
  type_ASC
  type_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
}

input FileScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
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
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FileScalarWhereInput!]
  OR: [FileScalarWhereInput!]
  NOT: [FileScalarWhereInput!]
}

input FileUpdateDataInput {
  size: Int
  type: String
  name: String
  url: String
}

input FileUpdateManyDataInput {
  size: Int
  type: String
  name: String
  url: String
}

input FileUpdateManyInput {
  create: [FileCreateInput!]
  update: [FileUpdateWithWhereUniqueNestedInput!]
  upsert: [FileUpsertWithWhereUniqueNestedInput!]
  delete: [FileWhereUniqueInput!]
  connect: [FileWhereUniqueInput!]
  set: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  deleteMany: [FileScalarWhereInput!]
  updateMany: [FileUpdateManyWithWhereNestedInput!]
}

input FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput!
  data: FileUpdateManyDataInput!
}

input FileUpdateOneInput {
  create: FileCreateInput
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: FileWhereUniqueInput
}

input FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  data: FileUpdateDataInput!
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
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
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
  url: String
}

type Invite {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  expireAt: DateTime!
  invitedBy: User!
}

input InviteCreateInput {
  email: String!
}

input InviteCreateManyInput {
  create: [InviteCreateInput!]
  connect: [InviteWhereUniqueInput!]
}

enum InviteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  expireAt_ASC
  expireAt_DESC
}

input InviteScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  expireAt: DateTime
  expireAt_not: DateTime
  expireAt_in: [DateTime!]
  expireAt_not_in: [DateTime!]
  expireAt_lt: DateTime
  expireAt_lte: DateTime
  expireAt_gt: DateTime
  expireAt_gte: DateTime
  AND: [InviteScalarWhereInput!]
  OR: [InviteScalarWhereInput!]
  NOT: [InviteScalarWhereInput!]
}

input InviteUpdateDataInput {
  email: String
  expireAt: DateTime
  invitedBy: UserUpdateOneRequiredInput
}

input InviteUpdateManyDataInput {
  email: String
  expireAt: DateTime
}

input InviteUpdateManyInput {
  create: [InviteCreateInput!]
  update: [InviteUpdateWithWhereUniqueNestedInput!]
  upsert: [InviteUpsertWithWhereUniqueNestedInput!]
  delete: [InviteWhereUniqueInput!]
  connect: [InviteWhereUniqueInput!]
  set: [InviteWhereUniqueInput!]
  disconnect: [InviteWhereUniqueInput!]
  deleteMany: [InviteScalarWhereInput!]
  updateMany: [InviteUpdateManyWithWhereNestedInput!]
}

input InviteUpdateManyWithWhereNestedInput {
  where: InviteScalarWhereInput!
  data: InviteUpdateManyDataInput!
}

input InviteUpdateWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput!
  data: InviteUpdateDataInput!
}

input InviteUpsertWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput!
  update: InviteUpdateDataInput!
  create: InviteCreateInput!
}

input InviteWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  expireAt: DateTime
  expireAt_not: DateTime
  expireAt_in: [DateTime!]
  expireAt_not_in: [DateTime!]
  expireAt_lt: DateTime
  expireAt_lte: DateTime
  expireAt_gt: DateTime
  expireAt_gte: DateTime
  invitedBy: UserWhereInput
  AND: [InviteWhereInput!]
  OR: [InviteWhereInput!]
  NOT: [InviteWhereInput!]
}

input InviteWhereUniqueInput {
  id: ID
}

type Job {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace: Workspace!
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
  workflow: Workflow!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  type: JobType!
  department: String
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
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

input JobCreateInput {
  workspace: WorkspaceCreateOneWithoutJobsInput!
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneWithoutJobsInput!
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobCreateManyWithoutWorkflowInput {
  create: [JobCreateWithoutWorkflowInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateOneWithoutApplicationsInput {
  create: JobCreateWithoutApplicationsInput
  connect: JobWhereUniqueInput
}

input JobCreateWithoutApplicationsInput {
  workspace: WorkspaceCreateOneWithoutJobsInput!
  workflow: WorkflowCreateOneWithoutJobsInput!
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobCreateWithoutWorkflowInput {
  workspace: WorkspaceCreateOneWithoutJobsInput!
  applications: ApplicationCreateManyWithoutJobInput
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

type JobEdge {
  node: Job!
  cursor: String!
}

enum JobOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
  department_ASC
  department_DESC
  name_ASC
  name_DESC
  excerpt_ASC
  excerpt_DESC
  companyDescription_ASC
  companyDescription_DESC
  description_ASC
  description_DESC
  requirements_ASC
  requirements_DESC
}

input JobScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: JobType
  type_not: JobType
  type_in: [JobType!]
  type_not_in: [JobType!]
  department: String
  department_not: String
  department_in: [String!]
  department_not_in: [String!]
  department_lt: String
  department_lte: String
  department_gt: String
  department_gte: String
  department_contains: String
  department_not_contains: String
  department_starts_with: String
  department_not_starts_with: String
  department_ends_with: String
  department_not_ends_with: String
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
  excerpt: String
  excerpt_not: String
  excerpt_in: [String!]
  excerpt_not_in: [String!]
  excerpt_lt: String
  excerpt_lte: String
  excerpt_gt: String
  excerpt_gte: String
  excerpt_contains: String
  excerpt_not_contains: String
  excerpt_starts_with: String
  excerpt_not_starts_with: String
  excerpt_ends_with: String
  excerpt_not_ends_with: String
  companyDescription: String
  companyDescription_not: String
  companyDescription_in: [String!]
  companyDescription_not_in: [String!]
  companyDescription_lt: String
  companyDescription_lte: String
  companyDescription_gt: String
  companyDescription_gte: String
  companyDescription_contains: String
  companyDescription_not_contains: String
  companyDescription_starts_with: String
  companyDescription_not_starts_with: String
  companyDescription_ends_with: String
  companyDescription_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  requirements: String
  requirements_not: String
  requirements_in: [String!]
  requirements_not_in: [String!]
  requirements_lt: String
  requirements_lte: String
  requirements_gt: String
  requirements_gte: String
  requirements_contains: String
  requirements_not_contains: String
  requirements_starts_with: String
  requirements_not_starts_with: String
  requirements_ends_with: String
  requirements_not_ends_with: String
  AND: [JobScalarWhereInput!]
  OR: [JobScalarWhereInput!]
  NOT: [JobScalarWhereInput!]
}

enum JobType {
  DRAFT
  PUBLISHED
  ARCHIVED
}

input JobUpdateInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredWithoutJobsInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobUpdateManyDataInput {
  type: JobType
  department: String
  name: String
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobUpdateManyMutationInput {
  type: JobType
  department: String
  name: String
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobUpdateManyWithoutWorkflowInput {
  create: [JobCreateWithoutWorkflowInput!]
  delete: [JobWhereUniqueInput!]
  connect: [JobWhereUniqueInput!]
  set: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutWorkflowInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutWorkflowInput!]
  deleteMany: [JobScalarWhereInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
}

input JobUpdateManyWithWhereNestedInput {
  where: JobScalarWhereInput!
  data: JobUpdateManyDataInput!
}

input JobUpdateOneRequiredWithoutApplicationsInput {
  create: JobCreateWithoutApplicationsInput
  update: JobUpdateWithoutApplicationsDataInput
  upsert: JobUpsertWithoutApplicationsInput
  connect: JobWhereUniqueInput
}

input JobUpdateWithoutApplicationsDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  workflow: WorkflowUpdateOneRequiredWithoutJobsInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobUpdateWithoutWorkflowDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  applications: ApplicationUpdateManyWithoutJobInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobUpdateWithWhereUniqueWithoutWorkflowInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutWorkflowDataInput!
}

input JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput!
  create: JobCreateWithoutApplicationsInput!
}

input JobUpsertWithWhereUniqueWithoutWorkflowInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutWorkflowDataInput!
  create: JobCreateWithoutWorkflowInput!
}

input JobWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
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
  type_in: [JobType!]
  type_not_in: [JobType!]
  department: String
  department_not: String
  department_in: [String!]
  department_not_in: [String!]
  department_lt: String
  department_lte: String
  department_gt: String
  department_gte: String
  department_contains: String
  department_not_contains: String
  department_starts_with: String
  department_not_starts_with: String
  department_ends_with: String
  department_not_ends_with: String
  locations_every: LocationWhereInput
  locations_some: LocationWhereInput
  locations_none: LocationWhereInput
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
  excerpt: String
  excerpt_not: String
  excerpt_in: [String!]
  excerpt_not_in: [String!]
  excerpt_lt: String
  excerpt_lte: String
  excerpt_gt: String
  excerpt_gte: String
  excerpt_contains: String
  excerpt_not_contains: String
  excerpt_starts_with: String
  excerpt_not_starts_with: String
  excerpt_ends_with: String
  excerpt_not_ends_with: String
  companyDescription: String
  companyDescription_not: String
  companyDescription_in: [String!]
  companyDescription_not_in: [String!]
  companyDescription_lt: String
  companyDescription_lte: String
  companyDescription_gt: String
  companyDescription_gte: String
  companyDescription_contains: String
  companyDescription_not_contains: String
  companyDescription_starts_with: String
  companyDescription_not_starts_with: String
  companyDescription_ends_with: String
  companyDescription_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  requirements: String
  requirements_not: String
  requirements_in: [String!]
  requirements_not_in: [String!]
  requirements_lt: String
  requirements_lte: String
  requirements_gt: String
  requirements_gte: String
  requirements_contains: String
  requirements_not_contains: String
  requirements_starts_with: String
  requirements_not_starts_with: String
  requirements_ends_with: String
  requirements_not_ends_with: String
  AND: [JobWhereInput!]
  OR: [JobWhereInput!]
  NOT: [JobWhereInput!]
}

input JobWhereUniqueInput {
  id: ID
}

scalar Json

type Location {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  country: String!
  region: String
  city: String!
  zip: String
}

input LocationCreateInput {
  country: String!
  region: String
  city: String!
  zip: String
}

input LocationCreateManyInput {
  create: [LocationCreateInput!]
  connect: [LocationWhereUniqueInput!]
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  country_ASC
  country_DESC
  region_ASC
  region_DESC
  city_ASC
  city_DESC
  zip_ASC
  zip_DESC
}

input LocationScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  AND: [LocationScalarWhereInput!]
  OR: [LocationScalarWhereInput!]
  NOT: [LocationScalarWhereInput!]
}

input LocationUpdateDataInput {
  country: String
  region: String
  city: String
  zip: String
}

input LocationUpdateManyDataInput {
  country: String
  region: String
  city: String
  zip: String
}

input LocationUpdateManyInput {
  create: [LocationCreateInput!]
  update: [LocationUpdateWithWhereUniqueNestedInput!]
  upsert: [LocationUpsertWithWhereUniqueNestedInput!]
  delete: [LocationWhereUniqueInput!]
  connect: [LocationWhereUniqueInput!]
  set: [LocationWhereUniqueInput!]
  disconnect: [LocationWhereUniqueInput!]
  deleteMany: [LocationScalarWhereInput!]
  updateMany: [LocationUpdateManyWithWhereNestedInput!]
}

input LocationUpdateManyWithWhereNestedInput {
  where: LocationScalarWhereInput!
  data: LocationUpdateManyDataInput!
}

input LocationUpdateWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput!
  data: LocationUpdateDataInput!
}

input LocationUpsertWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput!
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

input LoginInput {
  email: String!
  password: String!
}

scalar Long

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

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

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

input RefreshInput {
  token: String!
}

type Review {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field!]
}

input ReviewCreateInput {
  name: String!
  fields: FieldCreateManyInput
}

input ReviewCreateManyInput {
  create: [ReviewCreateInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateOneInput {
  create: ReviewCreateInput
  connect: ReviewWhereUniqueInput
}

type ReviewInstance {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  prototype: Review
  fields(where: FieldInstanceWhereInput, orderBy: FieldInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FieldInstance!]
  createdBy: User!
  rating: Int
  content: String
}

input ReviewInstanceCreateInput {
  prototype: ReviewCreateOneInput
  fields: FieldInstanceCreateManyInput
  createdBy: UserCreateOneInput!
  rating: Int
  content: String
}

input ReviewInstanceCreateManyInput {
  create: [ReviewInstanceCreateInput!]
  connect: [ReviewInstanceWhereUniqueInput!]
}

enum ReviewInstanceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  rating_ASC
  rating_DESC
  content_ASC
  content_DESC
}

input ReviewInstanceScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
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
  AND: [ReviewInstanceScalarWhereInput!]
  OR: [ReviewInstanceScalarWhereInput!]
  NOT: [ReviewInstanceScalarWhereInput!]
}

input ReviewInstanceUpdateDataInput {
  prototype: ReviewUpdateOneInput
  fields: FieldInstanceUpdateManyInput
  createdBy: UserUpdateOneRequiredInput
  rating: Int
  content: String
}

input ReviewInstanceUpdateManyDataInput {
  rating: Int
  content: String
}

input ReviewInstanceUpdateManyInput {
  create: [ReviewInstanceCreateInput!]
  update: [ReviewInstanceUpdateWithWhereUniqueNestedInput!]
  upsert: [ReviewInstanceUpsertWithWhereUniqueNestedInput!]
  delete: [ReviewInstanceWhereUniqueInput!]
  connect: [ReviewInstanceWhereUniqueInput!]
  set: [ReviewInstanceWhereUniqueInput!]
  disconnect: [ReviewInstanceWhereUniqueInput!]
  deleteMany: [ReviewInstanceScalarWhereInput!]
  updateMany: [ReviewInstanceUpdateManyWithWhereNestedInput!]
}

input ReviewInstanceUpdateManyWithWhereNestedInput {
  where: ReviewInstanceScalarWhereInput!
  data: ReviewInstanceUpdateManyDataInput!
}

input ReviewInstanceUpdateWithWhereUniqueNestedInput {
  where: ReviewInstanceWhereUniqueInput!
  data: ReviewInstanceUpdateDataInput!
}

input ReviewInstanceUpsertWithWhereUniqueNestedInput {
  where: ReviewInstanceWhereUniqueInput!
  update: ReviewInstanceUpdateDataInput!
  create: ReviewInstanceCreateInput!
}

input ReviewInstanceWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  prototype: ReviewWhereInput
  fields_every: FieldInstanceWhereInput
  fields_some: FieldInstanceWhereInput
  fields_none: FieldInstanceWhereInput
  createdBy: UserWhereInput
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
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
  AND: [ReviewInstanceWhereInput!]
  OR: [ReviewInstanceWhereInput!]
  NOT: [ReviewInstanceWhereInput!]
}

input ReviewInstanceWhereUniqueInput {
  id: ID
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

input ReviewScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  AND: [ReviewScalarWhereInput!]
  OR: [ReviewScalarWhereInput!]
  NOT: [ReviewScalarWhereInput!]
}

input ReviewUpdateDataInput {
  name: String
  fields: FieldUpdateManyInput
}

input ReviewUpdateManyDataInput {
  name: String
}

input ReviewUpdateManyInput {
  create: [ReviewCreateInput!]
  update: [ReviewUpdateWithWhereUniqueNestedInput!]
  upsert: [ReviewUpsertWithWhereUniqueNestedInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  set: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateOneInput {
  create: ReviewCreateInput
  update: ReviewUpdateDataInput
  upsert: ReviewUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ReviewWhereUniqueInput
}

input ReviewUpdateWithWhereUniqueNestedInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateDataInput!
}

input ReviewUpsertNestedInput {
  update: ReviewUpdateDataInput!
  create: ReviewCreateInput!
}

input ReviewUpsertWithWhereUniqueNestedInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateDataInput!
  create: ReviewCreateInput!
}

input ReviewWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  fields_every: FieldWhereInput
  fields_some: FieldWhereInput
  fields_none: FieldWhereInput
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
}

input SignupInput {
  password: String!
  username: String!
  inviteId: ID!
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

input SourceCreateInput {
  label: String!
  description: String
}

input SourceCreateManyInput {
  create: [SourceCreateInput!]
  connect: [SourceWhereUniqueInput!]
}

type SourceEdge {
  node: Source!
  cursor: String!
}

enum SourceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  label_ASC
  label_DESC
  description_ASC
  description_DESC
}

input SourceScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [SourceScalarWhereInput!]
  OR: [SourceScalarWhereInput!]
  NOT: [SourceScalarWhereInput!]
}

input SourceUpdateDataInput {
  label: String
  description: String
}

input SourceUpdateInput {
  label: String
  description: String
}

input SourceUpdateManyDataInput {
  label: String
  description: String
}

input SourceUpdateManyInput {
  create: [SourceCreateInput!]
  update: [SourceUpdateWithWhereUniqueNestedInput!]
  upsert: [SourceUpsertWithWhereUniqueNestedInput!]
  delete: [SourceWhereUniqueInput!]
  connect: [SourceWhereUniqueInput!]
  set: [SourceWhereUniqueInput!]
  disconnect: [SourceWhereUniqueInput!]
  deleteMany: [SourceScalarWhereInput!]
  updateMany: [SourceUpdateManyWithWhereNestedInput!]
}

input SourceUpdateManyMutationInput {
  label: String
  description: String
}

input SourceUpdateManyWithWhereNestedInput {
  where: SourceScalarWhereInput!
  data: SourceUpdateManyDataInput!
}

input SourceUpdateWithWhereUniqueNestedInput {
  where: SourceWhereUniqueInput!
  data: SourceUpdateDataInput!
}

input SourceUpsertWithWhereUniqueNestedInput {
  where: SourceWhereUniqueInput!
  update: SourceUpdateDataInput!
  create: SourceCreateInput!
}

input SourceWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [SourceWhereInput!]
  OR: [SourceWhereInput!]
  NOT: [SourceWhereInput!]
}

input SourceWhereUniqueInput {
  id: ID
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

input StageCreateInput {
  name: String!
  description: String
  type: StageType!
  index: Int!
}

input StageCreateManyInput {
  create: [StageCreateInput!]
  connect: [StageWhereUniqueInput!]
}

input StageCreateOneInput {
  create: StageCreateInput
  connect: StageWhereUniqueInput
}

enum StageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  type_ASC
  type_DESC
  index_ASC
  index_DESC
}

input StageScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  type: StageType
  type_not: StageType
  type_in: [StageType!]
  type_not_in: [StageType!]
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  AND: [StageScalarWhereInput!]
  OR: [StageScalarWhereInput!]
  NOT: [StageScalarWhereInput!]
}

enum StageType {
  NEW
  PIPELINE
  FINAL
}

input StageUpdateDataInput {
  name: String
  description: String
  type: StageType
  index: Int
}

input StageUpdateManyDataInput {
  name: String
  description: String
  type: StageType
  index: Int
}

input StageUpdateManyInput {
  create: [StageCreateInput!]
  update: [StageUpdateWithWhereUniqueNestedInput!]
  upsert: [StageUpsertWithWhereUniqueNestedInput!]
  delete: [StageWhereUniqueInput!]
  connect: [StageWhereUniqueInput!]
  set: [StageWhereUniqueInput!]
  disconnect: [StageWhereUniqueInput!]
  deleteMany: [StageScalarWhereInput!]
  updateMany: [StageUpdateManyWithWhereNestedInput!]
}

input StageUpdateManyWithWhereNestedInput {
  where: StageScalarWhereInput!
  data: StageUpdateManyDataInput!
}

input StageUpdateOneRequiredInput {
  create: StageCreateInput
  update: StageUpdateDataInput
  upsert: StageUpsertNestedInput
  connect: StageWhereUniqueInput
}

input StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput!
  data: StageUpdateDataInput!
}

input StageUpsertNestedInput {
  update: StageUpdateDataInput!
  create: StageCreateInput!
}

input StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput!
  update: StageUpdateDataInput!
  create: StageCreateInput!
}

input StageWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  type: StageType
  type_not: StageType
  type_in: [StageType!]
  type_not_in: [StageType!]
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  AND: [StageWhereInput!]
  OR: [StageWhereInput!]
  NOT: [StageWhereInput!]
}

input StageWhereUniqueInput {
  id: ID
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

input TagCreateInput {
  label: String!
  description: String
}

input TagCreateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  label_ASC
  label_DESC
  description_ASC
  description_DESC
}

input TagScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

input TagUpdateDataInput {
  label: String
  description: String
}

input TagUpdateInput {
  label: String
  description: String
}

input TagUpdateManyDataInput {
  label: String
  description: String
}

input TagUpdateManyInput {
  create: [TagCreateInput!]
  update: [TagUpdateWithWhereUniqueNestedInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyMutationInput {
  label: String
  description: String
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  data: TagUpdateDataInput!
}

input TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  update: TagUpdateDataInput!
  create: TagCreateInput!
}

input TagWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
}

type Task {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  owners(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
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

input TaskCreateInput {
  owners: UserCreateManyWithoutTasksInput
  candidate: CandidateCreateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskCreateManyWithoutCandidateInput {
  create: [TaskCreateWithoutCandidateInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateManyWithoutOwnersInput {
  create: [TaskCreateWithoutOwnersInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateWithoutCandidateInput {
  owners: UserCreateManyWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskCreateWithoutOwnersInput {
  candidate: CandidateCreateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

type TaskEdge {
  node: Task!
  cursor: String!
}

enum TaskOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  dueAt_ASC
  dueAt_DESC
}

input TaskScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  dueAt: DateTime
  dueAt_not: DateTime
  dueAt_in: [DateTime!]
  dueAt_not_in: [DateTime!]
  dueAt_lt: DateTime
  dueAt_lte: DateTime
  dueAt_gt: DateTime
  dueAt_gte: DateTime
  AND: [TaskScalarWhereInput!]
  OR: [TaskScalarWhereInput!]
  NOT: [TaskScalarWhereInput!]
}

input TaskUpdateInput {
  owners: UserUpdateManyWithoutTasksInput
  candidate: CandidateUpdateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateManyDataInput {
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateManyMutationInput {
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateManyWithoutCandidateInput {
  create: [TaskCreateWithoutCandidateInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  set: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutCandidateInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutCandidateInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithoutOwnersInput {
  create: [TaskCreateWithoutOwnersInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  set: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutOwnersInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutOwnersInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput!
  data: TaskUpdateManyDataInput!
}

input TaskUpdateWithoutCandidateDataInput {
  owners: UserUpdateManyWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateWithoutOwnersDataInput {
  candidate: CandidateUpdateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutCandidateDataInput!
}

input TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutOwnersDataInput!
}

input TaskUpsertWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutCandidateDataInput!
  create: TaskCreateWithoutCandidateInput!
}

input TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutOwnersDataInput!
  create: TaskCreateWithoutOwnersInput!
}

input TaskWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  owners_every: UserWhereInput
  owners_some: UserWhereInput
  owners_none: UserWhereInput
  candidate: CandidateWhereInput
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  dueAt: DateTime
  dueAt_not: DateTime
  dueAt_in: [DateTime!]
  dueAt_not_in: [DateTime!]
  dueAt_lt: DateTime
  dueAt_lte: DateTime
  dueAt_gt: DateTime
  dueAt_gte: DateTime
  AND: [TaskWhereInput!]
  OR: [TaskWhereInput!]
  NOT: [TaskWhereInput!]
}

input TaskWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  settings: Json
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
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

input UserCreateInput {
  settings: Json
  tasks: TaskCreateManyWithoutOwnersInput
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileCreateOneInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTasksInput {
  create: [UserCreateWithoutTasksInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTasksInput {
  settings: Json
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileCreateOneInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  settings_ASC
  settings_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  lastLogin_ASC
  lastLogin_DESC
  deletedAt_ASC
  deletedAt_DESC
  position_ASC
  position_DESC
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
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
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  lastLogin: DateTime
  lastLogin_not: DateTime
  lastLogin_in: [DateTime!]
  lastLogin_not_in: [DateTime!]
  lastLogin_lt: DateTime
  lastLogin_lte: DateTime
  lastLogin_gt: DateTime
  lastLogin_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

input UserUpdateDataInput {
  settings: Json
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateInput {
  settings: Json
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateManyDataInput {
  settings: Json
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
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

input UserUpdateManyWithoutTasksInput {
  create: [UserCreateWithoutTasksInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTasksInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTasksInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
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

input UserUpdateWithoutTasksDataInput {
  settings: Json
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTasksDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTasksDataInput!
  create: UserCreateWithoutTasksInput!
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
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
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  lastLogin: DateTime
  lastLogin_not: DateTime
  lastLogin_in: [DateTime!]
  lastLogin_not_in: [DateTime!]
  lastLogin_lt: DateTime
  lastLogin_lte: DateTime
  lastLogin_gt: DateTime
  lastLogin_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  avatar: FileWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

input WhereUniqueInput {
  id: ID!
}

type Workflow {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  name: String!
  description: String
  stages(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stage!]
  disqualifications(where: DisqualificationWhereInput, orderBy: DisqualificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Disqualification!]
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field!]
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

type WorkflowConnection {
  pageInfo: PageInfo!
  edges: [WorkflowEdge]!
  aggregate: AggregateWorkflow!
}

input WorkflowCreateInput {
  jobs: JobCreateManyWithoutWorkflowInput
  name: String!
  description: String
  stages: StageCreateManyInput
  disqualifications: DisqualificationCreateManyInput
  fields: FieldCreateManyInput
  reviews: ReviewCreateManyInput
}

input WorkflowCreateManyInput {
  create: [WorkflowCreateInput!]
  connect: [WorkflowWhereUniqueInput!]
}

input WorkflowCreateOneWithoutJobsInput {
  create: WorkflowCreateWithoutJobsInput
  connect: WorkflowWhereUniqueInput
}

input WorkflowCreateWithoutJobsInput {
  name: String!
  description: String
  stages: StageCreateManyInput
  disqualifications: DisqualificationCreateManyInput
  fields: FieldCreateManyInput
  reviews: ReviewCreateManyInput
}

type WorkflowEdge {
  node: Workflow!
  cursor: String!
}

enum WorkflowOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

input WorkflowScalarWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [WorkflowScalarWhereInput!]
  OR: [WorkflowScalarWhereInput!]
  NOT: [WorkflowScalarWhereInput!]
}

input WorkflowUpdateDataInput {
  jobs: JobUpdateManyWithoutWorkflowInput
  name: String
  description: String
  stages: StageUpdateManyInput
  disqualifications: DisqualificationUpdateManyInput
  fields: FieldUpdateManyInput
  reviews: ReviewUpdateManyInput
}

input WorkflowUpdateInput {
  jobs: JobUpdateManyWithoutWorkflowInput
  name: String
  description: String
  stages: StageUpdateManyInput
  disqualifications: DisqualificationUpdateManyInput
  fields: FieldUpdateManyInput
  reviews: ReviewUpdateManyInput
}

input WorkflowUpdateManyDataInput {
  name: String
  description: String
}

input WorkflowUpdateManyInput {
  create: [WorkflowCreateInput!]
  update: [WorkflowUpdateWithWhereUniqueNestedInput!]
  upsert: [WorkflowUpsertWithWhereUniqueNestedInput!]
  delete: [WorkflowWhereUniqueInput!]
  connect: [WorkflowWhereUniqueInput!]
  set: [WorkflowWhereUniqueInput!]
  disconnect: [WorkflowWhereUniqueInput!]
  deleteMany: [WorkflowScalarWhereInput!]
  updateMany: [WorkflowUpdateManyWithWhereNestedInput!]
}

input WorkflowUpdateManyMutationInput {
  name: String
  description: String
}

input WorkflowUpdateManyWithWhereNestedInput {
  where: WorkflowScalarWhereInput!
  data: WorkflowUpdateManyDataInput!
}

input WorkflowUpdateOneRequiredWithoutJobsInput {
  create: WorkflowCreateWithoutJobsInput
  update: WorkflowUpdateWithoutJobsDataInput
  upsert: WorkflowUpsertWithoutJobsInput
  connect: WorkflowWhereUniqueInput
}

input WorkflowUpdateWithoutJobsDataInput {
  name: String
  description: String
  stages: StageUpdateManyInput
  disqualifications: DisqualificationUpdateManyInput
  fields: FieldUpdateManyInput
  reviews: ReviewUpdateManyInput
}

input WorkflowUpdateWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput!
  data: WorkflowUpdateDataInput!
}

input WorkflowUpsertWithoutJobsInput {
  update: WorkflowUpdateWithoutJobsDataInput!
  create: WorkflowCreateWithoutJobsInput!
}

input WorkflowUpsertWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput!
  update: WorkflowUpdateDataInput!
  create: WorkflowCreateInput!
}

input WorkflowWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
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
  AND: [WorkflowWhereInput!]
  OR: [WorkflowWhereInput!]
  NOT: [WorkflowWhereInput!]
}

input WorkflowWhereUniqueInput {
  id: ID
}

type Workspace {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  candidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate!]
  settings: Json
  workflows(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workflow!]
  invites(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invite!]
  name: String!
}

input WorkspaceCreateInput {
  name: String!
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
}

input WorkspaceCreateOneWithoutJobsInput {
  create: WorkspaceCreateWithoutJobsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateWithoutJobsInput {
  users: UserCreateManyInput
  candidates: CandidateCreateManyInput
  settings: Json
  workflows: WorkflowCreateManyInput
  invites: InviteCreateManyInput
  name: String!
}

input WorkspaceUpdateOneRequiredWithoutJobsInput {
  create: WorkspaceCreateWithoutJobsInput
  update: WorkspaceUpdateWithoutJobsDataInput
  upsert: WorkspaceUpsertWithoutJobsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceUpdateWithoutJobsDataInput {
  users: UserUpdateManyInput
  candidates: CandidateUpdateManyInput
  settings: Json
  workflows: WorkflowUpdateManyInput
  invites: InviteUpdateManyInput
  name: String
}

input WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput!
  create: WorkspaceCreateWithoutJobsInput!
}

input WorkspaceWhereInput {
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
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
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
  AND: [WorkspaceWhereInput!]
  OR: [WorkspaceWhereInput!]
  NOT: [WorkspaceWhereInput!]
}

input WorkspaceWhereUniqueInput {
  id: ID
}

`
