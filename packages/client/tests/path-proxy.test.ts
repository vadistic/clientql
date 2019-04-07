import { ClientPaths, pathProxy } from '../src'

describe('path proxy async/ promises', () => {
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
    const res = await pathProxy(() => timeoutOk)
      .abc(1)
      .efd(2)

    expect(res).toBe(OK_RES)
  })

  it('allow throwing', async () => {
    let res
    try {
      const a = await pathProxy(() => timeoutErr)
        .abc(1)
        .efd(2)
    } catch (err) {
      res = err
    }

    expect(res).toBe(ERR_RES)
  })

  it('supports thenable promise chains', async () => {
    const a = await pathProxy(() => timeoutOk)
      .abc(1)
      .efd(2)
      .then((res: any) => {
        return res + 'AAA'
      })

    expect(a).toBe(OK_RES + 'AAA')
  })

  it('supports catch & finally chains', async () => {
    try {
      const a = pathProxy(() => timeoutErr)
        .abc(1)
        .efd(2)
        .catch((err: any) => {
          console.log('err', err)
          return ERR_RES + 'AAA'
        })
    } catch (err) {
      console.log('wrapper err', err)
    }
  })
})

describe('path proxy path segments', () => {
  const timeoutVal = (val: any) =>
    new Promise(ok => {
      setTimeout(() => {
        ok(val)
      }, 50)
    })

  it('return paths & args of segments to callback', async () => {
    const callback = (paths: ClientPaths) => timeoutVal(paths)

    const res = await pathProxy(callback)
      .aaa(1)
      .bbb(2)

    const fixture: ClientPaths = {
      args: [[1], [2]],
      paths: ['aaa', 'bbb']
    }

    expect(res).toEqual(fixture)
  })

  it('handle many segments, random args', async () => {
    const callback = (paths: ClientPaths) => timeoutVal(paths)

    const res = await pathProxy(callback)
      .aaa({ very: { nested: 'arg' } }, '123', 'another')
      .bbb(2)
      .bbb(2)
      .bbb()
      .bbb()

    const fixture: ClientPaths = {
      args: [[{ very: { nested: 'arg' } }, '123', 'another'], [2], [2], [], []],
      paths: ['aaa', 'bbb', 'bbb', 'bbb', 'bbb']
    }

    expect(res).toEqual(fixture)
  })
})
