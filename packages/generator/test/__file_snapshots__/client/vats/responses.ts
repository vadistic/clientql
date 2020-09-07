/*
 *
 * Code generated by clientql generator.
 * DO NOT EDIT.
 * Please don't change this file manually but run generator to update it.
 * For more information check: https"//github.com/vadistic/clientql
 *
 */

import {
  DateTime,
  Json,
  Long,
  ApplicationOrderByInput,
  ApplicationType,
  CandidateOrderByInput,
  CommentOrderByInput,
  DisqualificationOrderByInput,
  FieldInstanceOrderByInput,
  FieldOrderByInput,
  FieldType,
  FileOrderByInput,
  InviteOrderByInput,
  JobOrderByInput,
  JobType,
  LocationOrderByInput,
  ReviewInstanceOrderByInput,
  ReviewOrderByInput,
  SourceOrderByInput,
  StageOrderByInput,
  StageType,
  TagOrderByInput,
  TaskOrderByInput,
  UserOrderByInput,
  WorkflowOrderByInput
} from './types'

/*
 *
 * Responses
 *
 */

export type ApplicationResponse = ApplicationFlatPartial & {
  disqualification?: DisqualificationInstanceFlatPartial & {
    prototype: DisqualificationFlat
    createdBy: UserFlatPartial & {
      tasks?: TaskFlatPartial
      avatar?: FileFlat
    }
  }
  stage: StageFlat
  reviews?: ReviewInstanceFlatPartial & {
    prototype?: ReviewFlat & {
      fields?: FieldFlat
    }
    fields?: FieldInstanceFlat & {
      prototype: FieldFlat
    }
    createdBy: UserFlatPartial & {
      tasks?: TaskFlatPartial
      avatar?: FileFlat
    }
  }
  job: JobFlatPartial & {
    workspace: WorkspaceFlatPartial & {
      users?: UserFlatPartial
      candidates?: CandidateFlatPartial
      workflows?: WorkflowFlatPartial
      invites?: InviteFlatPartial
    }
    workflow: WorkflowFlatPartial & {
      stages?: StageFlat
      disqualifications?: DisqualificationFlat
      fields?: FieldFlat
      reviews?: ReviewFlat & {
        fields?: FieldFlat
      }
    }
    comments?: CommentFlatPartial & {
      createdBy: UserFlatPartial
    }
    locations?: LocationFlat
  }
  candidate: CandidateFlatPartial & {
    avatar?: FileFlat
    resumesFile?: FileFlat
    coverLettersFile?: FileFlat
    tags?: TagFlat
    sources?: SourceFlat
    fields?: FieldInstanceFlat & {
      prototype: FieldFlat
    }
    tasks?: TaskFlatPartial & {
      owners?: UserFlatPartial
    }
    comments?: CommentFlatPartial & {
      createdBy: UserFlatPartial
    }
  }
}

export type DisqualificationInstanceResponse = DisqualificationInstanceFlatPartial & {
  prototype: DisqualificationFlat
  createdBy: UserFlatPartial & {
    tasks?: TaskFlatPartial & {
      candidate?: CandidateFlatPartial
    }
    avatar?: FileFlat
  }
}

export type DisqualificationResponse = DisqualificationFlat

export type UserResponse = UserFlatPartial & {
  tasks?: TaskFlatPartial & {
    candidate?: CandidateFlatPartial & {
      avatar?: FileFlat
      resumesFile?: FileFlat
      coverLettersFile?: FileFlat
      tags?: TagFlat
      sources?: SourceFlat
      fields?: FieldInstanceFlat & {
        prototype: FieldFlat
      }
      applications?: ApplicationFlatPartial
      comments?: CommentFlatPartial
    }
  }
  avatar?: FileFlat
}

export type TaskResponse = TaskFlatPartial & {
  owners?: UserFlatPartial & {
    avatar?: FileFlat
  }
  candidate?: CandidateFlatPartial & {
    avatar?: FileFlat
    resumesFile?: FileFlat
    coverLettersFile?: FileFlat
    tags?: TagFlat
    sources?: SourceFlat
    fields?: FieldInstanceFlat & {
      prototype: FieldFlat
    }
    applications?: ApplicationFlatPartial & {
      disqualification?: DisqualificationInstanceFlatPartial
      stage: StageFlat
      reviews?: ReviewInstanceFlatPartial
      job: JobFlatPartial
    }
    comments?: CommentFlatPartial & {
      createdBy: UserFlatPartial
    }
  }
}

