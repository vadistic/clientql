import { generateTsTypes } from '../../extra'
import { prismaProps } from '../fixture'

describe('generate typings > definitions', () => {
  it('match snapshot', async () => {
    const result = await generateTsTypes(prismaProps)

    expect(result).toMatchSnapshot()
  })
})
