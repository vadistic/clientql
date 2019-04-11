import { print } from 'graphql'
import { createFragment } from '../../graphql-ast'
import { createDeepSelection, createFlatFragment } from '../../operations'
import { fixtureProps } from '../fixture'

describe('selection', () => {
  /*  it('flat fragment', () => {
    const fragmentFn = createFlatFragment(fixtureProps)

    expect(print(fragmentFn('Post'))).toMatchInlineSnapshot(`
      "fragment PostFlat on Post {
        __typename
        content
        createdAt
        id
        published
        title
        updatedAt
      }"
    `)
  }) */

  it('deep fragment', () => {
    const selectionFn = createDeepSelection(fixtureProps)

    const selections = selectionFn('Post', 4)

    const fragments = createFragment({
      condition: 'Post',
      fragmentname: 'MyFragment',
      selections,
    })

    console.log(print(fragments))
  })
})