export type CandidateResponse = CandidateFlatPartial & {
  avatar?: FileFlat
  resumesFile?: FileFlat
  coverLettersFile?: FileFlat
  tags?: TagFlat
  sources?: SourceFlat
  fields?: FieldInstanceFlat & {
    prototype: FieldFlat
  }
  tasks?: TaskFlatPartial & {
    owners?: UserFlatPartial & {
      avatar?: FileFlat
    }
  }
  applications?: ApplicationFlatPartial & {
    disqualification?: DisqualificationInstanceFlatPartial & {
      prototype: DisqualificationFlat
      createdBy: UserFlatPartial
    }
    stage: StageFlat
    reviews?: ReviewInstanceFlatPartial & {
      prototype?: ReviewFlat & {
        fields?: FieldFlat
      }
      fields?: FieldInstanceFlat & {
        prototype: FieldFlat
      }
      createdBy: UserFlatPartial
    }
    job: JobFlatPartial & {
      workspace: WorkspaceFlatPartial
      workflow: WorkflowFlatPartial
      comments?: CommentFlatPartial
      locations?: LocationFlat
    }
  }
  comments?: CommentFlatPartial & {
    createdBy: UserFlatPartial & {
      tasks?: TaskFlatPartial
      avatar?: FileFlat
    }
  }
}

export type FileResponse = FileFlat

export type TagResponse = TagFlat

export type SourceResponse = SourceFlat

export type FieldInstanceResponse = FieldInstanceFlat & {
  prototype: FieldFlat
}

export type FieldResponse = FieldFlat

export type CommentResponse = CommentFlatPartial & {
  createdBy: UserFlatPartial & {
    tasks?: TaskFlatPartial & {
      candidate?: CandidateFlatPartial
    }
    avatar?: FileFlat
  }
}

export type StageResponse = StageFlat

export type ReviewInstanceResponse = ReviewInstanceFlatPartial & {
  prototype?: ReviewFlat & {
    fields?: FieldFlat
  }
  fields?: FieldInstanceFlat & {
    prototype: FieldFlat
  }
  createdBy: UserFlatPartial & {
    tasks?: TaskFlatPartial & {
      candidate?: CandidateFlatPartial
    }
    avatar?: FileFlat
  }
}

export type ReviewResponse = ReviewFlat & {
  fields?: FieldFlat
}

export type JobResponse = JobFlatPartial & {
  workspace: WorkspaceFlatPartial & {
    users?: UserFlatPartial & {
      tasks?: TaskFlatPartial
      avatar?: FileFlat
    }
    candidates?: CandidateFlatPartial & {
      avatar?: FileFlat
      resumesFile?: FileFlat
      coverLettersFile?: FileFlat
      tags?: TagFlat
      sources?: SourceFlat
      fields?: FieldInstanceFlat & {
        prototype: FieldFlat
      }
      tasks?: TaskFlatPartial
      applications?: ApplicationFlatPartial
      comments?: CommentFlatPartial
    }
    workflows?: WorkflowFlatPartial & {
      stages?: StageFlat
      disqualifications?: DisqualificationFlat
      fields?: FieldFlat
      reviews?: ReviewFlat & {
        fields?: FieldFlat
      }
    }
    invites?: InviteFlatPartial & {
      invitedBy: UserFlatPartial
    }
  }
  applications?: ApplicationFlatPartial & {
    disqualification?: DisqualificationInstanceFlatPartial & {
      prototype: DisqualificationFlat
      createdBy: UserFlatPartial
    }
    stage: StageFlat
    reviews?: ReviewInstanceFlatPartial & {
      prototype?: ReviewFlat & {
        fields?: FieldFlat
      }
      fields?: FieldInstanceFlat & {
        prototype: FieldFlat
      }
      createdBy: UserFlatPartial
    }
    candidate: CandidateFlatPartial & {
      avatar?: FileFlat
      resumesFile?: FileFlat
      coverLettersFile?: FileFlat
      tags?: TagFlat
      sources?: SourceFlat
      fields?: FieldInstanceFlat & {
        prototype: FieldFlat
      }
      tasks?: TaskFlatPartial
      comments?: CommentFlatPartial
    }
  }
  workflow: WorkflowFlatPartial & {
    stages?: StageFlat
    disqualifications?: DisqualificationFlat
    fields?: FieldFlat
    reviews?: ReviewFlat & {
      fields?: FieldFlat
    }
  }
  comments?: CommentFlatPartial & {
    createdBy: UserFlatPartial & {
      tasks?: TaskFlatPartial
      avatar?: FileFlat
    }
  }
  locations?: LocationFlat
}

