import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
          <ul>
            <li>
              <Link to="/">Calendar</Link>
            </li>
            <li>
              <Link to="/time">Time</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Navbar