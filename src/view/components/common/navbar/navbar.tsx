import React, { useState, KeyboardEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainProps } from '../../../../data/types/main-props';
import * as classes from './navbar.module.css';
import ShoppingCartIcon from '../icons/shoppingCart';

import getCart from '../../../../data/api/Cart/GetCart';
import { ICart } from '../../../../data/types/interfaces/ICart';

function Navbar({ state }: MainProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [countInCart, setCountInCart] = useState<number>(0);
  async function fetchCart() {
    const fetchedCart: ICart = await getCart(false);
    if (fetchedCart) {
      setCountInCart(fetchedCart.totalLineItemQuantity);
    }
  }
  useEffect(() => {
    fetchCart();
  }, [state]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchCart();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuFromKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <nav className={classes.navbar}>
      <div
        className={`${classes.burger} ${isOpen ? classes.rotate : ''}`}
        onClick={toggleMenu}
        onKeyDown={toggleMenuFromKey}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu">
        <div className={classes.burgerBar} />
        <div className={classes.burgerBar} />
        <div className={classes.burgerBar} />
      </div>
      <div className={`${classes.menu} ${isOpen ? classes.show : ''}`}>
        <Link to="/" onClick={toggleMenu}>
          Main
        </Link>
        <Link to="/catalog" onClick={toggleMenu}>
          Catalog
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        {!state.userLoggedIn && (
          <>
            <Link to="/signup" onClick={toggleMenu}>
              Register
            </Link>
            <Link to="/login" onClick={toggleMenu}>
              Login
            </Link>
          </>
        )}
        {state.userLoggedIn && (
          <>
            <Link to="/logout" onClick={toggleMenu}>
              Logout
            </Link>
            <Link to="/profile" onClick={toggleMenu}>
              Profile
            </Link>
          </>
        )}
        <Link to="/cart" onClick={toggleMenu}>
          <ShoppingCartIcon count={countInCart} />
        </Link>
      </div>
      {isOpen ? (
        <div
          className={classes.shadow}
          onClick={toggleMenu}
          onKeyDown={toggleMenuFromKey}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
        />
      ) : (
        <div />
      )}
    </nav>
  );
}

export default Navbar;
