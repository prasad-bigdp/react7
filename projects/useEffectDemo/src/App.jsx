import { useEffect, useState } from 'react'

import './App.css'

function App ()
{
  const [count,setCount]=useState(0)
	useEffect(() =>
	{
	 console.log("helloo")
    },[count])
  return (
		<div>
			<h1>use Effect Demo- fetching products</h1>
		  <p>Count:{count}</p>
		  <button onClick={()=>setCount(count+1)}>+</button>
		</div>
	)
}

export default App
