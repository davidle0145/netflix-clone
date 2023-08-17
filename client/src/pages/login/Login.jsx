import React, { useContext, useState } from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { login } from '../../context/authContext/apiCalls.js'
import { AuthContext } from '../../context/authContext/AuthContext.js'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    login({email,password}, dispatch)
  }

  const handleRegister = () => {
    navigate('/register', {replace: true})
  }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone number" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="login-button" onClick={handleLogin}>Sign In</button>
          <span>New to Netflix?  
              <b onClick={handleRegister}> Sign up now.</b>
          </span>
          <small>This page is protected by Google reCAPTCHA to ensure you're not a bot <b>Learn more</b></small>
        </form>
      </div>
    </div>
  )
}

export default Login