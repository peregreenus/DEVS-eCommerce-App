import React from 'react';
import { Link } from 'react-router-dom';
import { MainProps } from '../../../../data/types/main-props';
import * as classes from './NologinMessage.module.css';

function NologinMessage({ showMsg, setShowMsg }: MainProps) {
  function hideMessage() {
    setShowMsg(false);
  }

  return (
    <div className={`${classes.nologin} ${!showMsg ? classes.hide : ''} `}>
      {showMsg && (
        <>
          <div className={classes.wrapper}>
            <span>You are unauthorized user</span>
            <Link to="/signup">Register</Link>
            <Link to="/login">Login</Link>
          </div>
          <button className={classes.button} type="button" onClick={hideMessage}>
            <img className={classes.imgCross} src="../../../../assets/icon/cross.svg" alt="close" />
          </button>
        </>
      )}
    </div>
  );
}

export default NologinMessage;
