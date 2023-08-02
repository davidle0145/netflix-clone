import React, { useState } from 'react'
import './navbar.scss'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true) // window.pageYOffset is deprecated.
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">

          {/* left */}
          <div className="left">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
              <span>HomePage</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New & Popular</span>
              <span>My List</span>
          </div>

          {/* right */}
          <div className="right">
              <Search className="icon"/>
              <span>Kid</span>
              <Notifications className="icon"/>
              <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <div className="profile">
                <ArrowDropDown className="icon"/>
                <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar