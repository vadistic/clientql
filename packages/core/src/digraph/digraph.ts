import { BidirectionalMap } from './bidirectional-map'
import { DigraphVertex } from './vertex'

/**
 * arrow-key, vertex-key pair => points to some vertex
 */
export type ArrowEntry<A, K> = [A, K]

export type DigraphEntry<K, A, V> = [K, V, Array<ArrowEntry<A, K>>]

/**
 * represents private map value/one graph entry
 * re-mapped & mapped DigraphEntry for nicer API
 */
export interface DigraphMappedEntry<K, A, V> {
  value: V
  arrows: BidirectionalMap<A, K>
}

/**
 * Implementation of Directed Multigraph (probs mathematically sketchy)
 *  - based on JS Maps
 *  - api like JS Maps
 *  - enters to `DigraphVertex` as to help with traversal
 *
 *  generics:
 *  - K unique vertex key type
 *  - A vertex-unique arrow key type
 *  - V arbitrary vertex value type
 */

export class Digraph<K, A, V> {
  public static from = <K, A, V>(entries: Array<DigraphEntry<K, A, V>>) =>
    new Digraph<K, A, V>(entries)

  private map: Map<K, DigraphMappedEntry<K, A, V>>

  constructor(entries: Array<DigraphEntry<K, A, V>>) {
    this.map = new Map(
      entries.map(([key, value, arrowEntries]) => [
        key,
        { value, arrows: BidirectionalMap.from(arrowEntries) },
      ]),
    )
  }

  /**
   * forwarding getters to keep map private for data integrity
   */
  public get = (key: K) => this.map.get(key)
  public has = (key: K) => this.map.has(key)
  public entries = () => this.map.entries()
  public keys = () => this.map.keys()
  public values = () => this.map.values()

  /**
   * delete vertex and associated arrows from other verticies
   */
  public delete = (key: K) => {
    if (!this.map.has(key)) {
      return
    }

    const res = this.map.delete(key)

    for (const vtx of this.map.values()) {
      vtx.arrows.deleteReverse(key)
    }

    return res
  }

  /**
   * sets new vertex, optionally creating new arrows map
   */
  public set = (key: K, value: V, nextArrows?: Array<ArrowEntry<A, K>>) => {
    if (!this.map.has(key) || nextArrows) {
      this.map.set(key, {
        value,
        arrows: BidirectionalMap.from(nextArrows || []),
      })
    }

    const prevArrows = this.map.get(key)!.arrows

    this.map.set(key, { value, arrows: prevArrows })

    return this
  }

  /**
   * start walking on some entry
   *
   * external arrow =>
   * how inital point of entry should appear in the stack
   * need to provide since keys can be of any type
   */
  public start = (key: K, externalArrow: A) =>
    new DigraphVertex<K, A, V>(this, key, [[externalArrow, key]])
}
