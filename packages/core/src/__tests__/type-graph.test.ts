import { createTypeGraph } from '../type-graph'
import { TYPEDEFS } from './typedefs'

describe('typegraph', () => {
  const graph = createTypeGraph(TYPEDEFS)

  it('works?', () => {
    const post = graph.enter('createPost')

    const smth = graph.deepEnter(['createPost', 'author', 'posts'])

    console.log(smth)
  })
})
