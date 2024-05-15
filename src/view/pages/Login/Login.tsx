import React from 'react';
import { MainProps } from '../../../data/types/main-props';
import Header from '../../components/common/header/header';
import * as classes from './Login.module.css';

function Login({ showMsg, setShowMsg }: MainProps) {
  // eslint-disable-next-line no-console
  console.log(classes);
  return (
    <>
      <Header showMsg={showMsg} setShowMsg={setShowMsg} />
      <div className={classes.loginPage}>
        <h2>Login</h2>
      </div>
    </>
  );
}

export default Login;