export type WorkspaceResponse = WorkspaceFlatPartial & {
  users?: UserFlatPartial & {
    tasks?: TaskFlatPartial & {
      candidate?: CandidateFlatPartial
    }
    avatar?: FileFlat
  }
  jobs?: JobFlatPartial & {
    applications?: ApplicationFlatPartial & {
      disqualification?: DisqualificationInstanceFlatPartial
      stage: StageFlat
      reviews?: ReviewInstanceFlatPartial
      candidate: CandidateFlatPartial
    }
    workflow: WorkflowFlatPartial & {
      stages?: StageFlat
      disqualifications?: DisqualificationFlat
      fields?: FieldFlat
      reviews?: ReviewFlat & {
        fields?: FieldFlat
      }
    }
    comments?: CommentFlatPartial & {
      createdBy: UserFlatPartial
    }
    locations?: LocationFlat
  }
  candidates?: CandidateFlatPartial & {
    avatar?: FileFlat
    resumesFile?: FileFlat
    coverLettersFile?: FileFlat
    tags?: TagFlat
    sources?: SourceFlat
    fields?: FieldInstanceFlat & {
      prototype: FieldFlat
    }
    tasks?: TaskFlatPartial & {
      owners?: UserFlatPartial
    }
    applications?: ApplicationFlatPartial & {
      disqualification?: DisqualificationInstanceFlatPartial
      stage: StageFlat
      reviews?: ReviewInstanceFlatPartial
      job: JobFlatPartial
    }
    comments?: CommentFlatPartial & {
      createdBy: UserFlatPartial
    }
  }
  workflows?: WorkflowFlatPartial & {
    jobs?: JobFlatPartial & {
      applications?: ApplicationFlatPartial
      comments?: CommentFlatPartial
      locations?: LocationFlat
    }
    stages?: StageFlat
    disqualifications?: DisqualificationFlat
    fields?: FieldFlat
    reviews?: ReviewFlat & {
      fields?: FieldFlat
    }
  }
  invites?: InviteFlatPartial & {
    invitedBy: UserFlatPartial & {
      tasks?: TaskFlatPartial
      avatar?: FileFlat
    }
  }
}

export type WorkflowResponse = WorkflowFlatPartial & {
  jobs?: JobFlatPartial & {
    workspace: WorkspaceFlatPartial & {
      users?: UserFlatPartial
      candidates?: CandidateFlatPartial
      invites?: InviteFlatPartial
    }
    applications?: ApplicationFlatPartial & {
      disqualification?: DisqualificationInstanceFlatPartial
      stage: StageFlat
      reviews?: ReviewInstanceFlatPartial
      candidate: CandidateFlatPartial
    }
    comments?: CommentFlatPartial & {
      createdBy: UserFlatPartial
    }
    locations?: LocationFlat
  }
  stages?: StageFlat
  disqualifications?: DisqualificationFlat
  fields?: FieldFlat
  reviews?: ReviewFlat & {
    fields?: FieldFlat
  }
}

export type InviteResponse = InviteFlatPartial & {
  invitedBy: UserFlatPartial & {
    tasks?: TaskFlatPartial & {
      candidate?: CandidateFlatPartial
    }
    avatar?: FileFlat
  }
}

export type LocationResponse = LocationFlat

export type ApplicationConnectionResponse = {
  __typename: 'ApplicationConnection'
  pageInfo: PageInfoFlat
  edges: ApplicationEdgeFlatPartial & {
    node: ApplicationFlatPartial & {
      disqualification?: DisqualificationInstanceFlatPartial
      stage: StageFlat
      reviews?: ReviewInstanceFlatPartial
      job: JobFlatPartial
      candidate: CandidateFlatPartial
    }
  }
  aggregate: AggregateApplicationFlat
}

export type PageInfoResponse = PageInfoFlat

