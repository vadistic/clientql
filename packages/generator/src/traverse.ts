import {
  Edge,
  getRootTypes,
  GraphVertex,
  isStackCircural,
  replaceLastTypename,
  rootTypenameToOperationType,
} from '@graphql-clientgen/core'
import { GeneratorProps } from './generator'

export type TraverseCallback = (
  vtx: GraphVertex,
  stack: Edge[],
) => undefined | null | void

// for now without editing, null to stop
export const traverseGraph = (props: GeneratorProps) => (
  cb: TraverseCallback,
) => {
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
        traverse(props.graph.get(implem), replaceLastTypename(stack, implem))
      })
    }

    if (vtx.prototypes) {
      vtx.prototypes.forEach(implem => {
        traverse(props.graph.get(implem), replaceLastTypename(stack, implem))
      })
    }

    if (vtx.edgesMap) {
      vtx.edgesMap.forEach((target, fieldname) => {
        const nextStack: Edge[] = [...stack, [fieldname, target]]
        if (!isStackCircural(props)(nextStack)) {
          traverse(props.graph.get(target), [...stack, [fieldname, target]])
        }
      })
    }
  }

  getRootTypes(props).forEach(root =>
    traverse(root, [[rootTypenameToOperationType(root.name)!, root.name]]),
  )
}
