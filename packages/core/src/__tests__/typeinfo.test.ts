import { assertObjectType, buildASTSchema, TypeInfo } from 'graphql'
import { TYPEDEFS } from './typedefs'

describe('typeinfo', () => {
  const schema = buildASTSchema(TYPEDEFS, { assumeValid: true })
  const info = new TypeInfo(schema)

  it('helps', () => {
    const Post = assertObjectType(schema.getType('Post'))

    console.log(info)
    console.log(info.enter(schema.getQueryType() as any))
    console.log(info)
  })
})
