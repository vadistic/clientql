import { Kind, print } from 'graphql'
import { toMatchFile } from 'jest-file-snapshot'
import { buildFragmentDoc } from '../operation'
import { complexProps, fileSnapPath, prismaProps, vatsProps } from './fixture'

expect.extend({ toMatchFile })

describe('prisma props > build fragment/selection', () => {
  it('prisma simple flat type', () => {
    const doc = buildFragmentDoc(prismaProps)('Post')!

    expect(print(doc)).toMatchFile(
      ...fileSnapPath('prisma.simple.graphql', 'fragment'),
    )
  })

  it('prisma edge type', () => {
    const doc = buildFragmentDoc(prismaProps)('BoardEdge')!

    expect(print(doc)).toMatchFile(
      ...fileSnapPath('prisma.edge.graphql', 'fragment'),
    )
  })
})

describe('complex props > build fragment/selection', () => {
  it('complex props > selection on interface', () => {
    const doc = buildFragmentDoc(complexProps)('Event')!

    expect(print(doc)).toMatchFile(
      ...fileSnapPath('complex.interface.graphql', 'fragment'),
    )
  })
})

describe('vats props > build fragment/selection', () => {
  it('no empty flat fragments are generated', () => {
    const doc = buildFragmentDoc(vatsProps)('ApplicationConnection')!

    expect(
      doc.definitions.filter(
        node =>
          node.kind === Kind.FRAGMENT_DEFINITION &&
          node.selectionSet.selections.length === 0,
      ).length,
    ).toBe(0)

    expect(print(doc)).toMatchFile(
      ...fileSnapPath('vats.no-empty.graphql', 'fragment'),
    )
  })
})
