import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './specials.module.css';
import LogoRS from '../../../../assets/icon/rsschool.svg';

export default function Specials() {
  return (
    <div className={styles.specials}>
      <p>Special thanks to rs school for making this possible</p>
      <Link to="https://rs.school/" target="_blank">
        <img src={LogoRS} alt="rs school Logo" className={styles.RSLinks} />
      </Link>
    </div>
  );
}
