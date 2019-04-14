import { generateTypingsDefinitions } from '../../generate'
import { prismaProps } from '../fixture'

describe('generate typings > definitions', () => {
  it('match snapshot', async () => {
    const result = await generateTypingsDefinitions(prismaProps)

    expect(result).toMatchSnapshot()
  })
})