export type ApplicationEdgeResponse = ApplicationEdgeFlatPartial & {
  node: ApplicationFlatPartial & {
    disqualification?: DisqualificationInstanceFlatPartial & {
      prototype: DisqualificationFlat
      createdBy: UserFlatPartial
    }
    stage: StageFlat
    reviews?: ReviewInstanceFlatPartial & {
      prototype?: ReviewFlat & {
        fields?: FieldFlat
      }
      fields?: FieldInstanceFlat & {
        prototype: FieldFlat
      }
      createdBy: UserFlatPartial
    }
    job: JobFlatPartial & {
      workspace: WorkspaceFlatPartial
      workflow: WorkflowFlatPartial
      comments?: CommentFlatPartial
      locations?: LocationFlat
    }
    candidate: CandidateFlatPartial & {
      avatar?: FileFlat
      resumesFile?: FileFlat
      coverLettersFile?: FileFlat
      tags?: TagFlat
      sources?: SourceFlat
      fields?: FieldInstanceFlat & {
        prototype: FieldFlat
      }
      tasks?: TaskFlatPartial
      comments?: CommentFlatPartial
    }
  }
}

export type AggregateApplicationResponse = AggregateApplicationFlat

export type CandidateConnectionResponse = {
  __typename: 'CandidateConnection'
  pageInfo: PageInfoFlat
  edges: CandidateEdgeFlatPartial & {
    node: CandidateFlatPartial & {
      avatar?: FileFlat
      resumesFile?: FileFlat
      coverLettersFile?: FileFlat
      tags?: TagFlat
      sources?: SourceFlat
      fields?: FieldInstanceFlat & {
        prototype: FieldFlat
      }
      tasks?: TaskFlatPartial
      applications?: ApplicationFlatPartial
      comments?: CommentFlatPartial
    }
  }
  aggregate: AggregateCandidateFlat
}

export type CandidateEdgeResponse = CandidateEdgeFlatPartial & {
  node: CandidateFlatPartial & {
    avatar?: FileFlat
    resumesFile?: FileFlat
    coverLettersFile?: FileFlat
    tags?: TagFlat
    sources?: SourceFlat
    fields?: FieldInstanceFlat & {
      prototype: FieldFlat
    }
    tasks?: TaskFlatPartial & {
      owners?: UserFlatPartial
    }
    applications?: ApplicationFlatPartial & {
      disqualification?: DisqualificationInstanceFlatPartial
      stage: StageFlat
      reviews?: ReviewInstanceFlatPartial
      job: JobFlatPartial
    }
    comments?: CommentFlatPartial & {
      createdBy: UserFlatPartial
    }
  }
}

export type AggregateCandidateResponse = AggregateCandidateFlat

export type JobConnectionResponse = {
  __typename: 'JobConnection'
  pageInfo: PageInfoFlat
  edges: JobEdgeFlatPartial & {
    node: JobFlatPartial & {
      workspace: WorkspaceFlatPartial
      applications?: ApplicationFlatPartial
      workflow: WorkflowFlatPartial
      comments?: CommentFlatPartial
      locations?: LocationFlat
    }
  }
  aggregate: AggregateJobFlat
}

export type JobEdgeResponse = JobEdgeFlatPartial & {
  node: JobFlatPartial & {
    workspace: WorkspaceFlatPartial & {
      users?: UserFlatPartial
      candidates?: CandidateFlatPartial
      workflows?: WorkflowFlatPartial
      invites?: InviteFlatPartial
    }
    applications?: ApplicationFlatPartial & {
      disqualification?: DisqualificationInstanceFlatPartial
      stage: StageFlat
      reviews?: ReviewInstanceFlatPartial
      candidate: CandidateFlatPartial
    }
    workflow: WorkflowFlatPartial & {
      stages?: StageFlat
      disqualifications?: DisqualificationFlat
      fields?: FieldFlat
      reviews?: ReviewFlat & {
        fields?: FieldFlat
      }
    }
    comments?: CommentFlatPartial & {
      createdBy: UserFlatPartial
    }
    locations?: LocationFlat
  }
}

export type AggregateJobResponse = AggregateJobFlat

export type SourceConnectionResponse = {
  __typename: 'SourceConnection'
  pageInfo: PageInfoFlat
  edges: SourceEdgeFlat & {
    node: SourceFlat
  }
  aggregate: AggregateSourceFlat
}

