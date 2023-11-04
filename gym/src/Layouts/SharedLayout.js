import React from 'react'
import { NavLink, Outlet,Link} from 'react-router-dom'
import './Footer.css'

const SharedLayout = () => {
  return (
    <div>
       <nav className='navbar'>
        <div className="logo">
        <i className="fab fa-percentage"></i><NavLink to="/">One per</NavLink>
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
    <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <i className="fab fa-percentage"></i>
          <span className="logo_name">One Per</span>
        </div>
        <div className="media-icons">
          <Link to="/"><i className="fab fa-facebook-f"></i></Link>
          <Link to="/"><i className="fab fa-twitter"></i></Link>
          <Link to="/"><i className="fab fa-instagram"></i></Link>
          <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
          <Link to="/"><i className="fab fa-youtube"></i></Link>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">OverView</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="help/contact">Contact us</Link></li>
          <li><Link to="about">About us</Link></li>
          <li><Link to="login">Get started</Link></li>
        </ul>
        <ul className="box">
          <li className="link_name">Services</li>
          <li><Link to="/">Excercises</Link></li>
          <li><Link to="/">Personal Trainner</Link></li>
          <li><Link to="/">Food Diet</Link></li>
          <li><Link to="/">Shop</Link></li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><Link to="login">Profile</Link></li>
          <li><Link to="login">My account</Link></li>
          <li><Link to="/">Prefrences</Link></li>
          <li><Link to="/">Purchase</Link></li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2023 <Link to="/">Yaswanth paravathala.</Link>All rights reserved</span>
        <span className="policy_terms">
          <Link to="/">Privacy policy</Link>
          <Link to="/">Terms & condition</Link>
        </span>
      </div>
    </div>
  </footer> 
    </div>
  )
}

export default SharedLayout
