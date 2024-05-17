import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import NologinMessage from '../NologinMessage/NologinMessage';
import * as classes from './header.module.css';
import { MainProps } from '../../../../data/types/main-props';

function Header({ state, setState }: MainProps) {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} to="/" />
        <Navbar />
      </header>
      <NologinMessage state={state} setState={setState} />
    </>
  );
}

export default Header;
