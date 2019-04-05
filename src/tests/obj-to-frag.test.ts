import { schema } from './fixture'
import { objectTypeToFragment, FragmentType } from '../object-to-fragment'
import { ObjectTypeDefinitionNode, print } from 'graphql'
import gql from 'graphql-tag'
import { getFragmentDefinition } from 'apollo-utilities'

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
      fragment CandidateFragment on Candidate {
        createdAt
        updatedAt
        avatar {
          ...FileFlatFragment
        }
        resumesFile {
          ...FileFlatFragment
        }
        coverLettersFile {
          ...FileFlatFragment
        }
        tags {
          ...TagFlatFragment
        }
        sources {
          ...SourceFlatFragment
        }
        fields {
          ...FieldInstanceFlatFragment
        }
        tasks {
          ...TaskFlatFragment
        }
        applications {
          ...ApplicationFlatFragment
        }
        comments {
          ...CommentFlatFragment
        }
      }
    `)

    expect(print(fragmentDefault)).toEqual(print(fragmentDefaultFixture))
  })

  it('flat fragment', () => {
    const fragmentFlat = objectTypeToFragment(
      schema,
      candidateNode,
      FragmentType.FLAT
    )!

    const fragmentFlatFixture = getFragmentDefinition(gql`
      fragment CandidateFlatFragment on Candidate {
        createdAt
        updatedAt
      }
    `)

    expect(print(fragmentFlat)).toEqual(print(fragmentFlatFixture))
  })

  it('deep fragment', () => {
    const fragmentDeep = objectTypeToFragment(
      schema,
      candidateNode,
      FragmentType.DEEP
    )!

    const fragmentDeepFixture = getFragmentDefinition(gql`
      fragment CandidateDeepFragment on Candidate {
        createdAt
        updatedAt
        avatar {
          ...FileDeepFragment
        }
        resumesFile {
          ...FileDeepFragment
        }
        coverLettersFile {
          ...FileDeepFragment
        }
        tags {
          ...TagDeepFragment
        }
        sources {
          ...SourceDeepFragment
        }
        fields {
          ...FieldInstanceDeepFragment
        }
        tasks {
          ...TaskDeepFragment
        }
        applications {
          ...ApplicationDeepFragment
        }
        comments {
          ...CommentDeepFragment
        }
      }
    `)

    expect(print(fragmentDeep)).toEqual(print(fragmentDeepFixture))
  })
})
