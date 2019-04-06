import React, { useState } from 'react'
import { createClientProxy } from './client'
import { client } from './apollo'

export const Component: React.FC = () => {
  const clientProxy = createClientProxy({ client })

  const [state, setState] = useState<any>({})

  const handleFetch = async () => {
    const res = await clientProxy.applications()

    setState(res)
  }

  return (
    <div>
      <button onClick={handleFetch}>Fetch</button>
      <div>
        <p>State:</p>
        <pre style={{ fontSize: 14 }}>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  )
}
