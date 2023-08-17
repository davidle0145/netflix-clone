import React, { useContext } from 'react'
import Home from './pages/home/Home'
import './app.scss'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import {AuthContext} from './authContext/AuthContext.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  const {user} = useContext(AuthContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
        <Route path="/register" element={!user ? <Register/> : <Navigate to="/"/>}/>
        <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
        { user && (
          <>
            <Route path="/movies" element={<Home type="movies"/>} />
            <Route path="/series" element={<Home type="series"/>} />
            <Route path="/watch" element={<Watch/>} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App