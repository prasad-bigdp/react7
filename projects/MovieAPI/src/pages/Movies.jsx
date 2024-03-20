import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Movies = () =>
{
  const [movies, setMovies] = useState([])
  const navigate= useNavigate()
  useEffect(() =>
  {
    axios.get("https://api.sampleapis.com/movies/animation")
    .then((res)=>setMovies(res.data))
  }, [])
  return (
		<div>
			{movies ? (
				<div className='movies row'>
					{movies.map((movie) => (
						<div className='movie card col-3'>
							<img
								src={movie.posterURL}
								alt={movie.title}
								className=' card-img card-img-top'
							/>
							<h2 className=' card-title'>{movie.title}</h2>
							<button
								onClick={() => navigate(`/movie/${movie.imdbId}`)}
								className=' card-footer'>
								See more
							</button>
						</div>
					))}
				</div>
			) : (
				<p>There are no movies</p>
			)}
		</div>
	)
}

export default Movies
