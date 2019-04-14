import { createClientProxy } from '@graphql-clientgen/client'
import { PRISMA_TYPEDEFS } from '@graphql-clientgen/testing'
import { apolloClient } from './apollo'
import { TYPEDEFS } from './generated/client/typedefs'

export const client = createClientProxy({
  client: apolloClient,
  // typedefs: PRISMA_TYPEDEFS,
  typedefs: TYPEDEFS,
})
