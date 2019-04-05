type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Json: any;
  Long: any;
};

export type AccessPayload = {
  token: Scalars["String"];
};

export type AggregateApplication = {
  count: Scalars["Int"];
};

export type AggregateCandidate = {
  count: Scalars["Int"];
};

export type AggregateJob = {
  count: Scalars["Int"];
};

export type AggregateSource = {
  count: Scalars["Int"];
};

export type AggregateTag = {
  count: Scalars["Int"];
};

export type AggregateTask = {
  count: Scalars["Int"];
};

export type AggregateUser = {
  count: Scalars["Int"];
};

export type AggregateWorkflow = {
  count: Scalars["Int"];
};

export type Application = {
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
  type: ApplicationType;
  disqualification?: Maybe<DisqualificationInstance>;
  stage: Stage;
  reviews?: Maybe<Array<ReviewInstance>>;
  job: Job;
  candidate: Candidate;
};

export type ApplicationReviewsArgs = {
  where?: Maybe<ReviewInstanceWhereInput>;
  orderBy?: Maybe<ReviewInstanceOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type ApplicationConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<ApplicationEdge>>;
  aggregate: AggregateApplication;
};

export type ApplicationCreateInput = {
  type: ApplicationType;
  disqualification?: Maybe<DisqualificationInstanceCreateOneInput>;
  stage: StageCreateOneInput;
  reviews?: Maybe<ReviewInstanceCreateManyInput>;
  job: JobCreateOneWithoutApplicationsInput;
  candidate: CandidateCreateOneWithoutApplicationsInput;
};

export type ApplicationCreateManyWithoutCandidateInput = {
  create?: Maybe<Array<ApplicationCreateWithoutCandidateInput>>;
  connect?: Maybe<Array<ApplicationWhereUniqueInput>>;
};

export type ApplicationCreateManyWithoutJobInput = {
  create?: Maybe<Array<ApplicationCreateWithoutJobInput>>;
  connect?: Maybe<Array<ApplicationWhereUniqueInput>>;
};

export type ApplicationCreateWithoutCandidateInput = {
  type: ApplicationType;
  disqualification?: Maybe<DisqualificationInstanceCreateOneInput>;
  stage: StageCreateOneInput;
  reviews?: Maybe<ReviewInstanceCreateManyInput>;
  job: JobCreateOneWithoutApplicationsInput;
};

export type ApplicationCreateWithoutJobInput = {
  type: ApplicationType;
  disqualification?: Maybe<DisqualificationInstanceCreateOneInput>;
  stage: StageCreateOneInput;
  reviews?: Maybe<ReviewInstanceCreateManyInput>;
  candidate: CandidateCreateOneWithoutApplicationsInput;
};

export type ApplicationEdge = {
  node: Application;
  cursor: Scalars["String"];
};

export enum ApplicationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC"
}

export type ApplicationScalarWhereInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<ApplicationType>;
  type_not?: Maybe<ApplicationType>;
  type_in?: Maybe<Array<ApplicationType>>;
  type_not_in?: Maybe<Array<ApplicationType>>;
  AND?: Maybe<Array<ApplicationScalarWhereInput>>;
  OR?: Maybe<Array<ApplicationScalarWhereInput>>;
  NOT?: Maybe<Array<ApplicationScalarWhereInput>>;
};

export enum ApplicationType {
  Qualified = "QUALIFIED",
  Disqualified = "DISQUALIFIED"
}

export type ApplicationUpdateInput = {
  type?: Maybe<ApplicationType>;
  disqualification?: Maybe<DisqualificationInstanceUpdateOneInput>;
  stage?: Maybe<StageUpdateOneRequiredInput>;
  reviews?: Maybe<ReviewInstanceUpdateManyInput>;
  job?: Maybe<JobUpdateOneRequiredWithoutApplicationsInput>;
  candidate?: Maybe<CandidateUpdateOneRequiredWithoutApplicationsInput>;
};

export type ApplicationUpdateManyDataInput = {
  type?: Maybe<ApplicationType>;
};

export type ApplicationUpdateManyMutationInput = {
  type?: Maybe<ApplicationType>;
};

export type ApplicationUpdateManyWithoutCandidateInput = {
  create?: Maybe<Array<ApplicationCreateWithoutCandidateInput>>;
  delete?: Maybe<Array<ApplicationWhereUniqueInput>>;
  connect?: Maybe<Array<ApplicationWhereUniqueInput>>;
  set?: Maybe<Array<ApplicationWhereUniqueInput>>;
  disconnect?: Maybe<Array<ApplicationWhereUniqueInput>>;
  update?: Maybe<Array<ApplicationUpdateWithWhereUniqueWithoutCandidateInput>>;
  upsert?: Maybe<Array<ApplicationUpsertWithWhereUniqueWithoutCandidateInput>>;
  deleteMany?: Maybe<Array<ApplicationScalarWhereInput>>;
  updateMany?: Maybe<Array<ApplicationUpdateManyWithWhereNestedInput>>;
};

export type ApplicationUpdateManyWithoutJobInput = {
  create?: Maybe<Array<ApplicationCreateWithoutJobInput>>;
  delete?: Maybe<Array<ApplicationWhereUniqueInput>>;
  connect?: Maybe<Array<ApplicationWhereUniqueInput>>;
  set?: Maybe<Array<ApplicationWhereUniqueInput>>;
  disconnect?: Maybe<Array<ApplicationWhereUniqueInput>>;
  update?: Maybe<Array<ApplicationUpdateWithWhereUniqueWithoutJobInput>>;
  upsert?: Maybe<Array<ApplicationUpsertWithWhereUniqueWithoutJobInput>>;
  deleteMany?: Maybe<Array<ApplicationScalarWhereInput>>;
  updateMany?: Maybe<Array<ApplicationUpdateManyWithWhereNestedInput>>;
};

export type ApplicationUpdateManyWithWhereNestedInput = {
  where: ApplicationScalarWhereInput;
  data: ApplicationUpdateManyDataInput;
};

export type ApplicationUpdateWithoutCandidateDataInput = {
  type?: Maybe<ApplicationType>;
  disqualification?: Maybe<DisqualificationInstanceUpdateOneInput>;
  stage?: Maybe<StageUpdateOneRequiredInput>;
  reviews?: Maybe<ReviewInstanceUpdateManyInput>;
  job?: Maybe<JobUpdateOneRequiredWithoutApplicationsInput>;
};

export type ApplicationUpdateWithoutJobDataInput = {
  type?: Maybe<ApplicationType>;
  disqualification?: Maybe<DisqualificationInstanceUpdateOneInput>;
  stage?: Maybe<StageUpdateOneRequiredInput>;
  reviews?: Maybe<ReviewInstanceUpdateManyInput>;
  candidate?: Maybe<CandidateUpdateOneRequiredWithoutApplicationsInput>;
};

export type ApplicationUpdateWithWhereUniqueWithoutCandidateInput = {
  where: ApplicationWhereUniqueInput;
  data: ApplicationUpdateWithoutCandidateDataInput;
};

export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
  where: ApplicationWhereUniqueInput;
  data: ApplicationUpdateWithoutJobDataInput;
};

export type ApplicationUpsertWithWhereUniqueWithoutCandidateInput = {
  where: ApplicationWhereUniqueInput;
  update: ApplicationUpdateWithoutCandidateDataInput;
  create: ApplicationCreateWithoutCandidateInput;
};

export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
  where: ApplicationWhereUniqueInput;
  update: ApplicationUpdateWithoutJobDataInput;
  create: ApplicationCreateWithoutJobInput;
};

export type ApplicationWhereInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<ApplicationType>;
  type_not?: Maybe<ApplicationType>;
  type_in?: Maybe<Array<ApplicationType>>;
  type_not_in?: Maybe<Array<ApplicationType>>;
  disqualification?: Maybe<DisqualificationInstanceWhereInput>;
  stage?: Maybe<StageWhereInput>;
  reviews_every?: Maybe<ReviewInstanceWhereInput>;
  reviews_some?: Maybe<ReviewInstanceWhereInput>;
  reviews_none?: Maybe<ReviewInstanceWhereInput>;
  job?: Maybe<JobWhereInput>;
  candidate?: Maybe<CandidateWhereInput>;
  AND?: Maybe<Array<ApplicationWhereInput>>;
  OR?: Maybe<Array<ApplicationWhereInput>>;
  NOT?: Maybe<Array<ApplicationWhereInput>>;
};

export type ApplicationWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type AuthPayload = {
  token: Scalars["String"];
  refresh: Scalars["String"];
};

export type BatchPayload = {
  count: Scalars["Long"];
};

export type Candidate = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  emails: Array<Scalars["String"]>;
  phones: Array<Scalars["String"]>;
  links: Array<Scalars["String"]>;
  avatar?: Maybe<File>;
  company?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  resumesString: Array<Scalars["String"]>;
  resumesFile?: Maybe<Array<File>>;
  coverLettersString: Array<Scalars["String"]>;
  coverLettersFile?: Maybe<Array<File>>;
  tags?: Maybe<Array<Tag>>;
  sources?: Maybe<Array<Source>>;
  fields?: Maybe<Array<FieldInstance>>;
  tasks?: Maybe<Array<Task>>;
  applications?: Maybe<Array<Application>>;
  comments?: Maybe<Array<Comment>>;
};

export type CandidateResumesFileArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CandidateCoverLettersFileArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CandidateTagsArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CandidateSourcesArgs = {
  where?: Maybe<SourceWhereInput>;
  orderBy?: Maybe<SourceOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CandidateFieldsArgs = {
  where?: Maybe<FieldInstanceWhereInput>;
  orderBy?: Maybe<FieldInstanceOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CandidateTasksArgs = {
  where?: Maybe<TaskWhereInput>;
  orderBy?: Maybe<TaskOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CandidateApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>;
  orderBy?: Maybe<ApplicationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CandidateCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CandidateConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CandidateEdge>>;
  aggregate: AggregateCandidate;
};

export type CandidateCreatecoverLettersStringInput = {
  set?: Maybe<Array<Scalars["String"]>>;
};

export type CandidateCreateemailsInput = {
  set?: Maybe<Array<Scalars["String"]>>;
};

export type CandidateCreateInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  emails?: Maybe<CandidateCreateemailsInput>;
  phones?: Maybe<CandidateCreatephonesInput>;
  links?: Maybe<CandidateCreatelinksInput>;
  avatar?: Maybe<FileCreateOneInput>;
  company?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  resumesString?: Maybe<CandidateCreateresumesStringInput>;
  resumesFile?: Maybe<FileCreateManyInput>;
  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;
  coverLettersFile?: Maybe<FileCreateManyInput>;
  tags?: Maybe<TagCreateManyInput>;
  sources?: Maybe<SourceCreateManyInput>;
  fields?: Maybe<FieldInstanceCreateManyInput>;
  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>;
  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>;
  comments?: Maybe<CommentCreateManyInput>;
};

export type CandidateCreatelinksInput = {
  set?: Maybe<Array<Scalars["String"]>>;
};

export type CandidateCreateManyInput = {
  create?: Maybe<Array<CandidateCreateInput>>;
  connect?: Maybe<Array<CandidateWhereUniqueInput>>;
};

export type CandidateCreateOneWithoutApplicationsInput = {
  create?: Maybe<CandidateCreateWithoutApplicationsInput>;
  connect?: Maybe<CandidateWhereUniqueInput>;
};

export type CandidateCreateOneWithoutTasksInput = {
  create?: Maybe<CandidateCreateWithoutTasksInput>;
  connect?: Maybe<CandidateWhereUniqueInput>;
};

export type CandidateCreatephonesInput = {
  set?: Maybe<Array<Scalars["String"]>>;
};

export type CandidateCreateresumesStringInput = {
  set?: Maybe<Array<Scalars["String"]>>;
};

export type CandidateCreateWithoutApplicationsInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  emails?: Maybe<CandidateCreateemailsInput>;
  phones?: Maybe<CandidateCreatephonesInput>;
  links?: Maybe<CandidateCreatelinksInput>;
  avatar?: Maybe<FileCreateOneInput>;
  company?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  resumesString?: Maybe<CandidateCreateresumesStringInput>;
  resumesFile?: Maybe<FileCreateManyInput>;
  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;
  coverLettersFile?: Maybe<FileCreateManyInput>;
  tags?: Maybe<TagCreateManyInput>;
  sources?: Maybe<SourceCreateManyInput>;
  fields?: Maybe<FieldInstanceCreateManyInput>;
  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>;
  comments?: Maybe<CommentCreateManyInput>;
};

export type CandidateCreateWithoutTasksInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  emails?: Maybe<CandidateCreateemailsInput>;
  phones?: Maybe<CandidateCreatephonesInput>;
  links?: Maybe<CandidateCreatelinksInput>;
  avatar?: Maybe<FileCreateOneInput>;
  company?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  resumesString?: Maybe<CandidateCreateresumesStringInput>;
  resumesFile?: Maybe<FileCreateManyInput>;
  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;
  coverLettersFile?: Maybe<FileCreateManyInput>;
  tags?: Maybe<TagCreateManyInput>;
  sources?: Maybe<SourceCreateManyInput>;
  fields?: Maybe<FieldInstanceCreateManyInput>;
  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>;
  comments?: Maybe<CommentCreateManyInput>;
};

export type CandidateEdge = {
  node: Candidate;
  cursor: Scalars["String"];
};

export enum CandidateOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  FirstNameAsc = "firstName_ASC",
  FirstNameDesc = "firstName_DESC",
  LastNameAsc = "lastName_ASC",
  LastNameDesc = "lastName_DESC",
  CompanyAsc = "company_ASC",
  CompanyDesc = "company_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC"
}

export type CandidateScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  firstName?: Maybe<Scalars["String"]>;
  firstName_not?: Maybe<Scalars["String"]>;
  firstName_in?: Maybe<Array<Scalars["String"]>>;
  firstName_not_in?: Maybe<Array<Scalars["String"]>>;
  firstName_lt?: Maybe<Scalars["String"]>;
  firstName_lte?: Maybe<Scalars["String"]>;
  firstName_gt?: Maybe<Scalars["String"]>;
  firstName_gte?: Maybe<Scalars["String"]>;
  firstName_contains?: Maybe<Scalars["String"]>;
  firstName_not_contains?: Maybe<Scalars["String"]>;
  firstName_starts_with?: Maybe<Scalars["String"]>;
  firstName_not_starts_with?: Maybe<Scalars["String"]>;
  firstName_ends_with?: Maybe<Scalars["String"]>;
  firstName_not_ends_with?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  lastName_not?: Maybe<Scalars["String"]>;
  lastName_in?: Maybe<Array<Scalars["String"]>>;
  lastName_not_in?: Maybe<Array<Scalars["String"]>>;
  lastName_lt?: Maybe<Scalars["String"]>;
  lastName_lte?: Maybe<Scalars["String"]>;
  lastName_gt?: Maybe<Scalars["String"]>;
  lastName_gte?: Maybe<Scalars["String"]>;
  lastName_contains?: Maybe<Scalars["String"]>;
  lastName_not_contains?: Maybe<Scalars["String"]>;
  lastName_starts_with?: Maybe<Scalars["String"]>;
  lastName_not_starts_with?: Maybe<Scalars["String"]>;
  lastName_ends_with?: Maybe<Scalars["String"]>;
  lastName_not_ends_with?: Maybe<Scalars["String"]>;
  company?: Maybe<Scalars["String"]>;
  company_not?: Maybe<Scalars["String"]>;
  company_in?: Maybe<Array<Scalars["String"]>>;
  company_not_in?: Maybe<Array<Scalars["String"]>>;
  company_lt?: Maybe<Scalars["String"]>;
  company_lte?: Maybe<Scalars["String"]>;
  company_gt?: Maybe<Scalars["String"]>;
  company_gte?: Maybe<Scalars["String"]>;
  company_contains?: Maybe<Scalars["String"]>;
  company_not_contains?: Maybe<Scalars["String"]>;
  company_starts_with?: Maybe<Scalars["String"]>;
  company_not_starts_with?: Maybe<Scalars["String"]>;
  company_ends_with?: Maybe<Scalars["String"]>;
  company_not_ends_with?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  headline_not?: Maybe<Scalars["String"]>;
  headline_in?: Maybe<Array<Scalars["String"]>>;
  headline_not_in?: Maybe<Array<Scalars["String"]>>;
  headline_lt?: Maybe<Scalars["String"]>;
  headline_lte?: Maybe<Scalars["String"]>;
  headline_gt?: Maybe<Scalars["String"]>;
  headline_gte?: Maybe<Scalars["String"]>;
  headline_contains?: Maybe<Scalars["String"]>;
  headline_not_contains?: Maybe<Scalars["String"]>;
  headline_starts_with?: Maybe<Scalars["String"]>;
  headline_not_starts_with?: Maybe<Scalars["String"]>;
  headline_ends_with?: Maybe<Scalars["String"]>;
  headline_not_ends_with?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  position_not?: Maybe<Scalars["String"]>;
  position_in?: Maybe<Array<Scalars["String"]>>;
  position_not_in?: Maybe<Array<Scalars["String"]>>;
  position_lt?: Maybe<Scalars["String"]>;
  position_lte?: Maybe<Scalars["String"]>;
  position_gt?: Maybe<Scalars["String"]>;
  position_gte?: Maybe<Scalars["String"]>;
  position_contains?: Maybe<Scalars["String"]>;
  position_not_contains?: Maybe<Scalars["String"]>;
  position_starts_with?: Maybe<Scalars["String"]>;
  position_not_starts_with?: Maybe<Scalars["String"]>;
  position_ends_with?: Maybe<Scalars["String"]>;
  position_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<CandidateScalarWhereInput>>;
  OR?: Maybe<Array<CandidateScalarWhereInput>>;
  NOT?: Maybe<Array<CandidateScalarWhereInput>>;
};

export type CandidateUpdatecoverLettersStringInput = {
  set?: Maybe<Array<Scalars["String"]>>;
};

export type CandidateUpdateDataInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  emails?: Maybe<CandidateUpdateemailsInput>;
  phones?: Maybe<CandidateUpdatephonesInput>;
  links?: Maybe<CandidateUpdatelinksInput>;
  avatar?: Maybe<FileUpdateOneInput>;
  company?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  resumesFile?: Maybe<FileUpdateManyInput>;
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
  coverLettersFile?: Maybe<FileUpdateManyInput>;
  tags?: Maybe<TagUpdateManyInput>;
  sources?: Maybe<SourceUpdateManyInput>;
  fields?: Maybe<FieldInstanceUpdateManyInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCandidateInput>;
  applications?: Maybe<ApplicationUpdateManyWithoutCandidateInput>;
  comments?: Maybe<CommentUpdateManyInput>;
};

export type CandidateUpdateemailsInput = {
  set?: Maybe<Array<Scalars["String"]>>;
};

export type CandidateUpdateInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  emails?: Maybe<CandidateUpdateemailsInput>;
  phones?: Maybe<CandidateUpdatephonesInput>;
  links?: Maybe<CandidateUpdatelinksInput>;
  avatar?: Maybe<FileUpdateOneInput>;
  company?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  resumesFile?: Maybe<FileUpdateManyInput>;
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
  coverLettersFile?: Maybe<FileUpdateManyInput>;
  tags?: Maybe<TagUpdateManyInput>;
  sources?: Maybe<SourceUpdateManyInput>;
  fields?: Maybe<FieldInstanceUpdateManyInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCandidateInput>;
  applications?: Maybe<ApplicationUpdateManyWithoutCandidateInput>;
  comments?: Maybe<CommentUpdateManyInput>;
};

export type CandidateUpdatelinksInput = {
  set?: Maybe<Array<Scalars["String"]>>;
};

export type CandidateUpdateManyDataInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  emails?: Maybe<CandidateUpdateemailsInput>;
  phones?: Maybe<CandidateUpdatephonesInput>;
  links?: Maybe<CandidateUpdatelinksInput>;
  company?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
};

export type CandidateUpdateManyInput = {
  create?: Maybe<Array<CandidateCreateInput>>;
  update?: Maybe<Array<CandidateUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<CandidateUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<CandidateWhereUniqueInput>>;
  connect?: Maybe<Array<CandidateWhereUniqueInput>>;
  set?: Maybe<Array<CandidateWhereUniqueInput>>;
  disconnect?: Maybe<Array<CandidateWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CandidateScalarWhereInput>>;
  updateMany?: Maybe<Array<CandidateUpdateManyWithWhereNestedInput>>;
};

export type CandidateUpdateManyMutationInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  emails?: Maybe<CandidateUpdateemailsInput>;
  phones?: Maybe<CandidateUpdatephonesInput>;
  links?: Maybe<CandidateUpdatelinksInput>;
  company?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
};

export type CandidateUpdateManyWithWhereNestedInput = {
  where: CandidateScalarWhereInput;
  data: CandidateUpdateManyDataInput;
};

export type CandidateUpdateOneRequiredWithoutApplicationsInput = {
  create?: Maybe<CandidateCreateWithoutApplicationsInput>;
  update?: Maybe<CandidateUpdateWithoutApplicationsDataInput>;
  upsert?: Maybe<CandidateUpsertWithoutApplicationsInput>;
  connect?: Maybe<CandidateWhereUniqueInput>;
};

export type CandidateUpdateOneWithoutTasksInput = {
  create?: Maybe<CandidateCreateWithoutTasksInput>;
  update?: Maybe<CandidateUpdateWithoutTasksDataInput>;
  upsert?: Maybe<CandidateUpsertWithoutTasksInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<CandidateWhereUniqueInput>;
};

export type CandidateUpdatephonesInput = {
  set?: Maybe<Array<Scalars["String"]>>;
};

export type CandidateUpdateresumesStringInput = {
  set?: Maybe<Array<Scalars["String"]>>;
};

