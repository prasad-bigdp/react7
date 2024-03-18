import React from 'react'
import logo from '../assets/react.svg'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
      <div className='container-fluid d-flex justify-content-between bg-black text-white'>
          <img src={logo} alt="logo" className='img-fluid' />
          <div>
              <ul className='d-flex justify-content-between list-unstyled gap-3'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              </ul> 
          </div>
    </div>
  )
}

export default Header
