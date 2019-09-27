import { DocumentNode, OperationTypeNode, SchemaDefinitionNode } from 'graphql'
import { Kind, Typename } from '../ast'

/**
 * map OperationType to ast node
 *
 * maybe should be put in graph to avoid second loop,
 * but I want those utils to be simple & single issue
 *
 * also, too verbose but nvm
 */
export const initRootsMap = (doc: DocumentNode) => {
  let schemaNode: SchemaDefinitionNode | undefined

  let hasQuery = false
  let hasMutation = false
  let hasSubscription = false

  for (const node of doc.definitions) {
    if (node.kind === Kind.SCHEMA_DEFINITION) {
      schemaNode = node
    }

    if (node.kind === Kind.OBJECT_TYPE_DEFINITION) {
      if (node.name.value === 'Query') {
        hasQuery = true
      }
      if (node.name.value === 'Mutation') {
        hasMutation = true
      }
      if (node.name.value === 'Subscription') {
        hasSubscription = true
      }
    }
  }

  const roots = new Map<OperationTypeNode, Typename>()

  // defaults
  if (!schemaNode) {
    if (hasQuery) {
      roots.set('query', 'Query')
    }
    if (hasMutation) {
      roots.set('mutation', 'Mutation')
    }
    if (hasSubscription) {
      roots.set('subscription', 'Subscription')
    }

    return roots
  }

  // custom
  schemaNode.operationTypes.forEach(node => {
    roots.set(node.operation, node.type.name.value)
  })

  return roots
}
