import React, { useRef, useState } from 'react'
import './register.scss'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const emailRef = useRef()

  const handleLogin = () => {
    navigate('/login', {replace: true})
  }

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }

  const handleFinish = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/auth/register', {username, email, password})
      navigate('/login', {replace: true})
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
          <button className="login-button" onClick={handleLogin}>Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef}/>
            <button className="register-button" onClick={handleStart}>Get Started</button>
          </div>
        ) : (
          <form className="input">
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="register-button" onClick={handleFinish}>Start</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Register