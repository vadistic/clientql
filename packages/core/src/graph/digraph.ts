import { DigraphVertex, DigraphVertexEntry } from './types'

/**
 *  Digraph is some sort of read-only Directed Multigraph with verticle inheritance
 *
 *   - no editing capabilities (avoiding bloat)
 *
 *   - no bidirectional maps for each vertex (also to avoid bloat)
 *
 *   - inheritance follow graphQL semantics and is resolved on init:
 *      - object type inherits (actualy implements) interface type
 *      - union type allow some objects to be it's "prototype"
 */

export class Digraph<Name, Value, EdgeKey, Weigth> extends Map<
  Name,
  DigraphVertex<Name, Value, EdgeKey, Weigth>
> {
  public static from = <K, V, E, W>(
    entries: Array<DigraphVertexEntry<K, V, E, W>>,
  ) => new Digraph<K, V, E, W>(entries)

  public prototypes = new Map<Name, Name[]>()
  public implementations = new Map<Name, Name[]>()

  constructor(
    entries: Array<DigraphVertexEntry<Name, Value, EdgeKey, Weigth>>,
  ) {
    super()

    // calc inheritance
    for (const entry of entries) {
      this._buildInheritance(entry)
    }

    // set updated entries
    for (const entry of entries) {
      this.set(entry.name, this._buildMaps(entry))
    }
  }

  private _buildMaps = (
    entry: DigraphVertexEntry<Name, Value, EdgeKey, Weigth>,
  ): DigraphVertex<Name, Value, EdgeKey, Weigth> => ({
    ...entry,
    implementations: this.implementations.get(entry.name),
    prototypes: this.prototypes.get(entry.name),
    edgesMap:
      entry.edgesArr && entry.edgesArr.length !== 0
        ? new Map(entry.edgesArr)
        : undefined,
    weightsMap:
      entry.weigthsArr && entry.weigthsArr.length !== 0
        ? new Map(entry.weigthsArr)
        : undefined,
  })

  private _buildInheritance = (
    entry: DigraphVertexEntry<Name, Value, EdgeKey, Weigth>,
  ) => {
    /*
     * this case is:
     *  => prototype = some interface
     *  => entry = some object type
     */
    if (entry.prototypes) {
      const prevProto = this.prototypes.get(entry.name) || []
      this.prototypes.set(entry.name, [...prevProto, ...entry.prototypes])

      // hate to nest loops but that will be short (if any)
      entry.prototypes.forEach(proto => {
        const prevImpl = this.implementations.get(proto) || []
        this.implementations.set(proto, [...prevImpl, entry.name])
      })
    }

    /*
     * and this is:
     *  => implementation = some object type
     *  => entry = some union type
     */
    if (entry.implementations) {
      // not possible, but nvm
      const prevImpl = this.implementations.get(entry.name) || []
      this.implementations.set(entry.name, [
        ...prevImpl,
        ...entry.implementations,
      ])

      entry.implementations.forEach(impl => {
        const prevProto = this.prototypes.get(impl) || []
        this.implementations.set(impl, [...prevProto, entry.name])
      })
    }
  }
}