export type CandidateUpdateWithoutApplicationsDataInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  emails?: Maybe<CandidateUpdateemailsInput>;
  phones?: Maybe<CandidateUpdatephonesInput>;
  links?: Maybe<CandidateUpdatelinksInput>;
  avatar?: Maybe<FileUpdateOneInput>;
  company?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  resumesFile?: Maybe<FileUpdateManyInput>;
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
  coverLettersFile?: Maybe<FileUpdateManyInput>;
  tags?: Maybe<TagUpdateManyInput>;
  sources?: Maybe<SourceUpdateManyInput>;
  fields?: Maybe<FieldInstanceUpdateManyInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCandidateInput>;
  comments?: Maybe<CommentUpdateManyInput>;
};

export type CandidateUpdateWithoutTasksDataInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  emails?: Maybe<CandidateUpdateemailsInput>;
  phones?: Maybe<CandidateUpdatephonesInput>;
  links?: Maybe<CandidateUpdatelinksInput>;
  avatar?: Maybe<FileUpdateOneInput>;
  company?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  resumesFile?: Maybe<FileUpdateManyInput>;
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
  coverLettersFile?: Maybe<FileUpdateManyInput>;
  tags?: Maybe<TagUpdateManyInput>;
  sources?: Maybe<SourceUpdateManyInput>;
  fields?: Maybe<FieldInstanceUpdateManyInput>;
  applications?: Maybe<ApplicationUpdateManyWithoutCandidateInput>;
  comments?: Maybe<CommentUpdateManyInput>;
};

export type CandidateUpdateWithWhereUniqueNestedInput = {
  where: CandidateWhereUniqueInput;
  data: CandidateUpdateDataInput;
};

export type CandidateUpsertWithoutApplicationsInput = {
  update: CandidateUpdateWithoutApplicationsDataInput;
  create: CandidateCreateWithoutApplicationsInput;
};

export type CandidateUpsertWithoutTasksInput = {
  update: CandidateUpdateWithoutTasksDataInput;
  create: CandidateCreateWithoutTasksInput;
};

export type CandidateUpsertWithWhereUniqueNestedInput = {
  where: CandidateWhereUniqueInput;
  update: CandidateUpdateDataInput;
  create: CandidateCreateInput;
};

export type CandidateWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  firstName?: Maybe<Scalars["String"]>;
  firstName_not?: Maybe<Scalars["String"]>;
  firstName_in?: Maybe<Array<Scalars["String"]>>;
  firstName_not_in?: Maybe<Array<Scalars["String"]>>;
  firstName_lt?: Maybe<Scalars["String"]>;
  firstName_lte?: Maybe<Scalars["String"]>;
  firstName_gt?: Maybe<Scalars["String"]>;
  firstName_gte?: Maybe<Scalars["String"]>;
  firstName_contains?: Maybe<Scalars["String"]>;
  firstName_not_contains?: Maybe<Scalars["String"]>;
  firstName_starts_with?: Maybe<Scalars["String"]>;
  firstName_not_starts_with?: Maybe<Scalars["String"]>;
  firstName_ends_with?: Maybe<Scalars["String"]>;
  firstName_not_ends_with?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  lastName_not?: Maybe<Scalars["String"]>;
  lastName_in?: Maybe<Array<Scalars["String"]>>;
  lastName_not_in?: Maybe<Array<Scalars["String"]>>;
  lastName_lt?: Maybe<Scalars["String"]>;
  lastName_lte?: Maybe<Scalars["String"]>;
  lastName_gt?: Maybe<Scalars["String"]>;
  lastName_gte?: Maybe<Scalars["String"]>;
  lastName_contains?: Maybe<Scalars["String"]>;
  lastName_not_contains?: Maybe<Scalars["String"]>;
  lastName_starts_with?: Maybe<Scalars["String"]>;
  lastName_not_starts_with?: Maybe<Scalars["String"]>;
  lastName_ends_with?: Maybe<Scalars["String"]>;
  lastName_not_ends_with?: Maybe<Scalars["String"]>;
  avatar?: Maybe<FileWhereInput>;
  company?: Maybe<Scalars["String"]>;
  company_not?: Maybe<Scalars["String"]>;
  company_in?: Maybe<Array<Scalars["String"]>>;
  company_not_in?: Maybe<Array<Scalars["String"]>>;
  company_lt?: Maybe<Scalars["String"]>;
  company_lte?: Maybe<Scalars["String"]>;
  company_gt?: Maybe<Scalars["String"]>;
  company_gte?: Maybe<Scalars["String"]>;
  company_contains?: Maybe<Scalars["String"]>;
  company_not_contains?: Maybe<Scalars["String"]>;
  company_starts_with?: Maybe<Scalars["String"]>;
  company_not_starts_with?: Maybe<Scalars["String"]>;
  company_ends_with?: Maybe<Scalars["String"]>;
  company_not_ends_with?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  headline_not?: Maybe<Scalars["String"]>;
  headline_in?: Maybe<Array<Scalars["String"]>>;
  headline_not_in?: Maybe<Array<Scalars["String"]>>;
  headline_lt?: Maybe<Scalars["String"]>;
  headline_lte?: Maybe<Scalars["String"]>;
  headline_gt?: Maybe<Scalars["String"]>;
  headline_gte?: Maybe<Scalars["String"]>;
  headline_contains?: Maybe<Scalars["String"]>;
  headline_not_contains?: Maybe<Scalars["String"]>;
  headline_starts_with?: Maybe<Scalars["String"]>;
  headline_not_starts_with?: Maybe<Scalars["String"]>;
  headline_ends_with?: Maybe<Scalars["String"]>;
  headline_not_ends_with?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  position_not?: Maybe<Scalars["String"]>;
  position_in?: Maybe<Array<Scalars["String"]>>;
  position_not_in?: Maybe<Array<Scalars["String"]>>;
  position_lt?: Maybe<Scalars["String"]>;
  position_lte?: Maybe<Scalars["String"]>;
  position_gt?: Maybe<Scalars["String"]>;
  position_gte?: Maybe<Scalars["String"]>;
  position_contains?: Maybe<Scalars["String"]>;
  position_not_contains?: Maybe<Scalars["String"]>;
  position_starts_with?: Maybe<Scalars["String"]>;
  position_not_starts_with?: Maybe<Scalars["String"]>;
  position_ends_with?: Maybe<Scalars["String"]>;
  position_not_ends_with?: Maybe<Scalars["String"]>;
  resumesFile_every?: Maybe<FileWhereInput>;
  resumesFile_some?: Maybe<FileWhereInput>;
  resumesFile_none?: Maybe<FileWhereInput>;
  coverLettersFile_every?: Maybe<FileWhereInput>;
  coverLettersFile_some?: Maybe<FileWhereInput>;
  coverLettersFile_none?: Maybe<FileWhereInput>;
  tags_every?: Maybe<TagWhereInput>;
  tags_some?: Maybe<TagWhereInput>;
  tags_none?: Maybe<TagWhereInput>;
  sources_every?: Maybe<SourceWhereInput>;
  sources_some?: Maybe<SourceWhereInput>;
  sources_none?: Maybe<SourceWhereInput>;
  fields_every?: Maybe<FieldInstanceWhereInput>;
  fields_some?: Maybe<FieldInstanceWhereInput>;
  fields_none?: Maybe<FieldInstanceWhereInput>;
  tasks_every?: Maybe<TaskWhereInput>;
  tasks_some?: Maybe<TaskWhereInput>;
  tasks_none?: Maybe<TaskWhereInput>;
  applications_every?: Maybe<ApplicationWhereInput>;
  applications_some?: Maybe<ApplicationWhereInput>;
  applications_none?: Maybe<ApplicationWhereInput>;
  comments_every?: Maybe<CommentWhereInput>;
  comments_some?: Maybe<CommentWhereInput>;
  comments_none?: Maybe<CommentWhereInput>;
  AND?: Maybe<Array<CandidateWhereInput>>;
  OR?: Maybe<Array<CandidateWhereInput>>;
  NOT?: Maybe<Array<CandidateWhereInput>>;
};

export type CandidateWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Comment = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  createdBy: User;
  parent?: Maybe<Comment>;
  content: Scalars["String"];
};

export type CommentCreateInput = {
  createdBy: UserCreateOneInput;
  parent?: Maybe<CommentCreateOneInput>;
  content: Scalars["String"];
};

export type CommentCreateManyInput = {
  create?: Maybe<Array<CommentCreateInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateOneInput = {
  create?: Maybe<CommentCreateInput>;
  connect?: Maybe<CommentWhereUniqueInput>;
};

export enum CommentOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC"
}

export type CommentScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  content?: Maybe<Scalars["String"]>;
  content_not?: Maybe<Scalars["String"]>;
  content_in?: Maybe<Array<Scalars["String"]>>;
  content_not_in?: Maybe<Array<Scalars["String"]>>;
  content_lt?: Maybe<Scalars["String"]>;
  content_lte?: Maybe<Scalars["String"]>;
  content_gt?: Maybe<Scalars["String"]>;
  content_gte?: Maybe<Scalars["String"]>;
  content_contains?: Maybe<Scalars["String"]>;
  content_not_contains?: Maybe<Scalars["String"]>;
  content_starts_with?: Maybe<Scalars["String"]>;
  content_not_starts_with?: Maybe<Scalars["String"]>;
  content_ends_with?: Maybe<Scalars["String"]>;
  content_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
};

export type CommentUpdateDataInput = {
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  parent?: Maybe<CommentUpdateOneInput>;
  content?: Maybe<Scalars["String"]>;
};

export type CommentUpdateManyDataInput = {
  content?: Maybe<Scalars["String"]>;
};

export type CommentUpdateManyInput = {
  create?: Maybe<Array<CommentCreateInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
};

export type CommentUpdateManyWithWhereNestedInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyDataInput;
};

export type CommentUpdateOneInput = {
  create?: Maybe<CommentCreateInput>;
  update?: Maybe<CommentUpdateDataInput>;
  upsert?: Maybe<CommentUpsertNestedInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<CommentWhereUniqueInput>;
};

export type CommentUpdateWithWhereUniqueNestedInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateDataInput;
};

export type CommentUpsertNestedInput = {
  update: CommentUpdateDataInput;
  create: CommentCreateInput;
};

export type CommentUpsertWithWhereUniqueNestedInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateDataInput;
  create: CommentCreateInput;
};

export type CommentWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<UserWhereInput>;
  parent?: Maybe<CommentWhereInput>;
  content?: Maybe<Scalars["String"]>;
  content_not?: Maybe<Scalars["String"]>;
  content_in?: Maybe<Array<Scalars["String"]>>;
  content_not_in?: Maybe<Array<Scalars["String"]>>;
  content_lt?: Maybe<Scalars["String"]>;
  content_lte?: Maybe<Scalars["String"]>;
  content_gt?: Maybe<Scalars["String"]>;
  content_gte?: Maybe<Scalars["String"]>;
  content_contains?: Maybe<Scalars["String"]>;
  content_not_contains?: Maybe<Scalars["String"]>;
  content_starts_with?: Maybe<Scalars["String"]>;
  content_not_starts_with?: Maybe<Scalars["String"]>;
  content_ends_with?: Maybe<Scalars["String"]>;
  content_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Connect = {
  connect?: Maybe<WhereUniqueInput>;
};

export type ConnectDisconnect = {
  connect?: Maybe<WhereUniqueInput>;
  disconnect?: Maybe<WhereUniqueInput>;
};

export type ConnectDisconnectMany = {
  connect?: Maybe<Array<WhereUniqueInput>>;
  disconnect?: Maybe<Array<WhereUniqueInput>>;
};

export type ConnectMany = {
  connect?: Maybe<Array<WhereUniqueInput>>;
};

export type Disqualification = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type DisqualificationCreateInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type DisqualificationCreateManyInput = {
  create?: Maybe<Array<DisqualificationCreateInput>>;
  connect?: Maybe<Array<DisqualificationWhereUniqueInput>>;
};

export type DisqualificationCreateOneInput = {
  create?: Maybe<DisqualificationCreateInput>;
  connect?: Maybe<DisqualificationWhereUniqueInput>;
};

export type DisqualificationInstance = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  prototype: Disqualification;
  createdBy: User;
  content?: Maybe<Scalars["String"]>;
};

export type DisqualificationInstanceCreateInput = {
  prototype: DisqualificationCreateOneInput;
  createdBy: UserCreateOneInput;
  content?: Maybe<Scalars["String"]>;
};

export type DisqualificationInstanceCreateOneInput = {
  create?: Maybe<DisqualificationInstanceCreateInput>;
  connect?: Maybe<DisqualificationInstanceWhereUniqueInput>;
};

export type DisqualificationInstanceUpdateDataInput = {
  prototype?: Maybe<DisqualificationUpdateOneRequiredInput>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  content?: Maybe<Scalars["String"]>;
};

export type DisqualificationInstanceUpdateOneInput = {
  create?: Maybe<DisqualificationInstanceCreateInput>;
  update?: Maybe<DisqualificationInstanceUpdateDataInput>;
  upsert?: Maybe<DisqualificationInstanceUpsertNestedInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<DisqualificationInstanceWhereUniqueInput>;
};

export type DisqualificationInstanceUpsertNestedInput = {
  update: DisqualificationInstanceUpdateDataInput;
  create: DisqualificationInstanceCreateInput;
};

export type DisqualificationInstanceWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  prototype?: Maybe<DisqualificationWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  content?: Maybe<Scalars["String"]>;
  content_not?: Maybe<Scalars["String"]>;
  content_in?: Maybe<Array<Scalars["String"]>>;
  content_not_in?: Maybe<Array<Scalars["String"]>>;
  content_lt?: Maybe<Scalars["String"]>;
  content_lte?: Maybe<Scalars["String"]>;
  content_gt?: Maybe<Scalars["String"]>;
  content_gte?: Maybe<Scalars["String"]>;
  content_contains?: Maybe<Scalars["String"]>;
  content_not_contains?: Maybe<Scalars["String"]>;
  content_starts_with?: Maybe<Scalars["String"]>;
  content_not_starts_with?: Maybe<Scalars["String"]>;
  content_ends_with?: Maybe<Scalars["String"]>;
  content_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<DisqualificationInstanceWhereInput>>;
  OR?: Maybe<Array<DisqualificationInstanceWhereInput>>;
  NOT?: Maybe<Array<DisqualificationInstanceWhereInput>>;
};

export type DisqualificationInstanceWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export enum DisqualificationOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC"
}

export type DisqualificationScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<DisqualificationScalarWhereInput>>;
  OR?: Maybe<Array<DisqualificationScalarWhereInput>>;
  NOT?: Maybe<Array<DisqualificationScalarWhereInput>>;
};

export type DisqualificationUpdateDataInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type DisqualificationUpdateManyDataInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type DisqualificationUpdateManyInput = {
  create?: Maybe<Array<DisqualificationCreateInput>>;
  update?: Maybe<Array<DisqualificationUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<DisqualificationUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<DisqualificationWhereUniqueInput>>;
  connect?: Maybe<Array<DisqualificationWhereUniqueInput>>;
  set?: Maybe<Array<DisqualificationWhereUniqueInput>>;
  disconnect?: Maybe<Array<DisqualificationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<DisqualificationScalarWhereInput>>;
  updateMany?: Maybe<Array<DisqualificationUpdateManyWithWhereNestedInput>>;
};

export type DisqualificationUpdateManyWithWhereNestedInput = {
  where: DisqualificationScalarWhereInput;
  data: DisqualificationUpdateManyDataInput;
};

export type DisqualificationUpdateOneRequiredInput = {
  create?: Maybe<DisqualificationCreateInput>;
  update?: Maybe<DisqualificationUpdateDataInput>;
  upsert?: Maybe<DisqualificationUpsertNestedInput>;
  connect?: Maybe<DisqualificationWhereUniqueInput>;
};

export type DisqualificationUpdateWithWhereUniqueNestedInput = {
  where: DisqualificationWhereUniqueInput;
  data: DisqualificationUpdateDataInput;
};

export type DisqualificationUpsertNestedInput = {
  update: DisqualificationUpdateDataInput;
  create: DisqualificationCreateInput;
};

export type DisqualificationUpsertWithWhereUniqueNestedInput = {
  where: DisqualificationWhereUniqueInput;
  update: DisqualificationUpdateDataInput;
  create: DisqualificationCreateInput;
};

export type DisqualificationWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<DisqualificationWhereInput>>;
  OR?: Maybe<Array<DisqualificationWhereInput>>;
  NOT?: Maybe<Array<DisqualificationWhereInput>>;
};

export type DisqualificationWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Field = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  type: FieldType;
  label: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type FieldCreateInput = {
  type: FieldType;
  label: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type FieldCreateManyInput = {
  create?: Maybe<Array<FieldCreateInput>>;
  connect?: Maybe<Array<FieldWhereUniqueInput>>;
};

export type FieldCreateOneInput = {
  create?: Maybe<FieldCreateInput>;
  connect?: Maybe<FieldWhereUniqueInput>;
};

export type FieldInstance = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  prototype: Field;
  value?: Maybe<Scalars["String"]>;
};

export type FieldInstanceCreateInput = {
  prototype: FieldCreateOneInput;
  value?: Maybe<Scalars["String"]>;
};

export type FieldInstanceCreateManyInput = {
  create?: Maybe<Array<FieldInstanceCreateInput>>;
  connect?: Maybe<Array<FieldInstanceWhereUniqueInput>>;
};

export enum FieldInstanceOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  ValueAsc = "value_ASC",
  ValueDesc = "value_DESC"
}

export type FieldInstanceScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  value?: Maybe<Scalars["String"]>;
  value_not?: Maybe<Scalars["String"]>;
  value_in?: Maybe<Array<Scalars["String"]>>;
  value_not_in?: Maybe<Array<Scalars["String"]>>;
  value_lt?: Maybe<Scalars["String"]>;
  value_lte?: Maybe<Scalars["String"]>;
  value_gt?: Maybe<Scalars["String"]>;
  value_gte?: Maybe<Scalars["String"]>;
  value_contains?: Maybe<Scalars["String"]>;
  value_not_contains?: Maybe<Scalars["String"]>;
  value_starts_with?: Maybe<Scalars["String"]>;
  value_not_starts_with?: Maybe<Scalars["String"]>;
  value_ends_with?: Maybe<Scalars["String"]>;
  value_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<FieldInstanceScalarWhereInput>>;
  OR?: Maybe<Array<FieldInstanceScalarWhereInput>>;
  NOT?: Maybe<Array<FieldInstanceScalarWhereInput>>;
};

export type FieldInstanceUpdateDataInput = {
  prototype?: Maybe<FieldUpdateOneRequiredInput>;
  value?: Maybe<Scalars["String"]>;
};

export type FieldInstanceUpdateManyDataInput = {
  value?: Maybe<Scalars["String"]>;
};

export type FieldInstanceUpdateManyInput = {
  create?: Maybe<Array<FieldInstanceCreateInput>>;
  update?: Maybe<Array<FieldInstanceUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<FieldInstanceUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<FieldInstanceWhereUniqueInput>>;
  connect?: Maybe<Array<FieldInstanceWhereUniqueInput>>;
  set?: Maybe<Array<FieldInstanceWhereUniqueInput>>;
  disconnect?: Maybe<Array<FieldInstanceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FieldInstanceScalarWhereInput>>;
  updateMany?: Maybe<Array<FieldInstanceUpdateManyWithWhereNestedInput>>;
};

export type FieldInstanceUpdateManyWithWhereNestedInput = {
  where: FieldInstanceScalarWhereInput;
  data: FieldInstanceUpdateManyDataInput;
};

export type FieldInstanceUpdateWithWhereUniqueNestedInput = {
  where: FieldInstanceWhereUniqueInput;
  data: FieldInstanceUpdateDataInput;
};

export type FieldInstanceUpsertWithWhereUniqueNestedInput = {
  where: FieldInstanceWhereUniqueInput;
  update: FieldInstanceUpdateDataInput;
  create: FieldInstanceCreateInput;
};

export type FieldInstanceWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  prototype?: Maybe<FieldWhereInput>;
  value?: Maybe<Scalars["String"]>;
  value_not?: Maybe<Scalars["String"]>;
  value_in?: Maybe<Array<Scalars["String"]>>;
  value_not_in?: Maybe<Array<Scalars["String"]>>;
  value_lt?: Maybe<Scalars["String"]>;
  value_lte?: Maybe<Scalars["String"]>;
  value_gt?: Maybe<Scalars["String"]>;
  value_gte?: Maybe<Scalars["String"]>;
  value_contains?: Maybe<Scalars["String"]>;
  value_not_contains?: Maybe<Scalars["String"]>;
  value_starts_with?: Maybe<Scalars["String"]>;
  value_not_starts_with?: Maybe<Scalars["String"]>;
  value_ends_with?: Maybe<Scalars["String"]>;
  value_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<FieldInstanceWhereInput>>;
  OR?: Maybe<Array<FieldInstanceWhereInput>>;
  NOT?: Maybe<Array<FieldInstanceWhereInput>>;
};

export type FieldInstanceWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export enum FieldOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
  LabelAsc = "label_ASC",
  LabelDesc = "label_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC"
}

export type FieldScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<FieldType>;
  type_not?: Maybe<FieldType>;
  type_in?: Maybe<Array<FieldType>>;
  type_not_in?: Maybe<Array<FieldType>>;
  label?: Maybe<Scalars["String"]>;
  label_not?: Maybe<Scalars["String"]>;
  label_in?: Maybe<Array<Scalars["String"]>>;
  label_not_in?: Maybe<Array<Scalars["String"]>>;
  label_lt?: Maybe<Scalars["String"]>;
  label_lte?: Maybe<Scalars["String"]>;
  label_gt?: Maybe<Scalars["String"]>;
  label_gte?: Maybe<Scalars["String"]>;
  label_contains?: Maybe<Scalars["String"]>;
  label_not_contains?: Maybe<Scalars["String"]>;
  label_starts_with?: Maybe<Scalars["String"]>;
  label_not_starts_with?: Maybe<Scalars["String"]>;
  label_ends_with?: Maybe<Scalars["String"]>;
  label_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<FieldScalarWhereInput>>;
  OR?: Maybe<Array<FieldScalarWhereInput>>;
  NOT?: Maybe<Array<FieldScalarWhereInput>>;
};

