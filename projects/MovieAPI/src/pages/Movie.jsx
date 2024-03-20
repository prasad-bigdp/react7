import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Movie = () =>
{
  const { id } = useParams()
  const [movieData,setMovieData]=useState({})
  useEffect(() =>
  {
    console.log(id) 
    axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4827adaa`)
    .then((res)=>setMovieData(res.data))
  }, [])
  
  const handleRoute = () =>
  {
    window.location.href=`https://www.imdb.com/title/${id}`
  }
  return (
		<div>
			{movieData && (
				<div className='movieData row p-5 m-5'>
					<div className=' col-4'>
						<img
							src={movieData.Poster}
							alt={movieData.Title}
						/>
					</div>
					<div className='col-8'>
						<h2>{movieData.Title}</h2>
						<p>Year:{movieData.Year}</p>
            <p>Story: {movieData.Plot}</p>
            <button onClick={handleRoute}>Imdb Link</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Movie
