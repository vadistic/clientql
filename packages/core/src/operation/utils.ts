import { Fieldname, Typename } from '../ast'
import { CoreProps } from '../config'
import { Edge } from '../graph'
import { findRootOperation } from './root'

export const retriveFragmentsFromCache = (props: CoreProps) => (
  fragmentnames: string[],
) => fragmentnames.map(name => props.fragments.get(name)!.fragment)

export const onlyUnique = (input: string[]) =>
  Array.from(new Set(input).values())

export const lastTypename = (stack: Edge[]) => stack[stack.length - 1][1]
export const lastFieldname = (stack: Edge[]) => stack[stack.length - 1][0]

export const replaceLastTypename = (
  stack: Edge[],
  typename: Typename,
): Edge[] => [...stack.slice(0, -1), [stack.slice(-1)[0][0], typename]]

/**
 * no idea if I'm doing it right
 * I'm disallowing to duplicate typename on the stack
 */
export const isStackCircural = (stack: Edge[]) => {
  // cannot circle just on the begining
  if (stack.length === 1) {
    return false
  }
  const typename = lastTypename(stack)

  return stack.slice(0, -1).some(([fname, tname]) => tname === typename)
}
/**
 * TODO: probably delete this one
 */
export const isValidPath = (props: CoreProps) => (path: Fieldname[]) => {
  // head must be on root type
  const root = findRootOperation(props.graph)(path[0])

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
