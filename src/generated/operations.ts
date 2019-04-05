import gql from 'graphql-tag'
import {
  APPLICATION_FRAGMENT,
  APPLICATION_CONNECTION_FRAGMENT,
  CANDIDATE_FRAGMENT,
  CANDIDATE_CONNECTION_FRAGMENT,
  JOB_FRAGMENT,
  JOB_CONNECTION_FRAGMENT,
  SOURCE_FRAGMENT,
  SOURCE_CONNECTION_FRAGMENT,
  TAG_FRAGMENT,
  TAG_CONNECTION_FRAGMENT,
  TASK_FRAGMENT,
  TASK_CONNECTION_FRAGMENT,
  USER_FRAGMENT,
  USER_CONNECTION_FRAGMENT,
  WORKFLOW_FRAGMENT,
  WORKFLOW_CONNECTION_FRAGMENT,
  BATCH_PAYLOAD_FRAGMENT
} from './fragments'

export const APPLICATION_QUERY = gql`
  query Application($where: ApplicationWhereUniqueInput!) {
    application(where: $where) {
      ...Application
    }
  }

  ${APPLICATION_FRAGMENT}
`

export const APPLICATIONS_QUERY = gql`
  query Applications($where: ApplicationWhereInput, $orderBy: ApplicationOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    applications(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...Application
    }
  }

  ${APPLICATION_FRAGMENT}
`

export const APPLICATIONS_CONNECTION_QUERY = gql`
  query ApplicationsConnection($where: ApplicationWhereInput, $orderBy: ApplicationOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    applicationsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...ApplicationConnection
    }
  }

  ${APPLICATION_CONNECTION_FRAGMENT}
`

export const CANDIDATE_QUERY = gql`
  query Candidate($where: CandidateWhereUniqueInput!) {
    candidate(where: $where) {
      ...Candidate
    }
  }

  ${CANDIDATE_FRAGMENT}
`

export const CANDIDATES_QUERY = gql`
  query Candidates($where: CandidateWhereInput, $orderBy: CandidateOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    candidates(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...Candidate
    }
  }

  ${CANDIDATE_FRAGMENT}
`

export const CANDIDATES_CONNECTION_QUERY = gql`
  query CandidatesConnection($where: CandidateWhereInput, $orderBy: CandidateOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    candidatesConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...CandidateConnection
    }
  }

  ${CANDIDATE_CONNECTION_FRAGMENT}
`

export const JOB_QUERY = gql`
  query Job($where: JobWhereUniqueInput!) {
    job(where: $where) {
      ...Job
    }
  }

  ${JOB_FRAGMENT}
`

export const JOBS_QUERY = gql`
  query Jobs($where: JobWhereInput, $orderBy: JobOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    jobs(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...Job
    }
  }

  ${JOB_FRAGMENT}
`

export const JOBS_CONNECTION_QUERY = gql`
  query JobsConnection($where: JobWhereInput, $orderBy: JobOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    jobsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...JobConnection
    }
  }

  ${JOB_CONNECTION_FRAGMENT}
`

export const SOURCE_QUERY = gql`
  query Source($where: SourceWhereUniqueInput!) {
    source(where: $where) {
      ...Source
    }
  }

  ${SOURCE_FRAGMENT}
`

export const SOURCES_QUERY = gql`
  query Sources($where: SourceWhereInput, $orderBy: SourceOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    sources(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...Source
    }
  }

  ${SOURCE_FRAGMENT}
`

export const SOURCES_CONNECTION_QUERY = gql`
  query SourcesConnection($where: SourceWhereInput, $orderBy: SourceOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    sourcesConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...SourceConnection
    }
  }

  ${SOURCE_CONNECTION_FRAGMENT}
`

export const TAG_QUERY = gql`
  query Tag($where: TagWhereUniqueInput!) {
    tag(where: $where) {
      ...Tag
    }
  }

  ${TAG_FRAGMENT}
`

export const TAGS_QUERY = gql`
  query Tags($where: TagWhereInput, $orderBy: TagOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    tags(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...Tag
    }
  }

  ${TAG_FRAGMENT}
`

export const TAGS_CONNECTION_QUERY = gql`
  query TagsConnection($where: TagWhereInput, $orderBy: TagOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    tagsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...TagConnection
    }
  }

  ${TAG_CONNECTION_FRAGMENT}
`

