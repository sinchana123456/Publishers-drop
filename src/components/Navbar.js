import React, { useState } from 'react';
import logo from "./codex.jpg";
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='logo' onClick={closeMobileMenu}>
          <img src='codex.jpg' />
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/bookstore'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Book Store <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/editedbooks'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Edited Books <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/conferrenceproceedings'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Conferrence Proceedings <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/journals'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Journals <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/memberships'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Memberships <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/awards'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Awards <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/editorialboardmembers'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Editoral Board Members <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/more'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              More <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
