import { COMPLEX_TYPEDEFS } from '@graphql-clientgen/testing'
import { print } from 'graphql'
import { FragmentType, getCoreProps } from '../../config'
import { buildOperationDoc } from '../../operation'
import { complexProps, prismaProps } from '../fixture'

describe('operation', () => {
  it('prisma > non nested single query', () => {
    const op = buildOperationDoc(prismaProps)([
      ['query', undefined],
      ['user', undefined],
    ])!

    expect(print(op)).toMatchSnapshot()
  })

  it('prisma > non nested multi query', () => {
    const op = buildOperationDoc(prismaProps)([
      ['query', undefined],
      ['users', undefined],
    ])!

    expect(print(op)).toMatchSnapshot()
  })

  it('prisma > nested query', () => {
    const op = buildOperationDoc(prismaProps)([
      ['query', undefined],
      ['user', undefined],
      ['posts', undefined],
    ])!

    expect(print(op)).toMatchSnapshot()
  })

  it('complex > interface target', () => {
    const op = buildOperationDoc(complexProps)([
      ['query', undefined],
      ['findEventsAtVenue', undefined],
    ])!
    expect(print(op)).toMatchSnapshot()
  })

  it('complex > interface inline target', () => {
    const op = buildOperationDoc(complexProps)([
      ['query', undefined],
      ['findEventsAtVenue', undefined],
      [undefined, 'Concert'],
      ['venue', undefined],
    ])!
    expect(print(op)).toMatchSnapshot()
  })

  it('complex > deep fragments', () => {
    const props = getCoreProps(COMPLEX_TYPEDEFS, {
      useFragments: FragmentType.DEEP,
    })

    const op = buildOperationDoc(props)([
      ['query', undefined],
      ['findEventsAtVenue', undefined],
    ])!

    expect(print(op)).toMatchSnapshot()
  })

  it('handle selecting leafs', () => {
    const op = buildOperationDoc(prismaProps)([
      ['query', undefined],
      ['user', undefined],
      ['name', undefined],
    ])!

    expect(print(op)).toMatchInlineSnapshot(`
      "query UserNameQuery($where: UserWhereUniqueInput!) {
        user(where: $where) {
          name
        }
      }
      "
    `)
  })
})
