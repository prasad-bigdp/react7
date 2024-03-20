import React from 'react';
import Header from './components/Header.jsx'
import Movies from './pages/Movies.jsx'
import Footer from "./components/Footer.jsx"
import './App.css'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { Routes,Route } from 'react-router-dom';
import Movie from './pages/Movie.jsx';
const App = () => {
  return (
    <div>
      <Header />
     
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
