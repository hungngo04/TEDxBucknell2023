import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/img/tedx-bu-logo-white.png';
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'

function Header() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsNavExpanded(false);
  };

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
          <li className={`topListItem ${activeTab === 'Home' ? 'active' : ''}`}>
            <Link className="topListItemLink" to="/" onClick={() => handleTabClick('Home')}>
              Home
            </Link>
          </li>

          <li className={`topListItem ${activeTab === 'About' ? 'active' : ''}`}>
            <Link className="topListItemLink" to="/about" onClick={() => handleTabClick('About')}>
              About
            </Link>
          </li>
        
          <li className={`topListItem ${activeTab === 'Watch' ? 'active' : ''}`}>
            <Link className="topListItemLink" to="/watch" onClick={() => handleTabClick('Watch')}>
              Watch
            </Link>
          </li>
  
          <li className={`topListItem ${activeTab === 'Team' ? 'active' : ''}`}>
            <Link className="topListItemLink" to="/team" onClick={() => handleTabClick('Team')}>
              Team
            </Link>
          </li>
   
          <li className={`topListItem ${activeTab === 'Tickets' ? 'active' : ''}`}>
            <Link className="topListItemLink" to="https://bucknell.universitytickets.com/" target='_blank'>
              Tickets
            </Link>
          </li>

          <li className={`topListItem ${activeTab === 'FAQs' ? 'active' : ''}`}>
            <Link className="topListItemLink" to="/faqs" onClick={() => handleTabClick('FAQs')}>
              FAQs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;