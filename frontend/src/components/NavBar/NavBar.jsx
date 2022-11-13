import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul className="navbar-ul">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </ul>
    </div>
  )
}

export default NavBar