export enum FieldType {
  Int = "INT",
  Float = "FLOAT",
  Text = "TEXT",
  Paragraph = "PARAGRAPH",
  Boolean = "BOOLEAN",
  Datetime = "DATETIME"
}

export type FieldUpdateDataInput = {
  type?: Maybe<FieldType>;
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type FieldUpdateManyDataInput = {
  type?: Maybe<FieldType>;
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type FieldUpdateManyInput = {
  create?: Maybe<Array<FieldCreateInput>>;
  update?: Maybe<Array<FieldUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<FieldUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<FieldWhereUniqueInput>>;
  connect?: Maybe<Array<FieldWhereUniqueInput>>;
  set?: Maybe<Array<FieldWhereUniqueInput>>;
  disconnect?: Maybe<Array<FieldWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FieldScalarWhereInput>>;
  updateMany?: Maybe<Array<FieldUpdateManyWithWhereNestedInput>>;
};

export type FieldUpdateManyWithWhereNestedInput = {
  where: FieldScalarWhereInput;
  data: FieldUpdateManyDataInput;
};

export type FieldUpdateOneRequiredInput = {
  create?: Maybe<FieldCreateInput>;
  update?: Maybe<FieldUpdateDataInput>;
  upsert?: Maybe<FieldUpsertNestedInput>;
  connect?: Maybe<FieldWhereUniqueInput>;
};

export type FieldUpdateWithWhereUniqueNestedInput = {
  where: FieldWhereUniqueInput;
  data: FieldUpdateDataInput;
};

export type FieldUpsertNestedInput = {
  update: FieldUpdateDataInput;
  create: FieldCreateInput;
};

export type FieldUpsertWithWhereUniqueNestedInput = {
  where: FieldWhereUniqueInput;
  update: FieldUpdateDataInput;
  create: FieldCreateInput;
};

export type FieldWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<FieldType>;
  type_not?: Maybe<FieldType>;
  type_in?: Maybe<Array<FieldType>>;
  type_not_in?: Maybe<Array<FieldType>>;
  label?: Maybe<Scalars["String"]>;
  label_not?: Maybe<Scalars["String"]>;
  label_in?: Maybe<Array<Scalars["String"]>>;
  label_not_in?: Maybe<Array<Scalars["String"]>>;
  label_lt?: Maybe<Scalars["String"]>;
  label_lte?: Maybe<Scalars["String"]>;
  label_gt?: Maybe<Scalars["String"]>;
  label_gte?: Maybe<Scalars["String"]>;
  label_contains?: Maybe<Scalars["String"]>;
  label_not_contains?: Maybe<Scalars["String"]>;
  label_starts_with?: Maybe<Scalars["String"]>;
  label_not_starts_with?: Maybe<Scalars["String"]>;
  label_ends_with?: Maybe<Scalars["String"]>;
  label_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<FieldWhereInput>>;
  OR?: Maybe<Array<FieldWhereInput>>;
  NOT?: Maybe<Array<FieldWhereInput>>;
};

export type FieldWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type File = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  size: Scalars["Int"];
  type: Scalars["String"];
  name: Scalars["String"];
  url: Scalars["String"];
};

export type FileCreateInput = {
  size: Scalars["Int"];
  type: Scalars["String"];
  name: Scalars["String"];
  url: Scalars["String"];
};

export type FileCreateManyInput = {
  create?: Maybe<Array<FileCreateInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type FileCreateOneInput = {
  create?: Maybe<FileCreateInput>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export enum FileOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC"
}

export type FileScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  size?: Maybe<Scalars["Int"]>;
  size_not?: Maybe<Scalars["Int"]>;
  size_in?: Maybe<Array<Scalars["Int"]>>;
  size_not_in?: Maybe<Array<Scalars["Int"]>>;
  size_lt?: Maybe<Scalars["Int"]>;
  size_lte?: Maybe<Scalars["Int"]>;
  size_gt?: Maybe<Scalars["Int"]>;
  size_gte?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_lt?: Maybe<Scalars["String"]>;
  type_lte?: Maybe<Scalars["String"]>;
  type_gt?: Maybe<Scalars["String"]>;
  type_gte?: Maybe<Scalars["String"]>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Scalars["String"]>>;
  url_not_in?: Maybe<Array<Scalars["String"]>>;
  url_lt?: Maybe<Scalars["String"]>;
  url_lte?: Maybe<Scalars["String"]>;
  url_gt?: Maybe<Scalars["String"]>;
  url_gte?: Maybe<Scalars["String"]>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  url_starts_with?: Maybe<Scalars["String"]>;
  url_not_starts_with?: Maybe<Scalars["String"]>;
  url_ends_with?: Maybe<Scalars["String"]>;
  url_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<FileScalarWhereInput>>;
  OR?: Maybe<Array<FileScalarWhereInput>>;
  NOT?: Maybe<Array<FileScalarWhereInput>>;
};

export type FileUpdateDataInput = {
  size?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FileUpdateManyDataInput = {
  size?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FileUpdateManyInput = {
  create?: Maybe<Array<FileCreateInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
};

export type FileUpdateManyWithWhereNestedInput = {
  where: FileScalarWhereInput;
  data: FileUpdateManyDataInput;
};

export type FileUpdateOneInput = {
  create?: Maybe<FileCreateInput>;
  update?: Maybe<FileUpdateDataInput>;
  upsert?: Maybe<FileUpsertNestedInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type FileUpdateWithWhereUniqueNestedInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateDataInput;
};

export type FileUpsertNestedInput = {
  update: FileUpdateDataInput;
  create: FileCreateInput;
};

export type FileUpsertWithWhereUniqueNestedInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateDataInput;
  create: FileCreateInput;
};

export type FileWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  size?: Maybe<Scalars["Int"]>;
  size_not?: Maybe<Scalars["Int"]>;
  size_in?: Maybe<Array<Scalars["Int"]>>;
  size_not_in?: Maybe<Array<Scalars["Int"]>>;
  size_lt?: Maybe<Scalars["Int"]>;
  size_lte?: Maybe<Scalars["Int"]>;
  size_gt?: Maybe<Scalars["Int"]>;
  size_gte?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_lt?: Maybe<Scalars["String"]>;
  type_lte?: Maybe<Scalars["String"]>;
  type_gt?: Maybe<Scalars["String"]>;
  type_gte?: Maybe<Scalars["String"]>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Scalars["String"]>>;
  url_not_in?: Maybe<Array<Scalars["String"]>>;
  url_lt?: Maybe<Scalars["String"]>;
  url_lte?: Maybe<Scalars["String"]>;
  url_gt?: Maybe<Scalars["String"]>;
  url_gte?: Maybe<Scalars["String"]>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  url_starts_with?: Maybe<Scalars["String"]>;
  url_not_starts_with?: Maybe<Scalars["String"]>;
  url_ends_with?: Maybe<Scalars["String"]>;
  url_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
  NOT?: Maybe<Array<FileWhereInput>>;
};

export type FileWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  url?: Maybe<Scalars["String"]>;
};

export type Invite = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  email: Scalars["String"];
  expireAt: Scalars["DateTime"];
  invitedBy: User;
};

export type InviteCreateInput = {
  email: Scalars["String"];
};

export type InviteCreateManyInput = {
  create?: Maybe<Array<InviteCreateInput>>;
  connect?: Maybe<Array<InviteWhereUniqueInput>>;
};

export enum InviteOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  ExpireAtAsc = "expireAt_ASC",
  ExpireAtDesc = "expireAt_DESC"
}

export type InviteScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  email_not?: Maybe<Scalars["String"]>;
  email_in?: Maybe<Array<Scalars["String"]>>;
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  email_lt?: Maybe<Scalars["String"]>;
  email_lte?: Maybe<Scalars["String"]>;
  email_gt?: Maybe<Scalars["String"]>;
  email_gte?: Maybe<Scalars["String"]>;
  email_contains?: Maybe<Scalars["String"]>;
  email_not_contains?: Maybe<Scalars["String"]>;
  email_starts_with?: Maybe<Scalars["String"]>;
  email_not_starts_with?: Maybe<Scalars["String"]>;
  email_ends_with?: Maybe<Scalars["String"]>;
  email_not_ends_with?: Maybe<Scalars["String"]>;
  expireAt?: Maybe<Scalars["DateTime"]>;
  expireAt_not?: Maybe<Scalars["DateTime"]>;
  expireAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  expireAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  expireAt_lt?: Maybe<Scalars["DateTime"]>;
  expireAt_lte?: Maybe<Scalars["DateTime"]>;
  expireAt_gt?: Maybe<Scalars["DateTime"]>;
  expireAt_gte?: Maybe<Scalars["DateTime"]>;
  AND?: Maybe<Array<InviteScalarWhereInput>>;
  OR?: Maybe<Array<InviteScalarWhereInput>>;
  NOT?: Maybe<Array<InviteScalarWhereInput>>;
};

export type InviteUpdateDataInput = {
  email?: Maybe<Scalars["String"]>;
  expireAt?: Maybe<Scalars["DateTime"]>;
  invitedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type InviteUpdateManyDataInput = {
  email?: Maybe<Scalars["String"]>;
  expireAt?: Maybe<Scalars["DateTime"]>;
};

export type InviteUpdateManyInput = {
  create?: Maybe<Array<InviteCreateInput>>;
  update?: Maybe<Array<InviteUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<InviteUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<InviteWhereUniqueInput>>;
  connect?: Maybe<Array<InviteWhereUniqueInput>>;
  set?: Maybe<Array<InviteWhereUniqueInput>>;
  disconnect?: Maybe<Array<InviteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<InviteScalarWhereInput>>;
  updateMany?: Maybe<Array<InviteUpdateManyWithWhereNestedInput>>;
};

export type InviteUpdateManyWithWhereNestedInput = {
  where: InviteScalarWhereInput;
  data: InviteUpdateManyDataInput;
};

export type InviteUpdateWithWhereUniqueNestedInput = {
  where: InviteWhereUniqueInput;
  data: InviteUpdateDataInput;
};

export type InviteUpsertWithWhereUniqueNestedInput = {
  where: InviteWhereUniqueInput;
  update: InviteUpdateDataInput;
  create: InviteCreateInput;
};

export type InviteWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  email_not?: Maybe<Scalars["String"]>;
  email_in?: Maybe<Array<Scalars["String"]>>;
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  email_lt?: Maybe<Scalars["String"]>;
  email_lte?: Maybe<Scalars["String"]>;
  email_gt?: Maybe<Scalars["String"]>;
  email_gte?: Maybe<Scalars["String"]>;
  email_contains?: Maybe<Scalars["String"]>;
  email_not_contains?: Maybe<Scalars["String"]>;
  email_starts_with?: Maybe<Scalars["String"]>;
  email_not_starts_with?: Maybe<Scalars["String"]>;
  email_ends_with?: Maybe<Scalars["String"]>;
  email_not_ends_with?: Maybe<Scalars["String"]>;
  expireAt?: Maybe<Scalars["DateTime"]>;
  expireAt_not?: Maybe<Scalars["DateTime"]>;
  expireAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  expireAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  expireAt_lt?: Maybe<Scalars["DateTime"]>;
  expireAt_lte?: Maybe<Scalars["DateTime"]>;
  expireAt_gt?: Maybe<Scalars["DateTime"]>;
  expireAt_gte?: Maybe<Scalars["DateTime"]>;
  invitedBy?: Maybe<UserWhereInput>;
  AND?: Maybe<Array<InviteWhereInput>>;
  OR?: Maybe<Array<InviteWhereInput>>;
  NOT?: Maybe<Array<InviteWhereInput>>;
};

export type InviteWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Job = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  workspace: Workspace;
  applications?: Maybe<Array<Application>>;
  workflow: Workflow;
  comments?: Maybe<Array<Comment>>;
  type: JobType;
  department?: Maybe<Scalars["String"]>;
  locations?: Maybe<Array<Location>>;
  name: Scalars["String"];
  excerpt?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
};

export type JobApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>;
  orderBy?: Maybe<ApplicationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type JobCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type JobLocationsArgs = {
  where?: Maybe<LocationWhereInput>;
  orderBy?: Maybe<LocationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type JobConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<JobEdge>>;
  aggregate: AggregateJob;
};

export type JobCreateInput = {
  workspace: WorkspaceCreateOneWithoutJobsInput;
  applications?: Maybe<ApplicationCreateManyWithoutJobInput>;
  workflow: WorkflowCreateOneWithoutJobsInput;
  comments?: Maybe<CommentCreateManyInput>;
  type: JobType;
  department?: Maybe<Scalars["String"]>;
  locations?: Maybe<LocationCreateManyInput>;
  name: Scalars["String"];
  excerpt?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
};

export type JobCreateManyWithoutWorkflowInput = {
  create?: Maybe<Array<JobCreateWithoutWorkflowInput>>;
  connect?: Maybe<Array<JobWhereUniqueInput>>;
};

export type JobCreateOneWithoutApplicationsInput = {
  create?: Maybe<JobCreateWithoutApplicationsInput>;
  connect?: Maybe<JobWhereUniqueInput>;
};

export type JobCreateWithoutApplicationsInput = {
  workspace: WorkspaceCreateOneWithoutJobsInput;
  workflow: WorkflowCreateOneWithoutJobsInput;
  comments?: Maybe<CommentCreateManyInput>;
  type: JobType;
  department?: Maybe<Scalars["String"]>;
  locations?: Maybe<LocationCreateManyInput>;
  name: Scalars["String"];
  excerpt?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
};

export type JobCreateWithoutWorkflowInput = {
  workspace: WorkspaceCreateOneWithoutJobsInput;
  applications?: Maybe<ApplicationCreateManyWithoutJobInput>;
  comments?: Maybe<CommentCreateManyInput>;
  type: JobType;
  department?: Maybe<Scalars["String"]>;
  locations?: Maybe<LocationCreateManyInput>;
  name: Scalars["String"];
  excerpt?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
};

export type JobEdge = {
  node: Job;
  cursor: Scalars["String"];
};

export enum JobOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
  DepartmentAsc = "department_ASC",
  DepartmentDesc = "department_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  ExcerptAsc = "excerpt_ASC",
  ExcerptDesc = "excerpt_DESC",
  CompanyDescriptionAsc = "companyDescription_ASC",
  CompanyDescriptionDesc = "companyDescription_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  RequirementsAsc = "requirements_ASC",
  RequirementsDesc = "requirements_DESC"
}

export type JobScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<JobType>;
  type_not?: Maybe<JobType>;
  type_in?: Maybe<Array<JobType>>;
  type_not_in?: Maybe<Array<JobType>>;
  department?: Maybe<Scalars["String"]>;
  department_not?: Maybe<Scalars["String"]>;
  department_in?: Maybe<Array<Scalars["String"]>>;
  department_not_in?: Maybe<Array<Scalars["String"]>>;
  department_lt?: Maybe<Scalars["String"]>;
  department_lte?: Maybe<Scalars["String"]>;
  department_gt?: Maybe<Scalars["String"]>;
  department_gte?: Maybe<Scalars["String"]>;
  department_contains?: Maybe<Scalars["String"]>;
  department_not_contains?: Maybe<Scalars["String"]>;
  department_starts_with?: Maybe<Scalars["String"]>;
  department_not_starts_with?: Maybe<Scalars["String"]>;
  department_ends_with?: Maybe<Scalars["String"]>;
  department_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  excerpt?: Maybe<Scalars["String"]>;
  excerpt_not?: Maybe<Scalars["String"]>;
  excerpt_in?: Maybe<Array<Scalars["String"]>>;
  excerpt_not_in?: Maybe<Array<Scalars["String"]>>;
  excerpt_lt?: Maybe<Scalars["String"]>;
  excerpt_lte?: Maybe<Scalars["String"]>;
  excerpt_gt?: Maybe<Scalars["String"]>;
  excerpt_gte?: Maybe<Scalars["String"]>;
  excerpt_contains?: Maybe<Scalars["String"]>;
  excerpt_not_contains?: Maybe<Scalars["String"]>;
  excerpt_starts_with?: Maybe<Scalars["String"]>;
  excerpt_not_starts_with?: Maybe<Scalars["String"]>;
  excerpt_ends_with?: Maybe<Scalars["String"]>;
  excerpt_not_ends_with?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  companyDescription_not?: Maybe<Scalars["String"]>;
  companyDescription_in?: Maybe<Array<Scalars["String"]>>;
  companyDescription_not_in?: Maybe<Array<Scalars["String"]>>;
  companyDescription_lt?: Maybe<Scalars["String"]>;
  companyDescription_lte?: Maybe<Scalars["String"]>;
  companyDescription_gt?: Maybe<Scalars["String"]>;
  companyDescription_gte?: Maybe<Scalars["String"]>;
  companyDescription_contains?: Maybe<Scalars["String"]>;
  companyDescription_not_contains?: Maybe<Scalars["String"]>;
  companyDescription_starts_with?: Maybe<Scalars["String"]>;
  companyDescription_not_starts_with?: Maybe<Scalars["String"]>;
  companyDescription_ends_with?: Maybe<Scalars["String"]>;
  companyDescription_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
  requirements_not?: Maybe<Scalars["String"]>;
  requirements_in?: Maybe<Array<Scalars["String"]>>;
  requirements_not_in?: Maybe<Array<Scalars["String"]>>;
  requirements_lt?: Maybe<Scalars["String"]>;
  requirements_lte?: Maybe<Scalars["String"]>;
  requirements_gt?: Maybe<Scalars["String"]>;
  requirements_gte?: Maybe<Scalars["String"]>;
  requirements_contains?: Maybe<Scalars["String"]>;
  requirements_not_contains?: Maybe<Scalars["String"]>;
  requirements_starts_with?: Maybe<Scalars["String"]>;
  requirements_not_starts_with?: Maybe<Scalars["String"]>;
  requirements_ends_with?: Maybe<Scalars["String"]>;
  requirements_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<JobScalarWhereInput>>;
  OR?: Maybe<Array<JobScalarWhereInput>>;
  NOT?: Maybe<Array<JobScalarWhereInput>>;
};

export enum JobType {
  Draft = "DRAFT",
  Published = "PUBLISHED",
  Archived = "ARCHIVED"
}

export type JobUpdateInput = {
  workspace?: Maybe<WorkspaceUpdateOneRequiredWithoutJobsInput>;
  applications?: Maybe<ApplicationUpdateManyWithoutJobInput>;
  workflow?: Maybe<WorkflowUpdateOneRequiredWithoutJobsInput>;
  comments?: Maybe<CommentUpdateManyInput>;
  type?: Maybe<JobType>;
  department?: Maybe<Scalars["String"]>;
  locations?: Maybe<LocationUpdateManyInput>;
  name?: Maybe<Scalars["String"]>;
  excerpt?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
};

export type JobUpdateManyDataInput = {
  type?: Maybe<JobType>;
  department?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  excerpt?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
};

export type JobUpdateManyMutationInput = {
  type?: Maybe<JobType>;
  department?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  excerpt?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
};

export type JobUpdateManyWithoutWorkflowInput = {
  create?: Maybe<Array<JobCreateWithoutWorkflowInput>>;
  delete?: Maybe<Array<JobWhereUniqueInput>>;
  connect?: Maybe<Array<JobWhereUniqueInput>>;
  set?: Maybe<Array<JobWhereUniqueInput>>;
  disconnect?: Maybe<Array<JobWhereUniqueInput>>;
  update?: Maybe<Array<JobUpdateWithWhereUniqueWithoutWorkflowInput>>;
  upsert?: Maybe<Array<JobUpsertWithWhereUniqueWithoutWorkflowInput>>;
  deleteMany?: Maybe<Array<JobScalarWhereInput>>;
  updateMany?: Maybe<Array<JobUpdateManyWithWhereNestedInput>>;
};

export type JobUpdateManyWithWhereNestedInput = {
  where: JobScalarWhereInput;
  data: JobUpdateManyDataInput;
};

export type JobUpdateOneRequiredWithoutApplicationsInput = {
  create?: Maybe<JobCreateWithoutApplicationsInput>;
  update?: Maybe<JobUpdateWithoutApplicationsDataInput>;
  upsert?: Maybe<JobUpsertWithoutApplicationsInput>;
  connect?: Maybe<JobWhereUniqueInput>;
};

export type JobUpdateWithoutApplicationsDataInput = {
  workspace?: Maybe<WorkspaceUpdateOneRequiredWithoutJobsInput>;
  workflow?: Maybe<WorkflowUpdateOneRequiredWithoutJobsInput>;
  comments?: Maybe<CommentUpdateManyInput>;
  type?: Maybe<JobType>;
  department?: Maybe<Scalars["String"]>;
  locations?: Maybe<LocationUpdateManyInput>;
  name?: Maybe<Scalars["String"]>;
  excerpt?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
};

export type JobUpdateWithoutWorkflowDataInput = {
  workspace?: Maybe<WorkspaceUpdateOneRequiredWithoutJobsInput>;
  applications?: Maybe<ApplicationUpdateManyWithoutJobInput>;
  comments?: Maybe<CommentUpdateManyInput>;
  type?: Maybe<JobType>;
  department?: Maybe<Scalars["String"]>;
  locations?: Maybe<LocationUpdateManyInput>;
  name?: Maybe<Scalars["String"]>;
  excerpt?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
};

export type JobUpdateWithWhereUniqueWithoutWorkflowInput = {
  where: JobWhereUniqueInput;
  data: JobUpdateWithoutWorkflowDataInput;
};

export type JobUpsertWithoutApplicationsInput = {
  update: JobUpdateWithoutApplicationsDataInput;
  create: JobCreateWithoutApplicationsInput;
};

export type JobUpsertWithWhereUniqueWithoutWorkflowInput = {
  where: JobWhereUniqueInput;
  update: JobUpdateWithoutWorkflowDataInput;
  create: JobCreateWithoutWorkflowInput;
};

