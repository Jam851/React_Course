import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter Project</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => 
                            { 
                                if(count == 0){
                                  return count
                                } else {
                                  return (count - 1)
                                }
                            })}>
          remove count from {count}
        </button>
      </div>
    </>
  )
}

export default App
