import { COMPLEX_TYPEDEFS } from '@graphql-clientgen/testing'
import { print } from 'graphql'
import { toMatchFile } from 'jest-file-snapshot'
import { FragmentType } from '../config'
import { getCoreProps } from '../core'
import { buildOperationDoc } from '../operation'
import { complexProps, fileSnapPath, prismaProps } from './fixture'

expect.extend({ toMatchFile })

describe('build operation on prisma props', () => {
  it('prisma > non nested single query', () => {
    const op = buildOperationDoc(prismaProps)([
      ['query', undefined],
      ['user', undefined],
    ])!

    expect(print(op)).toMatchFile(
      ...fileSnapPath('prisma.single.graphql', 'operation'),
    )
  })

  it('prisma > non nested multi query', () => {
    const op = buildOperationDoc(prismaProps)([
      ['query', undefined],
      ['users', undefined],
    ])!

    expect(print(op)).toMatchFile(
      ...fileSnapPath('prisma.multi.graphql', 'operation'),
    )
  })

  it('prisma > nested query', () => {
    const op = buildOperationDoc(prismaProps)([
      ['query', undefined],
      ['user', undefined],
      ['posts', undefined],
    ])!

    expect(print(op)).toMatchFile(
      ...fileSnapPath('prisma.nested.graphql', 'operation'),
    )
  })
})

describe('build operation on complex props', () => {
  it('complex > interface target', () => {
    const op = buildOperationDoc(complexProps)([
      ['query', undefined],
      ['findEventsAtVenue', undefined],
    ])!

    expect(print(op)).toMatchFile(
      ...fileSnapPath('complex.interface-target.graphql', 'operation'),
    )
  })

  it('complex > inline target', () => {
    const op = buildOperationDoc(complexProps)([
      ['query', undefined],
      ['findEventsAtVenue', undefined],
      [undefined, 'Concert'],
      ['venue', undefined],
    ])!

    expect(print(op)).toMatchFile(
      ...fileSnapPath('complex.inline-target.graphql', 'operation'),
    )
  })

  it('complex > deep fragments', () => {
    const props = getCoreProps(COMPLEX_TYPEDEFS, {
      useFragments: FragmentType.DEEP,
    })

    const op = buildOperationDoc(props)([
      ['query', undefined],
      ['findEventsAtVenue', undefined],
    ])!

    expect(print(op)).toMatchFile(
      ...fileSnapPath('complex.deep-fragments.graphql', 'operation'),
    )
  })

  it('complex > select leaf', () => {
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