export type JobWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  workspace?: Maybe<WorkspaceWhereInput>;
  applications_every?: Maybe<ApplicationWhereInput>;
  applications_some?: Maybe<ApplicationWhereInput>;
  applications_none?: Maybe<ApplicationWhereInput>;
  workflow?: Maybe<WorkflowWhereInput>;
  comments_every?: Maybe<CommentWhereInput>;
  comments_some?: Maybe<CommentWhereInput>;
  comments_none?: Maybe<CommentWhereInput>;
  type?: Maybe<JobType>;
  type_not?: Maybe<JobType>;
  type_in?: Maybe<Array<JobType>>;
  type_not_in?: Maybe<Array<JobType>>;
  department?: Maybe<Scalars["String"]>;
  department_not?: Maybe<Scalars["String"]>;
  department_in?: Maybe<Array<Scalars["String"]>>;
  department_not_in?: Maybe<Array<Scalars["String"]>>;
  department_lt?: Maybe<Scalars["String"]>;
  department_lte?: Maybe<Scalars["String"]>;
  department_gt?: Maybe<Scalars["String"]>;
  department_gte?: Maybe<Scalars["String"]>;
  department_contains?: Maybe<Scalars["String"]>;
  department_not_contains?: Maybe<Scalars["String"]>;
  department_starts_with?: Maybe<Scalars["String"]>;
  department_not_starts_with?: Maybe<Scalars["String"]>;
  department_ends_with?: Maybe<Scalars["String"]>;
  department_not_ends_with?: Maybe<Scalars["String"]>;
  locations_every?: Maybe<LocationWhereInput>;
  locations_some?: Maybe<LocationWhereInput>;
  locations_none?: Maybe<LocationWhereInput>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  excerpt?: Maybe<Scalars["String"]>;
  excerpt_not?: Maybe<Scalars["String"]>;
  excerpt_in?: Maybe<Array<Scalars["String"]>>;
  excerpt_not_in?: Maybe<Array<Scalars["String"]>>;
  excerpt_lt?: Maybe<Scalars["String"]>;
  excerpt_lte?: Maybe<Scalars["String"]>;
  excerpt_gt?: Maybe<Scalars["String"]>;
  excerpt_gte?: Maybe<Scalars["String"]>;
  excerpt_contains?: Maybe<Scalars["String"]>;
  excerpt_not_contains?: Maybe<Scalars["String"]>;
  excerpt_starts_with?: Maybe<Scalars["String"]>;
  excerpt_not_starts_with?: Maybe<Scalars["String"]>;
  excerpt_ends_with?: Maybe<Scalars["String"]>;
  excerpt_not_ends_with?: Maybe<Scalars["String"]>;
  companyDescription?: Maybe<Scalars["String"]>;
  companyDescription_not?: Maybe<Scalars["String"]>;
  companyDescription_in?: Maybe<Array<Scalars["String"]>>;
  companyDescription_not_in?: Maybe<Array<Scalars["String"]>>;
  companyDescription_lt?: Maybe<Scalars["String"]>;
  companyDescription_lte?: Maybe<Scalars["String"]>;
  companyDescription_gt?: Maybe<Scalars["String"]>;
  companyDescription_gte?: Maybe<Scalars["String"]>;
  companyDescription_contains?: Maybe<Scalars["String"]>;
  companyDescription_not_contains?: Maybe<Scalars["String"]>;
  companyDescription_starts_with?: Maybe<Scalars["String"]>;
  companyDescription_not_starts_with?: Maybe<Scalars["String"]>;
  companyDescription_ends_with?: Maybe<Scalars["String"]>;
  companyDescription_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  requirements?: Maybe<Scalars["String"]>;
  requirements_not?: Maybe<Scalars["String"]>;
  requirements_in?: Maybe<Array<Scalars["String"]>>;
  requirements_not_in?: Maybe<Array<Scalars["String"]>>;
  requirements_lt?: Maybe<Scalars["String"]>;
  requirements_lte?: Maybe<Scalars["String"]>;
  requirements_gt?: Maybe<Scalars["String"]>;
  requirements_gte?: Maybe<Scalars["String"]>;
  requirements_contains?: Maybe<Scalars["String"]>;
  requirements_not_contains?: Maybe<Scalars["String"]>;
  requirements_starts_with?: Maybe<Scalars["String"]>;
  requirements_not_starts_with?: Maybe<Scalars["String"]>;
  requirements_ends_with?: Maybe<Scalars["String"]>;
  requirements_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<JobWhereInput>>;
  OR?: Maybe<Array<JobWhereInput>>;
  NOT?: Maybe<Array<JobWhereInput>>;
};

export type JobWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Location = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  country: Scalars["String"];
  region?: Maybe<Scalars["String"]>;
  city: Scalars["String"];
  zip?: Maybe<Scalars["String"]>;
};

export type LocationCreateInput = {
  country: Scalars["String"];
  region?: Maybe<Scalars["String"]>;
  city: Scalars["String"];
  zip?: Maybe<Scalars["String"]>;
};

export type LocationCreateManyInput = {
  create?: Maybe<Array<LocationCreateInput>>;
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
};

export enum LocationOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  CountryAsc = "country_ASC",
  CountryDesc = "country_DESC",
  RegionAsc = "region_ASC",
  RegionDesc = "region_DESC",
  CityAsc = "city_ASC",
  CityDesc = "city_DESC",
  ZipAsc = "zip_ASC",
  ZipDesc = "zip_DESC"
}

export type LocationScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  country?: Maybe<Scalars["String"]>;
  country_not?: Maybe<Scalars["String"]>;
  country_in?: Maybe<Array<Scalars["String"]>>;
  country_not_in?: Maybe<Array<Scalars["String"]>>;
  country_lt?: Maybe<Scalars["String"]>;
  country_lte?: Maybe<Scalars["String"]>;
  country_gt?: Maybe<Scalars["String"]>;
  country_gte?: Maybe<Scalars["String"]>;
  country_contains?: Maybe<Scalars["String"]>;
  country_not_contains?: Maybe<Scalars["String"]>;
  country_starts_with?: Maybe<Scalars["String"]>;
  country_not_starts_with?: Maybe<Scalars["String"]>;
  country_ends_with?: Maybe<Scalars["String"]>;
  country_not_ends_with?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  region_not?: Maybe<Scalars["String"]>;
  region_in?: Maybe<Array<Scalars["String"]>>;
  region_not_in?: Maybe<Array<Scalars["String"]>>;
  region_lt?: Maybe<Scalars["String"]>;
  region_lte?: Maybe<Scalars["String"]>;
  region_gt?: Maybe<Scalars["String"]>;
  region_gte?: Maybe<Scalars["String"]>;
  region_contains?: Maybe<Scalars["String"]>;
  region_not_contains?: Maybe<Scalars["String"]>;
  region_starts_with?: Maybe<Scalars["String"]>;
  region_not_starts_with?: Maybe<Scalars["String"]>;
  region_ends_with?: Maybe<Scalars["String"]>;
  region_not_ends_with?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  city_not?: Maybe<Scalars["String"]>;
  city_in?: Maybe<Array<Scalars["String"]>>;
  city_not_in?: Maybe<Array<Scalars["String"]>>;
  city_lt?: Maybe<Scalars["String"]>;
  city_lte?: Maybe<Scalars["String"]>;
  city_gt?: Maybe<Scalars["String"]>;
  city_gte?: Maybe<Scalars["String"]>;
  city_contains?: Maybe<Scalars["String"]>;
  city_not_contains?: Maybe<Scalars["String"]>;
  city_starts_with?: Maybe<Scalars["String"]>;
  city_not_starts_with?: Maybe<Scalars["String"]>;
  city_ends_with?: Maybe<Scalars["String"]>;
  city_not_ends_with?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
  zip_not?: Maybe<Scalars["String"]>;
  zip_in?: Maybe<Array<Scalars["String"]>>;
  zip_not_in?: Maybe<Array<Scalars["String"]>>;
  zip_lt?: Maybe<Scalars["String"]>;
  zip_lte?: Maybe<Scalars["String"]>;
  zip_gt?: Maybe<Scalars["String"]>;
  zip_gte?: Maybe<Scalars["String"]>;
  zip_contains?: Maybe<Scalars["String"]>;
  zip_not_contains?: Maybe<Scalars["String"]>;
  zip_starts_with?: Maybe<Scalars["String"]>;
  zip_not_starts_with?: Maybe<Scalars["String"]>;
  zip_ends_with?: Maybe<Scalars["String"]>;
  zip_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<LocationScalarWhereInput>>;
  OR?: Maybe<Array<LocationScalarWhereInput>>;
  NOT?: Maybe<Array<LocationScalarWhereInput>>;
};

export type LocationUpdateDataInput = {
  country?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
};

export type LocationUpdateManyDataInput = {
  country?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
};

export type LocationUpdateManyInput = {
  create?: Maybe<Array<LocationCreateInput>>;
  update?: Maybe<Array<LocationUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<LocationUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<LocationWhereUniqueInput>>;
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
  set?: Maybe<Array<LocationWhereUniqueInput>>;
  disconnect?: Maybe<Array<LocationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<LocationScalarWhereInput>>;
  updateMany?: Maybe<Array<LocationUpdateManyWithWhereNestedInput>>;
};

export type LocationUpdateManyWithWhereNestedInput = {
  where: LocationScalarWhereInput;
  data: LocationUpdateManyDataInput;
};

export type LocationUpdateWithWhereUniqueNestedInput = {
  where: LocationWhereUniqueInput;
  data: LocationUpdateDataInput;
};

export type LocationUpsertWithWhereUniqueNestedInput = {
  where: LocationWhereUniqueInput;
  update: LocationUpdateDataInput;
  create: LocationCreateInput;
};

export type LocationWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  country?: Maybe<Scalars["String"]>;
  country_not?: Maybe<Scalars["String"]>;
  country_in?: Maybe<Array<Scalars["String"]>>;
  country_not_in?: Maybe<Array<Scalars["String"]>>;
  country_lt?: Maybe<Scalars["String"]>;
  country_lte?: Maybe<Scalars["String"]>;
  country_gt?: Maybe<Scalars["String"]>;
  country_gte?: Maybe<Scalars["String"]>;
  country_contains?: Maybe<Scalars["String"]>;
  country_not_contains?: Maybe<Scalars["String"]>;
  country_starts_with?: Maybe<Scalars["String"]>;
  country_not_starts_with?: Maybe<Scalars["String"]>;
  country_ends_with?: Maybe<Scalars["String"]>;
  country_not_ends_with?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  region_not?: Maybe<Scalars["String"]>;
  region_in?: Maybe<Array<Scalars["String"]>>;
  region_not_in?: Maybe<Array<Scalars["String"]>>;
  region_lt?: Maybe<Scalars["String"]>;
  region_lte?: Maybe<Scalars["String"]>;
  region_gt?: Maybe<Scalars["String"]>;
  region_gte?: Maybe<Scalars["String"]>;
  region_contains?: Maybe<Scalars["String"]>;
  region_not_contains?: Maybe<Scalars["String"]>;
  region_starts_with?: Maybe<Scalars["String"]>;
  region_not_starts_with?: Maybe<Scalars["String"]>;
  region_ends_with?: Maybe<Scalars["String"]>;
  region_not_ends_with?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  city_not?: Maybe<Scalars["String"]>;
  city_in?: Maybe<Array<Scalars["String"]>>;
  city_not_in?: Maybe<Array<Scalars["String"]>>;
  city_lt?: Maybe<Scalars["String"]>;
  city_lte?: Maybe<Scalars["String"]>;
  city_gt?: Maybe<Scalars["String"]>;
  city_gte?: Maybe<Scalars["String"]>;
  city_contains?: Maybe<Scalars["String"]>;
  city_not_contains?: Maybe<Scalars["String"]>;
  city_starts_with?: Maybe<Scalars["String"]>;
  city_not_starts_with?: Maybe<Scalars["String"]>;
  city_ends_with?: Maybe<Scalars["String"]>;
  city_not_ends_with?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
  zip_not?: Maybe<Scalars["String"]>;
  zip_in?: Maybe<Array<Scalars["String"]>>;
  zip_not_in?: Maybe<Array<Scalars["String"]>>;
  zip_lt?: Maybe<Scalars["String"]>;
  zip_lte?: Maybe<Scalars["String"]>;
  zip_gt?: Maybe<Scalars["String"]>;
  zip_gte?: Maybe<Scalars["String"]>;
  zip_contains?: Maybe<Scalars["String"]>;
  zip_not_contains?: Maybe<Scalars["String"]>;
  zip_starts_with?: Maybe<Scalars["String"]>;
  zip_not_starts_with?: Maybe<Scalars["String"]>;
  zip_ends_with?: Maybe<Scalars["String"]>;
  zip_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<LocationWhereInput>>;
  OR?: Maybe<Array<LocationWhereInput>>;
  NOT?: Maybe<Array<LocationWhereInput>>;
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  createApplication: Application;
  updateApplication?: Maybe<Application>;
  updateManyApplications: BatchPayload;
  upsertApplication: Application;
  deleteApplication?: Maybe<Application>;
  deleteManyApplications: BatchPayload;
  createCandidate: Candidate;
  updateCandidate?: Maybe<Candidate>;
  updateManyCandidates: BatchPayload;
  upsertCandidate: Candidate;
  deleteCandidate?: Maybe<Candidate>;
  deleteManyCandidates: BatchPayload;
  createJob: Job;
  updateJob?: Maybe<Job>;
  updateManyJobs: BatchPayload;
  upsertJob: Job;
  deleteJob?: Maybe<Job>;
  deleteManyJobs: BatchPayload;
  createSource: Source;
  updateSource?: Maybe<Source>;
  updateManySources: BatchPayload;
  upsertSource: Source;
  deleteSource?: Maybe<Source>;
  deleteManySources: BatchPayload;
  createTag: Tag;
  updateTag?: Maybe<Tag>;
  updateManyTags: BatchPayload;
  upsertTag: Tag;
  deleteTag?: Maybe<Tag>;
  deleteManyTags: BatchPayload;
  createTask: Task;
  updateTask?: Maybe<Task>;
  updateManyTasks: BatchPayload;
  upsertTask: Task;
  deleteTask?: Maybe<Task>;
  deleteManyTasks: BatchPayload;
  updateUser?: Maybe<User>;
  createWorkflow: Workflow;
  updateWorkflow?: Maybe<Workflow>;
  updateManyWorkflows: BatchPayload;
  upsertWorkflow: Workflow;
  deleteWorkflow?: Maybe<Workflow>;
  deleteManyWorkflows: BatchPayload;
};

export type MutationCreateApplicationArgs = {
  data: ApplicationCreateInput;
};

export type MutationUpdateApplicationArgs = {
  data: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};

export type MutationUpdateManyApplicationsArgs = {
  data: ApplicationUpdateManyMutationInput;
  where?: Maybe<ApplicationWhereInput>;
};

export type MutationUpsertApplicationArgs = {
  where: ApplicationWhereUniqueInput;
  create: ApplicationCreateInput;
  update: ApplicationUpdateInput;
};

export type MutationDeleteApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};

export type MutationDeleteManyApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>;
};

export type MutationCreateCandidateArgs = {
  data: CandidateCreateInput;
};

export type MutationUpdateCandidateArgs = {
  data: CandidateUpdateInput;
  where: CandidateWhereUniqueInput;
};

export type MutationUpdateManyCandidatesArgs = {
  data: CandidateUpdateManyMutationInput;
  where?: Maybe<CandidateWhereInput>;
};

export type MutationUpsertCandidateArgs = {
  where: CandidateWhereUniqueInput;
  create: CandidateCreateInput;
  update: CandidateUpdateInput;
};

export type MutationDeleteCandidateArgs = {
  where: CandidateWhereUniqueInput;
};

export type MutationDeleteManyCandidatesArgs = {
  where?: Maybe<CandidateWhereInput>;
};

export type MutationCreateJobArgs = {
  data: JobCreateInput;
};

export type MutationUpdateJobArgs = {
  data: JobUpdateInput;
  where: JobWhereUniqueInput;
};

export type MutationUpdateManyJobsArgs = {
  data: JobUpdateManyMutationInput;
  where?: Maybe<JobWhereInput>;
};

export type MutationUpsertJobArgs = {
  where: JobWhereUniqueInput;
  create: JobCreateInput;
  update: JobUpdateInput;
};

export type MutationDeleteJobArgs = {
  where: JobWhereUniqueInput;
};

export type MutationDeleteManyJobsArgs = {
  where?: Maybe<JobWhereInput>;
};

export type MutationCreateSourceArgs = {
  data: SourceCreateInput;
};

export type MutationUpdateSourceArgs = {
  data: SourceUpdateInput;
  where: SourceWhereUniqueInput;
};

export type MutationUpdateManySourcesArgs = {
  data: SourceUpdateManyMutationInput;
  where?: Maybe<SourceWhereInput>;
};

export type MutationUpsertSourceArgs = {
  where: SourceWhereUniqueInput;
  create: SourceCreateInput;
  update: SourceUpdateInput;
};

export type MutationDeleteSourceArgs = {
  where: SourceWhereUniqueInput;
};

export type MutationDeleteManySourcesArgs = {
  where?: Maybe<SourceWhereInput>;
};

export type MutationCreateTagArgs = {
  data: TagCreateInput;
};

export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type MutationUpdateManyTagsArgs = {
  data: TagUpdateManyMutationInput;
  where?: Maybe<TagWhereInput>;
};

export type MutationUpsertTagArgs = {
  where: TagWhereUniqueInput;
  create: TagCreateInput;
  update: TagUpdateInput;
};

export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};

export type MutationDeleteManyTagsArgs = {
  where?: Maybe<TagWhereInput>;
};

export type MutationCreateTaskArgs = {
  data: TaskCreateInput;
};

export type MutationUpdateTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};

export type MutationUpdateManyTasksArgs = {
  data: TaskUpdateManyMutationInput;
  where?: Maybe<TaskWhereInput>;
};

export type MutationUpsertTaskArgs = {
  where: TaskWhereUniqueInput;
  create: TaskCreateInput;
  update: TaskUpdateInput;
};

export type MutationDeleteTaskArgs = {
  where: TaskWhereUniqueInput;
};

export type MutationDeleteManyTasksArgs = {
  where?: Maybe<TaskWhereInput>;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationCreateWorkflowArgs = {
  data: WorkflowCreateInput;
};

export type MutationUpdateWorkflowArgs = {
  data: WorkflowUpdateInput;
  where: WorkflowWhereUniqueInput;
};

export type MutationUpdateManyWorkflowsArgs = {
  data: WorkflowUpdateManyMutationInput;
  where?: Maybe<WorkflowWhereInput>;
};

export type MutationUpsertWorkflowArgs = {
  where: WorkflowWhereUniqueInput;
  create: WorkflowCreateInput;
  update: WorkflowUpdateInput;
};

export type MutationDeleteWorkflowArgs = {
  where: WorkflowWhereUniqueInput;
};

export type MutationDeleteManyWorkflowsArgs = {
  where?: Maybe<WorkflowWhereInput>;
};

export type PageInfo = {
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  application?: Maybe<Application>;
  applications: Array<Maybe<Application>>;
  applicationsConnection: ApplicationConnection;
  candidate?: Maybe<Candidate>;
  candidates: Array<Maybe<Candidate>>;
  candidatesConnection: CandidateConnection;
  job?: Maybe<Job>;
  jobs: Array<Maybe<Job>>;
  jobsConnection: JobConnection;
  source?: Maybe<Source>;
  sources: Array<Maybe<Source>>;
  sourcesConnection: SourceConnection;
  tag?: Maybe<Tag>;
  tags: Array<Maybe<Tag>>;
  tagsConnection: TagConnection;
  task?: Maybe<Task>;
  tasks: Array<Maybe<Task>>;
  tasksConnection: TaskConnection;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  usersConnection: UserConnection;
  workflow?: Maybe<Workflow>;
  workflows: Array<Maybe<Workflow>>;
  workflowsConnection: WorkflowConnection;
};

export type QueryApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};

