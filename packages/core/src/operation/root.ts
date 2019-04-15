import { OperationTypeNode } from 'graphql'
import { Fieldname, Typename } from '../ast'
import { Graph } from '../graph'
import { nonNull } from '../utils'

export const operationTypes: OperationTypeNode[] = [
  'query',
  'mutation',
  'subscription',
]

/**
 *  TODO: This should support custom schema definition
 */
export const getRootTypes = (graph: Graph) => {
  const query = graph.get('Query')
  const mutation = graph.get('Mutation')
  const subscription = graph.get('Subscription')

  return [query, mutation, subscription].filter(nonNull)
}

export const getRootTypenames = (graph: Graph) =>
  getRootTypes(graph).map(vtx => vtx.name)

/**
 *  TODO: This should support custom schema definition too
 */
export const rootTypenameToOperationType = (graph: Graph) => (
  typename: Typename,
): OperationTypeNode | undefined => {
  switch (typename) {
    case 'Query':
      return 'query'
    case 'Mutation':
      return 'mutation'
    case 'Subscription':
      return 'subscription'
  }
}

export const operationTypeToRootTypename = (graph: Graph) => (
  type: OperationTypeNode,
): Typename | undefined => {
  switch (type) {
    case 'query':
      return 'Query'
    case 'mutation':
      return 'Mutation'
    case 'subscription':
      return 'Subscription'
  }
}

export const findRootOperation = (graph: Graph) => (head: Fieldname) => {
  for (const root of getRootTypes(graph)) {
    if (root.edgesMap && root.edgesMap.has(head)) {
      return {
        type: rootTypenameToOperationType(graph)(root.name)!,
        name: root.name,
        vtx: root,
      }
    }
  }
}
