import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/img/tedx-bu-logo-white.png';
import { NavLink, Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'

function Header() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const handleTabClick = () => {
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
          <li className='topListItem'>
            <NavLink to="/"
              className="topListItemLink" 
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#EB0028" : "",
                }}}
              onClick={() => handleTabClick()}>
              Home
            </NavLink>
          </li>

          <li className='topListItem'>
            <NavLink to="/about"
              className="topListItemLink" 
              style={({isActive}) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#EB0028" : "",
                }}}
              onClick={() => handleTabClick()}>
              About
            </NavLink>
          </li>
        
          <li className='topListItem'>
            <NavLink to="/watch"
              className="topListItemLink" 
              style={({isActive}) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#EB0028" : "",
                }}}
              onClick={() => handleTabClick()}>
              Watch
            </NavLink>
          </li>
  
          <li className='topListItem'>
            <NavLink to="/team"
              className="topListItemLink" 
              style={({isActive}) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#EB0028" : "",
                }}}
              onClick={() => handleTabClick()}>
              Team
            </NavLink>
          </li>
   
          <li className='topListItem'>
            <Link className="topListItemLink" to="https://bucknell.universitytickets.com/" target='_blank'>
              Tickets
            </Link>
          </li>

          <li className='topListItem'>
            <NavLink to="/faqs"
              className="topListItemLink" 
              style={({isActive}) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#EB0028" : "",
                }}}
              onClick={() => handleTabClick()}>
              FAQs
            </NavLink>
          </li>

          <li className='topListItem'>
            <NavLink to="/login"
              className="topListItemLink" 
              style={({isActive}) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#EB0028" : "",
                }}}
              onClick={() => handleTabClick()}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;