export type QueryApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>;
  orderBy?: Maybe<ApplicationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryApplicationsConnectionArgs = {
  where?: Maybe<ApplicationWhereInput>;
  orderBy?: Maybe<ApplicationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryCandidateArgs = {
  where: CandidateWhereUniqueInput;
};

export type QueryCandidatesArgs = {
  where?: Maybe<CandidateWhereInput>;
  orderBy?: Maybe<CandidateOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryCandidatesConnectionArgs = {
  where?: Maybe<CandidateWhereInput>;
  orderBy?: Maybe<CandidateOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryJobArgs = {
  where: JobWhereUniqueInput;
};

export type QueryJobsArgs = {
  where?: Maybe<JobWhereInput>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryJobsConnectionArgs = {
  where?: Maybe<JobWhereInput>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QuerySourceArgs = {
  where: SourceWhereUniqueInput;
};

export type QuerySourcesArgs = {
  where?: Maybe<SourceWhereInput>;
  orderBy?: Maybe<SourceOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QuerySourcesConnectionArgs = {
  where?: Maybe<SourceWhereInput>;
  orderBy?: Maybe<SourceOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};

export type QueryTagsArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryTagsConnectionArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};

export type QueryTasksArgs = {
  where?: Maybe<TaskWhereInput>;
  orderBy?: Maybe<TaskOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryTasksConnectionArgs = {
  where?: Maybe<TaskWhereInput>;
  orderBy?: Maybe<TaskOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryWorkflowArgs = {
  where: WorkflowWhereUniqueInput;
};

export type QueryWorkflowsArgs = {
  where?: Maybe<WorkflowWhereInput>;
  orderBy?: Maybe<WorkflowOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryWorkflowsConnectionArgs = {
  where?: Maybe<WorkflowWhereInput>;
  orderBy?: Maybe<WorkflowOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type RefreshInput = {
  token: Scalars["String"];
};

export type Review = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  fields?: Maybe<Array<Field>>;
};

export type ReviewFieldsArgs = {
  where?: Maybe<FieldWhereInput>;
  orderBy?: Maybe<FieldOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type ReviewCreateInput = {
  name: Scalars["String"];
  fields?: Maybe<FieldCreateManyInput>;
};

export type ReviewCreateManyInput = {
  create?: Maybe<Array<ReviewCreateInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
};

export type ReviewCreateOneInput = {
  create?: Maybe<ReviewCreateInput>;
  connect?: Maybe<ReviewWhereUniqueInput>;
};

export type ReviewInstance = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  prototype?: Maybe<Review>;
  fields?: Maybe<Array<FieldInstance>>;
  createdBy: User;
  rating?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
};

export type ReviewInstanceFieldsArgs = {
  where?: Maybe<FieldInstanceWhereInput>;
  orderBy?: Maybe<FieldInstanceOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type ReviewInstanceCreateInput = {
  prototype?: Maybe<ReviewCreateOneInput>;
  fields?: Maybe<FieldInstanceCreateManyInput>;
  createdBy: UserCreateOneInput;
  rating?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
};

export type ReviewInstanceCreateManyInput = {
  create?: Maybe<Array<ReviewInstanceCreateInput>>;
  connect?: Maybe<Array<ReviewInstanceWhereUniqueInput>>;
};

export enum ReviewInstanceOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  RatingAsc = "rating_ASC",
  RatingDesc = "rating_DESC",
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC"
}

export type ReviewInstanceScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  rating?: Maybe<Scalars["Int"]>;
  rating_not?: Maybe<Scalars["Int"]>;
  rating_in?: Maybe<Array<Scalars["Int"]>>;
  rating_not_in?: Maybe<Array<Scalars["Int"]>>;
  rating_lt?: Maybe<Scalars["Int"]>;
  rating_lte?: Maybe<Scalars["Int"]>;
  rating_gt?: Maybe<Scalars["Int"]>;
  rating_gte?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  content_not?: Maybe<Scalars["String"]>;
  content_in?: Maybe<Array<Scalars["String"]>>;
  content_not_in?: Maybe<Array<Scalars["String"]>>;
  content_lt?: Maybe<Scalars["String"]>;
  content_lte?: Maybe<Scalars["String"]>;
  content_gt?: Maybe<Scalars["String"]>;
  content_gte?: Maybe<Scalars["String"]>;
  content_contains?: Maybe<Scalars["String"]>;
  content_not_contains?: Maybe<Scalars["String"]>;
  content_starts_with?: Maybe<Scalars["String"]>;
  content_not_starts_with?: Maybe<Scalars["String"]>;
  content_ends_with?: Maybe<Scalars["String"]>;
  content_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<ReviewInstanceScalarWhereInput>>;
  OR?: Maybe<Array<ReviewInstanceScalarWhereInput>>;
  NOT?: Maybe<Array<ReviewInstanceScalarWhereInput>>;
};

export type ReviewInstanceUpdateDataInput = {
  prototype?: Maybe<ReviewUpdateOneInput>;
  fields?: Maybe<FieldInstanceUpdateManyInput>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  rating?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
};

export type ReviewInstanceUpdateManyDataInput = {
  rating?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
};

export type ReviewInstanceUpdateManyInput = {
  create?: Maybe<Array<ReviewInstanceCreateInput>>;
  update?: Maybe<Array<ReviewInstanceUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<ReviewInstanceUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<ReviewInstanceWhereUniqueInput>>;
  connect?: Maybe<Array<ReviewInstanceWhereUniqueInput>>;
  set?: Maybe<Array<ReviewInstanceWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReviewInstanceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReviewInstanceScalarWhereInput>>;
  updateMany?: Maybe<Array<ReviewInstanceUpdateManyWithWhereNestedInput>>;
};

export type ReviewInstanceUpdateManyWithWhereNestedInput = {
  where: ReviewInstanceScalarWhereInput;
  data: ReviewInstanceUpdateManyDataInput;
};

export type ReviewInstanceUpdateWithWhereUniqueNestedInput = {
  where: ReviewInstanceWhereUniqueInput;
  data: ReviewInstanceUpdateDataInput;
};

export type ReviewInstanceUpsertWithWhereUniqueNestedInput = {
  where: ReviewInstanceWhereUniqueInput;
  update: ReviewInstanceUpdateDataInput;
  create: ReviewInstanceCreateInput;
};

export type ReviewInstanceWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  prototype?: Maybe<ReviewWhereInput>;
  fields_every?: Maybe<FieldInstanceWhereInput>;
  fields_some?: Maybe<FieldInstanceWhereInput>;
  fields_none?: Maybe<FieldInstanceWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  rating?: Maybe<Scalars["Int"]>;
  rating_not?: Maybe<Scalars["Int"]>;
  rating_in?: Maybe<Array<Scalars["Int"]>>;
  rating_not_in?: Maybe<Array<Scalars["Int"]>>;
  rating_lt?: Maybe<Scalars["Int"]>;
  rating_lte?: Maybe<Scalars["Int"]>;
  rating_gt?: Maybe<Scalars["Int"]>;
  rating_gte?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  content_not?: Maybe<Scalars["String"]>;
  content_in?: Maybe<Array<Scalars["String"]>>;
  content_not_in?: Maybe<Array<Scalars["String"]>>;
  content_lt?: Maybe<Scalars["String"]>;
  content_lte?: Maybe<Scalars["String"]>;
  content_gt?: Maybe<Scalars["String"]>;
  content_gte?: Maybe<Scalars["String"]>;
  content_contains?: Maybe<Scalars["String"]>;
  content_not_contains?: Maybe<Scalars["String"]>;
  content_starts_with?: Maybe<Scalars["String"]>;
  content_not_starts_with?: Maybe<Scalars["String"]>;
  content_ends_with?: Maybe<Scalars["String"]>;
  content_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<ReviewInstanceWhereInput>>;
  OR?: Maybe<Array<ReviewInstanceWhereInput>>;
  NOT?: Maybe<Array<ReviewInstanceWhereInput>>;
};

export type ReviewInstanceWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export enum ReviewOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

export type ReviewScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<ReviewScalarWhereInput>>;
  OR?: Maybe<Array<ReviewScalarWhereInput>>;
  NOT?: Maybe<Array<ReviewScalarWhereInput>>;
};

export type ReviewUpdateDataInput = {
  name?: Maybe<Scalars["String"]>;
  fields?: Maybe<FieldUpdateManyInput>;
};

export type ReviewUpdateManyDataInput = {
  name?: Maybe<Scalars["String"]>;
};

export type ReviewUpdateManyInput = {
  create?: Maybe<Array<ReviewCreateInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
};

export type ReviewUpdateManyWithWhereNestedInput = {
  where: ReviewScalarWhereInput;
  data: ReviewUpdateManyDataInput;
};

export type ReviewUpdateOneInput = {
  create?: Maybe<ReviewCreateInput>;
  update?: Maybe<ReviewUpdateDataInput>;
  upsert?: Maybe<ReviewUpsertNestedInput>;
  delete?: Maybe<Scalars["Boolean"]>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  connect?: Maybe<ReviewWhereUniqueInput>;
};

export type ReviewUpdateWithWhereUniqueNestedInput = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateDataInput;
};

export type ReviewUpsertNestedInput = {
  update: ReviewUpdateDataInput;
  create: ReviewCreateInput;
};

export type ReviewUpsertWithWhereUniqueNestedInput = {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateDataInput;
  create: ReviewCreateInput;
};

export type ReviewWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  fields_every?: Maybe<FieldWhereInput>;
  fields_some?: Maybe<FieldWhereInput>;
  fields_none?: Maybe<FieldWhereInput>;
  AND?: Maybe<Array<ReviewWhereInput>>;
  OR?: Maybe<Array<ReviewWhereInput>>;
  NOT?: Maybe<Array<ReviewWhereInput>>;
};

export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type SignupInput = {
  password: Scalars["String"];
  username: Scalars["String"];
  inviteId: Scalars["ID"];
};

export type Source = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  label: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type SourceConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<SourceEdge>>;
  aggregate: AggregateSource;
};

export type SourceCreateInput = {
  label: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type SourceCreateManyInput = {
  create?: Maybe<Array<SourceCreateInput>>;
  connect?: Maybe<Array<SourceWhereUniqueInput>>;
};

export type SourceEdge = {
  node: Source;
  cursor: Scalars["String"];
};

export enum SourceOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  LabelAsc = "label_ASC",
  LabelDesc = "label_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC"
}

export type SourceScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  label?: Maybe<Scalars["String"]>;
  label_not?: Maybe<Scalars["String"]>;
  label_in?: Maybe<Array<Scalars["String"]>>;
  label_not_in?: Maybe<Array<Scalars["String"]>>;
  label_lt?: Maybe<Scalars["String"]>;
  label_lte?: Maybe<Scalars["String"]>;
  label_gt?: Maybe<Scalars["String"]>;
  label_gte?: Maybe<Scalars["String"]>;
  label_contains?: Maybe<Scalars["String"]>;
  label_not_contains?: Maybe<Scalars["String"]>;
  label_starts_with?: Maybe<Scalars["String"]>;
  label_not_starts_with?: Maybe<Scalars["String"]>;
  label_ends_with?: Maybe<Scalars["String"]>;
  label_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<SourceScalarWhereInput>>;
  OR?: Maybe<Array<SourceScalarWhereInput>>;
  NOT?: Maybe<Array<SourceScalarWhereInput>>;
};

export type SourceUpdateDataInput = {
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type SourceUpdateInput = {
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type SourceUpdateManyDataInput = {
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type SourceUpdateManyInput = {
  create?: Maybe<Array<SourceCreateInput>>;
  update?: Maybe<Array<SourceUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<SourceUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<SourceWhereUniqueInput>>;
  connect?: Maybe<Array<SourceWhereUniqueInput>>;
  set?: Maybe<Array<SourceWhereUniqueInput>>;
  disconnect?: Maybe<Array<SourceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SourceScalarWhereInput>>;
  updateMany?: Maybe<Array<SourceUpdateManyWithWhereNestedInput>>;
};

export type SourceUpdateManyMutationInput = {
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type SourceUpdateManyWithWhereNestedInput = {
  where: SourceScalarWhereInput;
  data: SourceUpdateManyDataInput;
};

export type SourceUpdateWithWhereUniqueNestedInput = {
  where: SourceWhereUniqueInput;
  data: SourceUpdateDataInput;
};

export type SourceUpsertWithWhereUniqueNestedInput = {
  where: SourceWhereUniqueInput;
  update: SourceUpdateDataInput;
  create: SourceCreateInput;
};

export type SourceWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  label?: Maybe<Scalars["String"]>;
  label_not?: Maybe<Scalars["String"]>;
  label_in?: Maybe<Array<Scalars["String"]>>;
  label_not_in?: Maybe<Array<Scalars["String"]>>;
  label_lt?: Maybe<Scalars["String"]>;
  label_lte?: Maybe<Scalars["String"]>;
  label_gt?: Maybe<Scalars["String"]>;
  label_gte?: Maybe<Scalars["String"]>;
  label_contains?: Maybe<Scalars["String"]>;
  label_not_contains?: Maybe<Scalars["String"]>;
  label_starts_with?: Maybe<Scalars["String"]>;
  label_not_starts_with?: Maybe<Scalars["String"]>;
  label_ends_with?: Maybe<Scalars["String"]>;
  label_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<SourceWhereInput>>;
  OR?: Maybe<Array<SourceWhereInput>>;
  NOT?: Maybe<Array<SourceWhereInput>>;
};

export type SourceWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Stage = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type: StageType;
  index: Scalars["Int"];
};

export type StageCreateInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type: StageType;
  index: Scalars["Int"];
};

export type StageCreateManyInput = {
  create?: Maybe<Array<StageCreateInput>>;
  connect?: Maybe<Array<StageWhereUniqueInput>>;
};

export type StageCreateOneInput = {
  create?: Maybe<StageCreateInput>;
  connect?: Maybe<StageWhereUniqueInput>;
};

export enum StageOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
  IndexAsc = "index_ASC",
  IndexDesc = "index_DESC"
}

export type StageScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  type?: Maybe<StageType>;
  type_not?: Maybe<StageType>;
  type_in?: Maybe<Array<StageType>>;
  type_not_in?: Maybe<Array<StageType>>;
  index?: Maybe<Scalars["Int"]>;
  index_not?: Maybe<Scalars["Int"]>;
  index_in?: Maybe<Array<Scalars["Int"]>>;
  index_not_in?: Maybe<Array<Scalars["Int"]>>;
  index_lt?: Maybe<Scalars["Int"]>;
  index_lte?: Maybe<Scalars["Int"]>;
  index_gt?: Maybe<Scalars["Int"]>;
  index_gte?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<StageScalarWhereInput>>;
  OR?: Maybe<Array<StageScalarWhereInput>>;
  NOT?: Maybe<Array<StageScalarWhereInput>>;
};

export enum StageType {
  New = "NEW",
  Pipeline = "PIPELINE",
  Final = "FINAL"
}

export type StageUpdateDataInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<StageType>;
  index?: Maybe<Scalars["Int"]>;
};

export type StageUpdateManyDataInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<StageType>;
  index?: Maybe<Scalars["Int"]>;
};

export type StageUpdateManyInput = {
  create?: Maybe<Array<StageCreateInput>>;
  update?: Maybe<Array<StageUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<StageUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<StageWhereUniqueInput>>;
  connect?: Maybe<Array<StageWhereUniqueInput>>;
  set?: Maybe<Array<StageWhereUniqueInput>>;
  disconnect?: Maybe<Array<StageWhereUniqueInput>>;
  deleteMany?: Maybe<Array<StageScalarWhereInput>>;
  updateMany?: Maybe<Array<StageUpdateManyWithWhereNestedInput>>;
};

export type StageUpdateManyWithWhereNestedInput = {
  where: StageScalarWhereInput;
  data: StageUpdateManyDataInput;
};

export type StageUpdateOneRequiredInput = {
  create?: Maybe<StageCreateInput>;
  update?: Maybe<StageUpdateDataInput>;
  upsert?: Maybe<StageUpsertNestedInput>;
  connect?: Maybe<StageWhereUniqueInput>;
};

export type StageUpdateWithWhereUniqueNestedInput = {
  where: StageWhereUniqueInput;
  data: StageUpdateDataInput;
};

export type StageUpsertNestedInput = {
  update: StageUpdateDataInput;
  create: StageCreateInput;
};

export type StageUpsertWithWhereUniqueNestedInput = {
  where: StageWhereUniqueInput;
  update: StageUpdateDataInput;
  create: StageCreateInput;
};

export type StageWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  type?: Maybe<StageType>;
  type_not?: Maybe<StageType>;
  type_in?: Maybe<Array<StageType>>;
  type_not_in?: Maybe<Array<StageType>>;
  index?: Maybe<Scalars["Int"]>;
  index_not?: Maybe<Scalars["Int"]>;
  index_in?: Maybe<Array<Scalars["Int"]>>;
  index_not_in?: Maybe<Array<Scalars["Int"]>>;
  index_lt?: Maybe<Scalars["Int"]>;
  index_lte?: Maybe<Scalars["Int"]>;
  index_gt?: Maybe<Scalars["Int"]>;
  index_gte?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<StageWhereInput>>;
  OR?: Maybe<Array<StageWhereInput>>;
  NOT?: Maybe<Array<StageWhereInput>>;
};

export type StageWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Tag = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  label: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type TagConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<TagEdge>>;
  aggregate: AggregateTag;
};

export type TagCreateInput = {
  label: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type TagCreateManyInput = {
  create?: Maybe<Array<TagCreateInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
};

export type TagEdge = {
  node: Tag;
  cursor: Scalars["String"];
};

export enum TagOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  LabelAsc = "label_ASC",
  LabelDesc = "label_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC"
}

export type TagScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  label?: Maybe<Scalars["String"]>;
  label_not?: Maybe<Scalars["String"]>;
  label_in?: Maybe<Array<Scalars["String"]>>;
  label_not_in?: Maybe<Array<Scalars["String"]>>;
  label_lt?: Maybe<Scalars["String"]>;
  label_lte?: Maybe<Scalars["String"]>;
  label_gt?: Maybe<Scalars["String"]>;
  label_gte?: Maybe<Scalars["String"]>;
  label_contains?: Maybe<Scalars["String"]>;
  label_not_contains?: Maybe<Scalars["String"]>;
  label_starts_with?: Maybe<Scalars["String"]>;
  label_not_starts_with?: Maybe<Scalars["String"]>;
  label_ends_with?: Maybe<Scalars["String"]>;
  label_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
};

export type TagUpdateDataInput = {
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type TagUpdateInput = {
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type TagUpdateManyDataInput = {
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type TagUpdateManyInput = {
  create?: Maybe<Array<TagCreateInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereNestedInput>>;
};

export type TagUpdateManyMutationInput = {
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type TagUpdateManyWithWhereNestedInput = {
  where: TagScalarWhereInput;
  data: TagUpdateManyDataInput;
};

export type TagUpdateWithWhereUniqueNestedInput = {
  where: TagWhereUniqueInput;
  data: TagUpdateDataInput;
};

export type TagUpsertWithWhereUniqueNestedInput = {
  where: TagWhereUniqueInput;
  update: TagUpdateDataInput;
  create: TagCreateInput;
};

export type TagWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  label?: Maybe<Scalars["String"]>;
  label_not?: Maybe<Scalars["String"]>;
  label_in?: Maybe<Array<Scalars["String"]>>;
  label_not_in?: Maybe<Array<Scalars["String"]>>;
  label_lt?: Maybe<Scalars["String"]>;
  label_lte?: Maybe<Scalars["String"]>;
  label_gt?: Maybe<Scalars["String"]>;
  label_gte?: Maybe<Scalars["String"]>;
  label_contains?: Maybe<Scalars["String"]>;
  label_not_contains?: Maybe<Scalars["String"]>;
  label_starts_with?: Maybe<Scalars["String"]>;
  label_not_starts_with?: Maybe<Scalars["String"]>;
  label_ends_with?: Maybe<Scalars["String"]>;
  label_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Task = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  owners?: Maybe<Array<User>>;
  candidate?: Maybe<Candidate>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
};

export type TaskOwnersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type TaskConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<TaskEdge>>;
  aggregate: AggregateTask;
};

export type TaskCreateInput = {
  owners?: Maybe<UserCreateManyWithoutTasksInput>;
  candidate?: Maybe<CandidateCreateOneWithoutTasksInput>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
};

export type TaskCreateManyWithoutCandidateInput = {
  create?: Maybe<Array<TaskCreateWithoutCandidateInput>>;
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
};

export type TaskCreateManyWithoutOwnersInput = {
  create?: Maybe<Array<TaskCreateWithoutOwnersInput>>;
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
};

export type TaskCreateWithoutCandidateInput = {
  owners?: Maybe<UserCreateManyWithoutTasksInput>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
};

export type TaskCreateWithoutOwnersInput = {
  candidate?: Maybe<CandidateCreateOneWithoutTasksInput>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
};

export type TaskEdge = {
  node: Task;
  cursor: Scalars["String"];
};

export enum TaskOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  DueAtAsc = "dueAt_ASC",
  DueAtDesc = "dueAt_DESC"
}

export type TaskScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Scalars["String"]>>;
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  title_lt?: Maybe<Scalars["String"]>;
  title_lte?: Maybe<Scalars["String"]>;
  title_gt?: Maybe<Scalars["String"]>;
  title_gte?: Maybe<Scalars["String"]>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  title_starts_with?: Maybe<Scalars["String"]>;
  title_not_starts_with?: Maybe<Scalars["String"]>;
  title_ends_with?: Maybe<Scalars["String"]>;
  title_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
  dueAt_not?: Maybe<Scalars["DateTime"]>;
  dueAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  dueAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  dueAt_lt?: Maybe<Scalars["DateTime"]>;
  dueAt_lte?: Maybe<Scalars["DateTime"]>;
  dueAt_gt?: Maybe<Scalars["DateTime"]>;
  dueAt_gte?: Maybe<Scalars["DateTime"]>;
  AND?: Maybe<Array<TaskScalarWhereInput>>;
  OR?: Maybe<Array<TaskScalarWhereInput>>;
  NOT?: Maybe<Array<TaskScalarWhereInput>>;
};

export type TaskUpdateInput = {
  owners?: Maybe<UserUpdateManyWithoutTasksInput>;
  candidate?: Maybe<CandidateUpdateOneWithoutTasksInput>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
};

export type TaskUpdateManyDataInput = {
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
};

export type TaskUpdateManyMutationInput = {
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
};

export type TaskUpdateManyWithoutCandidateInput = {
  create?: Maybe<Array<TaskCreateWithoutCandidateInput>>;
  delete?: Maybe<Array<TaskWhereUniqueInput>>;
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  set?: Maybe<Array<TaskWhereUniqueInput>>;
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>;
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutCandidateInput>>;
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutCandidateInput>>;
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>;
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereNestedInput>>;
};

export type TaskUpdateManyWithoutOwnersInput = {
  create?: Maybe<Array<TaskCreateWithoutOwnersInput>>;
  delete?: Maybe<Array<TaskWhereUniqueInput>>;
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  set?: Maybe<Array<TaskWhereUniqueInput>>;
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>;
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutOwnersInput>>;
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutOwnersInput>>;
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>;
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereNestedInput>>;
};

export type TaskUpdateManyWithWhereNestedInput = {
  where: TaskScalarWhereInput;
  data: TaskUpdateManyDataInput;
};

export type TaskUpdateWithoutCandidateDataInput = {
  owners?: Maybe<UserUpdateManyWithoutTasksInput>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
};

export type TaskUpdateWithoutOwnersDataInput = {
  candidate?: Maybe<CandidateUpdateOneWithoutTasksInput>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
};

export type TaskUpdateWithWhereUniqueWithoutCandidateInput = {
  where: TaskWhereUniqueInput;
  data: TaskUpdateWithoutCandidateDataInput;
};

