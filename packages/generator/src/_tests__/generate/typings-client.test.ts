import { generateTypingsClient } from '../../generate'
import { prismaProps } from '../fixture'

describe('generate typings > client', () => {
  it('match snapshot', async () => {
    const result = await generateTypingsClient(prismaProps)

    expect(result).toMatchSnapshot()
  })
})
