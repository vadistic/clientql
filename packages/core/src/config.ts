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
