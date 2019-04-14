import { generateGraphqlTypedefs } from '../../generate'
import { prismaProps } from '../fixture'

describe('generate graphql > typedefs', () => {
  it('match snapshot', async () => {
    const result = await generateGraphqlTypedefs(prismaProps)

    expect(result).toMatchSnapshot()
  })
})
