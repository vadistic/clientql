import gql from 'graphql-tag'

export const APPLICATION_FLAT_FRAGMENT = gql`
  fragment ApplicationFlat on Application {
    __typename
    createdAt
    id
    updatedAt
    type
  }
`

export const DISQUALIFICATION_INSTANCE_FLAT_FRAGMENT = gql`
  fragment DisqualificationInstanceFlat on DisqualificationInstance {
    __typename
    id
    createdAt
    updatedAt
    content
  }
`

export const DISQUALIFICATION_FLAT_FRAGMENT = gql`
  fragment DisqualificationFlat on Disqualification {
    __typename
    id
    createdAt
    updatedAt
    name
    description
  }
`

export const USER_FLAT_FRAGMENT = gql`
  fragment UserFlat on User {
    __typename
    id
    createdAt
    updatedAt
    settings
    firstName
    lastName
    email
    username
    lastLogin
    deletedAt
    position
  }
`

export const TASK_FLAT_FRAGMENT = gql`
  fragment TaskFlat on Task {
    __typename
    id
    createdAt
    updatedAt
    title
    description
    dueAt
  }
`

export const CANDIDATE_FLAT_FRAGMENT = gql`
  fragment CandidateFlat on Candidate {
    __typename
    id
    createdAt
    updatedAt
    firstName
    lastName
    emails
    phones
    links
    company
    headline
    position
    resumesString
    coverLettersString
  }
`

export const FILE_FLAT_FRAGMENT = gql`
  fragment FileFlat on File {
    __typename
    id
    createdAt
    updatedAt
    size
    type
    name
    url
  }
`

export const TAG_FLAT_FRAGMENT = gql`
  fragment TagFlat on Tag {
    __typename
    id
    createdAt
    updatedAt
    label
    description
  }
`

export const SOURCE_FLAT_FRAGMENT = gql`
  fragment SourceFlat on Source {
    __typename
    id
    createdAt
    updatedAt
    label
    description
  }
`

export const FIELD_INSTANCE_FLAT_FRAGMENT = gql`
  fragment FieldInstanceFlat on FieldInstance {
    __typename
    id
    createdAt
    updatedAt
    value
  }
`

export const FIELD_FLAT_FRAGMENT = gql`
  fragment FieldFlat on Field {
    __typename
    id
    createdAt
    updatedAt
    type
    label
    description
  }
`

export const COMMENT_FLAT_FRAGMENT = gql`
  fragment CommentFlat on Comment {
    __typename
    id
    createdAt
    updatedAt
    content
  }
`

export const STAGE_FLAT_FRAGMENT = gql`
  fragment StageFlat on Stage {
    __typename
    id
    createdAt
    updatedAt
    name
    description
    type
    index
  }
`

export const REVIEW_INSTANCE_FLAT_FRAGMENT = gql`
  fragment ReviewInstanceFlat on ReviewInstance {
    __typename
    id
    createdAt
    updatedAt
    rating
    content
  }
`

export const REVIEW_FLAT_FRAGMENT = gql`
  fragment ReviewFlat on Review {
    __typename
    id
    createdAt
    updatedAt
    name
  }
`

export const JOB_FLAT_FRAGMENT = gql`
  fragment JobFlat on Job {
    __typename
    id
    createdAt
    updatedAt
    type
    department
    name
    excerpt
    companyDescription
    description
    requirements
  }
`

export const WORKSPACE_FLAT_FRAGMENT = gql`
  fragment WorkspaceFlat on Workspace {
    __typename
    id
    createdAt
    updatedAt
    settings
    name
  }
`

export const WORKFLOW_FLAT_FRAGMENT = gql`
  fragment WorkflowFlat on Workflow {
    __typename
    id
    createdAt
    updatedAt
    name
    description
  }
`

export const INVITE_FLAT_FRAGMENT = gql`
  fragment InviteFlat on Invite {
    __typename
    id
    createdAt
    updatedAt
    email
    expireAt
  }
`

export const LOCATION_FLAT_FRAGMENT = gql`
  fragment LocationFlat on Location {
    __typename
    id
    createdAt
    updatedAt
    country
    region
    city
    zip
  }
`

export const PAGE_INFO_FLAT_FRAGMENT = gql`
  fragment PageInfoFlat on PageInfo {
    __typename
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`

export const APPLICATION_EDGE_FLAT_FRAGMENT = gql`
  fragment ApplicationEdgeFlat on ApplicationEdge {
    __typename
    cursor
  }
`

export const AGGREGATE_APPLICATION_FLAT_FRAGMENT = gql`
  fragment AggregateApplicationFlat on AggregateApplication {
    __typename
    count
  }
`

export const CANDIDATE_EDGE_FLAT_FRAGMENT = gql`
  fragment CandidateEdgeFlat on CandidateEdge {
    __typename
    cursor
  }
`

