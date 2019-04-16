import { truePipe } from '../../utils'

describe('types', () => {
  it('allows piping', () => {
    const pipe2 = truePipe(
      (input: number[]) => input.map(el => el * 2),
      (input: number[]) => input.reduce((acc, el) => acc + el),
    )

    expect(pipe2([1, 1])).toEqual(4)
  })

  it('pipe up to 4 fns with changed types', () => {
    const pipe4 = truePipe(
      (input: number[]) => input.map(el => el * 2),
      (input: number[]) => input.reduce((acc, el) => acc + el),
      (input: number) => input + 'aaa',
      (input: string) => input.toUpperCase(),
    )

    expect(pipe4([1, 1])).toEqual('4AAA')
  })

  it('shortcircuit on falsely ', () => {
    const pipe4 = truePipe(
      (_: number[]) => _.map(el => el * 2),
      P => P.reduce((acc, el) => acc + el),
      P => P > 50 && 'NOOP',
      P => P.toUpperCase(),
    )

    expect(pipe4([1, 1])).toBeUndefined()
  })
})
