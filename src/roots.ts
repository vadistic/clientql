import { GraphQLSchema, print, ObjectTypeDefinitionNode } from 'graphql'
import { filterNull } from './utils'

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
  const rootNodes = [queryNode, mutationNode, subscriptionNode].filter(
    filterNull
  )

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

export const printRootsToJs = (rootNodes: ObjectTypeDefinitionNode[]) => {
  const imports = `import gql from 'graphql-tag'`

  const main = rootNodes
    .map(root =>
      `
export const ${root.name.value} = gql\`
  ${print(root).replace(/\n/gm, '\n  ')}
\`
`.trim()
    )
    .join('\n\n')

  return [imports, main].join('\n\n')
}