export const AGGREGATE_CANDIDATE_FLAT_FRAGMENT = gql`
  fragment AggregateCandidateFlat on AggregateCandidate {
    __typename
    count
  }
`

export const JOB_EDGE_FLAT_FRAGMENT = gql`
  fragment JobEdgeFlat on JobEdge {
    __typename
    cursor
  }
`

export const AGGREGATE_JOB_FLAT_FRAGMENT = gql`
  fragment AggregateJobFlat on AggregateJob {
    __typename
    count
  }
`

export const SOURCE_EDGE_FLAT_FRAGMENT = gql`
  fragment SourceEdgeFlat on SourceEdge {
    __typename
    cursor
  }
`

export const AGGREGATE_SOURCE_FLAT_FRAGMENT = gql`
  fragment AggregateSourceFlat on AggregateSource {
    __typename
    count
  }
`

export const TAG_EDGE_FLAT_FRAGMENT = gql`
  fragment TagEdgeFlat on TagEdge {
    __typename
    cursor
  }
`

export const AGGREGATE_TAG_FLAT_FRAGMENT = gql`
  fragment AggregateTagFlat on AggregateTag {
    __typename
    count
  }
`

export const TASK_EDGE_FLAT_FRAGMENT = gql`
  fragment TaskEdgeFlat on TaskEdge {
    __typename
    cursor
  }
`

export const AGGREGATE_TASK_FLAT_FRAGMENT = gql`
  fragment AggregateTaskFlat on AggregateTask {
    __typename
    count
  }
`

export const USER_EDGE_FLAT_FRAGMENT = gql`
  fragment UserEdgeFlat on UserEdge {
    __typename
    cursor
  }
`

export const AGGREGATE_USER_FLAT_FRAGMENT = gql`
  fragment AggregateUserFlat on AggregateUser {
    __typename
    count
  }
`

export const WORKFLOW_EDGE_FLAT_FRAGMENT = gql`
  fragment WorkflowEdgeFlat on WorkflowEdge {
    __typename
    cursor
  }
`

export const AGGREGATE_WORKFLOW_FLAT_FRAGMENT = gql`
  fragment AggregateWorkflowFlat on AggregateWorkflow {
    __typename
    count
  }
`

export const BATCH_PAYLOAD_FLAT_FRAGMENT = gql`
  fragment BatchPayloadFlat on BatchPayload {
    __typename
    count
  }
`

export const ACCESS_PAYLOAD_FLAT_FRAGMENT = gql`
  fragment AccessPayloadFlat on AccessPayload {
    __typename
    token
  }
`

export const AUTH_PAYLOAD_FLAT_FRAGMENT = gql`
  fragment AuthPayloadFlat on AuthPayload {
    __typename
    token
    refresh
  }
`

export const APPLICATION_FRAGMENT = gql`
  fragment Application on Application {
    __typename
    createdAt
    id
    updatedAt
    type
    disqualification {
      ...DisqualificationInstanceFlat
    }
    stage {
      ...StageFlat
    }
    reviews {
      ...ReviewInstanceFlat
    }
    job {
      ...JobFlat
    }
    candidate {
      ...CandidateFlat
    }
  }

  ${DISQUALIFICATION_INSTANCE_FLAT_FRAGMENT}
  ${STAGE_FLAT_FRAGMENT}
  ${REVIEW_INSTANCE_FLAT_FRAGMENT}
  ${JOB_FLAT_FRAGMENT}
  ${CANDIDATE_FLAT_FRAGMENT}
`

export const DISQUALIFICATION_INSTANCE_FRAGMENT = gql`
  fragment DisqualificationInstance on DisqualificationInstance {
    __typename
    id
    createdAt
    updatedAt
    prototype {
      ...DisqualificationFlat
    }
    createdBy {
      ...UserFlat
    }
    content
  }

  ${DISQUALIFICATION_FLAT_FRAGMENT}
  ${USER_FLAT_FRAGMENT}
`

export const DISQUALIFICATION_FRAGMENT = gql`
  fragment Disqualification on Disqualification {
    __typename
    id
    createdAt
    updatedAt
    name
    description
  }
`

export const USER_FRAGMENT = gql`
  fragment User on User {
    __typename
    id
    createdAt
    updatedAt
    settings
    tasks {
      ...TaskFlat
    }
    firstName
    lastName
    email
    username
    lastLogin
    deletedAt
    position
    avatar {
      ...FileFlat
    }
  }

  ${TASK_FLAT_FRAGMENT}
  ${FILE_FLAT_FRAGMENT}
`

