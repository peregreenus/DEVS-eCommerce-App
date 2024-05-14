import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import NologinMessage from '../NologinMessage/NologinMessage';
import { MainProps } from '../../../../data/types/main-props';

function Header({ showMsg, setShowMsg }: MainProps) {
  return (
    <>
      <header className="header">
        <Link className="logo" to="/main">
          {' '}
        </Link>
        <div>{}</div>
        <Navbar />
      </header>
      <NologinMessage showMsg={showMsg} setShowMsg={setShowMsg} />
    </>
  );
}

export default Header;
