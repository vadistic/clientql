import { wrapDocument } from '@graphql-clientgen/shared'
import { getOperationDefinition } from 'apollo-utilities'
import { DocumentNode, FieldDefinitionNode, print } from 'graphql'
import gql from 'graphql-tag'
import { fieldDefinitionToOperation } from '../src/'
import { mutation } from './fixture'

describe('field to operation', () => {
  const createCandidate = mutation.fields!.find(
    field => field.name.value === 'createCandidate'
  ) as FieldDefinitionNode

  const fixture = gql`
    query CreateCandidateQuery($data: CandidateCreateInput!) {
      createCandidate(data: $data) {
        __typename
      }
    }
  ` as DocumentNode

  const fixtureOperation = getOperationDefinition(fixture)!

  const operation = fieldDefinitionToOperation(createCandidate, 'query')

  it('fieldDefinitionToOperation', () => {
    expect(print(operation)).toBe(print(fixtureOperation))
  })

  it('operationToDocument', () => {
    expect(print(wrapDocument(operation))).toEqual(print(fixture))
  })
})
