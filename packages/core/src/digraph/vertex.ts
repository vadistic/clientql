import {
  ArrowEntry,
  Digraph,
  DigraphEntry,
  DigraphMappedEntry,
} from './digraph'

/**
 * represents state of graph traversal
 * (same shape as arrows of one vertex, do not mistke it)
 */
export type Stack<A, K> = Array<ArrowEntry<A, K>>

/**
 * wrapper for vertex map entry (DigraphMapVertex) with some apis & stack/state of traversal
 */
export class DigraphVertex<K, A, V> {
  public arrows: DigraphMappedEntry<K, A, V>['arrows']
  public value: DigraphMappedEntry<K, A, V>['value']

  constructor(
    public digraph: Digraph<K, A, V>,
    public key: K,
    public stack: Stack<A, K> = [],
  ) {
    const { arrows, value } = this.digraph.get(this.key)!
    this.arrows = arrows
    this.value = value
  }

  /*
   * Walker API
   */

  public enter = (arrow: A) => {
    const key = this.arrows.get(arrow)

    if (!key) {
      return
    }

    return new DigraphVertex<K, A, V>(this.digraph, key, [
      ...this.stack,
      [arrow, key],
    ])
  }

  public leave = () => {
    // getting second to last stack entry
    const [arrow, key] =
      this.stack.length > 1 ? this.stack.slice(-2)[0] : [undefined, undefined]

    if (!key) {
      return
    }

    return new DigraphVertex<K, A, V>(
      this.digraph,
      key,
      this.stack.slice(0, -1),
    )
  }

  /**
   * return arr of `DigraphVertex` instances of possible targets
   *
   * use arrows.entries/values to just lookup names
   */
  public targets = () => {
    const res = []
    for (const arrow of this.arrows.keys()) {
      res.push(this.enter(arrow))
    }

    return res
  }

  /**
   * check verticies that can point to this one
   *
   * this cannot be done with stack intact so I'm returning
   * array of DigraphEntry with subset of arrows arrows (for consistency)
   */
  public sources = () => {
    const res: Array<DigraphEntry<K, A, V>> = []
    for (const [key, vtx] of this.digraph.entries()) {
      if (!vtx.arrows.hasReverse(this.key)) {
        continue
      }

      res.push([
        key,
        vtx.value,
        vtx.arrows.getReverse(this.key)!.map(arrow => [arrow, this.key]),
      ])
    }

    return res
  }

  /*
   * Bindings for `Digraphq methods
   */

  public set = (value: V, nextArrows?: Array<ArrowEntry<A, K>>) =>
    this.digraph.set(this.key, value, nextArrows) && this

  public delete = () => this.digraph.delete(this.key)
}
