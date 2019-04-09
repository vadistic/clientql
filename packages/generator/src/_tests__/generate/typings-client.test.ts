import { generateTypingsClient } from '../../generate'
import { fixtureProps } from '../fixture'

describe('generate typings > client', () => {
  it('match snapshot', async () => {
    const result = await generateTypingsClient(fixtureProps)

    expect(result).toMatchSnapshot()
  })
})
