import { DocumentNode, FragmentDefinitionNode } from 'graphql'
import { SelectionResult } from './operation'
import { createTypeGraph, TypeGraph } from './type-graph'

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

  addTypename: boolean
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
  graph: TypeGraph
  // lazy map for reusable fragments
  fragments: Map<string, FragmentDefinitionNode>
  // testing to avoid traversing whole tree few times each op
  // lets store only complete ones (should cover 90% of the tree)
  selections: Map<string, SelectionResult>
}

export const getCoreProps = (
  doc: DocumentNode,
  config?: Partial<CoreConfig>,
): CoreProps => ({
  graph: createTypeGraph(doc),
  config: {
    ...defaultCoreConfig,
    ...config,
  },
  fragments: new Map(),
  selections: new Map(),
})
