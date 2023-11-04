import React from 'react'
import './Login.css'
// import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='container'>
      <div className='login'>
        <h2>LogIn</h2>
        <form onSubmit={()=>{console.log("form submitted")}}>
              <label htmlFor="username">UserName</label><br />
              <i className="fa-regular fa-user"></i><input type="text" name='username' placeholder='Type your username' />
              <br /><br />
              <label htmlFor="password">Password</label><br />
              <i class="fa-solid fa-lock"></i><input className='lock' type="password" name='password' placeholder='Type your email' ></input>
              {/* <p><Link path='login'>forget password ?</Link></p> */}
              <br />
              <button type="submit">Login</button>
        </form>
        <div className="social">
          <h3>Or signUp by using</h3>
            <a href="/"><i class="fa-brands fa-facebook"></i></a>
            <a href="/"><i class="fa-brands fa-twitter"></i></a>
            <a href="/"><i class="fa-brands fa-google"></i></a>
        </div>
      </div>
     
    </div>
  )
}

export default Login
