import { generateClient } from '../../client/generate'
import { prismaProps } from '../fixture'

describe('generate client on prisma props >', () => {
  const res = generateClient(prismaProps)
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
