// Form.js
import React, { useState, useEffect } from "react"

const Form = ({ isOpen, onClose, handlePost, movie }) => {
	const [formData, setFormData] = useState({
		id: "",
		Title: "",
		Poster: "",
		Year: "",
	})

	useEffect(() => {
		if (movie) {
			setFormData({
				id: movie.id,
				Title: movie.Title,
				Poster: movie.Poster,
				Year: movie.Year,
			})
		}
	}, [movie])

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		handlePost(formData)
		onClose()
	}

	if (!isOpen) return null

	return (
		<div className='absolute top-1/3 left-1/3 w-2/4 p-3 z-50 border border-black bg-white'>
			<button
				className='float-end'
				onClick={onClose}>
				❌
			</button>
			<h3 className='text-black'>Enter movie Details</h3>
			<form
				className='relative form p-2 w-full'
				onSubmit={handleSubmit}>
				<input
					type='number'
					name='id'
					value={formData.id}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='Title'
					value={formData.Title}
					onChange={handleChange}
					className='form-control-plaintext h-10 w-full rounded-md focus:border-green-500 my-5'
					placeholder='Enter the movie name'
					required
				/>
				<br />
				<input
					type='url'
					name='Poster'
					value={formData.Poster}
					onChange={handleChange}
					className='form-control-plaintext w-full h-10 my-5'
					placeholder='Enter the image URL'
					required
				/>
				<br />
				<input
					type='number'
					name='Year'
					value={formData.Year}
					onChange={handleChange}
					className='form-control-plaintext h-10 w-full my-5'
					placeholder='Enter the released year'
					required
				/>
				<br />
				<button className='p-5 bg-black center rounded-lg text-white hover:bg-white hover:text-black'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default Form