export type SourceEdgeResponse = SourceEdgeFlat & {
  node: SourceFlat
}

export type AggregateSourceResponse = AggregateSourceFlat

export type TagConnectionResponse = {
  __typename: 'TagConnection'
  pageInfo: PageInfoFlat
  edges: TagEdgeFlat & {
    node: TagFlat
  }
  aggregate: AggregateTagFlat
}

export type TagEdgeResponse = TagEdgeFlat & {
  node: TagFlat
}

export type AggregateTagResponse = AggregateTagFlat

export type TaskConnectionResponse = {
  __typename: 'TaskConnection'
  pageInfo: PageInfoFlat
  edges: TaskEdgeFlatPartial & {
    node: TaskFlatPartial & {
      owners?: UserFlatPartial
      candidate?: CandidateFlatPartial
    }
  }
  aggregate: AggregateTaskFlat
}

export type TaskEdgeResponse = TaskEdgeFlatPartial & {
  node: TaskFlatPartial & {
    owners?: UserFlatPartial & {
      avatar?: FileFlat
    }
    candidate?: CandidateFlatPartial & {
      avatar?: FileFlat
      resumesFile?: FileFlat
      coverLettersFile?: FileFlat
      tags?: TagFlat
      sources?: SourceFlat
      fields?: FieldInstanceFlat & {
        prototype: FieldFlat
      }
      applications?: ApplicationFlatPartial
      comments?: CommentFlatPartial
    }
  }
}

export type AggregateTaskResponse = AggregateTaskFlat

export type UserConnectionResponse = {
  __typename: 'UserConnection'
  pageInfo: PageInfoFlat
  edges: UserEdgeFlatPartial & {
    node: UserFlatPartial & {
      tasks?: TaskFlatPartial
      avatar?: FileFlat
    }
  }
  aggregate: AggregateUserFlat
}

export type UserEdgeResponse = UserEdgeFlatPartial & {
  node: UserFlatPartial & {
    tasks?: TaskFlatPartial & {
      candidate?: CandidateFlatPartial
    }
    avatar?: FileFlat
  }
}

export type AggregateUserResponse = AggregateUserFlat

export type WorkflowConnectionResponse = {
  __typename: 'WorkflowConnection'
  pageInfo: PageInfoFlat
  edges: WorkflowEdgeFlatPartial & {
    node: WorkflowFlatPartial & {
      jobs?: JobFlatPartial
      stages?: StageFlat
      disqualifications?: DisqualificationFlat
      fields?: FieldFlat
      reviews?: ReviewFlat & {
        fields?: FieldFlat
      }
    }
  }
  aggregate: AggregateWorkflowFlat
}

export type WorkflowEdgeResponse = WorkflowEdgeFlatPartial & {
  node: WorkflowFlatPartial & {
    jobs?: JobFlatPartial & {
      workspace: WorkspaceFlatPartial
      applications?: ApplicationFlatPartial
      comments?: CommentFlatPartial
      locations?: LocationFlat
    }
    stages?: StageFlat
    disqualifications?: DisqualificationFlat
    fields?: FieldFlat
    reviews?: ReviewFlat & {
      fields?: FieldFlat
    }
  }
}

export type AggregateWorkflowResponse = AggregateWorkflowFlat

export type BatchPayloadResponse = BatchPayloadFlat

/*
 *
 * Fragments
 *
 */

export type ApplicationFlatPartial = {
  __typename: 'Application'
  createdAt: string
  id: string
  updatedAt: string
  type: ApplicationType
}

export type DisqualificationInstanceFlatPartial = {
  __typename: 'DisqualificationInstance'
  id: string
  createdAt: string
  updatedAt: string
  content?: string | null
}

export type DisqualificationFlat = {
  __typename: 'Disqualification'
  id: string
  createdAt: string
  updatedAt: string
  name: string
  description?: string | null
}

export type UserFlatPartial = {
  __typename: 'User'
  id: string
  createdAt: string
  updatedAt: string
  settings?: any | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin?: string | null
  deletedAt?: string | null
  position?: string | null
}

export type TaskFlatPartial = {
  __typename: 'Task'
  id: string
  createdAt: string
  updatedAt: string
  title?: string | null
  description?: string | null
  dueAt?: string | null
}

