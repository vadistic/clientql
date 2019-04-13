import { print } from 'graphql'
import {
  createField,
  createFragment,
  createOperation,
  wrapDocument,
} from '../../ast'
import { buildSelections, retriveCacheFragments } from '../../operation'
import { complexProps, prismaProps } from '../fixture'

describe('selection', () => {
  it('not very nested prisma fragment', () => {
    const selectionFn = buildSelections(prismaProps)

    const { selections, fragmentnames } = selectionFn('Post')

    const frag = createFragment({
      fragmentname: 'PostFragment',
      selections,
      condition: 'Post',
    })

    const fragments = retriveCacheFragments(prismaProps)(fragmentnames)

    expect(print(wrapDocument(frag, ...fragments))).toMatchSnapshot()
  })

  it('complex fragment selection no interface', () => {
    const selectionFn = buildSelections(complexProps)

    const { selections, fragmentnames } = selectionFn('Event')

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
