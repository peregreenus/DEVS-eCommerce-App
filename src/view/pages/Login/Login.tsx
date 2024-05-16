import React from 'react';
import { MainProps } from '../../../data/types/main-props';
import Header from '../../components/common/header/header';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as classes from './Login.module.css';

function Login({ showMsg, setShowMsg }: MainProps) {
  return (
    <>
      <Header showMsg={showMsg} setShowMsg={setShowMsg} />
      <div className={classes.loginPage}>
        <h2>Login</h2>
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