export type FileFlat = {
  __typename: 'File'
  id: string
  createdAt: string
  updatedAt: string
  size: number
  type: string
  name: string
  url: string
}

export type StageFlat = {
  __typename: 'Stage'
  id: string
  createdAt: string
  updatedAt: string
  name: string
  description?: string | null
  type: StageType
  index: number
}

export type ReviewInstanceFlatPartial = {
  __typename: 'ReviewInstance'
  id: string
  createdAt: string
  updatedAt: string
  rating?: number | null
  content?: string | null
}

export type ReviewFlat = {
  __typename: 'Review'
  id: string
  createdAt: string
  updatedAt: string
  name: string
}

export type FieldFlat = {
  __typename: 'Field'
  id: string
  createdAt: string
  updatedAt: string
  type: FieldType
  label: string
  description?: string | null
}

export type FieldInstanceFlat = {
  __typename: 'FieldInstance'
  id: string
  createdAt: string
  updatedAt: string
  value?: string | null
}

export type JobFlatPartial = {
  __typename: 'Job'
  id: string
  createdAt: string
  updatedAt: string
  type: JobType
  department?: string | null
  name: string
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export type WorkspaceFlatPartial = {
  __typename: 'Workspace'
  id: string
  createdAt: string
  updatedAt: string
  settings?: any | null
  name: string
}

export type CandidateFlatPartial = {
  __typename: 'Candidate'
  id: string
  createdAt: string
  updatedAt: string
  firstName?: string | null
  lastName?: string | null
  emails: string[]
  phones: string[]
  links: string[]
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString: string[]
  coverLettersString: string[]
}

export type WorkflowFlatPartial = {
  __typename: 'Workflow'
  id: string
  createdAt: string
  updatedAt: string
  name: string
  description?: string | null
}

export type InviteFlatPartial = {
  __typename: 'Invite'
  id: string
  createdAt: string
  updatedAt: string
  email: string
  expireAt: string
}

export type CommentFlatPartial = {
  __typename: 'Comment'
  id: string
  createdAt: string
  updatedAt: string
  content: string
}

export type LocationFlat = {
  __typename: 'Location'
  id: string
  createdAt: string
  updatedAt: string
  country: string
  region?: string | null
  city: string
  zip?: string | null
}

export type TagFlat = {
  __typename: 'Tag'
  id: string
  createdAt: string
  updatedAt: string
  label: string
  description?: string | null
}

export type SourceFlat = {
  __typename: 'Source'
  id: string
  createdAt: string
  updatedAt: string
  label: string
  description?: string | null
}

export type PageInfoFlat = {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor?: string | null
  endCursor?: string | null
}

export type ApplicationEdgeFlatPartial = {
  __typename: 'ApplicationEdge'
  cursor: string
}

export type AggregateApplicationFlat = {
  __typename: 'AggregateApplication'
  count: number
}

export type CandidateEdgeFlatPartial = {
  __typename: 'CandidateEdge'
  cursor: string
}

export type AggregateCandidateFlat = {
  __typename: 'AggregateCandidate'
  count: number
}

export type JobEdgeFlatPartial = {
  __typename: 'JobEdge'
  cursor: string
}

export type AggregateJobFlat = {
  __typename: 'AggregateJob'
  count: number
}

export type SourceEdgeFlat = {
  __typename: 'SourceEdge'
  cursor: string
}

export type AggregateSourceFlat = {
  __typename: 'AggregateSource'
  count: number
}

export type TagEdgeFlat = {
  __typename: 'TagEdge'
  cursor: string
}

export type AggregateTagFlat = {
  __typename: 'AggregateTag'
  count: number
}

export type TaskEdgeFlatPartial = {
  __typename: 'TaskEdge'
  cursor: string
}

export type AggregateTaskFlat = {
  __typename: 'AggregateTask'
  count: number
}

export type UserEdgeFlatPartial = {
  __typename: 'UserEdge'
  cursor: string
}

export type AggregateUserFlat = {
  __typename: 'AggregateUser'
  count: number
}

export type WorkflowEdgeFlatPartial = {
  __typename: 'WorkflowEdge'
  cursor: string
}

export type AggregateWorkflowFlat = {
  __typename: 'AggregateWorkflow'
  count: number
}

export type BatchPayloadFlat = {
  __typename: 'BatchPayload'
  count: number
}