export const TASK_FRAGMENT = gql`
  fragment Task on Task {
    __typename
    id
    createdAt
    updatedAt
    owners {
      ...UserFlat
    }
    candidate {
      ...CandidateFlat
    }
    title
    description
    dueAt
  }

  ${USER_FLAT_FRAGMENT}
  ${CANDIDATE_FLAT_FRAGMENT}
`

export const CANDIDATE_FRAGMENT = gql`
  fragment Candidate on Candidate {
    __typename
    id
    createdAt
    updatedAt
    firstName
    lastName
    emails
    phones
    links
    avatar {
      ...FileFlat
    }
    company
    headline
    position
    resumesString
    resumesFile {
      ...FileFlat
    }
    coverLettersString
    coverLettersFile {
      ...FileFlat
    }
    tags {
      ...TagFlat
    }
    sources {
      ...SourceFlat
    }
    fields {
      ...FieldInstanceFlat
    }
    tasks {
      ...TaskFlat
    }
    applications {
      ...ApplicationFlat
    }
    comments {
      ...CommentFlat
    }
  }

  ${FILE_FLAT_FRAGMENT}
  ${FILE_FLAT_FRAGMENT}
  ${FILE_FLAT_FRAGMENT}
  ${TAG_FLAT_FRAGMENT}
  ${SOURCE_FLAT_FRAGMENT}
  ${FIELD_INSTANCE_FLAT_FRAGMENT}
  ${TASK_FLAT_FRAGMENT}
  ${APPLICATION_FLAT_FRAGMENT}
  ${COMMENT_FLAT_FRAGMENT}
`

export const FILE_FRAGMENT = gql`
  fragment File on File {
    __typename
    id
    createdAt
    updatedAt
    size
    type
    name
    url
  }
`

export const TAG_FRAGMENT = gql`
  fragment Tag on Tag {
    __typename
    id
    createdAt
    updatedAt
    label
    description
  }
`

export const SOURCE_FRAGMENT = gql`
  fragment Source on Source {
    __typename
    id
    createdAt
    updatedAt
    label
    description
  }
`

export const FIELD_INSTANCE_FRAGMENT = gql`
  fragment FieldInstance on FieldInstance {
    __typename
    id
    createdAt
    updatedAt
    prototype {
      ...FieldFlat
    }
    value
  }

  ${FIELD_FLAT_FRAGMENT}
`

export const FIELD_FRAGMENT = gql`
  fragment Field on Field {
    __typename
    id
    createdAt
    updatedAt
    type
    label
    description
  }
`

export const COMMENT_FRAGMENT = gql`
  fragment Comment on Comment {
    __typename
    id
    createdAt
    updatedAt
    createdBy {
      ...UserFlat
    }
    parent {
      ...CommentFlat
    }
    content
  }

  ${USER_FLAT_FRAGMENT}
  ${COMMENT_FLAT_FRAGMENT}
`

export const STAGE_FRAGMENT = gql`
  fragment Stage on Stage {
    __typename
    id
    createdAt
    updatedAt
    name
    description
    type
    index
  }
`

export const REVIEW_INSTANCE_FRAGMENT = gql`
  fragment ReviewInstance on ReviewInstance {
    __typename
    id
    createdAt
    updatedAt
    prototype {
      ...ReviewFlat
    }
    fields {
      ...FieldInstanceFlat
    }
    createdBy {
      ...UserFlat
    }
    rating
    content
  }

  ${REVIEW_FLAT_FRAGMENT}
  ${FIELD_INSTANCE_FLAT_FRAGMENT}
  ${USER_FLAT_FRAGMENT}
`

export const REVIEW_FRAGMENT = gql`
  fragment Review on Review {
    __typename
    id
    createdAt
    updatedAt
    name
    fields {
      ...FieldFlat
    }
  }

  ${FIELD_FLAT_FRAGMENT}
`

export const JOB_FRAGMENT = gql`
  fragment Job on Job {
    __typename
    id
    createdAt
    updatedAt
    workspace {
      ...WorkspaceFlat
    }
    applications {
      ...ApplicationFlat
    }
    workflow {
      ...WorkflowFlat
    }
    comments {
      ...CommentFlat
    }
    type
    department
    locations {
      ...LocationFlat
    }
    name
    excerpt
    companyDescription
    description
    requirements
  }

  ${WORKSPACE_FLAT_FRAGMENT}
  ${APPLICATION_FLAT_FRAGMENT}
  ${WORKFLOW_FLAT_FRAGMENT}
  ${COMMENT_FLAT_FRAGMENT}
  ${LOCATION_FLAT_FRAGMENT}
`

export const WORKSPACE_FRAGMENT = gql`
  fragment Workspace on Workspace {
    __typename
    id
    createdAt
    updatedAt
    users {
      ...UserFlat
    }
    jobs {
      ...JobFlat
    }
    candidates {
      ...CandidateFlat
    }
    settings
    workflows {
      ...WorkflowFlat
    }
    invites {
      ...InviteFlat
    }
    name
  }

  ${USER_FLAT_FRAGMENT}
  ${JOB_FLAT_FRAGMENT}
  ${CANDIDATE_FLAT_FRAGMENT}
  ${WORKFLOW_FLAT_FRAGMENT}
  ${INVITE_FLAT_FRAGMENT}
`

