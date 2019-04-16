import { print } from 'graphql'
import { createField, createFragment, wrapDocument } from '../../ast'
import { buildSelections, retriveFragmentsFromCache } from '../../operation'
import { complexProps, prismaProps, vatsProps } from '../fixture'

describe('selections', () => {
  it('prisma props > handle not very nested', () => {
    const selectionFn = buildSelections(prismaProps)

    const { selections, dependencies } = selectionFn('Post')

    const frag = createFragment({
      fragmentname: 'PostFragment',
      selections: selections!,
      condition: 'Post',
    })
    const fragments = retriveFragmentsFromCache(prismaProps)(dependencies)

    expect(print(wrapDocument(frag, ...fragments))).toMatchSnapshot()
  })

  it('prisma props > edges', () => {
    const selectionFn = buildSelections(prismaProps)

    const { selections, dependencies } = selectionFn('BoardEdge')

    const frag = createFragment({
      fragmentname: 'BoardedgeFragment',
      selections: selections!,
      condition: 'BoardEdge',
    })

    const fragments = retriveFragmentsFromCache(prismaProps)(dependencies)

    expect(print(wrapDocument(frag, ...fragments))).toMatchSnapshot()
  })

  it('complex props > selection on interface', () => {
    const selectionFn = buildSelections(complexProps)

    const { selections, dependencies } = selectionFn('Event')

    const fragments = retriveFragmentsFromCache(complexProps)(dependencies)

    const frag = createFragment({
      fragmentname: 'EventFragment',
      condition: 'Event',
      selections: [
        createField({
          fieldname: 'event',
          selections,
        }),
      ],
    })

    expect(print(wrapDocument(frag, ...fragments))).toMatchSnapshot()
  })

  it('vats props > ensure no empty flat fragments are generated', () => {
    const slectionFn = buildSelections(vatsProps)

    const { dependencies } = slectionFn('ApplicationConnection')

    const fragments = retriveFragmentsFromCache(vatsProps)(dependencies)

    expect(
      fragments.filter(frag => frag.selectionSet.selections.length === 0)
        .length,
    ).toBe(0)

    expect(fragments.map(print).join('\n\n')).toMatchSnapshot()
  })
})
