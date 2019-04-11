import { BidirectionalMap } from './bidirectional-map'
import { DigraphVertex } from './vertex'

/**
 * edge-key, vertex-key pair => points to some vertex
 */
export type Edge<E, K> = [E, K]

export type DigraphEntry<K, E, V> = [K, V, Array<Edge<E, K>>]

/**
 * represents private map value/one graph entry
 * re-mapped & mapped DigraphEntry for nicer API
 */
export interface DigraphMappedEntry<K, E, V> {
  value: V
  edges: BidirectionalMap<E, K>
}

/**
 * Implementation of Directed Multigraph (probs mathematically sketchy)
 *  - based on JS Maps
 *  - api like JS Maps
 *  - enters to `DigraphVertex` as to help with traversal
 *
 *  generics:
 *  - K (graph-unique) vertex key type
 *  - A (vertex-unique) edge key type
 *  - V arbitrary vertex value type
 */

export class Digraph<K, E, V> {
  public static from = <K, E, V>(entries: Array<DigraphEntry<K, E, V>>) =>
    new Digraph<K, E, V>(entries)

  private _map: Map<K, DigraphMappedEntry<K, E, V>>

  constructor(entries: Array<DigraphEntry<K, E, V>>) {
    this._map = new Map(
      entries.map(([key, value, edges]) => [
        key,
        { value, edges: BidirectionalMap.from(edges) },
      ]),
    )
  }

  /**
   * forwarding getters to keep map private for data integrity
   */
  public get = (key: K) => this._map.get(key)
  public has = (key: K) => this._map.has(key)
  public entries = () => this._map.entries()
  public keys = () => this._map.keys()
  public values = () => this._map.values()

  /**
   * delete vertex and associated edges from other verticies
   */
  public delete = (key: K) => {
    if (!this._map.has(key)) {
      return
    }

    const res = this._map.delete(key)

    for (const vtx of this._map.values()) {
      vtx.edges.deleteReverse(key)
    }

    return res
  }

  /**
   * sets new vertex, optionally creating new edges map
   */
  public set = (key: K, value: V, nextEdges?: Array<Edge<E, K>>) => {
    if (!this._map.has(key) || nextEdges) {
      // create next edges
      this._map.set(key, {
        value,
        edges: BidirectionalMap.from(nextEdges || []),
      })
    } else {
      // use prev edges
      this._map.set(key, {
        value,
        edges: this._map.get(key)!.edges,
      })
    }

    return this
  }

  /**
   * start walking on some entry
   *
   * external edge =>
   *  how inital point of entry should appear in the stack
   *  need to provide since keys can be of any type (so I cannot provide default)
   *  and this is kind of most semantic way to represent external intruction to graph
   */
  public start = (key: K, externalEdgeKey: E) =>
    new DigraphVertex<K, E, V>(this, key, [[externalEdgeKey, key]])
}
