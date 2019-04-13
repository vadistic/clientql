import { createClientProxy } from '@graphql-clientgen/client'
import { PRISMA_TYPEDEFS } from '@graphql-clientgen/testing'
import { apolloClient } from './apollo'

export const client = createClientProxy({
  client: apolloClient,
  typedefs: PRISMA_TYPEDEFS,
})
