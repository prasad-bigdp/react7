import React, { useState } from 'react'

const Form = ({ isOpen, onClose,handlePost,length }) =>
{
	const [id,setId]=useState(length)
    if (!isOpen)
		return null;
	const handleSubmit = (e) =>
	{
		e.preventDefault()
		const newData = {
			"id":Math.floor(Math.random()*100000),
			"Title": e.target[0].value,
			"Poster": e.target[1].value,
			"Year":e.target[2].value
		}
		setId(id+1)
		console.log(newData)
		handlePost(newData)
		onClose()
	}
  return (
	  <div className=' absolute top-1/3 left-1/3 w-2/4 p-3 z-50 border border-black bg-white'>
		  <button className=' float-end' onClick={onClose}>❌</button>
          <h3 className=' text-black'>Enter movie Details</h3>
			<form
				action=''
				className='relative form p-2 w-full' onSubmit={handleSubmit}>
				<input
					type='text'
					className=' form-control-plaintext h-10 w-full rounded-md focus:border-green-500 my-5'
					placeholder='Enter the movie name'
				/>
				<br /><br />
				<input
					type='url'
					className=' form-control-plaintext w-full h-10 my-5'
					placeholder='Enter the image URL'
				/>
				<br /><br />
				<input
					type='number'
					className=' form-control-plaintext h-10 w-full my-5'
					placeholder='Enter the released year'
				/>
			  <br />
			  <button className=' p-5 bg-black center rounded-lg text-white hover:bg-white hover:text-black' >Submit</button>
			</form>
		</div>
	)
}

export default Form
