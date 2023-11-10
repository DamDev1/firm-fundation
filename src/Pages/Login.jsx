import React from 'react'
import "../Pages/css/Login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login-container'>
      <div className="left">
        <h1>Welcome</h1>
      </div>

      <div className="right">
        <div className="right-login-container">
          <form>
            <span>
              <input type="text" placeholder='Enter School Name' />
            </span>
            <span>
              <input type="password" placeholder='Enter Your Password' />
            </span>
            <span className='forget-password'>
              <Link>Forgot your password?</Link>
            </span>
            <button>
              <Link to='/' style={{color: "white", textDecoration: "none"}}>SIGN IN</Link>
            </button>
          </form>

          <p>© 2021 Firm Foundation School Management</p>
        </div>
      </div>
    </div>
  )
}
