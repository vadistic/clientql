import { DocumentNode, OperationTypeNode } from 'graphql'
import { FragmentName, OperationName, Typename } from './ast'
import { CoreConfig, defaultCoreConfig } from './config'
import { Graph, initGraph, initRootsMap } from './graph'
import { FragmentResult, OperationResult, SelectionsResult } from './operation'

/**
 * store to avoid traversing same graph branch hundreds of times
 */
export interface CoreCache {
  // lazy map for reusable fragments
  fragments: Map<FragmentName, FragmentResult>
  // lazy map for complete selections
  selections: Map<Typename, SelectionsResult>
  // lazy map for operations
  operations: Map<OperationName, OperationResult>
}

export const initCoreCache = (): CoreCache => ({
  fragments: new Map(),
  selections: new Map(),
  operations: new Map(),
})

/**
 * Uniform props for utils options
 */
export interface CoreProps {
  config: CoreConfig
  graph: Graph
  roots: Map<OperationTypeNode, Typename>
  cache: CoreCache
}

export const getCoreProps = (
  doc: DocumentNode,
  config?: Partial<CoreConfig>,
): CoreProps => {
  const graph = initGraph(doc)
  const roots = initRootsMap(doc)
  const cache = initCoreCache()

  return {
    graph,
    roots,
    cache,
    config: {
      ...defaultCoreConfig,
      ...config,
    },
  }
}