export const WORKFLOW_FRAGMENT = gql`
  fragment Workflow on Workflow {
    __typename
    id
    createdAt
    updatedAt
    jobs {
      ...JobFlat
    }
    name
    description
    stages {
      ...StageFlat
    }
    disqualifications {
      ...DisqualificationFlat
    }
    fields {
      ...FieldFlat
    }
    reviews {
      ...ReviewFlat
    }
  }

  ${JOB_FLAT_FRAGMENT}
  ${STAGE_FLAT_FRAGMENT}
  ${DISQUALIFICATION_FLAT_FRAGMENT}
  ${FIELD_FLAT_FRAGMENT}
  ${REVIEW_FLAT_FRAGMENT}
`

export const INVITE_FRAGMENT = gql`
  fragment Invite on Invite {
    __typename
    id
    createdAt
    updatedAt
    email
    expireAt
    invitedBy {
      ...UserFlat
    }
  }

  ${USER_FLAT_FRAGMENT}
`

export const LOCATION_FRAGMENT = gql`
  fragment Location on Location {
    __typename
    id
    createdAt
    updatedAt
    country
    region
    city
    zip
  }
`

export const APPLICATION_CONNECTION_FRAGMENT = gql`
  fragment ApplicationConnection on ApplicationConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...ApplicationEdgeFlat
    }
    aggregate {
      ...AggregateApplicationFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${APPLICATION_EDGE_FLAT_FRAGMENT}
  ${AGGREGATE_APPLICATION_FLAT_FRAGMENT}
`

export const PAGE_INFO_FRAGMENT = gql`
  fragment PageInfo on PageInfo {
    __typename
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`

export const APPLICATION_EDGE_FRAGMENT = gql`
  fragment ApplicationEdge on ApplicationEdge {
    __typename
    node {
      ...ApplicationFlat
    }
    cursor
  }

  ${APPLICATION_FLAT_FRAGMENT}
`

export const AGGREGATE_APPLICATION_FRAGMENT = gql`
  fragment AggregateApplication on AggregateApplication {
    __typename
    count
  }
`

export const CANDIDATE_CONNECTION_FRAGMENT = gql`
  fragment CandidateConnection on CandidateConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...CandidateEdgeFlat
    }
    aggregate {
      ...AggregateCandidateFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${CANDIDATE_EDGE_FLAT_FRAGMENT}
  ${AGGREGATE_CANDIDATE_FLAT_FRAGMENT}
`

export const CANDIDATE_EDGE_FRAGMENT = gql`
  fragment CandidateEdge on CandidateEdge {
    __typename
    node {
      ...CandidateFlat
    }
    cursor
  }

  ${CANDIDATE_FLAT_FRAGMENT}
`

export const AGGREGATE_CANDIDATE_FRAGMENT = gql`
  fragment AggregateCandidate on AggregateCandidate {
    __typename
    count
  }
`

export const JOB_CONNECTION_FRAGMENT = gql`
  fragment JobConnection on JobConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...JobEdgeFlat
    }
    aggregate {
      ...AggregateJobFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${JOB_EDGE_FLAT_FRAGMENT}
  ${AGGREGATE_JOB_FLAT_FRAGMENT}
`

export const JOB_EDGE_FRAGMENT = gql`
  fragment JobEdge on JobEdge {
    __typename
    node {
      ...JobFlat
    }
    cursor
  }

  ${JOB_FLAT_FRAGMENT}
`

export const AGGREGATE_JOB_FRAGMENT = gql`
  fragment AggregateJob on AggregateJob {
    __typename
    count
  }
`

export const SOURCE_CONNECTION_FRAGMENT = gql`
  fragment SourceConnection on SourceConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...SourceEdgeFlat
    }
    aggregate {
      ...AggregateSourceFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${SOURCE_EDGE_FLAT_FRAGMENT}
  ${AGGREGATE_SOURCE_FLAT_FRAGMENT}
`

export const SOURCE_EDGE_FRAGMENT = gql`
  fragment SourceEdge on SourceEdge {
    __typename
    node {
      ...SourceFlat
    }
    cursor
  }

  ${SOURCE_FLAT_FRAGMENT}
`

export const AGGREGATE_SOURCE_FRAGMENT = gql`
  fragment AggregateSource on AggregateSource {
    __typename
    count
  }
`

