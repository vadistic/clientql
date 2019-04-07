import { fluentAsyncProxy, Segments } from '../src'

describe('fluent async proxy > promises', () => {
  const OK_RES = 100
  const ERR_RES = 'oh no!'

  const timeoutOk = new Promise((ok, err) => {
    setTimeout(() => {
      ok(OK_RES)
    }, 25)
  })

  const timeoutErr = new Promise((ok, err) => {
    setTimeout(() => {
      err(ERR_RES)
    }, 25)
  })

  it('return resolved promise value', async () => {
    const res = await fluentAsyncProxy(() => timeoutOk)
      .abc(1)
      .efd(2)

    expect(res).toBe(OK_RES)
  })

  it('allow throwing', async () => {
    let res
    try {
      await fluentAsyncProxy(() => timeoutErr)
        .abc(1)
        .efd(2)
    } catch (err) {
      res = err
    }

    expect(res).toBe(ERR_RES)
  })

  it('supports thenable promise chains', async () => {
    const a = await fluentAsyncProxy(() => timeoutOk)
      .abc(1)
      .efd(2)
      .then((res: any) => {
        return res + 'AAA'
      })

    expect(a).toBe(OK_RES + 'AAA')
  })

  it('supports catch & finally chains', async () => {
    const a = await fluentAsyncProxy(() => timeoutErr)
      .abc(1)
      .efd(2)
      .catch((err: any) => {
        return err + 'AAA'
      })

    expect(a).toBe(ERR_RES + 'AAA')
  })

  it('unwrap to promise', async () => {
    const a = fluentAsyncProxy(() => timeoutOk)

    expect(a instanceof Promise).toBeFalsy()
    expect(a.UNWRAP instanceof Promise).toBeTruthy()
  })
})

describe('fluent async proxy > segments', () => {
  const timeoutVal = (val: any) =>
    new Promise(ok => {
      setTimeout(() => {
        ok(val)
      }, 50)
    })

  it('return paths & args of segments to callback', async () => {
    const callback = (paths: Segments) => timeoutVal(paths)

    const res = await fluentAsyncProxy(callback)
      .aaa(1)
      .bbb(2)

    const fixture: Segments = [['aaa', [[1]]], ['bbb', [[2]]]]

    expect(res).toEqual(fixture)
  })

  it('handle many segments, random args', async () => {
    const callback = (paths: Segments) => timeoutVal(paths)

    const res = await fluentAsyncProxy(callback)
      .aaa({ very: { nested: 'arg' } }, '123', 'another')
      .bbb(2)
      .bbb(2)
      .bbb()
      .bbb()

    const fixture: Segments = [
      ['aaa', [[{ very: { nested: 'arg' } }, '123', 'another']]],
      ['bbb', [[2]]],
      ['bbb', [[2]]],
      ['bbb', [[]]],
      ['bbb', [[]]]
    ]

    expect(res).toEqual(fixture)
  })
})
