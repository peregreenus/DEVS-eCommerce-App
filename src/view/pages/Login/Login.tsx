import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import Header from '../../components/common/header/header';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as classes from './Login.module.css';
import { MainProps } from '../../../data/types/main-props';

function Login({ state, setState }: MainProps) {
  const token = localStorage.getItem('bearerToken');

  return token ? (
    <Navigate to="/" />
  ) : (
    <>
      <Header state={state} setState={setState} />
      <div className={classes.loginPage}>
        <h2>Login</h2>
        <div className={classes.linkContainer}>
          <p>Don&apos;t have an account? </p>
          <Link className={classes.link} to="/signup">
            &nbsp;Signup!
          </Link>
        </div>
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
