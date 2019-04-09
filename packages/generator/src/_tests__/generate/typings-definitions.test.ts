import { generateTypingsDefinitions } from '../../generate'
import { configFixtureProps } from '../fixture'

describe('generate typings > definitions', () => {
  const props = configFixtureProps({})

  it('match snapshot', async () => {
    const result = await generateTypingsDefinitions(props)

    expect(result).toMatchSnapshot()
  })
})
