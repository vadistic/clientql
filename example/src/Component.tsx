import React, { useState } from 'react'
import { client } from './client'
import { ApplicationClient, JobClient } from './generated/client'

export const Component: React.FC = () => {
  const [state, setState] = useState<any>({})

  const handleFetch = async () => {
    const start = window.performance.now()
    const p = (client.jobs() as JobClient).name()
    console.log('QUERY TIME', window.performance.now() - start)
    const res = await p
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
