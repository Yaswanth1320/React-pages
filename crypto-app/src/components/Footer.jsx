import React from 'react'
import '../Styles/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <p>Crypto Master</p>
        <p>All right reserverd</p>
        <div className="footer-links">
        <Link to='/'>Home</Link>
          <Link to='/cryptocurrencies'>Crypto currencies</Link>
          <Link to='/exchange'>Exchange</Link>
          <Link to='/news'>News</Link>
        </div>
    </div>
  )
}

export default Footer
