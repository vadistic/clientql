import { generateTypingsArguments } from '../../generate'
import { fixtureProps } from '../fixture'

describe('generate typings > arguments', () => {
  it('match snapshot', async () => {
    const result = await generateTypingsArguments(fixtureProps)

    expect(result).toMatchSnapshot()
  })
})
