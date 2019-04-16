import { generateClient } from '../../client/generate'
import { complexProps } from '../fixture'

describe('generate client on complex props', () => {
  const res = generateClient(complexProps)
  it('print client index (boilerplate)', async () => {
    expect((await res).index).toMatchSnapshot()
  })

  it('print client clients', async () => {
    expect((await res).clients).toMatchSnapshot()
  })

  it('print client responses', async () => {
    expect((await res).responses).toMatchSnapshot()
  })

  it('print client types', async () => {
    expect((await res).types).toMatchSnapshot()
  })

  it('print client typedefs', async () => {
    expect((await res).typedefs).toMatchSnapshot()
  })
})
