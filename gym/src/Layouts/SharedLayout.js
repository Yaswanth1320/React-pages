import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
       <nav className='navbar'>
        <div className="logo">
        <NavLink to="/">GYM</NavLink>
        </div>
        <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="classes">Classes</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="login">Login</NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
    </main>
    </div>
  )
}

export default SharedLayout
