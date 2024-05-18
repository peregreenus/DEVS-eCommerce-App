import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as classes from './navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && burgerRef.current) {
      if (
        !menuRef.current.contains(event.target as Node) &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={classes.navbar}>
      <div
        ref={burgerRef}
        className={`${classes.burger} ${isOpen ? classes.rotate : ''}`}
        onClick={toggleMenu}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu">
        <div className={classes.burgerBar} />
        <div className={classes.burgerBar} />
        <div className={classes.burgerBar} />
      </div>
      <div ref={menuRef} className={`${classes.menu} ${isOpen ? classes.show : ''}`}>
        <Link to="/" onClick={toggleMenu}>
          Main
        </Link>
        <Link to="/catalog" onClick={toggleMenu}>
          Catalog
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/signup" onClick={toggleMenu}>
          Register
        </Link>
        <Link to="/login" onClick={toggleMenu}>
          Login
        </Link>
        <Link to="/basket" onClick={toggleMenu}>
          <img
            className={classes.basketImg}
            src="../../../../assets/icon/free-icon-shopping-cart-481384.svg"
            alt="basket"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