export const TAG_CONNECTION_FRAGMENT = gql`
  fragment TagConnection on TagConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...TagEdgeFlat
    }
    aggregate {
      ...AggregateTagFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${TAG_EDGE_FLAT_FRAGMENT}
  ${AGGREGATE_TAG_FLAT_FRAGMENT}
`

export const TAG_EDGE_FRAGMENT = gql`
  fragment TagEdge on TagEdge {
    __typename
    node {
      ...TagFlat
    }
    cursor
  }

  ${TAG_FLAT_FRAGMENT}
`

export const AGGREGATE_TAG_FRAGMENT = gql`
  fragment AggregateTag on AggregateTag {
    __typename
    count
  }
`

export const TASK_CONNECTION_FRAGMENT = gql`
  fragment TaskConnection on TaskConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...TaskEdgeFlat
    }
    aggregate {
      ...AggregateTaskFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${TASK_EDGE_FLAT_FRAGMENT}
  ${AGGREGATE_TASK_FLAT_FRAGMENT}
`

export const TASK_EDGE_FRAGMENT = gql`
  fragment TaskEdge on TaskEdge {
    __typename
    node {
      ...TaskFlat
    }
    cursor
  }

  ${TASK_FLAT_FRAGMENT}
`

export const AGGREGATE_TASK_FRAGMENT = gql`
  fragment AggregateTask on AggregateTask {
    __typename
    count
  }
`

export const USER_CONNECTION_FRAGMENT = gql`
  fragment UserConnection on UserConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...UserEdgeFlat
    }
    aggregate {
      ...AggregateUserFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${USER_EDGE_FLAT_FRAGMENT}
  ${AGGREGATE_USER_FLAT_FRAGMENT}
`

export const USER_EDGE_FRAGMENT = gql`
  fragment UserEdge on UserEdge {
    __typename
    node {
      ...UserFlat
    }
    cursor
  }

  ${USER_FLAT_FRAGMENT}
`

export const AGGREGATE_USER_FRAGMENT = gql`
  fragment AggregateUser on AggregateUser {
    __typename
    count
  }
`

export const WORKFLOW_CONNECTION_FRAGMENT = gql`
  fragment WorkflowConnection on WorkflowConnection {
    __typename
    pageInfo {
      ...PageInfoFlat
    }
    edges {
      ...WorkflowEdgeFlat
    }
    aggregate {
      ...AggregateWorkflowFlat
    }
  }

  ${PAGE_INFO_FLAT_FRAGMENT}
  ${WORKFLOW_EDGE_FLAT_FRAGMENT}
  ${AGGREGATE_WORKFLOW_FLAT_FRAGMENT}
`

export const WORKFLOW_EDGE_FRAGMENT = gql`
  fragment WorkflowEdge on WorkflowEdge {
    __typename
    node {
      ...WorkflowFlat
    }
    cursor
  }

  ${WORKFLOW_FLAT_FRAGMENT}
`

export const AGGREGATE_WORKFLOW_FRAGMENT = gql`
  fragment AggregateWorkflow on AggregateWorkflow {
    __typename
    count
  }
`

export const BATCH_PAYLOAD_FRAGMENT = gql`
  fragment BatchPayload on BatchPayload {
    __typename
    count
  }
`

export const ACCESS_PAYLOAD_FRAGMENT = gql`
  fragment AccessPayload on AccessPayload {
    __typename
    token
  }
`

export const AUTH_PAYLOAD_FRAGMENT = gql`
  fragment AuthPayload on AuthPayload {
    __typename
    token
    refresh
  }
`

export const APPLICATION_DEEP_FRAGMENT = gql`
  fragment ApplicationDeep on Application {
    __typename
    createdAt
    id
    updatedAt
    type
    disqualification {
      ...DisqualificationInstance
    }
    stage {
      ...Stage
    }
    reviews {
      ...ReviewInstance
    }
    job {
      ...Job
    }
    candidate {
      ...Candidate
    }
  }

  ${DISQUALIFICATION_INSTANCE_FRAGMENT}
  ${STAGE_FRAGMENT}
  ${REVIEW_INSTANCE_FRAGMENT}
  ${JOB_FRAGMENT}
  ${CANDIDATE_FRAGMENT}
`

export const DISQUALIFICATION_INSTANCE_DEEP_FRAGMENT = gql`
  fragment DisqualificationInstanceDeep on DisqualificationInstance {
    __typename
    id
    createdAt
    updatedAt
    prototype {
      ...Disqualification
    }
    createdBy {
      ...User
    }
    content
  }

  ${DISQUALIFICATION_FRAGMENT}
  ${USER_FRAGMENT}
`

export const DISQUALIFICATION_DEEP_FRAGMENT = gql`
  fragment DisqualificationDeep on Disqualification {
    __typename
    id
    createdAt
    updatedAt
    name
    description
  }
`

