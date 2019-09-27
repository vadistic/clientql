import { generateDefinitions } from '../../extra'
import { prismaProps } from '../fixture'

describe('generate typings > definitions', () => {
  it('match snapshot', async () => {
    const result = await generateDefinitions(prismaProps)

    expect(result).toMatchSnapshot()
  })
})
