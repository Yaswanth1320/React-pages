import { Link } from 'react-router-dom'
import React from 'react'

const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <p>Go back to the <Link to='/'>homepage</Link></p>
    </div>
  )
}

export default Error
