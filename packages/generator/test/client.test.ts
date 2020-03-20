// eslint-disable-next-line import/no-extraneous-dependencies
import { toMatchFile } from 'jest-file-snapshot'
import { generateClient } from './client'
import { complexProps, fileSnapPath, prismaProps, vatsProps } from './fixture'

expect.extend({ toMatchFile })

describe('generate client on complex props', () => {
  const res = generateClient(complexProps)
  it('print complex client index (boilerplate)', async () => {
    expect((await res).index).toMatchFile(...fileSnapPath('index.ts', 'client', 'complex'))
  })

  it('print complex client interfaces', async () => {
    expect((await res).interfaces).toMatchFile(
      ...fileSnapPath('interfaces.ts', 'client', 'complex'),
    )
  })

  it('print complex client responses', async () => {
    expect((await res).responses).toMatchFile(...fileSnapPath('responses.ts', 'client', 'complex'))
  })

  it('print complex client types', async () => {
    expect((await res).types).toMatchFile(...fileSnapPath('types.ts', 'client', 'complex'))
  })

  it('print complex client typedefs', async () => {
    expect((await res).typedefs).toMatchFile(...fileSnapPath('typedefs.ts', 'client', 'complex'))
  })
})

describe('generate client on prisma props >', () => {
  const res = generateClient(prismaProps)
  it('print prisma client index (boilerplate)', async () => {
    expect((await res).index).toMatchFile(...fileSnapPath('index.ts', 'client', 'prisma'))
  })

  it('print prisma client interfaces', async () => {
    expect((await res).interfaces).toMatchFile(...fileSnapPath('interfaces.ts', 'client', 'prisma'))
  })

  it('print prisma client responses', async () => {
    expect((await res).responses).toMatchFile(...fileSnapPath('responses.ts', 'client', 'prisma'))
  })

  it('print prisma client types', async () => {
    expect((await res).types).toMatchFile(...fileSnapPath('types.ts', 'client', 'prisma'))
  })

  it('print prisma client typedefs', async () => {
    expect((await res).typedefs).toMatchFile(...fileSnapPath('typedefs.ts', 'client', 'prisma'))
  })
})

describe('generate client on vats props >', () => {
  const res = generateClient(vatsProps)
  it('print vats client index (boilerplate)', async () => {
    expect((await res).index).toMatchFile(...fileSnapPath('index.ts', 'client', 'vats'))
  })

  it('print vats client interfaces', async () => {
    expect((await res).interfaces).toMatchFile(...fileSnapPath('interfaces.ts', 'client', 'vats'))
  })

  it('print vats client responses', async () => {
    expect((await res).responses).toMatchFile(...fileSnapPath('responses.ts', 'client', 'vats'))
  })

  it('print vats client types', async () => {
    expect((await res).types).toMatchFile(...fileSnapPath('types.ts', 'client', 'vats'))
  })

  it('print vats client typedefs', async () => {
    expect((await res).typedefs).toMatchFile(...fileSnapPath('typedefs.ts', 'client', 'vats'))
  })
})