export const USER_DEEP_FRAGMENT = gql`
  fragment UserDeep on User {
    __typename
    id
    createdAt
    updatedAt
    settings
    tasks {
      ...Task
    }
    firstName
    lastName
    email
    username
    lastLogin
    deletedAt
    position
    avatar {
      ...File
    }
  }

  ${TASK_FRAGMENT}
  ${FILE_FRAGMENT}
`

export const TASK_DEEP_FRAGMENT = gql`
  fragment TaskDeep on Task {
    __typename
    id
    createdAt
    updatedAt
    owners {
      ...User
    }
    candidate {
      ...Candidate
    }
    title
    description
    dueAt
  }

  ${USER_FRAGMENT}
  ${CANDIDATE_FRAGMENT}
`

export const CANDIDATE_DEEP_FRAGMENT = gql`
  fragment CandidateDeep on Candidate {
    __typename
    id
    createdAt
    updatedAt
    firstName
    lastName
    emails
    phones
    links
    avatar {
      ...File
    }
    company
    headline
    position
    resumesString
    resumesFile {
      ...File
    }
    coverLettersString
    coverLettersFile {
      ...File
    }
    tags {
      ...Tag
    }
    sources {
      ...Source
    }
    fields {
      ...FieldInstance
    }
    tasks {
      ...Task
    }
    applications {
      ...Application
    }
    comments {
      ...Comment
    }
  }

  ${FILE_FRAGMENT}
  ${FILE_FRAGMENT}
  ${FILE_FRAGMENT}
  ${TAG_FRAGMENT}
  ${SOURCE_FRAGMENT}
  ${FIELD_INSTANCE_FRAGMENT}
  ${TASK_FRAGMENT}
  ${APPLICATION_FRAGMENT}
  ${COMMENT_FRAGMENT}
`

export const FILE_DEEP_FRAGMENT = gql`
  fragment FileDeep on File {
    __typename
    id
    createdAt
    updatedAt
    size
    type
    name
    url
  }
`

export const TAG_DEEP_FRAGMENT = gql`
  fragment TagDeep on Tag {
    __typename
    id
    createdAt
    updatedAt
    label
    description
  }
`

export const SOURCE_DEEP_FRAGMENT = gql`
  fragment SourceDeep on Source {
    __typename
    id
    createdAt
    updatedAt
    label
    description
  }
`

export const FIELD_INSTANCE_DEEP_FRAGMENT = gql`
  fragment FieldInstanceDeep on FieldInstance {
    __typename
    id
    createdAt
    updatedAt
    prototype {
      ...Field
    }
    value
  }

  ${FIELD_FRAGMENT}
`

export const FIELD_DEEP_FRAGMENT = gql`
  fragment FieldDeep on Field {
    __typename
    id
    createdAt
    updatedAt
    type
    label
    description
  }
`

export const COMMENT_DEEP_FRAGMENT = gql`
  fragment CommentDeep on Comment {
    __typename
    id
    createdAt
    updatedAt
    createdBy {
      ...User
    }
    parent {
      ...Comment
    }
    content
  }

  ${USER_FRAGMENT}
  ${COMMENT_FRAGMENT}
`

export const STAGE_DEEP_FRAGMENT = gql`
  fragment StageDeep on Stage {
    __typename
    id
    createdAt
    updatedAt
    name
    description
    type
    index
  }
`

export const REVIEW_INSTANCE_DEEP_FRAGMENT = gql`
  fragment ReviewInstanceDeep on ReviewInstance {
    __typename
    id
    createdAt
    updatedAt
    prototype {
      ...Review
    }
    fields {
      ...FieldInstance
    }
    createdBy {
      ...User
    }
    rating
    content
  }

  ${REVIEW_FRAGMENT}
  ${FIELD_INSTANCE_FRAGMENT}
  ${USER_FRAGMENT}
`

export const REVIEW_DEEP_FRAGMENT = gql`
  fragment ReviewDeep on Review {
    __typename
    id
    createdAt
    updatedAt
    name
    fields {
      ...Field
    }
  }

  ${FIELD_FRAGMENT}
`

export const JOB_DEEP_FRAGMENT = gql`
  fragment JobDeep on Job {
    __typename
    id
    createdAt
    updatedAt
    workspace {
      ...Workspace
    }
    applications {
      ...Application
    }
    workflow {
      ...Workflow
    }
    comments {
      ...Comment
    }
    type
    department
    locations {
      ...Location
    }
    name
    excerpt
    companyDescription
    description
    requirements
  }

  ${WORKSPACE_FRAGMENT}
  ${APPLICATION_FRAGMENT}
  ${WORKFLOW_FRAGMENT}
  ${COMMENT_FRAGMENT}
  ${LOCATION_FRAGMENT}
`

