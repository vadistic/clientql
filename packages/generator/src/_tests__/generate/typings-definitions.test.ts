import { generateTypingsDefinitions } from '../../generate'
import { fixtureProps } from '../fixture'

describe('generate typings > definitions', () => {
  it('match snapshot', async () => {
    const result = await generateTypingsDefinitions(fixtureProps)

    expect(result).toMatchSnapshot()
  })
})
