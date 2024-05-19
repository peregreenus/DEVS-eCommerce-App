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
          <div
            className={classes.button}
            onClick={hideMessage}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                hideMessage();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="hide message"
          />
        </>
      )}
    </div>
  );
}

export default NologinMessage;
