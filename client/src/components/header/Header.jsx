import React from 'react'
import './header.css'
import logo from '../../assets/img/tedx-bu-logo-white.png' 
import {
  Link
} from "react-router-dom";
import Homepage from '../../pages/home/home_page';
import About from '../../pages/about/about_page.jsx';

// Note: We might need to adjust the nav bar in the future.
function Header() {
  return (
    <div className="top">
        <div className="logo">
            <img src={logo} alt="TEDx Bucknell University Logo" />
        </div>
        <div className="navBar">
            <ul className='topList'>
                <li className='topListItem'><Link to = "/" style={{textDecoration: "none",color: "white"}}>Home</Link></li>
                <li className='topListItem'><Link to = "/about" style={{textDecoration: "none",color: "white"}}>About</Link></li>
                <li className='topListItem'><Link to = "/watch" style={{textDecoration: "none",color: "white"}}>Watch</Link></li>
                <li className='topListItem'><Link to = "/team" style={{textDecoration: "none",color: "white"}}>Team</Link></li>
                <li className='topListItem'><Link to = "/tickets" style={{textDecoration: "none",color: "white"}}>Tickets</Link></li>
                <li className='topListItem'><Link to = "/faqs" style={{textDecoration: "none",color: "white"}}>FAQs</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header