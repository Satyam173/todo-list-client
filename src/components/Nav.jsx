import React from 'react'
import { Link } from 'react-router-dom'
import Register from '../pages/Register'

const Nav = () => {
  return (
    <div className='nav-bar'>
        <ul className='nav-ul'>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
        </ul>
    </div>
  )
}

export default Nav
