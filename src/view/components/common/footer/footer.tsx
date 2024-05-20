import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerItem}>
        © 2024 &quot;Galactic Exclusive&quot;. All rights reserved.
      </div>
      <div>
        <p>Contact Information:</p>
        <Link to="tel:+90000000">
          <p>Phone: +1 (800) 123-4567</p>
          <p>Email: info@galacticexclusive.com</p>
        </Link>
      </div>
      <div className={classes.footerItem}>
        <p>Address:</p>
        <Link to="https://www.google.com/maps/@57.8202848,-42.6579508,9.75z?authuser=0&entry=ttu">
          <p>123 Space Avenue,</p>
          <p>Galactic City, GC 00000</p>
        </Link>
      </div>
      <div className={`${classes.footerItem} ${classes.iconWrapper}`}>
        <p>Follow us on social media:</p>

        <Link to="https://x.com/">
          <div className={`${classes.item} ${classes.twitterIcon}`} />
        </Link>
        <Link to="https://www.facebook.com/">
          <div className={`${classes.item} ${classes.facebookIcon}`} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
