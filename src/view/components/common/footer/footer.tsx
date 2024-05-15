import React from 'react';
import * as classes from './footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerItem}>
        © 2024 &quot;Galactic Exclusive&quot;. All rights reserved.
      </div>
      <div>
        <p>Contact Information:</p>
        <p>Phone: +1 (800) 123-4567</p>
        <p>Email: info@galacticexclusive.com</p>
      </div>
      <div className={classes.footerItem}>
        <p>Address:</p>
        <p>123 Space Avenue,</p>
        <p>Galactic City, GC 00000</p>
      </div>
      <div className={classes.footerItem}>
        <p>Follow us on social media:</p>
      </div>
    </footer>
  );
}

export default Footer;
