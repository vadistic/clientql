import { DocumentNode } from 'graphql'
import { createGraphQLGraph, GraphQLGraph } from './graphql-graph'

/**
 * Build fragment for typename
 * TODO: Later
 */

export enum FragmentType {
  FLAT = 'Flat',
  DEEP = 'Deep',
  NONE = 'None',
}

/**
 * Config for runtime client
 */

export interface CoreConfig {
  /**
   * how deep operation should query
   * @default: '2'
   */
  operationDepth: number
  /**
   * idea is that operation can:
   * 1) not to use fragments, just fields
   * 2) use one big, deep fragment namespaced to itself
   * 3) use set of completly flat fragments for each node that can be shared acros operations
   * @default: 'FLAT'
   */
  useFragments: FragmentType

  addTypename: boolean
}

export const defaultCoreConfig: CoreConfig = {
  operationDepth: 2,
  useFragments: FragmentType.FLAT,
  addTypename: true,
}

/**
 * Uniform props for utils options
 */
export interface CoreProps {
  config: CoreConfig
  graph: GraphQLGraph
}

export const getCoreProps = (
  doc: DocumentNode,
  config?: Partial<CoreConfig>,
): CoreProps => ({
  graph: createGraphQLGraph(doc),
  config: {
    ...defaultCoreConfig,
    ...config,
  },
})
