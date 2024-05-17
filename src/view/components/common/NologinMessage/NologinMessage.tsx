import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './NologinMessage.module.css';
import { MainProps } from '../../../../data/types/main-props';

function NologinMessage({ state, setState }: MainProps) {
  function hideMessage() {
    setState((prevState) => ({ ...prevState, showMsg: false }));
  }

  return (
    <div className={`${classes.nologin} ${!state.showMsg ? classes.hide : ''} `}>
      {state.showMsg && (
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
