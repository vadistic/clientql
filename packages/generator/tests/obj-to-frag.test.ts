import { FragmentType } from '@graphql-clientgen/shared'
import { getFragmentDefinition } from 'apollo-utilities'
import { ObjectTypeDefinitionNode, print } from 'graphql'
import gql from 'graphql-tag'
import { objectTypeToFragment } from '../src'
import { normalise, schema } from './fixture'

describe('object to fragment', () => {
  const candidateNode = schema.getType('Candidate')!
    .astNode! as ObjectTypeDefinitionNode

  it('default fragment', () => {
    const fragmentDefault = objectTypeToFragment(schema, FragmentType.DEFAULT)(
      candidateNode
    )

    const fragmentDefaultFixture = getFragmentDefinition(gql`
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
        company
        headline
        position
        resumesString
        coverLettersString
        avatar {
          ...FileFlat
        }
        resumesFile {
          ...FileFlat
        }
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
    `)

    expect(normalise(fragmentDefault)).toEqual(
      normalise(fragmentDefaultFixture)
    )
  })

  it('flat fragment', () => {
    const fragmentFlat = objectTypeToFragment(schema, FragmentType.FLAT)(
      candidateNode
    )!

    const fragmentFlatFixture = getFragmentDefinition(gql`
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
    `)

    expect(normalise(fragmentFlat)).toEqual(normalise(fragmentFlatFixture))
  })

  it('deep fragment', () => {
    const fragmentDeep = objectTypeToFragment(schema, FragmentType.DEEP)(
      candidateNode
    )

    const fragmentDeepFixture = getFragmentDefinition(gql`
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
        company
        headline
        position
        resumesString
        coverLettersString
        avatar {
          ...File
        }
        resumesFile {
          ...File
        }
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
    `)

    expect(normalise(fragmentDeep)).toEqual(normalise(fragmentDeepFixture))
  })
})
