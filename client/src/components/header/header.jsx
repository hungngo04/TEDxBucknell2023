import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/img/tedx-bu-logo-white.png';
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'

function Header() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="TEDx Bucknell University Logo"/>
        </Link>
      </div>

      <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
        <GiHamburgerMenu fontSize="25px"/>
      </button>

      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul className='topList'>
          <li className="topListItem">
            <Link className="topListItemLink" to="/">
              Home
            </Link>
          </li>

          <li className="topListItem">
            <Link className="topListItemLink" to="/about">
              About
            </Link>
          </li>
        
          <li className="topListItem">
            <Link className="topListItemLink" to="/watch">
              Watch
            </Link>
          </li>
  
          <li className="topListItem">
            <Link className="topListItemLink" to="/team">
              Team
            </Link>
          </li>
   
          <li className="topListItem">
            <Link className="topListItemLink" to="/tickets">
              Tickets
            </Link>
          </li>

          <li className="topListItem">
            <Link className="topListItemLink" to="/faqs">
              FAQs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;