import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import NologinMessage from '../NologinMessage/NologinMessage';
import { MainProps } from '../../../../data/types/main-props';
import * as classes from './header.module.css';

function Header({ showMsg, setShowMsg }: MainProps) {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} to="/main" />
        <Navbar />
      </header>
      <NologinMessage showMsg={showMsg} setShowMsg={setShowMsg} />
    </>
  );
}

export default Header;
