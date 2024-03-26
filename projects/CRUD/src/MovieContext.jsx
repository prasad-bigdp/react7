// MovieContext.js
import React, { createContext,useState, useEffect } from "react"
import axios from "axios"

const MovieContext = createContext()



export const MovieProvider = ({ children }) => {
	const [movies, setMovies] = useState([])
	const [formOpen, setFormOpen] = useState(false)

	useEffect(() => {
		axios
			.get("http://localhost:3000/movies")
			.then((response) => setMovies(response.data))
			.catch((error) => console.error("Error fetching movies:", error))
	}, [])

	const handlePost = (postData) => {
		const existingMovie = movies.find((m) => m.id === postData.id)
		if (existingMovie)
		{
			console.log(postData,existingMovie)
			axios
				.put(`http://localhost:3000/movies/${postData.id}`, postData)
				.then(() => {
					const updatedMovies = movies.map((m) =>
						m.id === postData.id ? postData : m,
					)
					setMovies(updatedMovies)
				})
				.catch((error) => console.error("Error updating movie:", error))
		} else {
			axios
				.post("http://localhost:3000/movies", postData)
				.then((response) => setMovies([...movies, response.data]))
				.catch((error) => console.error("Error adding movie:", error))
		}
	}

	const handleDelete = (id) => {
		axios
			.delete(`http://localhost:3000/movies/${id}`)
			.then(() => setMovies(movies.filter((m) => m.id !== id)))
			.catch((error) => console.error("Error deleting movie:", error))
	}

	const openForm = () => setFormOpen(true)
	const closeForm = () => setFormOpen(false)

	return (
		<MovieContext.Provider
			value={{
				movies,
				formOpen,
				handlePost,
				handleDelete,
				openForm,
				closeForm,
			}}>
			{children}
		</MovieContext.Provider>
	)
}

export default MovieContext
