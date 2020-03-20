import { wrapDocument } from '@clientql/core'
import { print } from 'graphql'
import { complexProps, prismaProps } from '../fixture'
import { generateFragments, generateGraphqlFragmentsFile } from '.'

describe('generate graphql fragments', () => {
  it('prisma > generate fragment definitions', () => {
    const { fragments } = generateFragments(prismaProps)

    const res = print(wrapDocument(...fragments.map(({ fragment }) => fragment)))

    expect(res).toMatchSnapshot()
  })

  it('complex > generate fragment definitions', () => {
    const { fragments } = generateFragments(complexProps)

    const res = print(wrapDocument(...fragments.map(({ fragment }) => fragment)))

    expect(res).toMatchSnapshot()
  })

  it('prisma > generate fragments file in js', () => {
    const fragments = generateGraphqlFragmentsFile(prismaProps)

    expect(fragments).toMatchSnapshot()
  })

  it('complex > generate fragments file in js', () => {
    const fragments = generateGraphqlFragmentsFile(complexProps)

    expect(fragments).toMatchSnapshot()
  })
})
