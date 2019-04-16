import { generateClient } from '../../client/generate'
import { complexProps, prismaProps } from '../fixture'

describe('client results', () => {
  it('works on prisma typedefs', () => {
    const res = generateClient(prismaProps)
  })

  it('works on complex typedefs', () => {
    const res = generateClient(complexProps)

    console.log(res)
  })
})
