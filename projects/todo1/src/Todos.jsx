import React from 'react'
import { useState } from "react"
import Todo from './Todo'

function Todos ()
{
    const [values, setValues] = useState([])
    const [value, setValue] = useState("")
    const [dummytext,setDummyText]=useState('dummmy')
		const add = () => {
			setValues([...values, value])
			setValue("")
		}
		const remove = (id) => {
			values.splice(id, 1)
			setValues([...values])
    }
    const update = (text) =>
    {
       setDummyText(text)
   }
  return (
		<div>
			<div>
				<input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button onClick={add}>click</button>
          </div>
          {dummytext}
			<ul>
				{values.map((t, i) => (
                    <Todo task={t} index={i} remove={remove} update={update} />
				))}
			</ul>
		</div>
	)
}

export default Todos
