import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  let auth = localStorage.getItem('user')
  return (
    <div className='nav-bar'>
        {
          auth?
          <ul className='nav-ul'>
            <li><Link to='/logout'>Logout</Link></li>
        </ul>
        :
        <ul className='nav-ul'>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
        }
    </div>
  )
}

export default Nav
