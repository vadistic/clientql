import gql from 'graphql-tag'
import { typeDefs } from './generated/prisma-client/prisma-schema'

/**
 * Standard prisma schema
 * https://github.com/prisma/prisma-examples/blob/master/typescript/graphql-crud/src/generated/schema.graphql
 */

export const PRISMA_TYPEDEFS = gql(typeDefs)
