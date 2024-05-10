import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './header.css';

function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/main">
        {' '}
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
