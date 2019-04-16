import { print } from 'graphql'
import { createField, createFragment, wrapDocument } from '../../ast'
import { buildSelections } from '../../operation'
import { complexProps, prismaProps } from '../fixture'

describe('selection', () => {
  it('not very nested prisma fragment', () => {
    const selectionFn = buildSelections(prismaProps)

    const { selections } = selectionFn('Post')

    const frag = createFragment({
      fragmentname: 'PostFragment',
      selections: selections!,
      condition: 'Post',
    })

    expect(print(wrapDocument(frag))).toMatchSnapshot()
  })

  it('complex fragment selection no interface', () => {
    const selectionFn = buildSelections(complexProps)

    const { selections } = selectionFn('Event')

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

    expect(print(wrapDocument(frag))).toMatchSnapshot()
  })
})
