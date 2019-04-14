import { OperationTypeNode } from 'graphql'
import { Fieldname, Typename } from '../ast'
import { CoreProps } from '../config'
import { Edge } from '../type-graph'
import { nonNull } from '../utils'

/**
 *  TODO: This should support custom schema definition
 */
export const getRootTypes = (props: CoreProps) => {
  const query = props.graph.get('Query')
  const mutation = props.graph.get('Mutation')
  const subscription = props.graph.get('Subscription')

  return [query, mutation, subscription].filter(nonNull)
}

export const getRootTypenames = (props: CoreProps) =>
  getRootTypes(props).map(vtx => vtx.name)

/**
 *  TODO: This should support custom schema definition too
 */
export const rootTypenameToOperationType = (
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

export const findRootOperation = (props: CoreProps) => (head: Fieldname) => {
  for (const root of getRootTypes(props)) {
    if (root.edgesMap && root.edgesMap.has(head)) {
      return {
        type: rootTypenameToOperationType(root.name)!,
        name: root.name,
        vtx: root,
      }
    }
  }
}

// without retriving nested deps for now, because selections has all deps
// cache is now having unique values so this utils does not make much sense
export const retriveCacheFragments = (props: CoreProps) => (
  fragmentnames: string[],
) => fragmentnames.map(name => props.fragments.get(name)!.definition)

export const onlyUnique = (input: string[]) =>
  Array.from(new Set(input).values())

export const lastTypename = (stack: Edge[]) => stack[stack.length - 1][1]
export const lastFieldname = (stack: Edge[]) => stack[stack.length - 1][0]

export const replaceLastTypename = (
  stack: Edge[],
  typename: Typename,
): Edge[] => [...stack.slice(0, -1), [stack.slice(-1)[0][0], typename]]

/**
 * no idea how to check it...
 * I'm disallowing to duplicate typename in the stack
 */
export const isStackCircural = (props: CoreProps) => (stack: Edge[]) => {
  // cannot circle just on the begining
  if (stack.length === 1) {
    return false
  }
  const typename = lastTypename(stack)

  return stack.slice(0, -1).some(([fname, tname]) => tname === typename)
}

export const isValidPath = (props: CoreProps) => (path: Fieldname[]) => {
  // head must be on root type
  const root = findRootOperation(props)(path[0])

  if (!root) {
    return false
  }

  const walk = (from: Typename, paths: Fieldname[]): boolean => {
    const [head, ...tail] = paths
    return tail.length === 0
      ? true
      : props.graph.has(from) &&
          !!props.graph.get(from)!.edgesMap &&
          !!props.graph.get(from)!.edgesMap!.get(head) &&
          walk(props.graph.get(from)!.edgesMap!.get(head)!, tail)
  }

  return walk(root.name, path)
}
