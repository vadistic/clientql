import { fluentAsyncProxy } from '../fluent-async-proxy'
import { parseSegments } from '../path'

describe('path parser', () => {
  it('parses proxy segments into operation path and variables', async () => {
    const proxy = fluentAsyncProxy(async segments => parseSegments(segments))

    const res1 = await proxy.query.users({ where: 'something' }).AdminUser.posts({ where: 'next' })

    expect(res1).toEqual({
      path: [
        ['query', undefined],
        ['users', undefined],
        [undefined, 'AdminUser'],
        ['posts', undefined],
      ],
      variables: { where: 'something', where1: 'next' },
      type: 'query',
    })
  })
})
