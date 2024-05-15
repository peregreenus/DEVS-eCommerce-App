import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link to="/main">Main</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/basket">
        <img
          className={classes.basketImg}
          src="../../../../assets/icon/free-icon-shopping-cart-481384.svg"
          alt="basket"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
