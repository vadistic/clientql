import { print } from 'graphql'
import { createField, createFragment, wrapDocument } from '../../ast'
import { buildSelection, retriveCacheFragments } from '../../operation'
import { complexProps, prismaProps } from '../fixture'

describe('selection', () => {
  it('not very nested prisma fragment', () => {
    const selectionFn = buildSelection(prismaProps)

    const { selections, fragmentnames } = selectionFn([[null as any, 'Post']])

    const frag = createFragment({
      fragmentname: 'PostFragment',
      selections,
      condition: 'Post',
    })

    const fragments = retriveCacheFragments(prismaProps)(fragmentnames)

    expect(print(wrapDocument(frag, ...fragments))).toMatchSnapshot()
  })

  it('complex fragment selection no interface', () => {
    const selectionFn = buildSelection(complexProps)

    const { selections, fragmentnames } = selectionFn([[null as any, 'Event']])

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

    const fragments = retriveCacheFragments(prismaProps)(fragmentnames)

    expect(print(wrapDocument(frag, ...fragments))).toMatchSnapshot()
  })
})
