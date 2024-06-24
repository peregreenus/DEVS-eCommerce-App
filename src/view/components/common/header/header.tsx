import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import NologinMessage from '../NologinMessage/NologinMessage';
import * as classes from './header.module.css';
import { MainProps } from '../../../../data/types/main-props';
import Logo from '../../../../assets/img/project-logo.png';

function Header({ state, setState }: MainProps) {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <img src={Logo} alt="Logo" className={classes.logo} />
          <p>
            GALACTIC <br /> EXCLUSIVE
          </p>
        </Link>
        <Navbar state={state} setState={setState} />
      </header>
      <NologinMessage state={state} setState={setState} />
    </>
  );
}

export default Header;
