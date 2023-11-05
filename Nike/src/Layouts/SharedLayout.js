import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import './SharedLayout.css'
import Msg from '../Pages/Msg'

const Navbar = () => {
  return (
    <div>
    <div className='main'>
      <nav className='navbar1'>
        <div className="logo">
          <img src="logo.png" height="20px" width="20px" alt="logo" />
        </div>
        <div className="details">
            <NavLink to="/">Find a store</NavLink><span className='seperator'>|</span>
            <NavLink to="/">Help</NavLink><span className='seperator'>|</span>
            <NavLink to="/">Join us</NavLink><span className='seperator'>|</span>
            <NavLink to="/">Sign In</NavLink>
        </div>
      </nav>
      <nav className="navbar2">
        <div className="logo">
          <img src="logo2.png" height="50px" width="75px" alt="logo" />
        </div>
        <div className="links">
            <NavLink to="/">New & Featured</NavLink>
            <NavLink to="mens">Mens</NavLink>
            <NavLink to="/">Womens</NavLink>
            <NavLink to="/">Kids</NavLink>
            <NavLink to="/">Sale</NavLink>
            <NavLink to="/">Customize</NavLink>
            <NavLink to="/">SNKRS</NavLink>
        </div>
        <div className="search">
          <input type="text" placeholder="Search for items"/>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </nav>
    </div>
    <Msg/>
    <div>
    <Outlet />
    </div>
    </div>
  )
}

export default Navbar
