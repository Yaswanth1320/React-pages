import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function SharedLayout() {
  return (
    <>
    <div className='App'>
      <Navbar/>
      <div className="main">
      <Outlet />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SharedLayout
