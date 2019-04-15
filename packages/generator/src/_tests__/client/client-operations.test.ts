import { generateClientResults } from '../../codegen-client/client-results'
import { prismaProps } from '../fixture'

describe('client results', () => {
  it('works', () => {
    const res = generateClientResults(prismaProps)
  })
})
