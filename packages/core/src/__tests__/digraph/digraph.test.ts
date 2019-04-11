import { ArrowEntry, Digraph, DigraphEntry } from '../../digraph'

describe('Digraph', () => {
  it('works', () => {
    const entries: Array<DigraphEntry<string, string, number>> = [
      ['First', 111, [['toSecond', 'Second']]],
      ['Second', 222, [['toThird', 'Third']]],
      ['SecondPrim', 222, []],
      ['Third', 333, [['toSecond', 'Second'], ['toFifth', 'Fifth']]],
      ['Fifth', 444, []],
      [
        'Sixth',
        555,
        [['toFifth0', 'Fifth'], ['toFifth1', 'Fifth'], ['toFifth2', 'Fifth']],
      ],
    ]

    const graph = Digraph.from(entries)

    const walker = graph.start('Second', 'start')

    expect(walker.sources()).toEqual([
      ['First', 111, [['toSecond', 'Second']]],
      ['Third', 333, [['toSecond', 'Second']]],
    ])
  })
})
