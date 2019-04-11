import { TypeGraph } from '../../type-graph/intex'
import { TYPEDEFS } from '../typedefs'

describe('TypeGraph', () => {
  const graph = new TypeGraph(TYPEDEFS)

  it('create graph', () => {
    const query = graph.start('Query', 'start')

    const post = query.enter('post')!

    post.arrows.forEach(arrow => {
      const target = graph.get(arrow)

      if (target) {
        console.log(arrow, target.value.kind)
      } else {
        console.log(arrow, 'arrow not in schema')
      }
    })
  })
})
