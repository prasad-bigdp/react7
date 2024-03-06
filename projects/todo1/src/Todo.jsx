import React from 'react'

const Todo = (props) =>
{
    
  return (
      <div>
          <p>I'm child</p>
          <input type="text" onChange={(e)=>props.update(e.target.value)}/>
			<li key={props.index}>
				{props.task} <button onClick={() => props.remove(i)}>❎</button>
			</li>
		</div>
	)
}

export default Todo
