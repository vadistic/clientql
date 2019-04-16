import { toMatchFile } from 'jest-file-snapshot'
import path from 'path'
import { generateClient } from '../client'
import { complexProps, prismaProps, vatsProps } from './fixture'

expect.extend({ toMatchFile })

export const fileSnapPath = (filename: string, dir: string) => [
  path.resolve(__dirname, '__file_snapshots__', dir, filename),
  filename,
]

describe('generate client on complex props', () => {
  const res = generateClient(complexProps)
  it('print complex client index (boilerplate)', async () => {
    expect((await res).index).toMatchFile(
      ...fileSnapPath('index.ts', 'complex'),
    )
  })

  it('print complex client clients', async () => {
    expect((await res).clients).toMatchFile(
      ...fileSnapPath('clients.ts', 'complex'),
    )
  })

  it('print complex client responses', async () => {
    expect((await res).responses).toMatchFile(
      ...fileSnapPath('responses.ts', 'complex'),
    )
  })

  it('print complex client types', async () => {
    expect((await res).types).toMatchFile(
      ...fileSnapPath('types.ts', 'complex'),
    )
  })

  it('print complex client typedefs', async () => {
    expect((await res).typedefs).toMatchFile(
      ...fileSnapPath('typedefs.ts', 'complex'),
    )
  })
})

describe('generate client on prisma props >', () => {
  const res = generateClient(prismaProps)
  it('print prisma client index (boilerplate)', async () => {
    expect((await res).index).toMatchFile(...fileSnapPath('index.ts', 'prisma'))
  })

  it('print prisma client clients', async () => {
    expect((await res).clients).toMatchFile(
      ...fileSnapPath('clients.ts', 'prisma'),
    )
  })

  it('print prisma client responses', async () => {
    expect((await res).responses).toMatchFile(
      ...fileSnapPath('responses.ts', 'prisma'),
    )
  })

  it('print prisma client types', async () => {
    expect((await res).types).toMatchFile(...fileSnapPath('types.ts', 'prisma'))
  })

  it('print prisma client typedefs', async () => {
    expect((await res).typedefs).toMatchFile(
      ...fileSnapPath('typedefs.ts', 'prisma'),
    )
  })
})

describe('generate client on vats props >', () => {
  const res = generateClient(vatsProps)
  it('print vats client index (boilerplate)', async () => {
    expect((await res).index).toMatchFile(...fileSnapPath('index.ts', 'vats'))
  })

  it('print vats client clients', async () => {
    expect((await res).clients).toMatchFile(
      ...fileSnapPath('clients.ts', 'vats'),
    )
  })

  it('print vats client responses', async () => {
    expect((await res).responses).toMatchFile(
      ...fileSnapPath('responses.ts', 'vats'),
    )
  })

  it('print vats client types', async () => {
    expect((await res).types).toMatchFile(...fileSnapPath('types.ts', 'vats'))
  })

  it('print vats client typedefs', async () => {
    expect((await res).typedefs).toMatchFile(
      ...fileSnapPath('typedefs.ts', 'vats'),
    )
  })
})
