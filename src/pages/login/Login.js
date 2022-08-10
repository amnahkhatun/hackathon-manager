import { Link } from 'react-router-dom'
import React from 'react';
import './login.css'
import { Button } from '@mui/material';

function Login() {
  return (
    <div className="login-center">
      <section className="login-main">
        <h1>Welcome</h1>
        <h2>Login to Dashboard</h2>
        <form>
          <h4 className="login-text-input">
            Enter your Username
          </h4>
          <span>
            <input type="text"></input>
          </span>
          <div className="login-btn">
            <Button variant="contained" >
              <Link to="/dashboard" >Login</Link>
            </Button>
          </div>
        </form>
      </section>
    </div>

  )
}


export default Login