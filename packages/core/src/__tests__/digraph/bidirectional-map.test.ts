import { BidirectionalMap } from '../../digraph/bidirectional-map'

describe('BidirectionalMap', () => {
  it('get/set/delete & in reverse', () => {
    const entries: Array<[string, number]> = [
      ['first', 111],
      ['second', 222],
      ['secondPrim', 222],
      ['third', 333],
      ['fifth', 444],
      ['sixth', 555],
    ]

    const map = BidirectionalMap.from(entries)

    // has
    expect(map.has('first')).toBeTruthy()
    expect(map.has('smth')).toBeFalsy()

    expect(map.hasValue(333)).toBeTruthy()
    expect(map.hasValue(123123)).toBeFalsy()

    expect(map.getValueKeys(222)).toEqual(['second', 'secondPrim'])

    // deletes and stuff
    map.delete('second')
    expect(map.getValueKeys(222)).toEqual(['secondPrim'])

    map.delete('fifth')
    expect(map.getValueKeys(444)).toBeUndefined()

    map.set('new', 222)
    expect(map.getValueKeys(222)).toEqual(['secondPrim', 'new'])

    map.deleteReverse(222)
    expect(map.hasValue(222)).toBeFalsy()
    expect(map.has('secondPrim')).toBeFalsy()
  })
})