export const TASK_QUERY = gql`
  query Task($where: TaskWhereUniqueInput!) {
    task(where: $where) {
      ...Task
    }
  }

  ${TASK_FRAGMENT}
`

export const TASKS_QUERY = gql`
  query Tasks($where: TaskWhereInput, $orderBy: TaskOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    tasks(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...Task
    }
  }

  ${TASK_FRAGMENT}
`

export const TASKS_CONNECTION_QUERY = gql`
  query TasksConnection($where: TaskWhereInput, $orderBy: TaskOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    tasksConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...TaskConnection
    }
  }

  ${TASK_CONNECTION_FRAGMENT}
`

export const USER_QUERY = gql`
  query User($where: UserWhereUniqueInput!) {
    user(where: $where) {
      ...User
    }
  }

  ${USER_FRAGMENT}
`

export const USERS_QUERY = gql`
  query Users($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    users(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...User
    }
  }

  ${USER_FRAGMENT}
`

export const USERS_CONNECTION_QUERY = gql`
  query UsersConnection($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    usersConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...UserConnection
    }
  }

  ${USER_CONNECTION_FRAGMENT}
`

export const WORKFLOW_QUERY = gql`
  query Workflow($where: WorkflowWhereUniqueInput!) {
    workflow(where: $where) {
      ...Workflow
    }
  }

  ${WORKFLOW_FRAGMENT}
`

export const WORKFLOWS_QUERY = gql`
  query Workflows($where: WorkflowWhereInput, $orderBy: WorkflowOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    workflows(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...Workflow
    }
  }

  ${WORKFLOW_FRAGMENT}
`

export const WORKFLOWS_CONNECTION_QUERY = gql`
  query WorkflowsConnection($where: WorkflowWhereInput, $orderBy: WorkflowOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    workflowsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      ...WorkflowConnection
    }
  }

  ${WORKFLOW_CONNECTION_FRAGMENT}
`

export const CREATE_APPLICATION_MUTATION = gql`
  mutation CreateApplication($data: ApplicationCreateInput!) {
    createApplication(data: $data) {
      ...Application
    }
  }

  ${APPLICATION_FRAGMENT}
`

export const UPDATE_APPLICATION_MUTATION = gql`
  mutation UpdateApplication($data: ApplicationUpdateInput!, $where: ApplicationWhereUniqueInput!) {
    updateApplication(data: $data, where: $where) {
      ...Application
    }
  }

  ${APPLICATION_FRAGMENT}
`

export const UPDATE_MANY_APPLICATIONS_MUTATION = gql`
  mutation UpdateManyApplications($data: ApplicationUpdateManyMutationInput!, $where: ApplicationWhereInput) {
    updateManyApplications(data: $data, where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const UPSERT_APPLICATION_MUTATION = gql`
  mutation UpsertApplication($where: ApplicationWhereUniqueInput!, $create: ApplicationCreateInput!, $update: ApplicationUpdateInput!) {
    upsertApplication(where: $where, create: $create, update: $update) {
      ...Application
    }
  }

  ${APPLICATION_FRAGMENT}
`

export const DELETE_APPLICATION_MUTATION = gql`
  mutation DeleteApplication($where: ApplicationWhereUniqueInput!) {
    deleteApplication(where: $where) {
      ...Application
    }
  }

  ${APPLICATION_FRAGMENT}
