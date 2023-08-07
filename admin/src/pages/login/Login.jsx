import React, { useContext, useState } from 'react'
import './login.css'
import {AuthContext} from '../../context/authContext/AuthContext.js'
import {login} from '../../context/authContext/apiCalls.js'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isFetching, dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        login({email, password}, dispatch)
    }

  return (
    <div className='login'>
        <form className="login-form">
            <input type="text" placeholder="Email" className="login-input" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className="login-input" onChange={(e) => setPassword(e.target.value)}/>
            <button className='login-btn' onClick={handleLogin} disabled={isFetching}>Login</button>
        </form>
    </div>
  )
}

export default Login
