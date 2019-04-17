import React, { useState } from 'react'
import { client } from './apollo'

export const Component: React.FC = () => {
  const [state, setState] = useState<any>({})

  const handleFetch = async () => {
    const start = window.performance.now()
    const res = await client.query.users()
    console.log('QUERY TIME', window.performance.now() - start)
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
