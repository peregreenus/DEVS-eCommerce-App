import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/main">Main</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/basket">Basket</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navbar;