`

export const DELETE_MANY_APPLICATIONS_MUTATION = gql`
  mutation DeleteManyApplications($where: ApplicationWhereInput) {
    deleteManyApplications(where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const CREATE_CANDIDATE_MUTATION = gql`
  mutation CreateCandidate($data: CandidateCreateInput!) {
    createCandidate(data: $data) {
      ...Candidate
    }
  }

  ${CANDIDATE_FRAGMENT}
`

export const UPDATE_CANDIDATE_MUTATION = gql`
  mutation UpdateCandidate($data: CandidateUpdateInput!, $where: CandidateWhereUniqueInput!) {
    updateCandidate(data: $data, where: $where) {
      ...Candidate
    }
  }

  ${CANDIDATE_FRAGMENT}
`

export const UPDATE_MANY_CANDIDATES_MUTATION = gql`
  mutation UpdateManyCandidates($data: CandidateUpdateManyMutationInput!, $where: CandidateWhereInput) {
    updateManyCandidates(data: $data, where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const UPSERT_CANDIDATE_MUTATION = gql`
  mutation UpsertCandidate($where: CandidateWhereUniqueInput!, $create: CandidateCreateInput!, $update: CandidateUpdateInput!) {
    upsertCandidate(where: $where, create: $create, update: $update) {
      ...Candidate
    }
  }

  ${CANDIDATE_FRAGMENT}
`

export const DELETE_CANDIDATE_MUTATION = gql`
  mutation DeleteCandidate($where: CandidateWhereUniqueInput!) {
    deleteCandidate(where: $where) {
      ...Candidate
    }
  }

  ${CANDIDATE_FRAGMENT}
`

export const DELETE_MANY_CANDIDATES_MUTATION = gql`
  mutation DeleteManyCandidates($where: CandidateWhereInput) {
    deleteManyCandidates(where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const CREATE_JOB_MUTATION = gql`
  mutation CreateJob($data: JobCreateInput!) {
    createJob(data: $data) {
      ...Job
    }
  }

  ${JOB_FRAGMENT}
`

export const UPDATE_JOB_MUTATION = gql`
  mutation UpdateJob($data: JobUpdateInput!, $where: JobWhereUniqueInput!) {
    updateJob(data: $data, where: $where) {
      ...Job
    }
  }

  ${JOB_FRAGMENT}
`

export const UPDATE_MANY_JOBS_MUTATION = gql`
  mutation UpdateManyJobs($data: JobUpdateManyMutationInput!, $where: JobWhereInput) {
    updateManyJobs(data: $data, where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const UPSERT_JOB_MUTATION = gql`
  mutation UpsertJob($where: JobWhereUniqueInput!, $create: JobCreateInput!, $update: JobUpdateInput!) {
    upsertJob(where: $where, create: $create, update: $update) {
      ...Job
    }
  }

  ${JOB_FRAGMENT}
`

export const DELETE_JOB_MUTATION = gql`
  mutation DeleteJob($where: JobWhereUniqueInput!) {
    deleteJob(where: $where) {
      ...Job
    }
  }

  ${JOB_FRAGMENT}
`

export const DELETE_MANY_JOBS_MUTATION = gql`
  mutation DeleteManyJobs($where: JobWhereInput) {
    deleteManyJobs(where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const CREATE_SOURCE_MUTATION = gql`
  mutation CreateSource($data: SourceCreateInput!) {
    createSource(data: $data) {
      ...Source
    }
  }

  ${SOURCE_FRAGMENT}
`

export const UPDATE_SOURCE_MUTATION = gql`
  mutation UpdateSource($data: SourceUpdateInput!, $where: SourceWhereUniqueInput!) {
    updateSource(data: $data, where: $where) {
      ...Source
    }
  }

  ${SOURCE_FRAGMENT}
`

export const UPDATE_MANY_SOURCES_MUTATION = gql`
  mutation UpdateManySources($data: SourceUpdateManyMutationInput!, $where: SourceWhereInput) {
    updateManySources(data: $data, where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const UPSERT_SOURCE_MUTATION = gql`
  mutation UpsertSource($where: SourceWhereUniqueInput!, $create: SourceCreateInput!, $update: SourceUpdateInput!) {
    upsertSource(where: $where, create: $create, update: $update) {
      ...Source
    }
  }

  ${SOURCE_FRAGMENT}
`

export const DELETE_SOURCE_MUTATION = gql`
  mutation DeleteSource($where: SourceWhereUniqueInput!) {
    deleteSource(where: $where) {
      ...Source
    }
  }

  ${SOURCE_FRAGMENT}
`

export const DELETE_MANY_SOURCES_MUTATION = gql`
  mutation DeleteManySources($where: SourceWhereInput) {
    deleteManySources(where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const CREATE_TAG_MUTATION = gql`
  mutation CreateTag($data: TagCreateInput!) {
    createTag(data: $data) {
      ...Tag
    }
  }

  ${TAG_FRAGMENT}
`

export const UPDATE_TAG_MUTATION = gql`
  mutation UpdateTag($data: TagUpdateInput!, $where: TagWhereUniqueInput!) {
    updateTag(data: $data, where: $where) {
      ...Tag
    }
  }

  ${TAG_FRAGMENT}
`

export const UPDATE_MANY_TAGS_MUTATION = gql`
  mutation UpdateManyTags($data: TagUpdateManyMutationInput!, $where: TagWhereInput) {
    updateManyTags(data: $data, where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const UPSERT_TAG_MUTATION = gql`
  mutation UpsertTag($where: TagWhereUniqueInput!, $create: TagCreateInput!, $update: TagUpdateInput!) {
    upsertTag(where: $where, create: $create, update: $update) {
      ...Tag
    }
  }

  ${TAG_FRAGMENT}
`

export const DELETE_TAG_MUTATION = gql`
  mutation DeleteTag($where: TagWhereUniqueInput!) {
    deleteTag(where: $where) {
      ...Tag
    }
  }

  ${TAG_FRAGMENT}
`

export const DELETE_MANY_TAGS_MUTATION = gql`
  mutation DeleteManyTags($where: TagWhereInput) {
    deleteManyTags(where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($data: TaskCreateInput!) {
    createTask(data: $data) {
      ...Task
    }
  }

  ${TASK_FRAGMENT}
`

export const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
    updateTask(data: $data, where: $where) {
      ...Task
    }
  }

  ${TASK_FRAGMENT}
`

export const UPDATE_MANY_TASKS_MUTATION = gql`
  mutation UpdateManyTasks($data: TaskUpdateManyMutationInput!, $where: TaskWhereInput) {
    updateManyTasks(data: $data, where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const UPSERT_TASK_MUTATION = gql`
  mutation UpsertTask($where: TaskWhereUniqueInput!, $create: TaskCreateInput!, $update: TaskUpdateInput!) {
    upsertTask(where: $where, create: $create, update: $update) {
      ...Task
    }
  }

  ${TASK_FRAGMENT}
`

export const DELETE_TASK_MUTATION = gql`
  mutation DeleteTask($where: TaskWhereUniqueInput!) {
    deleteTask(where: $where) {
      ...Task
    }
  }

  ${TASK_FRAGMENT}
`

export const DELETE_MANY_TASKS_MUTATION = gql`
  mutation DeleteManyTasks($where: TaskWhereInput) {
    deleteManyTasks(where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      ...User
    }
  }

  ${USER_FRAGMENT}
`

export const CREATE_WORKFLOW_MUTATION = gql`
  mutation CreateWorkflow($data: WorkflowCreateInput!) {
    createWorkflow(data: $data) {
      ...Workflow
    }
  }

  ${WORKFLOW_FRAGMENT}
`

export const UPDATE_WORKFLOW_MUTATION = gql`
  mutation UpdateWorkflow($data: WorkflowUpdateInput!, $where: WorkflowWhereUniqueInput!) {
    updateWorkflow(data: $data, where: $where) {
      ...Workflow
    }
  }

  ${WORKFLOW_FRAGMENT}
`

export const UPDATE_MANY_WORKFLOWS_MUTATION = gql`
  mutation UpdateManyWorkflows($data: WorkflowUpdateManyMutationInput!, $where: WorkflowWhereInput) {
    updateManyWorkflows(data: $data, where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`

export const UPSERT_WORKFLOW_MUTATION = gql`
  mutation UpsertWorkflow($where: WorkflowWhereUniqueInput!, $create: WorkflowCreateInput!, $update: WorkflowUpdateInput!) {
    upsertWorkflow(where: $where, create: $create, update: $update) {
      ...Workflow
    }
  }

  ${WORKFLOW_FRAGMENT}
`

export const DELETE_WORKFLOW_MUTATION = gql`
  mutation DeleteWorkflow($where: WorkflowWhereUniqueInput!) {
    deleteWorkflow(where: $where) {
      ...Workflow
    }
  }

  ${WORKFLOW_FRAGMENT}
`

export const DELETE_MANY_WORKFLOWS_MUTATION = gql`
  mutation DeleteManyWorkflows($where: WorkflowWhereInput) {
    deleteManyWorkflows(where: $where) {
      ...BatchPayload
    }
  }

  ${BATCH_PAYLOAD_FRAGMENT}
`