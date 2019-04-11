import { Digraph, DigraphEntry, DigraphMappedEntry, Edge } from './digraph'

/**
 * represents state of graph traversal
 * (same shape as arrows of one vertex, do not mistake it)
 */
export type Stack<E, K> = Array<Edge<E, K>>

/**
 * wrapper for vertex map entry (DigraphMapVertex) with some apis & stack/state of traversal
 */
export class DigraphVertex<K, E, V> {
  public static from = <K, E, V>(
    digraph: Digraph<K, E, V>,
    key: K,
    stack: Stack<E, K> = [],
  ) => new DigraphVertex<K, E, V>(digraph, key, stack)

  public edges: DigraphMappedEntry<K, E, V>['edges']
  public value: DigraphMappedEntry<K, E, V>['value']

  constructor(
    public digraph: Digraph<K, E, V>,
    public key: K,
    public stack: Stack<E, K> = [],
  ) {
    const { edges, value } = this.digraph.get(this.key)!
    this.edges = edges
    this.value = value
  }

  /*
   * Walker API
   */

  public enter = (edgeKey: E) => {
    const key = this.edges.get(edgeKey)

    if (!key) {
      return
    }

    return new DigraphVertex<K, E, V>(this.digraph, key, [
      ...this.stack,
      [edgeKey, key],
    ])
  }

  public leave = () => {
    // getting second to last stack entry
    const [, key] =
      this.stack.length > 1 ? this.stack.slice(-2)[0] : [undefined, undefined]

    if (!key) {
      return
    }

    return new DigraphVertex<K, E, V>(
      this.digraph,
      key,
      this.stack.slice(0, -1),
    )
  }

  /**
   * return arr of `DigraphVertex` instances of possible targets
   *
   * TODO: this needs better api....
   */
  public targets = () => {
    const res = []
    for (const edgeKey of this.edges.keys()) {
      res.push(this.enter(edgeKey))
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
    const res: Array<DigraphEntry<K, E, V>> = []
    for (const [key, vtx] of this.digraph.entries()) {
      if (!vtx.edges.hasValue(this.key)) {
        continue
      }

      res.push([
        key,
        vtx.value,
        vtx.edges.getValueKeys(this.key)!.map(edgeKey => [edgeKey, this.key]),
      ])
    }

    return res
  }

  /*
   * Bindings for `Digraph` methods
   */

  public set = (value: V, nextEdges?: Array<Edge<E, K>>) =>
    this.digraph.set(this.key, value, nextEdges) && this

  public delete = () => this.digraph.delete(this.key)
}
