import { nonNull } from '@graphql-clientgen/shared'
import { GraphQLSchema, ObjectTypeDefinitionNode, print } from 'graphql'

/**
 * client will use root definitions to build Query so it'll come useful
 */
export const getRootNodes = (schema: GraphQLSchema) => {
  const query = schema.getQueryType()
  const queryNode = query && query.astNode
  const queryFields = (queryNode && queryNode.fields) || []

  const mutation = schema.getMutationType()
  const mutationNode = mutation && mutation.astNode
  const mutationFields = (mutationNode && mutationNode.fields) || []

  const subscription = schema.getSubscriptionType()
  const subscriptionNode = subscription && subscription.astNode
  const subscriptionFields = (subscriptionNode && subscriptionNode.fields) || []

  const rootFields = [...queryFields, ...mutationFields, ...subscriptionFields]
  const rootNodes = [queryNode, mutationNode, subscriptionNode].filter(nonNull)

  return {
    query,
    queryNode,
    queryFields,
    mutation,
    mutationNode,
    mutationFields,
    subscription,
    subscriptionNode,
    subscriptionFields,
    rootFields,
    rootNodes
  }
}
