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
    }, [])
  const handleDelete = (id) =>
  {
    axios.delete(`http://localhost:3000/movies/${id}`)
      .then((res) =>
      {
        let newMovies = movies.filter((m) => m.id !== id);
        setMovies(newMovies)
    })
  }
  return (
    <div className=' grid grid-cols-3 place-items-center'>
          {movies && movies.map((m,i) => (
              <div className='Movie p-10 bg-white text-black rounded rounded-3 flex flex-col' key={i}>
                  <img src={m.Poster} alt={m.Title} height="100" width="100" />
                  <h2>{m.Title}</h2>
              <p>Year: {m.Year}</p>
              <button>✏️</button>
              <button onClick={()=>handleDelete(m.id)}>❎</button>
              </div>
      ))}
    </div>
  )
}

export default Movies
