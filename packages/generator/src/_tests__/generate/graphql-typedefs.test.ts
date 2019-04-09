import { generateGraphqlTypedefs } from '../../generate'
import { fixtureProps } from '../fixture'

describe('generate graphql > typedefs', () => {
  it('match snapshot', async () => {
    const result = await generateGraphqlTypedefs(fixtureProps)

    expect(result).toMatchSnapshot()
  })
})
