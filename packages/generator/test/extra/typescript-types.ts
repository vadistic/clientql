import { prismaProps } from '../fixture'
import { generateDefinitions } from '../../src'

describe('generate typings > definitions', () => {
  it('match snapshot', async () => {
    const result = await generateDefinitions(prismaProps)

    expect(result).toMatchSnapshot()
  })
})
