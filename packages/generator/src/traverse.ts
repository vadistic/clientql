import {
  Edge,
  getRootTypes,
  Graph,
  GraphVertex,
  isStackCircural,
  replaceLastTypename,
  rootTypenameToOperationType,
  Typename,
  wrapDocument,
} from '@graphql-clientgen/core'

export type TraverseCallback = (
  vtx: GraphVertex,
  stack: Edge[],
) => undefined | null | void

// for now without editing, null to stop
export const traverseGraph = (graph: Graph) => (cb: TraverseCallback) => {
  const traverse = (vtx: GraphVertex | undefined, stack: Edge[]) => {
    if (!vtx) {
      return
    }

    const res = cb(vtx, stack)

    if (res === null) {
      return
    }

    if (vtx.implementations) {
      vtx.implementations.forEach(implem => {
        traverse(graph.get(implem), replaceLastTypename(stack, implem))
      })
    }

    if (vtx.prototypes) {
      vtx.prototypes.forEach(implem => {
        traverse(graph.get(implem), replaceLastTypename(stack, implem))
      })
    }

    if (vtx.edgesMap) {
      vtx.edgesMap.forEach((target, fieldname) => {
        const nextStack: Edge[] = [...stack, [fieldname, target]]
        if (!isStackCircural(nextStack)) {
          traverse(graph.get(target), [...stack, [fieldname, target]])
        }
      })
    }
  }

  getRootTypes(graph).forEach(root =>
    traverse(root, [
      [rootTypenameToOperationType(graph)(root.name)!, root.name],
    ]),
  )
}

export const getMinimalTypedefs = (graph: Graph) => {
  const register = new Set<Typename>()

  traverseGraph(graph)(vtx => {
    register.add(vtx.name)
  })

  return wrapDocument(
    ...Array.from(register).map(typename => graph.get(typename)!.value),
  )
}
