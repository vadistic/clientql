export type DigraphEdgeLinkEntry<Edge, Name> = [Edge, Name]
export type DigraphEdgeWeigthEntry<Edge, Weigth> = [Edge, Weigth]

export interface DigraphVertexEntry<Name, Value, Edge, Weigth> {
  name: Name
  value: Value
  edgesArr?: Array<DigraphEdgeLinkEntry<Edge, Name>>
  weigthsArr?: Array<DigraphEdgeWeigthEntry<Edge, Weigth>>
  prototypes?: Name[]
  implementations?: Name[]
}

export interface DigraphVertex<Name, Value, Edge, Weigth>
  extends DigraphVertexEntry<Name, Value, Edge, Weigth> {
  edgesMap?: Map<Edge, Name>
  weightsMap?: Map<Edge, Weigth>
}

/**
 *  some sort of read-only Directed Multigraph with verticle inheritance
 *
 *   - it would be cool but to avoid bloat no editing capabilities
 *
 *   - it would be also cool to have some helper class and
 *     (bidirectional) edge map for each vertex but does not seem necessary and I'm afraif of cost
 *
 *   ! it's weird to handle semantically because
 *      - object implements interface,
 *      - union allow some objects to be it's "prototype"
 *     so I'll just allow setting this by proptype OR implementation and then recalc
 */

export class Digraph<Name, Value, Edge, Weigth> extends Map<
  Name,
  DigraphVertex<Name, Value, Edge, Weigth>
> {
  public static from = <K, V, E, W>(
    entries: Array<DigraphVertexEntry<K, V, E, W>>,
  ) => new Digraph<K, V, E, W>(entries)

  public prototypes = new Map<Name, Name[]>()
  public implementations = new Map<Name, Name[]>()

  constructor(entries: Array<DigraphVertexEntry<Name, Value, Edge, Weigth>>) {
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
    entry: DigraphVertexEntry<Name, Value, Edge, Weigth>,
  ): DigraphVertex<Name, Value, Edge, Weigth> => ({
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
    entry: DigraphVertexEntry<Name, Value, Edge, Weigth>,
  ) => {
    /*
     * this case is:
     *  => prototype = some interface
     *  => entry = some object type
     */
    if (entry.prototypes) {
      const prevProto = this.prototypes.get(entry.name) || []
      this.prototypes.set(entry.name, [...prevProto, ...entry.prototypes])

      // hate to nest loops but thay will be short (if any)
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
