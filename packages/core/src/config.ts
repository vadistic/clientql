import { DocumentNode } from 'graphql'
import { createGraph, Graph } from './graph'
import { FragmentResult, OperationResult, SelectionsResult } from './operation'

export enum FragmentType {
  /** use flat fragments when possible */
  FLAT = 'Flat',
  /** use one deep fragment */
  DEEP = 'Deep',
  /** do not use fragments */
  NONE = 'None',
}

/**
 * Config for runtime client
 */

export interface CoreConfig {
  /**
   * how deep operations/fragments should query
   * 0 === flat
   * @default 3
   */
  maxDepth: number

  /**
   * idea is that operation can query using different kind of fragments
   */
  useFragments: FragmentType

  addTypename: boolean | 'string'
}

export const defaultCoreConfig: CoreConfig = {
  maxDepth: 4,
  useFragments: FragmentType.FLAT,
  addTypename: true,
}

/**
 * Uniform props for utils options
 */
export interface CoreProps {
  config: CoreConfig
  graph: Graph
  // lazy map for reusable fragments
  fragments: Map<string, FragmentResult>
  // lazy map for complete selections
  selections: Map<string, SelectionsResult>
  // lazy map for operations
  operations: Map<string, OperationResult>
}

export const getCoreProps = (
  doc: DocumentNode,
  config?: Partial<CoreConfig>,
): CoreProps => ({
  graph: createGraph(doc),
  config: {
    ...defaultCoreConfig,
    ...config,
  },
  fragments: new Map(),
  selections: new Map(),
  operations: new Map(),
})
