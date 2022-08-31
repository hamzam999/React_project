import React, { useState } from 'react'
function Counter() {
  let [val, setval] = useState(0)
  console.log([val, setval])
  function increment() {
    setval(val + 1)
  }
  function decrement() {
    if (val > 0) {
      setval(val - 1)
    }
  }
  return (
    <div className="App">
      <h1>{val}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}
export default Counter