export const WORKSPACE_DEEP_FRAGMENT = gql`
  fragment WorkspaceDeep on Workspace {
    __typename
    id
    createdAt
    updatedAt
    users {
      ...User
    }
    jobs {
      ...Job
    }
    candidates {
      ...Candidate
    }
    settings
    workflows {
      ...Workflow
    }
    invites {
      ...Invite
    }
    name
  }

  ${USER_FRAGMENT}
  ${JOB_FRAGMENT}
  ${CANDIDATE_FRAGMENT}
  ${WORKFLOW_FRAGMENT}
  ${INVITE_FRAGMENT}
`

export const WORKFLOW_DEEP_FRAGMENT = gql`
  fragment WorkflowDeep on Workflow {
    __typename
    id
    createdAt
    updatedAt
    jobs {
      ...Job
    }
    name
    description
    stages {
      ...Stage
    }
    disqualifications {
      ...Disqualification
    }
    fields {
      ...Field
    }
    reviews {
      ...Review
    }
  }

  ${JOB_FRAGMENT}
  ${STAGE_FRAGMENT}
  ${DISQUALIFICATION_FRAGMENT}
  ${FIELD_FRAGMENT}
  ${REVIEW_FRAGMENT}
`

export const INVITE_DEEP_FRAGMENT = gql`
  fragment InviteDeep on Invite {
    __typename
    id
    createdAt
    updatedAt
    email
    expireAt
    invitedBy {
      ...User
    }
  }

  ${USER_FRAGMENT}
`

export const LOCATION_DEEP_FRAGMENT = gql`
  fragment LocationDeep on Location {
    __typename
    id
    createdAt
    updatedAt
    country
    region
    city
    zip
  }
`

export const APPLICATION_CONNECTION_DEEP_FRAGMENT = gql`
  fragment ApplicationConnectionDeep on ApplicationConnection {
    __typename
    pageInfo {
      ...PageInfo
    }
    edges {
      ...ApplicationEdge
    }
    aggregate {
      ...AggregateApplication
    }
  }

  ${PAGE_INFO_FRAGMENT}
  ${APPLICATION_EDGE_FRAGMENT}
  ${AGGREGATE_APPLICATION_FRAGMENT}
`

export const PAGE_INFO_DEEP_FRAGMENT = gql`
  fragment PageInfoDeep on PageInfo {
    __typename
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`

export const APPLICATION_EDGE_DEEP_FRAGMENT = gql`
  fragment ApplicationEdgeDeep on ApplicationEdge {
    __typename
    node {
      ...Application
    }
    cursor
  }

  ${APPLICATION_FRAGMENT}
`

export const AGGREGATE_APPLICATION_DEEP_FRAGMENT = gql`
  fragment AggregateApplicationDeep on AggregateApplication {
    __typename
    count
  }
`

export const CANDIDATE_CONNECTION_DEEP_FRAGMENT = gql`
  fragment CandidateConnectionDeep on CandidateConnection {
    __typename
    pageInfo {
      ...PageInfo
    }
    edges {
      ...CandidateEdge
    }
    aggregate {
      ...AggregateCandidate
    }
  }

  ${PAGE_INFO_FRAGMENT}
  ${CANDIDATE_EDGE_FRAGMENT}
  ${AGGREGATE_CANDIDATE_FRAGMENT}
`

export const CANDIDATE_EDGE_DEEP_FRAGMENT = gql`
  fragment CandidateEdgeDeep on CandidateEdge {
    __typename
    node {
      ...Candidate
    }
    cursor
  }

  ${CANDIDATE_FRAGMENT}
`

export const AGGREGATE_CANDIDATE_DEEP_FRAGMENT = gql`
  fragment AggregateCandidateDeep on AggregateCandidate {
    __typename
    count
  }
`

export const JOB_CONNECTION_DEEP_FRAGMENT = gql`
  fragment JobConnectionDeep on JobConnection {
    __typename
    pageInfo {
      ...PageInfo
    }
    edges {
      ...JobEdge
    }
    aggregate {
      ...AggregateJob
    }
  }

  ${PAGE_INFO_FRAGMENT}
  ${JOB_EDGE_FRAGMENT}
  ${AGGREGATE_JOB_FRAGMENT}
`

export const JOB_EDGE_DEEP_FRAGMENT = gql`
  fragment JobEdgeDeep on JobEdge {
    __typename
    node {
      ...Job
    }
    cursor
  }

  ${JOB_FRAGMENT}
`

export const AGGREGATE_JOB_DEEP_FRAGMENT = gql`
  fragment AggregateJobDeep on AggregateJob {
    __typename
    count
  }
`

