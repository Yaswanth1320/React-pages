import React from 'react'
import '../Styles/navbar.css'
import logo from '../Images/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-container'>
        <div className="nav-logo">
          <NavLink to='/'><img src={logo} alt="logo" width='180px' height='90px'/></NavLink>
        </div>
        <div className="nav-links">
          <NavLink to='/'><i className="fa-solid fa-house"></i> Home</NavLink>
          <NavLink to='/cryptocurrencies'><i className="fa-solid fa-coins"></i> Crypto currencies</NavLink>
          <NavLink to='/exchange'><i className="fa-brands fa-stack-exchange"></i> Exchange</NavLink>
          <NavLink to='/news'><i className="fa-regular fa-newspaper"></i> News</NavLink>
        </div>
    </div>
  )
}

export default Navbar