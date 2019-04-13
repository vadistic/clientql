
export class BidirectionalMap <K,V> {
  /**
   * create `new BidirectionalMap()` from entries or `Map() instance`
   */
  public static from = <K,V>(entries?: Array<[K, V]> | Map<K,V>) =>
    new BidirectionalMap<K,V>(entries ? [...entries] : undefined)

  /*
   * core idea is to simply have inversed map that points back to key
   *
   * the one gotcha is that keys are unique, my values are not
   * so reversed map value is array of keys
   */
  private _forwardMap: Map<K,V>
  private _reverseMap: Map<V,K[]>



  constructor(entries?: ReadonlyArray<readonly [K, V]>) {
    this._forwardMap = new Map (entries || [])
    this._reverseMap = new Map ()

    // I would like to do it in O1 but do not see a way
    // it's only once - I'm saving having loop on each reverse lookup op
    if(entries) {
      entries.forEach(([key, value]) => {
        const prev = this._reverseMap.get(value) || []
        this._reverseMap.set(value, [...prev, key])
      })
    }
  }

  /*
   * forwarding forward props
   * (cannot do it without callback because of some prototype receiver type error)
   */
  public get: Map<K,V>['get'] = (key) => this._forwardMap.get(key)
  public has: Map<K,V>['has'] = (key) => this._forwardMap.has(key)

  public size = () => this._forwardMap.size
  public forEach: Map<K,V>['forEach'] = (fn) => this._forwardMap.forEach(fn)
  public keys: Map<K,V>['keys'] = () => this._forwardMap.keys()
  public values: Map<K,V>['values']= () => this._forwardMap.values()
  public entries: Map<K,V>['entries']= () => this._forwardMap.entries()

  /*
   * getters
   */

  /** get keys by value */
  public reverseGet = (value: V) => this._reverseMap.get(value)
  /** has value */
  public reverseHas = (value: V) => this._reverseMap.has(value)


  /*
   * setters
   */

  public set = (key: K, value: V) => {
    const keys = this._reverseMap.get(value)|| []

    this._reverseMapDeleteKey(key)
    this._reverseMap.set(value, [...keys, key])
    this._forwardMap.set(key, value)

    return this
  }

  public delete = (key: K) => {
    this._reverseMapDeleteKey(key)
    return this._forwardMap.delete(key)
  }

  /**
   * It's delete many by value
   */
  public reverseDelete = (value: V) => {
    if(!this._reverseMap.has(value)) {
      return false
    }

    const keys = this._reverseMap.get(value)!

    keys.forEach(key => {
      this._forwardMap.delete(key)
    })

    this._reverseMap.delete(value)

    return true
  }

  public clear = () => {
    this._forwardMap.clear()
    this._reverseMap.clear()
  }

  /**
   * remove key from reversedMap entries that point to this key,
   * and optionally deleting entry when it was the only one
   */
  private _reverseMapDeleteKey = (key: K) => {
    // if forward has key => then reverse will have prev value
   if(this._forwardMap.has(key)) {
    const prev = this._forwardMap.get(key)!
    const tail = this._reverseMap.get(prev)!.filter(k => k !== key)

    // now there is case for when prev === value
    // but it'll be easier to just remove + add it, should be rare

    if(tail.length === 0) {
      this._reverseMap.delete(prev)
    }

    if(tail.length !== 0) {
      this._reverseMap.set(prev, tail)
    }

    return true
  }

  return false
  }
}
