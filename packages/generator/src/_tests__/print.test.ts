import gql from 'graphql-tag'
import { printGqlTag } from '../print'

describe('print utils', () => {
  it('print graphql to gql tagged const with deps', () => {
    const fixture = printGqlTag(
      'MY_CONT_NAME',
      gql`
        query Myquery {
          prop
          ...SomeFragment
          ...SomeOtherFragment
        }
      `,
      ['SOME_FRAGMENT', 'SOME_OTHER_FRAGMENT'],
    )

    expect(fixture).toMatchInlineSnapshot(`
      "export const MY_CONT_NAME = gql\`
        query Myquery {
          prop
          ...SomeFragment
          ...SomeOtherFragment
        }
      
        \${SOME_FRAGMENT}
        \${SOME_OTHER_FRAGMENT}
      \`"
    `)
  })
})
