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
  /**
   * suffix for flat fragments
   * @default 'Flat'
   */
  fragmentFlatSuffix: string
  /**
   * suffix for deep fragments
   * @default 'Deep'
   */
  fragmentDeepSuffix: string
  /**
   * suffix for deep fragments that does not have their whole tree
   * only for custom fragments, operations do not use it since it's not normalised
   * @default 'Partial'
   */
  fragmentPartialSuffix: string
  /**
   * adds typename to generated selections/operations
   * 'string' for generator compatibiliy only
   */
  addTypename: boolean | 'string'
}

export const defaultCoreConfig: CoreConfig = {
  maxDepth: 4,
  useFragments: FragmentType.FLAT,
  fragmentFlatSuffix: 'Flat',
  fragmentDeepSuffix: 'Deep',
  fragmentPartialSuffix: 'Partial',
  addTypename: true,
}
