import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-page'>
      <div className="content">
        <h1>Fitness Help Me Feel Better</h1>
        <h3>Welcome to our website! Here you can find a variety of workouts and exercises that will help you feel better about</h3>
        <div className="buttons">
            <Link className='btn' to='classes'>Explore</Link>
            <Link className='btn' to='login'>Join Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
