import React from 'react';
import Header from '../../components/common/header/header';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as classes from './Login.module.css';
import { MainProps } from '../../../data/types/main-props';

function Login({ state, setState }: MainProps) {
  return (
    <>
      <Header state={state} setState={setState} />
      <div className={classes.loginPage}>
        <h2>Login</h2>
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
