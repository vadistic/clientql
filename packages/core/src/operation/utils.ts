import { FragmentName, Typename } from '../ast'
import { CoreProps } from '../core'
import { Edge } from '../graph'

export const retriveFragmentsFromCache = (props: CoreProps) => (
  dependencies: FragmentName[],
) => dependencies.map(name => props.cache.fragments.get(name)!.fragment)

export const onlyUnique = <T>(input: T[]) => Array.from(new Set(input).values())

export const lastTypename = (stack: Edge[]) => stack[stack.length - 1][1]
export const lastFieldname = (stack: Edge[]) => stack[stack.length - 1][0]

export const replaceLastTypename = (
  stack: Edge[],
  typename: Typename,
): Edge[] => [...stack.slice(0, -1), [stack.slice(-1)[0][0], typename]]

/**
 * prevent entering circle
 *
 * no idea if I'm doing it - I'm disallowing to duplicate typename on the stack
 */
export const isStackCircural = (stack: Edge[]) => {
  // cannot circle just on the begining
  if (stack.length === 1) {
    return false
  }
  const typename = lastTypename(stack)

  return stack.slice(0, -1).some(([fname, tname]) => tname === typename)
}
