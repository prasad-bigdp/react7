// Movies.js
import React, { useState } from "react"
import { useContext } from "react"
import MovieContext from "./MovieContext"
import Form from "./Form"

const Movies = () => {
	const { movies, formOpen, handleDelete, openForm, closeForm, handlePost } =
		useContext(MovieContext)
	const [selectedMovie, setSelectedMovie] = useState(null)

	const editMovie = (movie) => {
		setSelectedMovie(movie)
		openForm()
	}

	return (
		<>
			<button
				className='p-5 bg-neutral-50 text-black hover:bg-blue-500 hover:text-white'
				onClick={() => {
					setSelectedMovie(null)
					openForm()
				}}>
				Add new
			</button>
			<div className='grid grid-cols-3 place-items-center'>
				{movies.map((m) => (
					<div
						className='Movie p-10 bg-white text-black rounded rounded-3 flex flex-col'
						key={m.id}>
						<img
							src={m.Poster}
							alt={m.Title}
							height='100'
							width='100'
						/>
						<h2>{m.Title}</h2>
						<p>Year: {m.Year}</p>
						<button onClick={() => editMovie(m)}>✏️</button>
						<button onClick={() => handleDelete(m.id)}>❎</button>
					</div>
				))}
			</div>
			<Form
				isOpen={formOpen}
				onClose={closeForm}
				handlePost={handlePost}
				movie={selectedMovie}
			/>
		</>
	)
}

export default Movies
