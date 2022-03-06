import * as React from 'react'
// import { Button } from '@supreme-palm-tree/lib-web-common-ui'
import { ErrorHandlingAppExample } from '@supreme-palm-tree/lib-react-query'

export function App () {
  // const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <ErrorHandlingAppExample />
      {/* <header className="App-header">
        <p>Hello Vite + React!</p>
      </header>
      <section>
        <p>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
      </section> */}
    </div>
  )
}

export default App
