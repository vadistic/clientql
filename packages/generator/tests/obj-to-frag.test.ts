import { getFragmentDefinition } from 'apollo-utilities'
import { ObjectTypeDefinitionNode, print } from 'graphql'
import gql from 'graphql-tag'
import { FragmentType, objectTypeToFragment } from '../src'
import { normalise, schema } from './fixture'

describe('object to fragment', () => {
  const candidateNode = schema.getType('Candidate')!
    .astNode! as ObjectTypeDefinitionNode

  it('default fragment', () => {
    const fragmentDefault = objectTypeToFragment(
      schema,
      candidateNode,
      FragmentType.DEFAULT
    )!

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
    const fragmentFlat = objectTypeToFragment(
      schema,
      candidateNode,
      FragmentType.FLAT
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
    const fragmentDeep = objectTypeToFragment(
      schema,
      candidateNode,
      FragmentType.DEEP
    )!

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
