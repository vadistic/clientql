import { print } from 'graphql'
import { createField, createFragment, wrapDocument } from '../../ast'
import { buildSelection } from '../../operation'
import { complexProps, prismaProps } from '../fixture'

describe('selection', () => {
  it('not very nested prisma fragment', () => {
    const selectionFn = buildSelection(prismaProps)

    const { selection, fragmentnames } = selectionFn([[null as any, 'Post']])

    const frag = createFragment({
      fragmentname: 'PostFragment',
      selections: [...selection!.selectionSet!.selections!],
      condition: 'Post',
    })

    expect(print(wrapDocument(frag))).toMatchSnapshot()
  })

  it('complex fragment selection no interface', () => {
    const selectionFn = buildSelection(complexProps)

    const { selection, fragmentnames } = selectionFn([[null as any, 'Event']])

    const frag = createFragment({
      fragmentname: 'EventFragment',
      condition: 'Event',
      selections: [
        createField({
          fieldname: 'event',
          selections: [...selection!.selectionSet!.selections!],
        }),
      ],
    })

    console.log(fragmentnames)

    expect(print(wrapDocument(frag))).toMatchSnapshot()
  })
})
