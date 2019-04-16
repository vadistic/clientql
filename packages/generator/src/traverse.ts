import {
  Edge,
  GraphVertex,
  isStackCircural,
  replaceLastTypename,
  Typename,
  wrapDocument,
} from '@graphql-clientgen/core'
import { GeneratorProps } from './generator'

export type TraverseCallback = (
  vtx: GraphVertex,
  stack: Edge[],
) => undefined | null | void

export const traverseGraph = (props: GeneratorProps) => (
  cb: TraverseCallback,
) => {
  /**
   * kind of hard to avoid infinite loops in some weird cases of nested unions etc
   * also - lots of duplicate path traversals in deeper nesting
   * so lets just keep global stack registry
   *
   * it may be cleaner to use my OperationEdge instead, but stack in callback seems more useful
   */

  const register = new Set<string>()
  const serialise = (stack: Edge[]) =>
    stack.map(tuple => tuple.join('/')).join('///')

  const traverse = (vtx: GraphVertex | undefined, stack: Edge[]) => {
    if (!vtx) {
      return
    }

    const stackString = serialise(stack)

    if (register.has(stackString)) {
      return
    } else {
      register.add(stackString)
    }

    const res = cb(vtx, stack)

    if (res === null) {
      return
    }

    if (vtx.implementations) {
      vtx.implementations.forEach(implem => {
        const nextStack = replaceLastTypename(stack, implem)
        if (!isStackCircural(nextStack)) {
          traverse(props.graph.get(implem), nextStack)
        }
      })
    }

    if (vtx.edgesMap) {
      vtx.edgesMap.forEach((target, fieldname) => {
        const nextStack: Edge[] = [...stack, [fieldname, target]]
        if (!isStackCircural(nextStack)) {
          traverse(props.graph.get(target), [...stack, [fieldname, target]])
        }
      })
    }
  }

  props.roots.forEach((root, operationType) =>
    traverse(props.graph.get(root)!, [[operationType, root]]),
  )
}

export const getMinimalTypedefs = (props: GeneratorProps) => {
  const register = new Set<Typename>()

  traverseGraph(props)(vtx => {
    register.add(vtx.name)
  })

  return wrapDocument(
    ...Array.from(register).map(typename => props.graph.get(typename)!.value),
  )
}
