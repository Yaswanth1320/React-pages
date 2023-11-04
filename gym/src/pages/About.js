import React from 'react'
import './About.css'
import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className='about-title'>
      <h1>About Us</h1>
    </div>
    <div className='about'>
      <div className="images">
        <img className='high' src={about1} height="450px" width="280px" alt="about" />
        <img className='low' src={about2} height="450px" width="280px" alt="about" />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <h3><b>The Best Gym</b></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deserunt odit 
          tempora quia consequuntur aut dignissimos praesentium modi labore rerum.lorem. Lorem,
           ipsum dolor sit amet consectetur adipisicing elit. Possimus, laboriosam.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe nihil iure
           sit sint harum dignissimos commodi placeat rem quam!</p>
        <Link to="/">Explore</Link>
      </div>
    </div>
    </>
    
  )
}

export default About
