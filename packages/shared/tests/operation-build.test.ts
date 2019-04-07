import { print } from 'graphql'
import { buildAstMap, buildOperation } from '../src'
import { TYPEDEFS } from './typedefs'

describe('map & operation', () => {
  const map = buildAstMap(TYPEDEFS)

  it('build map', () => {
    // console.log(map)
  })

  it('build operation', () => {
    const operation = buildOperation(map, ['candidate', 'comments'])

    console.log(print(operation))
  })
})
