import React from 'react'
import './Styles/Slider.css'
import {NavLink} from 'react-router-dom'

export const Home = () => {
  return (
   <div>
    <div className="slider">
    </div>
    <div className="content">
      <h1>Gifts That Move You</h1>
      <p>THis year's gift is. Next year's greatness</p>
      <div className="explore">
        <NavLink to='/'>Shop</NavLink>
        <NavLink to='/'>Explore</NavLink>
      </div>
    </div>

    <div>
      <div>
        <img src="" alt=""/>
      </div>
    </div>

   </div>
  )
}
