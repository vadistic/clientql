// eslint-disable-next-line import/no-extraneous-dependencies
import { toMatchFile } from 'jest-file-snapshot'
import { wrapDocument } from '@clientql/core'
import { print } from 'graphql'
import { complexProps, prismaProps, fileSnapPath } from '../fixture'
import { generateFragments, generateGraphqlFragmentsFile } from '../../src'

expect.extend({ toMatchFile })

describe('generate graphql fragments', () => {
  it('prisma > generate fragment definitions', () => {
    const { fragments } = generateFragments(prismaProps)

    const res = print(wrapDocument(...fragments.map(({ fragment }) => fragment)))

    expect(res).toMatchFile(...fileSnapPath('prisma.fragments.graphql', 'extra'))
  })

  it('complex > generate fragment definitions', () => {
    const { fragments } = generateFragments(complexProps)

    const res = print(wrapDocument(...fragments.map(({ fragment }) => fragment)))

    expect(res).toMatchFile(...fileSnapPath('complex.fragments.graphql', 'extra'))
  })

  it('prisma > generate fragments file in js', () => {
    const res = generateGraphqlFragmentsFile(prismaProps)
    expect(res).toMatchFile(...fileSnapPath('prisma.graphql.ts', 'extra'))
  })

  it('complex > generate fragments file in js', () => {
    const res = generateGraphqlFragmentsFile(complexProps)

    expect(res).toMatchFile(...fileSnapPath('complex.graphql.ts', 'extra'))
  })
})
