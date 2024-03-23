import React from 'react'

const Form = ({ isOpen, onClose }) =>
{
    if (!isOpen)
        return null;
  return (
      <div className=' absolute top-2/4 left-2/4 p-10 z-50 bg-white'>
          <h3>Enter movie Details</h3>
			<form
				action=''
				className='relative form p-5'>
				<input
					type='text'
					className=' form-control-plaintext h-10 w-28 rounded-md focus:border-green-500'
					placeholder='Enter the movie name'
				/>
				<br />
				<input
					type='url'
					className=' form-control-plaintext'
					placeholder='Enter the image URL'
				/>
				<br />
				<input
					type='number'
					className=' form-control-plaintext'
					placeholder='Enter the released year'
				/>
				<br />
			</form>
		</div>
	)
}

export default Form
