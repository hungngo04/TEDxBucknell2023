import React from 'react'
import './header.css'
import logo from './img/logo-white.png' 

function Header() {
  return (
    <div className="top">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="navBar">
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Watch</li>
                <li className='topListItem'>Team</li>
                <li className='topListItem'>Tickets</li>
                <li className='topListItem'>FAQs</li>
            </ul>
        </div>
    </div>
  )
}

export default Header