export type TaskUpdateWithWhereUniqueWithoutOwnersInput = {
  where: TaskWhereUniqueInput;
  data: TaskUpdateWithoutOwnersDataInput;
};

export type TaskUpsertWithWhereUniqueWithoutCandidateInput = {
  where: TaskWhereUniqueInput;
  update: TaskUpdateWithoutCandidateDataInput;
  create: TaskCreateWithoutCandidateInput;
};

export type TaskUpsertWithWhereUniqueWithoutOwnersInput = {
  where: TaskWhereUniqueInput;
  update: TaskUpdateWithoutOwnersDataInput;
  create: TaskCreateWithoutOwnersInput;
};

export type TaskWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  owners_every?: Maybe<UserWhereInput>;
  owners_some?: Maybe<UserWhereInput>;
  owners_none?: Maybe<UserWhereInput>;
  candidate?: Maybe<CandidateWhereInput>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Scalars["String"]>>;
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  title_lt?: Maybe<Scalars["String"]>;
  title_lte?: Maybe<Scalars["String"]>;
  title_gt?: Maybe<Scalars["String"]>;
  title_gte?: Maybe<Scalars["String"]>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  title_starts_with?: Maybe<Scalars["String"]>;
  title_not_starts_with?: Maybe<Scalars["String"]>;
  title_ends_with?: Maybe<Scalars["String"]>;
  title_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  dueAt?: Maybe<Scalars["DateTime"]>;
  dueAt_not?: Maybe<Scalars["DateTime"]>;
  dueAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  dueAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  dueAt_lt?: Maybe<Scalars["DateTime"]>;
  dueAt_lte?: Maybe<Scalars["DateTime"]>;
  dueAt_gt?: Maybe<Scalars["DateTime"]>;
  dueAt_gte?: Maybe<Scalars["DateTime"]>;
  AND?: Maybe<Array<TaskWhereInput>>;
  OR?: Maybe<Array<TaskWhereInput>>;
  NOT?: Maybe<Array<TaskWhereInput>>;
};

export type TaskWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type User = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  settings?: Maybe<Scalars["Json"]>;
  tasks?: Maybe<Array<Task>>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  username: Scalars["String"];
  lastLogin?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  position?: Maybe<Scalars["String"]>;
  avatar?: Maybe<File>;
};

export type UserTasksArgs = {
  where?: Maybe<TaskWhereInput>;
  orderBy?: Maybe<TaskOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<UserEdge>>;
  aggregate: AggregateUser;
};

export type UserCreateInput = {
  settings?: Maybe<Scalars["Json"]>;
  tasks?: Maybe<TaskCreateManyWithoutOwnersInput>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  username: Scalars["String"];
  lastLogin?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  position?: Maybe<Scalars["String"]>;
  avatar?: Maybe<FileCreateOneInput>;
};

export type UserCreateManyInput = {
  create?: Maybe<Array<UserCreateInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateManyWithoutTasksInput = {
  create?: Maybe<Array<UserCreateWithoutTasksInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutTasksInput = {
  settings?: Maybe<Scalars["Json"]>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  username: Scalars["String"];
  lastLogin?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  position?: Maybe<Scalars["String"]>;
  avatar?: Maybe<FileCreateOneInput>;
};

export type UserEdge = {
  node: User;
  cursor: Scalars["String"];
};

export enum UserOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  SettingsAsc = "settings_ASC",
  SettingsDesc = "settings_DESC",
  FirstNameAsc = "firstName_ASC",
  FirstNameDesc = "firstName_DESC",
  LastNameAsc = "lastName_ASC",
  LastNameDesc = "lastName_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  UsernameAsc = "username_ASC",
  UsernameDesc = "username_DESC",
  LastLoginAsc = "lastLogin_ASC",
  LastLoginDesc = "lastLogin_DESC",
  DeletedAtAsc = "deletedAt_ASC",
  DeletedAtDesc = "deletedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC"
}

export type UserScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  firstName?: Maybe<Scalars["String"]>;
  firstName_not?: Maybe<Scalars["String"]>;
  firstName_in?: Maybe<Array<Scalars["String"]>>;
  firstName_not_in?: Maybe<Array<Scalars["String"]>>;
  firstName_lt?: Maybe<Scalars["String"]>;
  firstName_lte?: Maybe<Scalars["String"]>;
  firstName_gt?: Maybe<Scalars["String"]>;
  firstName_gte?: Maybe<Scalars["String"]>;
  firstName_contains?: Maybe<Scalars["String"]>;
  firstName_not_contains?: Maybe<Scalars["String"]>;
  firstName_starts_with?: Maybe<Scalars["String"]>;
  firstName_not_starts_with?: Maybe<Scalars["String"]>;
  firstName_ends_with?: Maybe<Scalars["String"]>;
  firstName_not_ends_with?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  lastName_not?: Maybe<Scalars["String"]>;
  lastName_in?: Maybe<Array<Scalars["String"]>>;
  lastName_not_in?: Maybe<Array<Scalars["String"]>>;
  lastName_lt?: Maybe<Scalars["String"]>;
  lastName_lte?: Maybe<Scalars["String"]>;
  lastName_gt?: Maybe<Scalars["String"]>;
  lastName_gte?: Maybe<Scalars["String"]>;
  lastName_contains?: Maybe<Scalars["String"]>;
  lastName_not_contains?: Maybe<Scalars["String"]>;
  lastName_starts_with?: Maybe<Scalars["String"]>;
  lastName_not_starts_with?: Maybe<Scalars["String"]>;
  lastName_ends_with?: Maybe<Scalars["String"]>;
  lastName_not_ends_with?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  email_not?: Maybe<Scalars["String"]>;
  email_in?: Maybe<Array<Scalars["String"]>>;
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  email_lt?: Maybe<Scalars["String"]>;
  email_lte?: Maybe<Scalars["String"]>;
  email_gt?: Maybe<Scalars["String"]>;
  email_gte?: Maybe<Scalars["String"]>;
  email_contains?: Maybe<Scalars["String"]>;
  email_not_contains?: Maybe<Scalars["String"]>;
  email_starts_with?: Maybe<Scalars["String"]>;
  email_not_starts_with?: Maybe<Scalars["String"]>;
  email_ends_with?: Maybe<Scalars["String"]>;
  email_not_ends_with?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  username_not?: Maybe<Scalars["String"]>;
  username_in?: Maybe<Array<Scalars["String"]>>;
  username_not_in?: Maybe<Array<Scalars["String"]>>;
  username_lt?: Maybe<Scalars["String"]>;
  username_lte?: Maybe<Scalars["String"]>;
  username_gt?: Maybe<Scalars["String"]>;
  username_gte?: Maybe<Scalars["String"]>;
  username_contains?: Maybe<Scalars["String"]>;
  username_not_contains?: Maybe<Scalars["String"]>;
  username_starts_with?: Maybe<Scalars["String"]>;
  username_not_starts_with?: Maybe<Scalars["String"]>;
  username_ends_with?: Maybe<Scalars["String"]>;
  username_not_ends_with?: Maybe<Scalars["String"]>;
  lastLogin?: Maybe<Scalars["DateTime"]>;
  lastLogin_not?: Maybe<Scalars["DateTime"]>;
  lastLogin_in?: Maybe<Array<Scalars["DateTime"]>>;
  lastLogin_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  lastLogin_lt?: Maybe<Scalars["DateTime"]>;
  lastLogin_lte?: Maybe<Scalars["DateTime"]>;
  lastLogin_gt?: Maybe<Scalars["DateTime"]>;
  lastLogin_gte?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedAt_not?: Maybe<Scalars["DateTime"]>;
  deletedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  deletedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  deletedAt_lt?: Maybe<Scalars["DateTime"]>;
  deletedAt_lte?: Maybe<Scalars["DateTime"]>;
  deletedAt_gt?: Maybe<Scalars["DateTime"]>;
  deletedAt_gte?: Maybe<Scalars["DateTime"]>;
  position?: Maybe<Scalars["String"]>;
  position_not?: Maybe<Scalars["String"]>;
  position_in?: Maybe<Array<Scalars["String"]>>;
  position_not_in?: Maybe<Array<Scalars["String"]>>;
  position_lt?: Maybe<Scalars["String"]>;
  position_lte?: Maybe<Scalars["String"]>;
  position_gt?: Maybe<Scalars["String"]>;
  position_gte?: Maybe<Scalars["String"]>;
  position_contains?: Maybe<Scalars["String"]>;
  position_not_contains?: Maybe<Scalars["String"]>;
  position_starts_with?: Maybe<Scalars["String"]>;
  position_not_starts_with?: Maybe<Scalars["String"]>;
  position_ends_with?: Maybe<Scalars["String"]>;
  position_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateDataInput = {
  settings?: Maybe<Scalars["Json"]>;
  tasks?: Maybe<TaskUpdateManyWithoutOwnersInput>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  lastLogin?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  position?: Maybe<Scalars["String"]>;
  avatar?: Maybe<FileUpdateOneInput>;
};

export type UserUpdateInput = {
  settings?: Maybe<Scalars["Json"]>;
  tasks?: Maybe<TaskUpdateManyWithoutOwnersInput>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  lastLogin?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  position?: Maybe<Scalars["String"]>;
  avatar?: Maybe<FileUpdateOneInput>;
};

export type UserUpdateManyDataInput = {
  settings?: Maybe<Scalars["Json"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  lastLogin?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  position?: Maybe<Scalars["String"]>;
};

export type UserUpdateManyInput = {
  create?: Maybe<Array<UserCreateInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
};

export type UserUpdateManyWithoutTasksInput = {
  create?: Maybe<Array<UserCreateWithoutTasksInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutTasksInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutTasksInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateWithoutTasksDataInput = {
  settings?: Maybe<Scalars["Json"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  lastLogin?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  position?: Maybe<Scalars["String"]>;
  avatar?: Maybe<FileUpdateOneInput>;
};

export type UserUpdateWithWhereUniqueNestedInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateDataInput;
};

export type UserUpdateWithWhereUniqueWithoutTasksInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutTasksDataInput;
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput;
  create: UserCreateInput;
};

export type UserUpsertWithWhereUniqueNestedInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateDataInput;
  create: UserCreateInput;
};

export type UserUpsertWithWhereUniqueWithoutTasksInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutTasksDataInput;
  create: UserCreateWithoutTasksInput;
};

export type UserWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  tasks_every?: Maybe<TaskWhereInput>;
  tasks_some?: Maybe<TaskWhereInput>;
  tasks_none?: Maybe<TaskWhereInput>;
  firstName?: Maybe<Scalars["String"]>;
  firstName_not?: Maybe<Scalars["String"]>;
  firstName_in?: Maybe<Array<Scalars["String"]>>;
  firstName_not_in?: Maybe<Array<Scalars["String"]>>;
  firstName_lt?: Maybe<Scalars["String"]>;
  firstName_lte?: Maybe<Scalars["String"]>;
  firstName_gt?: Maybe<Scalars["String"]>;
  firstName_gte?: Maybe<Scalars["String"]>;
  firstName_contains?: Maybe<Scalars["String"]>;
  firstName_not_contains?: Maybe<Scalars["String"]>;
  firstName_starts_with?: Maybe<Scalars["String"]>;
  firstName_not_starts_with?: Maybe<Scalars["String"]>;
  firstName_ends_with?: Maybe<Scalars["String"]>;
  firstName_not_ends_with?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  lastName_not?: Maybe<Scalars["String"]>;
  lastName_in?: Maybe<Array<Scalars["String"]>>;
  lastName_not_in?: Maybe<Array<Scalars["String"]>>;
  lastName_lt?: Maybe<Scalars["String"]>;
  lastName_lte?: Maybe<Scalars["String"]>;
  lastName_gt?: Maybe<Scalars["String"]>;
  lastName_gte?: Maybe<Scalars["String"]>;
  lastName_contains?: Maybe<Scalars["String"]>;
  lastName_not_contains?: Maybe<Scalars["String"]>;
  lastName_starts_with?: Maybe<Scalars["String"]>;
  lastName_not_starts_with?: Maybe<Scalars["String"]>;
  lastName_ends_with?: Maybe<Scalars["String"]>;
  lastName_not_ends_with?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  email_not?: Maybe<Scalars["String"]>;
  email_in?: Maybe<Array<Scalars["String"]>>;
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  email_lt?: Maybe<Scalars["String"]>;
  email_lte?: Maybe<Scalars["String"]>;
  email_gt?: Maybe<Scalars["String"]>;
  email_gte?: Maybe<Scalars["String"]>;
  email_contains?: Maybe<Scalars["String"]>;
  email_not_contains?: Maybe<Scalars["String"]>;
  email_starts_with?: Maybe<Scalars["String"]>;
  email_not_starts_with?: Maybe<Scalars["String"]>;
  email_ends_with?: Maybe<Scalars["String"]>;
  email_not_ends_with?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  username_not?: Maybe<Scalars["String"]>;
  username_in?: Maybe<Array<Scalars["String"]>>;
  username_not_in?: Maybe<Array<Scalars["String"]>>;
  username_lt?: Maybe<Scalars["String"]>;
  username_lte?: Maybe<Scalars["String"]>;
  username_gt?: Maybe<Scalars["String"]>;
  username_gte?: Maybe<Scalars["String"]>;
  username_contains?: Maybe<Scalars["String"]>;
  username_not_contains?: Maybe<Scalars["String"]>;
  username_starts_with?: Maybe<Scalars["String"]>;
  username_not_starts_with?: Maybe<Scalars["String"]>;
  username_ends_with?: Maybe<Scalars["String"]>;
  username_not_ends_with?: Maybe<Scalars["String"]>;
  lastLogin?: Maybe<Scalars["DateTime"]>;
  lastLogin_not?: Maybe<Scalars["DateTime"]>;
  lastLogin_in?: Maybe<Array<Scalars["DateTime"]>>;
  lastLogin_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  lastLogin_lt?: Maybe<Scalars["DateTime"]>;
  lastLogin_lte?: Maybe<Scalars["DateTime"]>;
  lastLogin_gt?: Maybe<Scalars["DateTime"]>;
  lastLogin_gte?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedAt_not?: Maybe<Scalars["DateTime"]>;
  deletedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  deletedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  deletedAt_lt?: Maybe<Scalars["DateTime"]>;
  deletedAt_lte?: Maybe<Scalars["DateTime"]>;
  deletedAt_gt?: Maybe<Scalars["DateTime"]>;
  deletedAt_gte?: Maybe<Scalars["DateTime"]>;
  position?: Maybe<Scalars["String"]>;
  position_not?: Maybe<Scalars["String"]>;
  position_in?: Maybe<Array<Scalars["String"]>>;
  position_not_in?: Maybe<Array<Scalars["String"]>>;
  position_lt?: Maybe<Scalars["String"]>;
  position_lte?: Maybe<Scalars["String"]>;
  position_gt?: Maybe<Scalars["String"]>;
  position_gte?: Maybe<Scalars["String"]>;
  position_contains?: Maybe<Scalars["String"]>;
  position_not_contains?: Maybe<Scalars["String"]>;
  position_starts_with?: Maybe<Scalars["String"]>;
  position_not_starts_with?: Maybe<Scalars["String"]>;
  position_ends_with?: Maybe<Scalars["String"]>;
  position_not_ends_with?: Maybe<Scalars["String"]>;
  avatar?: Maybe<FileWhereInput>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
};

export type WhereUniqueInput = {
  id: Scalars["ID"];
};

export type Workflow = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  jobs?: Maybe<Array<Job>>;
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  stages?: Maybe<Array<Stage>>;
  disqualifications?: Maybe<Array<Disqualification>>;
  fields?: Maybe<Array<Field>>;
  reviews?: Maybe<Array<Review>>;
};

export type WorkflowJobsArgs = {
  where?: Maybe<JobWhereInput>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkflowStagesArgs = {
  where?: Maybe<StageWhereInput>;
  orderBy?: Maybe<StageOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkflowDisqualificationsArgs = {
  where?: Maybe<DisqualificationWhereInput>;
  orderBy?: Maybe<DisqualificationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkflowFieldsArgs = {
  where?: Maybe<FieldWhereInput>;
  orderBy?: Maybe<FieldOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkflowReviewsArgs = {
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkflowConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<WorkflowEdge>>;
  aggregate: AggregateWorkflow;
};

export type WorkflowCreateInput = {
  jobs?: Maybe<JobCreateManyWithoutWorkflowInput>;
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  stages?: Maybe<StageCreateManyInput>;
  disqualifications?: Maybe<DisqualificationCreateManyInput>;
  fields?: Maybe<FieldCreateManyInput>;
  reviews?: Maybe<ReviewCreateManyInput>;
};

export type WorkflowCreateManyInput = {
  create?: Maybe<Array<WorkflowCreateInput>>;
  connect?: Maybe<Array<WorkflowWhereUniqueInput>>;
};

export type WorkflowCreateOneWithoutJobsInput = {
  create?: Maybe<WorkflowCreateWithoutJobsInput>;
  connect?: Maybe<WorkflowWhereUniqueInput>;
};

export type WorkflowCreateWithoutJobsInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  stages?: Maybe<StageCreateManyInput>;
  disqualifications?: Maybe<DisqualificationCreateManyInput>;
  fields?: Maybe<FieldCreateManyInput>;
  reviews?: Maybe<ReviewCreateManyInput>;
};

export type WorkflowEdge = {
  node: Workflow;
  cursor: Scalars["String"];
};

export enum WorkflowOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC"
}

export type WorkflowScalarWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<WorkflowScalarWhereInput>>;
  OR?: Maybe<Array<WorkflowScalarWhereInput>>;
  NOT?: Maybe<Array<WorkflowScalarWhereInput>>;
};

export type WorkflowUpdateDataInput = {
  jobs?: Maybe<JobUpdateManyWithoutWorkflowInput>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  stages?: Maybe<StageUpdateManyInput>;
  disqualifications?: Maybe<DisqualificationUpdateManyInput>;
  fields?: Maybe<FieldUpdateManyInput>;
  reviews?: Maybe<ReviewUpdateManyInput>;
};

export type WorkflowUpdateInput = {
  jobs?: Maybe<JobUpdateManyWithoutWorkflowInput>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  stages?: Maybe<StageUpdateManyInput>;
  disqualifications?: Maybe<DisqualificationUpdateManyInput>;
  fields?: Maybe<FieldUpdateManyInput>;
  reviews?: Maybe<ReviewUpdateManyInput>;
};

export type WorkflowUpdateManyDataInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type WorkflowUpdateManyInput = {
  create?: Maybe<Array<WorkflowCreateInput>>;
  update?: Maybe<Array<WorkflowUpdateWithWhereUniqueNestedInput>>;
  upsert?: Maybe<Array<WorkflowUpsertWithWhereUniqueNestedInput>>;
  delete?: Maybe<Array<WorkflowWhereUniqueInput>>;
  connect?: Maybe<Array<WorkflowWhereUniqueInput>>;
  set?: Maybe<Array<WorkflowWhereUniqueInput>>;
  disconnect?: Maybe<Array<WorkflowWhereUniqueInput>>;
  deleteMany?: Maybe<Array<WorkflowScalarWhereInput>>;
  updateMany?: Maybe<Array<WorkflowUpdateManyWithWhereNestedInput>>;
};

export type WorkflowUpdateManyMutationInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type WorkflowUpdateManyWithWhereNestedInput = {
  where: WorkflowScalarWhereInput;
  data: WorkflowUpdateManyDataInput;
};

export type WorkflowUpdateOneRequiredWithoutJobsInput = {
  create?: Maybe<WorkflowCreateWithoutJobsInput>;
  update?: Maybe<WorkflowUpdateWithoutJobsDataInput>;
  upsert?: Maybe<WorkflowUpsertWithoutJobsInput>;
  connect?: Maybe<WorkflowWhereUniqueInput>;
};

export type WorkflowUpdateWithoutJobsDataInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  stages?: Maybe<StageUpdateManyInput>;
  disqualifications?: Maybe<DisqualificationUpdateManyInput>;
  fields?: Maybe<FieldUpdateManyInput>;
  reviews?: Maybe<ReviewUpdateManyInput>;
};

export type WorkflowUpdateWithWhereUniqueNestedInput = {
  where: WorkflowWhereUniqueInput;
  data: WorkflowUpdateDataInput;
};

export type WorkflowUpsertWithoutJobsInput = {
  update: WorkflowUpdateWithoutJobsDataInput;
  create: WorkflowCreateWithoutJobsInput;
};

export type WorkflowUpsertWithWhereUniqueNestedInput = {
  where: WorkflowWhereUniqueInput;
  update: WorkflowUpdateDataInput;
  create: WorkflowCreateInput;
};

export type WorkflowWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  jobs_every?: Maybe<JobWhereInput>;
  jobs_some?: Maybe<JobWhereInput>;
  jobs_none?: Maybe<JobWhereInput>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  stages_every?: Maybe<StageWhereInput>;
  stages_some?: Maybe<StageWhereInput>;
  stages_none?: Maybe<StageWhereInput>;
  disqualifications_every?: Maybe<DisqualificationWhereInput>;
  disqualifications_some?: Maybe<DisqualificationWhereInput>;
  disqualifications_none?: Maybe<DisqualificationWhereInput>;
  fields_every?: Maybe<FieldWhereInput>;
  fields_some?: Maybe<FieldWhereInput>;
  fields_none?: Maybe<FieldWhereInput>;
  reviews_every?: Maybe<ReviewWhereInput>;
  reviews_some?: Maybe<ReviewWhereInput>;
  reviews_none?: Maybe<ReviewWhereInput>;
  AND?: Maybe<Array<WorkflowWhereInput>>;
  OR?: Maybe<Array<WorkflowWhereInput>>;
  NOT?: Maybe<Array<WorkflowWhereInput>>;
};

