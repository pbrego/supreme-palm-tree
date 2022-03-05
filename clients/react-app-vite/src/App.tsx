import * as React from 'react'
import { Button } from '@supreme-palm-tree/lib-web-common-ui'

export function App () {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
      </header>
      <section>
        <p>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
      </section>
    </div>
  )
}

export default App
