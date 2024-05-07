import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/main">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navbar;