export type WorkflowWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Workspace = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  users?: Maybe<Array<User>>;
  jobs?: Maybe<Array<Job>>;
  candidates?: Maybe<Array<Candidate>>;
  settings?: Maybe<Scalars["Json"]>;
  workflows?: Maybe<Array<Workflow>>;
  invites?: Maybe<Array<Invite>>;
  name: Scalars["String"];
};

export type WorkspaceUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkspaceJobsArgs = {
  where?: Maybe<JobWhereInput>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkspaceCandidatesArgs = {
  where?: Maybe<CandidateWhereInput>;
  orderBy?: Maybe<CandidateOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkspaceWorkflowsArgs = {
  where?: Maybe<WorkflowWhereInput>;
  orderBy?: Maybe<WorkflowOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkspaceInvitesArgs = {
  where?: Maybe<InviteWhereInput>;
  orderBy?: Maybe<InviteOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkspaceCreateInput = {
  name: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  username: Scalars["String"];
  password: Scalars["String"];
};

export type WorkspaceCreateOneWithoutJobsInput = {
  create?: Maybe<WorkspaceCreateWithoutJobsInput>;
  connect?: Maybe<WorkspaceWhereUniqueInput>;
};

export type WorkspaceCreateWithoutJobsInput = {
  users?: Maybe<UserCreateManyInput>;
  candidates?: Maybe<CandidateCreateManyInput>;
  settings?: Maybe<Scalars["Json"]>;
  workflows?: Maybe<WorkflowCreateManyInput>;
  invites?: Maybe<InviteCreateManyInput>;
  name: Scalars["String"];
};

export type WorkspaceUpdateOneRequiredWithoutJobsInput = {
  create?: Maybe<WorkspaceCreateWithoutJobsInput>;
  update?: Maybe<WorkspaceUpdateWithoutJobsDataInput>;
  upsert?: Maybe<WorkspaceUpsertWithoutJobsInput>;
  connect?: Maybe<WorkspaceWhereUniqueInput>;
};

export type WorkspaceUpdateWithoutJobsDataInput = {
  users?: Maybe<UserUpdateManyInput>;
  candidates?: Maybe<CandidateUpdateManyInput>;
  settings?: Maybe<Scalars["Json"]>;
  workflows?: Maybe<WorkflowUpdateManyInput>;
  invites?: Maybe<InviteUpdateManyInput>;
  name?: Maybe<Scalars["String"]>;
};

export type WorkspaceUpsertWithoutJobsInput = {
  update: WorkspaceUpdateWithoutJobsDataInput;
  create: WorkspaceCreateWithoutJobsInput;
};

export type WorkspaceWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  users_every?: Maybe<UserWhereInput>;
  users_some?: Maybe<UserWhereInput>;
  users_none?: Maybe<UserWhereInput>;
  jobs_every?: Maybe<JobWhereInput>;
  jobs_some?: Maybe<JobWhereInput>;
  jobs_none?: Maybe<JobWhereInput>;
  candidates_every?: Maybe<CandidateWhereInput>;
  candidates_some?: Maybe<CandidateWhereInput>;
  candidates_none?: Maybe<CandidateWhereInput>;
  workflows_every?: Maybe<WorkflowWhereInput>;
  workflows_some?: Maybe<WorkflowWhereInput>;
  workflows_none?: Maybe<WorkflowWhereInput>;
  invites_every?: Maybe<InviteWhereInput>;
  invites_some?: Maybe<InviteWhereInput>;
  invites_none?: Maybe<InviteWhereInput>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<WorkspaceWhereInput>>;
  OR?: Maybe<Array<WorkspaceWhereInput>>;
  NOT?: Maybe<Array<WorkspaceWhereInput>>;
};

export type WorkspaceWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};
export type ApplicationFlatFragment = { __typename: "Application" } & Pick<
  Application,
  "createdAt" | "id" | "updatedAt" | "type"
>;

export type DisqualificationInstanceFlatFragment = {
  __typename: "DisqualificationInstance";
} & Pick<
  DisqualificationInstance,
  "id" | "createdAt" | "updatedAt" | "content"
>;

export type DisqualificationFlatFragment = {
  __typename: "Disqualification";
} & Pick<
  Disqualification,
  "id" | "createdAt" | "updatedAt" | "name" | "description"
>;

export type UserFlatFragment = { __typename: "User" } & Pick<
  User,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "settings"
  | "firstName"
  | "lastName"
  | "email"
  | "username"
  | "lastLogin"
  | "deletedAt"
  | "position"
>;

export type TaskFlatFragment = { __typename: "Task" } & Pick<
  Task,
  "id" | "createdAt" | "updatedAt" | "title" | "description" | "dueAt"
>;

export type CandidateFlatFragment = { __typename: "Candidate" } & Pick<
  Candidate,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "firstName"
  | "lastName"
  | "emails"
  | "phones"
  | "links"
  | "company"
  | "headline"
  | "position"
  | "resumesString"
  | "coverLettersString"
>;

export type FileFlatFragment = { __typename: "File" } & Pick<
  File,
  "id" | "createdAt" | "updatedAt" | "size" | "type" | "name" | "url"
>;

export type TagFlatFragment = { __typename: "Tag" } & Pick<
  Tag,
  "id" | "createdAt" | "updatedAt" | "label" | "description"
>;

export type SourceFlatFragment = { __typename: "Source" } & Pick<
  Source,
  "id" | "createdAt" | "updatedAt" | "label" | "description"
>;

export type FieldInstanceFlatFragment = { __typename: "FieldInstance" } & Pick<
  FieldInstance,
  "id" | "createdAt" | "updatedAt" | "value"
>;

export type FieldFlatFragment = { __typename: "Field" } & Pick<
  Field,
  "id" | "createdAt" | "updatedAt" | "type" | "label" | "description"
>;

export type CommentFlatFragment = { __typename: "Comment" } & Pick<
  Comment,
  "id" | "createdAt" | "updatedAt" | "content"
>;

export type StageFlatFragment = { __typename: "Stage" } & Pick<
  Stage,
  "id" | "createdAt" | "updatedAt" | "name" | "description" | "type" | "index"
>;

export type ReviewInstanceFlatFragment = {
  __typename: "ReviewInstance";
} & Pick<
  ReviewInstance,
  "id" | "createdAt" | "updatedAt" | "rating" | "content"
>;

export type ReviewFlatFragment = { __typename: "Review" } & Pick<
  Review,
  "id" | "createdAt" | "updatedAt" | "name"
>;

export type JobFlatFragment = { __typename: "Job" } & Pick<
  Job,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "type"
  | "department"
  | "name"
  | "excerpt"
  | "companyDescription"
  | "description"
  | "requirements"
>;

export type WorkspaceFlatFragment = { __typename: "Workspace" } & Pick<
  Workspace,
  "id" | "createdAt" | "updatedAt" | "settings" | "name"
>;

export type WorkflowFlatFragment = { __typename: "Workflow" } & Pick<
  Workflow,
  "id" | "createdAt" | "updatedAt" | "name" | "description"
>;

export type InviteFlatFragment = { __typename: "Invite" } & Pick<
  Invite,
  "id" | "createdAt" | "updatedAt" | "email" | "expireAt"
>;

export type LocationFlatFragment = { __typename: "Location" } & Pick<
  Location,
  "id" | "createdAt" | "updatedAt" | "country" | "region" | "city" | "zip"
>;

export type PageInfoFlatFragment = { __typename: "PageInfo" } & Pick<
  PageInfo,
  "hasNextPage" | "hasPreviousPage" | "startCursor" | "endCursor"
>;

export type ApplicationEdgeFlatFragment = {
  __typename: "ApplicationEdge";
} & Pick<ApplicationEdge, "cursor">;

export type AggregateApplicationFlatFragment = {
  __typename: "AggregateApplication";
} & Pick<AggregateApplication, "count">;

export type CandidateEdgeFlatFragment = { __typename: "CandidateEdge" } & Pick<
  CandidateEdge,
  "cursor"
>;

export type AggregateCandidateFlatFragment = {
  __typename: "AggregateCandidate";
} & Pick<AggregateCandidate, "count">;

export type JobEdgeFlatFragment = { __typename: "JobEdge" } & Pick<
  JobEdge,
  "cursor"
>;

export type AggregateJobFlatFragment = { __typename: "AggregateJob" } & Pick<
  AggregateJob,
  "count"
>;

export type SourceEdgeFlatFragment = { __typename: "SourceEdge" } & Pick<
  SourceEdge,
  "cursor"
>;

export type AggregateSourceFlatFragment = {
  __typename: "AggregateSource";
} & Pick<AggregateSource, "count">;

export type TagEdgeFlatFragment = { __typename: "TagEdge" } & Pick<
  TagEdge,
  "cursor"
>;

export type AggregateTagFlatFragment = { __typename: "AggregateTag" } & Pick<
  AggregateTag,
  "count"
>;

export type TaskEdgeFlatFragment = { __typename: "TaskEdge" } & Pick<
  TaskEdge,
  "cursor"
>;

export type AggregateTaskFlatFragment = { __typename: "AggregateTask" } & Pick<
  AggregateTask,
  "count"
>;

export type UserEdgeFlatFragment = { __typename: "UserEdge" } & Pick<
  UserEdge,
  "cursor"
>;

export type AggregateUserFlatFragment = { __typename: "AggregateUser" } & Pick<
  AggregateUser,
  "count"
>;

export type WorkflowEdgeFlatFragment = { __typename: "WorkflowEdge" } & Pick<
  WorkflowEdge,
  "cursor"
>;

export type AggregateWorkflowFlatFragment = {
  __typename: "AggregateWorkflow";
} & Pick<AggregateWorkflow, "count">;

export type BatchPayloadFlatFragment = { __typename: "BatchPayload" } & Pick<
  BatchPayload,
  "count"
>;

export type AccessPayloadFlatFragment = { __typename: "AccessPayload" } & Pick<
  AccessPayload,
  "token"
>;

export type AuthPayloadFlatFragment = { __typename: "AuthPayload" } & Pick<
  AuthPayload,
  "token" | "refresh"
>;

export type ApplicationFragment = { __typename: "Application" } & Pick<
  Application,
  "createdAt" | "id" | "updatedAt" | "type"
> & {
    disqualification: Maybe<DisqualificationInstanceFlatFragment>;
    stage: StageFlatFragment;
    reviews: Maybe<Array<ReviewInstanceFlatFragment>>;
    job: JobFlatFragment;
    candidate: CandidateFlatFragment;
  };

export type DisqualificationInstanceFragment = {
  __typename: "DisqualificationInstance";
} & Pick<
  DisqualificationInstance,
  "id" | "createdAt" | "updatedAt" | "content"
> & { prototype: DisqualificationFlatFragment; createdBy: UserFlatFragment };

export type DisqualificationFragment = {
  __typename: "Disqualification";
} & Pick<
  Disqualification,
  "id" | "createdAt" | "updatedAt" | "name" | "description"
>;

export type UserFragment = { __typename: "User" } & Pick<
  User,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "settings"
  | "firstName"
  | "lastName"
  | "email"
  | "username"
  | "lastLogin"
  | "deletedAt"
  | "position"
> & { tasks: Maybe<Array<TaskFlatFragment>>; avatar: Maybe<FileFlatFragment> };

export type TaskFragment = { __typename: "Task" } & Pick<
  Task,
  "id" | "createdAt" | "updatedAt" | "title" | "description" | "dueAt"
> & {
    owners: Maybe<Array<UserFlatFragment>>;
    candidate: Maybe<CandidateFlatFragment>;
  };

export type CandidateFragment = { __typename: "Candidate" } & Pick<
  Candidate,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "firstName"
  | "lastName"
  | "emails"
  | "phones"
  | "links"
  | "company"
  | "headline"
  | "position"
  | "resumesString"
  | "coverLettersString"
> & {
    avatar: Maybe<FileFlatFragment>;
    resumesFile: Maybe<Array<FileFlatFragment>>;
    coverLettersFile: Maybe<Array<FileFlatFragment>>;
    tags: Maybe<Array<TagFlatFragment>>;
    sources: Maybe<Array<SourceFlatFragment>>;
    fields: Maybe<Array<FieldInstanceFlatFragment>>;
    tasks: Maybe<Array<TaskFlatFragment>>;
    applications: Maybe<Array<ApplicationFlatFragment>>;
    comments: Maybe<Array<CommentFlatFragment>>;
  };

export type FileFragment = { __typename: "File" } & Pick<
  File,
  "id" | "createdAt" | "updatedAt" | "size" | "type" | "name" | "url"
>;

export type TagFragment = { __typename: "Tag" } & Pick<
  Tag,
  "id" | "createdAt" | "updatedAt" | "label" | "description"
>;

export type SourceFragment = { __typename: "Source" } & Pick<
  Source,
  "id" | "createdAt" | "updatedAt" | "label" | "description"
>;

export type FieldInstanceFragment = { __typename: "FieldInstance" } & Pick<
  FieldInstance,
  "id" | "createdAt" | "updatedAt" | "value"
> & { prototype: FieldFlatFragment };

export type FieldFragment = { __typename: "Field" } & Pick<
  Field,
  "id" | "createdAt" | "updatedAt" | "type" | "label" | "description"
>;

export type CommentFragment = { __typename: "Comment" } & Pick<
  Comment,
  "id" | "createdAt" | "updatedAt" | "content"
> & { createdBy: UserFlatFragment; parent: Maybe<CommentFlatFragment> };

export type StageFragment = { __typename: "Stage" } & Pick<
  Stage,
  "id" | "createdAt" | "updatedAt" | "name" | "description" | "type" | "index"
>;

export type ReviewInstanceFragment = { __typename: "ReviewInstance" } & Pick<
  ReviewInstance,
  "id" | "createdAt" | "updatedAt" | "rating" | "content"
> & {
    prototype: Maybe<ReviewFlatFragment>;
    fields: Maybe<Array<FieldInstanceFlatFragment>>;
    createdBy: UserFlatFragment;
  };

export type ReviewFragment = { __typename: "Review" } & Pick<
  Review,
  "id" | "createdAt" | "updatedAt" | "name"
> & { fields: Maybe<Array<FieldFlatFragment>> };

export type JobFragment = { __typename: "Job" } & Pick<
  Job,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "type"
  | "department"
  | "name"
  | "excerpt"
  | "companyDescription"
  | "description"
  | "requirements"
> & {
    workspace: WorkspaceFlatFragment;
    applications: Maybe<Array<ApplicationFlatFragment>>;
    workflow: WorkflowFlatFragment;
    comments: Maybe<Array<CommentFlatFragment>>;
    locations: Maybe<Array<LocationFlatFragment>>;
  };

export type WorkspaceFragment = { __typename: "Workspace" } & Pick<
  Workspace,
  "id" | "createdAt" | "updatedAt" | "settings" | "name"
> & {
    users: Maybe<Array<UserFlatFragment>>;
    jobs: Maybe<Array<JobFlatFragment>>;
    candidates: Maybe<Array<CandidateFlatFragment>>;
    workflows: Maybe<Array<WorkflowFlatFragment>>;
    invites: Maybe<Array<InviteFlatFragment>>;
  };

export type WorkflowFragment = { __typename: "Workflow" } & Pick<
  Workflow,
  "id" | "createdAt" | "updatedAt" | "name" | "description"
> & {
    jobs: Maybe<Array<JobFlatFragment>>;
    stages: Maybe<Array<StageFlatFragment>>;
    disqualifications: Maybe<Array<DisqualificationFlatFragment>>;
    fields: Maybe<Array<FieldFlatFragment>>;
    reviews: Maybe<Array<ReviewFlatFragment>>;
  };

export type InviteFragment = { __typename: "Invite" } & Pick<
  Invite,
  "id" | "createdAt" | "updatedAt" | "email" | "expireAt"
> & { invitedBy: UserFlatFragment };

export type LocationFragment = { __typename: "Location" } & Pick<
  Location,
  "id" | "createdAt" | "updatedAt" | "country" | "region" | "city" | "zip"
>;

export type ApplicationConnectionFragment = {
  __typename: "ApplicationConnection";
} & {
  pageInfo: PageInfoFlatFragment;
  edges: Array<Maybe<ApplicationEdgeFlatFragment>>;
  aggregate: AggregateApplicationFlatFragment;
};

export type PageInfoFragment = { __typename: "PageInfo" } & Pick<
  PageInfo,
  "hasNextPage" | "hasPreviousPage" | "startCursor" | "endCursor"
>;

export type ApplicationEdgeFragment = { __typename: "ApplicationEdge" } & Pick<
  ApplicationEdge,
  "cursor"
> & { node: ApplicationFlatFragment };

export type AggregateApplicationFragment = {
  __typename: "AggregateApplication";
} & Pick<AggregateApplication, "count">;

export type CandidateConnectionFragment = {
  __typename: "CandidateConnection";
} & {
  pageInfo: PageInfoFlatFragment;
  edges: Array<Maybe<CandidateEdgeFlatFragment>>;
  aggregate: AggregateCandidateFlatFragment;
};

export type CandidateEdgeFragment = { __typename: "CandidateEdge" } & Pick<
  CandidateEdge,
  "cursor"
> & { node: CandidateFlatFragment };

export type AggregateCandidateFragment = {
  __typename: "AggregateCandidate";
} & Pick<AggregateCandidate, "count">;

export type JobConnectionFragment = { __typename: "JobConnection" } & {
  pageInfo: PageInfoFlatFragment;
  edges: Array<Maybe<JobEdgeFlatFragment>>;
  aggregate: AggregateJobFlatFragment;
};

export type JobEdgeFragment = { __typename: "JobEdge" } & Pick<
  JobEdge,
  "cursor"
> & { node: JobFlatFragment };

export type AggregateJobFragment = { __typename: "AggregateJob" } & Pick<
  AggregateJob,
  "count"
>;

export type SourceConnectionFragment = { __typename: "SourceConnection" } & {
  pageInfo: PageInfoFlatFragment;
  edges: Array<Maybe<SourceEdgeFlatFragment>>;
  aggregate: AggregateSourceFlatFragment;
};

export type SourceEdgeFragment = { __typename: "SourceEdge" } & Pick<
  SourceEdge,
  "cursor"
> & { node: SourceFlatFragment };

export type AggregateSourceFragment = { __typename: "AggregateSource" } & Pick<
  AggregateSource,
  "count"
>;

export type TagConnectionFragment = { __typename: "TagConnection" } & {
  pageInfo: PageInfoFlatFragment;
  edges: Array<Maybe<TagEdgeFlatFragment>>;
  aggregate: AggregateTagFlatFragment;
};

export type TagEdgeFragment = { __typename: "TagEdge" } & Pick<
  TagEdge,
  "cursor"
> & { node: TagFlatFragment };

export type AggregateTagFragment = { __typename: "AggregateTag" } & Pick<
  AggregateTag,
  "count"
>;

export type TaskConnectionFragment = { __typename: "TaskConnection" } & {
  pageInfo: PageInfoFlatFragment;
  edges: Array<Maybe<TaskEdgeFlatFragment>>;
  aggregate: AggregateTaskFlatFragment;
};

export type TaskEdgeFragment = { __typename: "TaskEdge" } & Pick<
  TaskEdge,
  "cursor"
> & { node: TaskFlatFragment };

export type AggregateTaskFragment = { __typename: "AggregateTask" } & Pick<
  AggregateTask,
  "count"
>;

export type UserConnectionFragment = { __typename: "UserConnection" } & {
  pageInfo: PageInfoFlatFragment;
  edges: Array<Maybe<UserEdgeFlatFragment>>;
  aggregate: AggregateUserFlatFragment;
};

export type UserEdgeFragment = { __typename: "UserEdge" } & Pick<
  UserEdge,
  "cursor"
> & { node: UserFlatFragment };

export type AggregateUserFragment = { __typename: "AggregateUser" } & Pick<
  AggregateUser,
  "count"
>;

export type WorkflowConnectionFragment = {
  __typename: "WorkflowConnection";
} & {
  pageInfo: PageInfoFlatFragment;
  edges: Array<Maybe<WorkflowEdgeFlatFragment>>;
  aggregate: AggregateWorkflowFlatFragment;
};

export type WorkflowEdgeFragment = { __typename: "WorkflowEdge" } & Pick<
  WorkflowEdge,
  "cursor"
> & { node: WorkflowFlatFragment };

export type AggregateWorkflowFragment = {
  __typename: "AggregateWorkflow";
} & Pick<AggregateWorkflow, "count">;

export type BatchPayloadFragment = { __typename: "BatchPayload" } & Pick<
  BatchPayload,
  "count"
>;

export type AccessPayloadFragment = { __typename: "AccessPayload" } & Pick<
  AccessPayload,
  "token"
>;

export type AuthPayloadFragment = { __typename: "AuthPayload" } & Pick<
  AuthPayload,
  "token" | "refresh"
>;

export type ApplicationDeepFragment = { __typename: "Application" } & Pick<
  Application,
  "createdAt" | "id" | "updatedAt" | "type"
> & {
    disqualification: Maybe<DisqualificationInstanceFragment>;
    stage: StageFragment;
    reviews: Maybe<Array<ReviewInstanceFragment>>;
    job: JobFragment;
    candidate: CandidateFragment;
  };

export type DisqualificationInstanceDeepFragment = {
  __typename: "DisqualificationInstance";
} & Pick<
  DisqualificationInstance,
  "id" | "createdAt" | "updatedAt" | "content"
> & { prototype: DisqualificationFragment; createdBy: UserFragment };

export type DisqualificationDeepFragment = {
  __typename: "Disqualification";
} & Pick<
  Disqualification,
  "id" | "createdAt" | "updatedAt" | "name" | "description"
>;

export type UserDeepFragment = { __typename: "User" } & Pick<
  User,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "settings"
  | "firstName"
  | "lastName"
  | "email"
  | "username"
  | "lastLogin"
  | "deletedAt"
  | "position"
> & { tasks: Maybe<Array<TaskFragment>>; avatar: Maybe<FileFragment> };

export type TaskDeepFragment = { __typename: "Task" } & Pick<
  Task,
  "id" | "createdAt" | "updatedAt" | "title" | "description" | "dueAt"
> & { owners: Maybe<Array<UserFragment>>; candidate: Maybe<CandidateFragment> };

export type CandidateDeepFragment = { __typename: "Candidate" } & Pick<
  Candidate,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "firstName"
  | "lastName"
  | "emails"
  | "phones"
  | "links"
  | "company"
  | "headline"
  | "position"
  | "resumesString"
  | "coverLettersString"
> & {
    avatar: Maybe<FileFragment>;
    resumesFile: Maybe<Array<FileFragment>>;
    coverLettersFile: Maybe<Array<FileFragment>>;
    tags: Maybe<Array<TagFragment>>;
    sources: Maybe<Array<SourceFragment>>;
    fields: Maybe<Array<FieldInstanceFragment>>;
    tasks: Maybe<Array<TaskFragment>>;
    applications: Maybe<Array<ApplicationFragment>>;
    comments: Maybe<Array<CommentFragment>>;
  };

export type FileDeepFragment = { __typename: "File" } & Pick<
  File,
  "id" | "createdAt" | "updatedAt" | "size" | "type" | "name" | "url"
>;

export type TagDeepFragment = { __typename: "Tag" } & Pick<
  Tag,
  "id" | "createdAt" | "updatedAt" | "label" | "description"
>;

export type SourceDeepFragment = { __typename: "Source" } & Pick<
  Source,
  "id" | "createdAt" | "updatedAt" | "label" | "description"
>;

export type FieldInstanceDeepFragment = { __typename: "FieldInstance" } & Pick<
  FieldInstance,
  "id" | "createdAt" | "updatedAt" | "value"
> & { prototype: FieldFragment };

export type FieldDeepFragment = { __typename: "Field" } & Pick<
  Field,
  "id" | "createdAt" | "updatedAt" | "type" | "label" | "description"
>;

export type CommentDeepFragment = { __typename: "Comment" } & Pick<
  Comment,
  "id" | "createdAt" | "updatedAt" | "content"
> & { createdBy: UserFragment; parent: Maybe<CommentFragment> };

export type StageDeepFragment = { __typename: "Stage" } & Pick<
  Stage,
  "id" | "createdAt" | "updatedAt" | "name" | "description" | "type" | "index"
>;

export type ReviewInstanceDeepFragment = {
  __typename: "ReviewInstance";
} & Pick<
  ReviewInstance,
  "id" | "createdAt" | "updatedAt" | "rating" | "content"
> & {
    prototype: Maybe<ReviewFragment>;
    fields: Maybe<Array<FieldInstanceFragment>>;
    createdBy: UserFragment;
  };

export type ReviewDeepFragment = { __typename: "Review" } & Pick<
  Review,
  "id" | "createdAt" | "updatedAt" | "name"
> & { fields: Maybe<Array<FieldFragment>> };

export type JobDeepFragment = { __typename: "Job" } & Pick<
  Job,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "type"
  | "department"
  | "name"
  | "excerpt"
  | "companyDescription"
  | "description"
  | "requirements"
> & {
    workspace: WorkspaceFragment;
    applications: Maybe<Array<ApplicationFragment>>;
    workflow: WorkflowFragment;
    comments: Maybe<Array<CommentFragment>>;
    locations: Maybe<Array<LocationFragment>>;
  };

export type WorkspaceDeepFragment = { __typename: "Workspace" } & Pick<
  Workspace,
  "id" | "createdAt" | "updatedAt" | "settings" | "name"
> & {
    users: Maybe<Array<UserFragment>>;
    jobs: Maybe<Array<JobFragment>>;
    candidates: Maybe<Array<CandidateFragment>>;
    workflows: Maybe<Array<WorkflowFragment>>;
    invites: Maybe<Array<InviteFragment>>;
  };

export type WorkflowDeepFragment = { __typename: "Workflow" } & Pick<
  Workflow,
  "id" | "createdAt" | "updatedAt" | "name" | "description"
> & {
    jobs: Maybe<Array<JobFragment>>;
    stages: Maybe<Array<StageFragment>>;
    disqualifications: Maybe<Array<DisqualificationFragment>>;
    fields: Maybe<Array<FieldFragment>>;
    reviews: Maybe<Array<ReviewFragment>>;
  };

export type InviteDeepFragment = { __typename: "Invite" } & Pick<
  Invite,
  "id" | "createdAt" | "updatedAt" | "email" | "expireAt"
> & { invitedBy: UserFragment };

export type LocationDeepFragment = { __typename: "Location" } & Pick<
  Location,
  "id" | "createdAt" | "updatedAt" | "country" | "region" | "city" | "zip"
>;

export type ApplicationConnectionDeepFragment = {
  __typename: "ApplicationConnection";
} & {
  pageInfo: PageInfoFragment;
  edges: Array<Maybe<ApplicationEdgeFragment>>;
  aggregate: AggregateApplicationFragment;
};

export type PageInfoDeepFragment = { __typename: "PageInfo" } & Pick<
  PageInfo,
  "hasNextPage" | "hasPreviousPage" | "startCursor" | "endCursor"
>;

export type ApplicationEdgeDeepFragment = {
  __typename: "ApplicationEdge";
} & Pick<ApplicationEdge, "cursor"> & { node: ApplicationFragment };

export type AggregateApplicationDeepFragment = {
  __typename: "AggregateApplication";
} & Pick<AggregateApplication, "count">;

export type CandidateConnectionDeepFragment = {
  __typename: "CandidateConnection";
} & {
  pageInfo: PageInfoFragment;
  edges: Array<Maybe<CandidateEdgeFragment>>;
  aggregate: AggregateCandidateFragment;
};

export type CandidateEdgeDeepFragment = { __typename: "CandidateEdge" } & Pick<
  CandidateEdge,
  "cursor"
> & { node: CandidateFragment };

export type AggregateCandidateDeepFragment = {
  __typename: "AggregateCandidate";
} & Pick<AggregateCandidate, "count">;

export type JobConnectionDeepFragment = { __typename: "JobConnection" } & {
  pageInfo: PageInfoFragment;
  edges: Array<Maybe<JobEdgeFragment>>;
  aggregate: AggregateJobFragment;
};

export type JobEdgeDeepFragment = { __typename: "JobEdge" } & Pick<
  JobEdge,
  "cursor"
> & { node: JobFragment };

export type AggregateJobDeepFragment = { __typename: "AggregateJob" } & Pick<
  AggregateJob,
  "count"
>;

export type SourceConnectionDeepFragment = {
  __typename: "SourceConnection";
} & {
  pageInfo: PageInfoFragment;
  edges: Array<Maybe<SourceEdgeFragment>>;
  aggregate: AggregateSourceFragment;
};

export type SourceEdgeDeepFragment = { __typename: "SourceEdge" } & Pick<
  SourceEdge,
  "cursor"
> & { node: SourceFragment };

export type AggregateSourceDeepFragment = {
  __typename: "AggregateSource";
} & Pick<AggregateSource, "count">;

export type TagConnectionDeepFragment = { __typename: "TagConnection" } & {
  pageInfo: PageInfoFragment;
  edges: Array<Maybe<TagEdgeFragment>>;
  aggregate: AggregateTagFragment;
};

export type TagEdgeDeepFragment = { __typename: "TagEdge" } & Pick<
  TagEdge,
  "cursor"
> & { node: TagFragment };

export type AggregateTagDeepFragment = { __typename: "AggregateTag" } & Pick<
  AggregateTag,
  "count"
>;

export type TaskConnectionDeepFragment = { __typename: "TaskConnection" } & {
  pageInfo: PageInfoFragment;
  edges: Array<Maybe<TaskEdgeFragment>>;
  aggregate: AggregateTaskFragment;
};

export type TaskEdgeDeepFragment = { __typename: "TaskEdge" } & Pick<
  TaskEdge,
  "cursor"
> & { node: TaskFragment };

export type AggregateTaskDeepFragment = { __typename: "AggregateTask" } & Pick<
  AggregateTask,
  "count"
>;

export type UserConnectionDeepFragment = { __typename: "UserConnection" } & {
  pageInfo: PageInfoFragment;
  edges: Array<Maybe<UserEdgeFragment>>;
  aggregate: AggregateUserFragment;
};

export type UserEdgeDeepFragment = { __typename: "UserEdge" } & Pick<
  UserEdge,
  "cursor"
> & { node: UserFragment };

export type AggregateUserDeepFragment = { __typename: "AggregateUser" } & Pick<
  AggregateUser,
  "count"
>;

export type WorkflowConnectionDeepFragment = {
  __typename: "WorkflowConnection";
} & {
  pageInfo: PageInfoFragment;
  edges: Array<Maybe<WorkflowEdgeFragment>>;
  aggregate: AggregateWorkflowFragment;
};

export type WorkflowEdgeDeepFragment = { __typename: "WorkflowEdge" } & Pick<
  WorkflowEdge,
  "cursor"
> & { node: WorkflowFragment };

export type AggregateWorkflowDeepFragment = {
  __typename: "AggregateWorkflow";
} & Pick<AggregateWorkflow, "count">;

export type BatchPayloadDeepFragment = { __typename: "BatchPayload" } & Pick<
  BatchPayload,
  "count"
>;

export type AccessPayloadDeepFragment = { __typename: "AccessPayload" } & Pick<
  AccessPayload,
  "token"
>;

export type AuthPayloadDeepFragment = { __typename: "AuthPayload" } & Pick<
  AuthPayload,
  "token" | "refresh"
>;

export type ApplicationQueryVariables = {
  where: ApplicationWhereUniqueInput;
};

export type ApplicationQuery = { application: Maybe<ApplicationFragment> };

export type ApplicationsQueryVariables = {
  where?: Maybe<ApplicationWhereInput>;
  orderBy?: Maybe<ApplicationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type ApplicationsQuery = {
  applications: Array<Maybe<ApplicationFragment>>;
};

export type ApplicationsConnectionQueryVariables = {
  where?: Maybe<ApplicationWhereInput>;
  orderBy?: Maybe<ApplicationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type ApplicationsConnectionQuery = {
  applicationsConnection: ApplicationConnectionFragment;
};

export type CandidateQueryVariables = {
  where: CandidateWhereUniqueInput;
};

export type CandidateQuery = { candidate: Maybe<CandidateFragment> };

export type CandidatesQueryVariables = {
  where?: Maybe<CandidateWhereInput>;
  orderBy?: Maybe<CandidateOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CandidatesQuery = { candidates: Array<Maybe<CandidateFragment>> };

export type CandidatesConnectionQueryVariables = {
  where?: Maybe<CandidateWhereInput>;
  orderBy?: Maybe<CandidateOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CandidatesConnectionQuery = {
  candidatesConnection: CandidateConnectionFragment;
};

export type JobQueryVariables = {
  where: JobWhereUniqueInput;
};

export type JobQuery = { job: Maybe<JobFragment> };

export type JobsQueryVariables = {
  where?: Maybe<JobWhereInput>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type JobsQuery = { jobs: Array<Maybe<JobFragment>> };

export type JobsConnectionQueryVariables = {
  where?: Maybe<JobWhereInput>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type JobsConnectionQuery = { jobsConnection: JobConnectionFragment };

export type SourceQueryVariables = {
  where: SourceWhereUniqueInput;
};

export type SourceQuery = { source: Maybe<SourceFragment> };

export type SourcesQueryVariables = {
  where?: Maybe<SourceWhereInput>;
  orderBy?: Maybe<SourceOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type SourcesQuery = { sources: Array<Maybe<SourceFragment>> };

export type SourcesConnectionQueryVariables = {
  where?: Maybe<SourceWhereInput>;
  orderBy?: Maybe<SourceOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type SourcesConnectionQuery = {
  sourcesConnection: SourceConnectionFragment;
};

export type TagQueryVariables = {
  where: TagWhereUniqueInput;
};

export type TagQuery = { tag: Maybe<TagFragment> };

export type TagsQueryVariables = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type TagsQuery = { tags: Array<Maybe<TagFragment>> };

export type TagsConnectionQueryVariables = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type TagsConnectionQuery = { tagsConnection: TagConnectionFragment };

export type TaskQueryVariables = {
  where: TaskWhereUniqueInput;
};

export type TaskQuery = { task: Maybe<TaskFragment> };

export type TasksQueryVariables = {
  where?: Maybe<TaskWhereInput>;
  orderBy?: Maybe<TaskOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type TasksQuery = { tasks: Array<Maybe<TaskFragment>> };

export type TasksConnectionQueryVariables = {
  where?: Maybe<TaskWhereInput>;
  orderBy?: Maybe<TaskOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type TasksConnectionQuery = { tasksConnection: TaskConnectionFragment };

export type UserQueryVariables = {
  where: UserWhereUniqueInput;
};

export type UserQuery = { user: Maybe<UserFragment> };

export type UsersQueryVariables = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UsersQuery = { users: Array<Maybe<UserFragment>> };

export type UsersConnectionQueryVariables = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UsersConnectionQuery = { usersConnection: UserConnectionFragment };

export type WorkflowQueryVariables = {
  where: WorkflowWhereUniqueInput;
};

export type WorkflowQuery = { workflow: Maybe<WorkflowFragment> };

export type WorkflowsQueryVariables = {
  where?: Maybe<WorkflowWhereInput>;
  orderBy?: Maybe<WorkflowOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkflowsQuery = { workflows: Array<Maybe<WorkflowFragment>> };

export type WorkflowsConnectionQueryVariables = {
  where?: Maybe<WorkflowWhereInput>;
  orderBy?: Maybe<WorkflowOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type WorkflowsConnectionQuery = {
  workflowsConnection: WorkflowConnectionFragment;
};

export type CreateApplicationMutationVariables = {
  data: ApplicationCreateInput;
};

export type CreateApplicationMutation = {
  createApplication: ApplicationFragment;
};

export type UpdateApplicationMutationVariables = {
  data: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};

export type UpdateApplicationMutation = {
  updateApplication: Maybe<ApplicationFragment>;
};

export type UpdateManyApplicationsMutationVariables = {
  data: ApplicationUpdateManyMutationInput;
  where?: Maybe<ApplicationWhereInput>;
};

export type UpdateManyApplicationsMutation = {
  updateManyApplications: BatchPayloadFragment;
};

export type UpsertApplicationMutationVariables = {
  where: ApplicationWhereUniqueInput;
  create: ApplicationCreateInput;
  update: ApplicationUpdateInput;
};

export type UpsertApplicationMutation = {
  upsertApplication: ApplicationFragment;
};

export type DeleteApplicationMutationVariables = {
  where: ApplicationWhereUniqueInput;
};

export type DeleteApplicationMutation = {
  deleteApplication: Maybe<ApplicationFragment>;
};

export type DeleteManyApplicationsMutationVariables = {
  where?: Maybe<ApplicationWhereInput>;
};

export type DeleteManyApplicationsMutation = {
  deleteManyApplications: BatchPayloadFragment;
};

export type CreateCandidateMutationVariables = {
  data: CandidateCreateInput;
};

export type CreateCandidateMutation = { createCandidate: CandidateFragment };

export type UpdateCandidateMutationVariables = {
  data: CandidateUpdateInput;
  where: CandidateWhereUniqueInput;
};

export type UpdateCandidateMutation = {
  updateCandidate: Maybe<CandidateFragment>;
};

export type UpdateManyCandidatesMutationVariables = {
  data: CandidateUpdateManyMutationInput;
  where?: Maybe<CandidateWhereInput>;
};

export type UpdateManyCandidatesMutation = {
  updateManyCandidates: BatchPayloadFragment;
};

export type UpsertCandidateMutationVariables = {
  where: CandidateWhereUniqueInput;
  create: CandidateCreateInput;
  update: CandidateUpdateInput;
};

export type UpsertCandidateMutation = { upsertCandidate: CandidateFragment };

export type DeleteCandidateMutationVariables = {
  where: CandidateWhereUniqueInput;
};

export type DeleteCandidateMutation = {
  deleteCandidate: Maybe<CandidateFragment>;
};

export type DeleteManyCandidatesMutationVariables = {
  where?: Maybe<CandidateWhereInput>;
};

export type DeleteManyCandidatesMutation = {
  deleteManyCandidates: BatchPayloadFragment;
};

export type CreateJobMutationVariables = {
  data: JobCreateInput;
};

export type CreateJobMutation = { createJob: JobFragment };

export type UpdateJobMutationVariables = {
  data: JobUpdateInput;
  where: JobWhereUniqueInput;
};

export type UpdateJobMutation = { updateJob: Maybe<JobFragment> };

export type UpdateManyJobsMutationVariables = {
  data: JobUpdateManyMutationInput;
  where?: Maybe<JobWhereInput>;
};

export type UpdateManyJobsMutation = { updateManyJobs: BatchPayloadFragment };

export type UpsertJobMutationVariables = {
  where: JobWhereUniqueInput;
  create: JobCreateInput;
  update: JobUpdateInput;
};

export type UpsertJobMutation = { upsertJob: JobFragment };

export type DeleteJobMutationVariables = {
  where: JobWhereUniqueInput;
};

export type DeleteJobMutation = { deleteJob: Maybe<JobFragment> };

export type DeleteManyJobsMutationVariables = {
  where?: Maybe<JobWhereInput>;
};

export type DeleteManyJobsMutation = { deleteManyJobs: BatchPayloadFragment };

export type CreateSourceMutationVariables = {
  data: SourceCreateInput;
};

export type CreateSourceMutation = { createSource: SourceFragment };

export type UpdateSourceMutationVariables = {
  data: SourceUpdateInput;
  where: SourceWhereUniqueInput;
};

export type UpdateSourceMutation = { updateSource: Maybe<SourceFragment> };

export type UpdateManySourcesMutationVariables = {
  data: SourceUpdateManyMutationInput;
  where?: Maybe<SourceWhereInput>;
};

export type UpdateManySourcesMutation = {
  updateManySources: BatchPayloadFragment;
};

export type UpsertSourceMutationVariables = {
  where: SourceWhereUniqueInput;
  create: SourceCreateInput;
  update: SourceUpdateInput;
};

export type UpsertSourceMutation = { upsertSource: SourceFragment };

export type DeleteSourceMutationVariables = {
  where: SourceWhereUniqueInput;
};

export type DeleteSourceMutation = { deleteSource: Maybe<SourceFragment> };

export type DeleteManySourcesMutationVariables = {
  where?: Maybe<SourceWhereInput>;
};

export type DeleteManySourcesMutation = {
  deleteManySources: BatchPayloadFragment;
};

export type CreateTagMutationVariables = {
  data: TagCreateInput;
};

export type CreateTagMutation = { createTag: TagFragment };

export type UpdateTagMutationVariables = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type UpdateTagMutation = { updateTag: Maybe<TagFragment> };

export type UpdateManyTagsMutationVariables = {
  data: TagUpdateManyMutationInput;
  where?: Maybe<TagWhereInput>;
};

export type UpdateManyTagsMutation = { updateManyTags: BatchPayloadFragment };

export type UpsertTagMutationVariables = {
  where: TagWhereUniqueInput;
  create: TagCreateInput;
  update: TagUpdateInput;
};

export type UpsertTagMutation = { upsertTag: TagFragment };

export type DeleteTagMutationVariables = {
  where: TagWhereUniqueInput;
};

export type DeleteTagMutation = { deleteTag: Maybe<TagFragment> };

export type DeleteManyTagsMutationVariables = {
  where?: Maybe<TagWhereInput>;
};

export type DeleteManyTagsMutation = { deleteManyTags: BatchPayloadFragment };

export type CreateTaskMutationVariables = {
  data: TaskCreateInput;
};

export type CreateTaskMutation = { createTask: TaskFragment };

export type UpdateTaskMutationVariables = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};

export type UpdateTaskMutation = { updateTask: Maybe<TaskFragment> };

export type UpdateManyTasksMutationVariables = {
  data: TaskUpdateManyMutationInput;
  where?: Maybe<TaskWhereInput>;
};

export type UpdateManyTasksMutation = { updateManyTasks: BatchPayloadFragment };

export type UpsertTaskMutationVariables = {
  where: TaskWhereUniqueInput;
  create: TaskCreateInput;
  update: TaskUpdateInput;
};

export type UpsertTaskMutation = { upsertTask: TaskFragment };

export type DeleteTaskMutationVariables = {
  where: TaskWhereUniqueInput;
};

export type DeleteTaskMutation = { deleteTask: Maybe<TaskFragment> };

export type DeleteManyTasksMutationVariables = {
  where?: Maybe<TaskWhereInput>;
};

export type DeleteManyTasksMutation = { deleteManyTasks: BatchPayloadFragment };

export type UpdateUserMutationVariables = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UpdateUserMutation = { updateUser: Maybe<UserFragment> };

export type CreateWorkflowMutationVariables = {
  data: WorkflowCreateInput;
};

export type CreateWorkflowMutation = { createWorkflow: WorkflowFragment };

export type UpdateWorkflowMutationVariables = {
  data: WorkflowUpdateInput;
  where: WorkflowWhereUniqueInput;
};

export type UpdateWorkflowMutation = {
  updateWorkflow: Maybe<WorkflowFragment>;
};

export type UpdateManyWorkflowsMutationVariables = {
  data: WorkflowUpdateManyMutationInput;
  where?: Maybe<WorkflowWhereInput>;
};

export type UpdateManyWorkflowsMutation = {
  updateManyWorkflows: BatchPayloadFragment;
};

export type UpsertWorkflowMutationVariables = {
  where: WorkflowWhereUniqueInput;
  create: WorkflowCreateInput;
  update: WorkflowUpdateInput;
};

export type UpsertWorkflowMutation = { upsertWorkflow: WorkflowFragment };

export type DeleteWorkflowMutationVariables = {
  where: WorkflowWhereUniqueInput;
};

export type DeleteWorkflowMutation = {
  deleteWorkflow: Maybe<WorkflowFragment>;
};

export type DeleteManyWorkflowsMutationVariables = {
  where?: Maybe<WorkflowWhereInput>;
};

export type DeleteManyWorkflowsMutation = {
  deleteManyWorkflows: BatchPayloadFragment;
};
