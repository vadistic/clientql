
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
   * so reversed map value isarray of keys
   */
  private forwardMap: Map<K,V>
  private reverseMap: Map<V,K[]>



  constructor(entries?: ReadonlyArray<readonly [K, V]>) {
    this.forwardMap = new Map (entries || [])
    this.reverseMap = new Map ()

    if(entries) {
      // I would like to do it in O1 but do not see a way
      // it's only once - I'm saving having loop on each reverse lookup op
      entries.forEach(([key, value]) => {
        const prev = this.reverseMap.get(value) || []
        this.reverseMap.set(value, [...prev, key])
      })
    }
  }

  /*
   * forwarding vanilla props
   * (cannot do it without callback because of some prototype receiver type error)
   */
  public get: Map<K,V>['get'] = (key) =>this.forwardMap.get(key)
  public has: Map<K,V>['has'] = (key) =>this.forwardMap.has(key)

  public size = () => this.forwardMap.size
  public forEach: Map<K,V>['forEach'] = (fn) => this.forwardMap.forEach(fn)
  public keys: Map<K,V>['keys'] = () =>this.forwardMap.keys()
  public values: Map<K,V>['values']= () =>this.forwardMap.values()
  public entries: Map<K,V>['entries']= () =>this.forwardMap.entries()

  /*
   * getters
   */

  /** get keys of value */
  public getReverse = (value: V) => this.reverseMap.get(value)
  /** has value */
  public hasReverse = (value: V) => this.reverseMap.has(value)


  /*
   * setters
   */

  public set = (key: K, value: V) => {
    const keys = this.reverseMap.get(value)|| []

    this.reverseMapDeleteKey(key)
    this.reverseMap.set(value, [...keys, key])
    this.forwardMap.set(key, value)

    return this
  }

  public delete = (key: K) => {
    this.reverseMapDeleteKey(key)
    return this.forwardMap.delete(key)
  }

  /**
   * It's delete many by value
   */
  public deleteReverse = (value: V) => {
    if(!this.reverseMap.has(value)) {
      return false
    }

    const keys = this.reverseMap.get(value)!

    keys.forEach(key => {
      this.forwardMap.delete(key)
    })

    this.reverseMap.delete(value)

    return true
  }

  public clear = () => {
    this.forwardMap.clear()
    this.reverseMap.clear()
  }

  /**
   * remove key from reversedMap entries that point to this key,
   * and optionally deleting entry when it was the only one
   */
  private reverseMapDeleteKey = (key: K) => {
    // if forward has key => then reverse will have prev value
   if(this.forwardMap.has(key)) {
    const prev = this.forwardMap.get(key)!
    const tail = this.reverseMap.get(prev)!.filter(k => k !== key)

    // now there is case for when prev === value
    // but it'll be easier to just remove + add it, should be rare

    if(tail.length === 0) {
      this.reverseMap.delete(prev)
    }

    if(tail.length !== 0) {
      this.reverseMap.set(prev, tail)
    }

    return true
  }

  return false
}
}
