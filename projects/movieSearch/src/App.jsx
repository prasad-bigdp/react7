
import { useEffect } from 'react'
import './App.css'
import Movies from './Movies'
import { useState } from 'react'

function App ()
{
  const [searchTerm,setSearchTerm]=useState('')
  const [moviesList, setMoviesList] = useState([])
  
  useEffect(() =>
  {
    async function fetchData(){
      const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=e3277b8e`)
      console.log(res)
      const data = await res.json()
      console.log(data)
      setMoviesList(data.Search)
    }
    fetchData()
  },[searchTerm])

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
    <Movies moviesList={moviesList} />  
   </div>
  )
}

export default App
