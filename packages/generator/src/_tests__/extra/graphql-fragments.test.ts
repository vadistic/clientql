import { wrapDocument } from '@graphql-clientgen/core'
import { print } from 'graphql'
import {
  generateGraphqlFragments,
  generateGraphqlFragmentsFile,
} from '../../extra'
import { complexProps, prismaProps } from '../fixture'

describe('generate graphql fragments', () => {
  it('prisma > generate fragment definitions', () => {
    const { fragments } = generateGraphqlFragments(prismaProps)

    const res = print(
      wrapDocument(...fragments.map(({ fragment }) => fragment)),
    )

    expect(res).toMatchSnapshot()
  })

  it('complex > generate fragment definitions', () => {
    const { fragments } = generateGraphqlFragments(complexProps)

    const res = print(
      wrapDocument(...fragments.map(({ fragment }) => fragment)),
    )

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
