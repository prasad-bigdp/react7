import React, { useEffect } from 'react'
import { useState } from 'react'
const App = () =>
{
  const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(2)

  useEffect(()=>console.log("useEffect Called"),[count2])
  const handleCount = () =>
  {
    setCount((prevCount)=>prevCount + 1)
    setCount((prev)=>prev+1)
    console.log(count)
  }
  return (
    <div>
      <p>Count:{count}</p><p>Count2:{count2}</p>
      <button onClick={handleCount}>Increement</button>
      <button onClick={()=>setCount2((prev)=>prev+2)}>incr2</button>
    </div>
  )
}

export default App
