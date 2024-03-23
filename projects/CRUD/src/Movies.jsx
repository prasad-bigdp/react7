import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
const Movies = () =>
{
    const [movies,setMovies]= useState([])
    useEffect(() =>
    {
        axios.get("http://localhost:3000/movies")
        .then((data)=>setMovies(data.data))
    },[])
  return (
    <div className=' grid grid-cols-3'>
          {movies && movies.map((m,i) => (
              <div className='Movie' key={i}>
                  <img src={m.Poster} alt={m.Title} height="100" width="100" />
                  <h2>{m.Title}</h2>
                  <p>Year: {m.year}</p>
              </div>
      ))}
    </div>
  )
}

export default Movies