export const SOURCE_CONNECTION_DEEP_FRAGMENT = gql`
  fragment SourceConnectionDeep on SourceConnection {
    __typename
    pageInfo {
      ...PageInfo
    }
    edges {
      ...SourceEdge
    }
    aggregate {
      ...AggregateSource
    }
  }

  ${PAGE_INFO_FRAGMENT}
  ${SOURCE_EDGE_FRAGMENT}
  ${AGGREGATE_SOURCE_FRAGMENT}
`

export const SOURCE_EDGE_DEEP_FRAGMENT = gql`
  fragment SourceEdgeDeep on SourceEdge {
    __typename
    node {
      ...Source
    }
    cursor
  }

  ${SOURCE_FRAGMENT}
`

export const AGGREGATE_SOURCE_DEEP_FRAGMENT = gql`
  fragment AggregateSourceDeep on AggregateSource {
    __typename
    count
  }
`

export const TAG_CONNECTION_DEEP_FRAGMENT = gql`
  fragment TagConnectionDeep on TagConnection {
    __typename
    pageInfo {
      ...PageInfo
    }
    edges {
      ...TagEdge
    }
    aggregate {
      ...AggregateTag
    }
  }

  ${PAGE_INFO_FRAGMENT}
  ${TAG_EDGE_FRAGMENT}
  ${AGGREGATE_TAG_FRAGMENT}
`

export const TAG_EDGE_DEEP_FRAGMENT = gql`
  fragment TagEdgeDeep on TagEdge {
    __typename
    node {
      ...Tag
    }
    cursor
  }

  ${TAG_FRAGMENT}
`

export const AGGREGATE_TAG_DEEP_FRAGMENT = gql`
  fragment AggregateTagDeep on AggregateTag {
    __typename
    count
  }
`

export const TASK_CONNECTION_DEEP_FRAGMENT = gql`
  fragment TaskConnectionDeep on TaskConnection {
    __typename
    pageInfo {
      ...PageInfo
    }
    edges {
      ...TaskEdge
    }
    aggregate {
      ...AggregateTask
    }
  }

  ${PAGE_INFO_FRAGMENT}
  ${TASK_EDGE_FRAGMENT}
  ${AGGREGATE_TASK_FRAGMENT}
`

export const TASK_EDGE_DEEP_FRAGMENT = gql`
  fragment TaskEdgeDeep on TaskEdge {
    __typename
    node {
      ...Task
    }
    cursor
  }

  ${TASK_FRAGMENT}
`

export const AGGREGATE_TASK_DEEP_FRAGMENT = gql`
  fragment AggregateTaskDeep on AggregateTask {
    __typename
    count
  }
`

export const USER_CONNECTION_DEEP_FRAGMENT = gql`
  fragment UserConnectionDeep on UserConnection {
    __typename
    pageInfo {
      ...PageInfo
    }
    edges {
      ...UserEdge
    }
    aggregate {
      ...AggregateUser
    }
  }

  ${PAGE_INFO_FRAGMENT}
  ${USER_EDGE_FRAGMENT}
  ${AGGREGATE_USER_FRAGMENT}
`

export const USER_EDGE_DEEP_FRAGMENT = gql`
  fragment UserEdgeDeep on UserEdge {
    __typename
    node {
      ...User
    }
    cursor
  }

  ${USER_FRAGMENT}
`

export const AGGREGATE_USER_DEEP_FRAGMENT = gql`
  fragment AggregateUserDeep on AggregateUser {
    __typename
    count
  }
`

export const WORKFLOW_CONNECTION_DEEP_FRAGMENT = gql`
  fragment WorkflowConnectionDeep on WorkflowConnection {
    __typename
    pageInfo {
      ...PageInfo
    }
    edges {
      ...WorkflowEdge
    }
    aggregate {
      ...AggregateWorkflow
    }
  }

  ${PAGE_INFO_FRAGMENT}
  ${WORKFLOW_EDGE_FRAGMENT}
  ${AGGREGATE_WORKFLOW_FRAGMENT}
`

export const WORKFLOW_EDGE_DEEP_FRAGMENT = gql`
  fragment WorkflowEdgeDeep on WorkflowEdge {
    __typename
    node {
      ...Workflow
    }
    cursor
  }

  ${WORKFLOW_FRAGMENT}
`

export const AGGREGATE_WORKFLOW_DEEP_FRAGMENT = gql`
  fragment AggregateWorkflowDeep on AggregateWorkflow {
    __typename
    count
  }
`

export const BATCH_PAYLOAD_DEEP_FRAGMENT = gql`
  fragment BatchPayloadDeep on BatchPayload {
    __typename
    count
  }
`

export const ACCESS_PAYLOAD_DEEP_FRAGMENT = gql`
  fragment AccessPayloadDeep on AccessPayload {
    __typename
    token
  }
`

export const AUTH_PAYLOAD_DEEP_FRAGMENT = gql`
  fragment AuthPayloadDeep on AuthPayload {
    __typename
    token
    refresh
  }
`
