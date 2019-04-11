import { PRISMA_TYPEDEFS } from '@graphql-clientgen/testing'
import { createGraphQLGraph } from '../graphql-graph'

describe('TypeGraph', () => {
  const graph = createGraphQLGraph(PRISMA_TYPEDEFS)

  it('create graph', () => {
    const query = graph.start('Query', 'start')

    const post = query.enter('post')!

    post.edges.forEach(key => {
      const target = graph.get(key)

      if (target) {
        console.log(key, target.value.kind)
      } else {
        console.log(key, 'arrow not in schema')
      }
    })
  })
})
