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

    expect(map.hasReverse(333)).toBeTruthy()
    expect(map.hasReverse(123123)).toBeFalsy()

    expect(map.getReverse(222)).toEqual(['second', 'secondPrim'])

    // deletes and stuff
    map.delete('second')
    expect(map.getReverse(222)).toEqual(['secondPrim'])

    map.delete('fifth')
    expect(map.getReverse(444)).toBeUndefined()

    map.set('new', 222)
    expect(map.getReverse(222)).toEqual(['secondPrim', 'new'])

    map.deleteReverse(222)
    expect(map.hasReverse(222)).toBeFalsy()
    expect(map.has('secondPrim')).toBeFalsy()
  })
})
