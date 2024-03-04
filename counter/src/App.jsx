import { useState } from "react";
import './App.css'
function App ()
{
  const [c,setCount]=useState(0)
  function add ()
  {
    setCount(c+1)// it will change c value to c+1 value and re render the component
  }
  return (
		<div className='counter'>
			<p>Count:{c}</p>
			<div>
				<button onClick={add}>+</button>
				<button onClick={() => setCount(c - 1)}>-</button>
			</div>
		</div>
	)
}
export default App