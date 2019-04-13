import { COMPLEX_TYPEDEFS } from '@graphql-clientgen/testing'
import { print } from 'graphql'
import { FragmentType, getCoreProps } from '../../config'
import { buildOperation } from '../../operation'
import { complexProps, prismaProps } from '../fixture'

describe('operation', () => {
  it('prisma > non nested single query', () => {
    const op = buildOperation(prismaProps)(['user'])!

    expect(print(op)).toMatchSnapshot()
  })

  it('prisma > non nested multi query', () => {
    const op = buildOperation(prismaProps)(['users'])!

    expect(print(op)).toMatchSnapshot()
  })

  it('prisma > nested query', () => {
    const op = buildOperation(prismaProps)(['user', 'posts'])!

    expect(print(op)).toMatchSnapshot()
  })

  it('complex > interface target', () => {
    const op = buildOperation(complexProps)(['findEventsAtVenue'])!

    expect(print(op)).toMatchSnapshot()
  })

  it('complex > deep fragments', () => {
    const props = getCoreProps(COMPLEX_TYPEDEFS, {
      useFragments: FragmentType.DEEP,
    })

    const op = buildOperation(props)(['findEventsAtVenue'])!

    expect(print(op)).toMatchSnapshot()
  })
})
