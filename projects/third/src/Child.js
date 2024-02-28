import React from 'react'

export default function Child (props)
{
  console.log(props)
  return (
		<div>
			{isLogin && (
				<div>
					<img
						src={props.image}
						alt='cv'
					/>
					<p>My name is {props.nam}</p>
					<p>My age is {props.age}</p>
				</div>
			)}
		</div>
	)
}
