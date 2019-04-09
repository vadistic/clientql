import { print } from 'graphql'
import gql from 'graphql-tag'
import { mergeExtensions } from '../../codegen-graphql'

describe('codegen graphql > merge extensions', () => {
  it('match snapshot', async () => {
    const fixture = gql`
      type Query {
        posts(where: PostWhereInput): Post
      }

      """
      A type that describes the user. Its description might not
      fit within the bounds of 80 width and so you want MULTILINE
      """
      type Post {
        """
        some description
        """
        id: ID!
        name: String
      }

      extend type Post {
        """
        some extension description
        """
        author: Author!
      }

      type Author {
        id: ID!
        firstName: String
      }

      extend type Author {
        coffee: Boolean
      }

      input PostWhereInput {
        interesting: Boolean
      }

      extend input PostWhereInput {
        id: ID
        author: Author
        authorsCoffee: Boolean
      }
    `
    const result = mergeExtensions(fixture)

    expect(print(result)).toMatchInlineSnapshot(`
      "type Query {
        posts(where: PostWhereInput): Post
      }
      
      \\"\\"\\"
      A type that describes the user. Its description might not
      fit within the bounds of 80 width and so you want MULTILINE
      \\"\\"\\"
      type Post {
        \\"\\"\\"some description\\"\\"\\"
        id: ID!
        name: String
        \\"\\"\\"some extension description\\"\\"\\"
        author: Author!
      }
      
      type Author {
        id: ID!
        firstName: String
        coffee: Boolean
      }
      
      input PostWhereInput {
        interesting: Boolean
        id: ID
        author: Author
        authorsCoffee: Boolean
      }
      "
    `)
  })
})
