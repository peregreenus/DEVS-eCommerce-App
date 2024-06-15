import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/header/header';
import LoginForm from '../../components/LoginForm/LoginForm';
import { MainProps } from '../../../data/types/main-props';
import * as classes from './Login.module.css';
import Footer from '../../components/common/footer/footer';

function Login({ state, setState }: MainProps) {
  return (
    <>
      <Header state={state} setState={setState} />
      <div className={classes.loginPage}>
        <h2>Login</h2>
        <div className={classes.linkContainer}>
          <p>Don&apos;t have an account? </p>
          <Link className={classes.link} to="/signup">
            Signup
          </Link>
        </div>
        <LoginForm state={state} setState={setState} />
      </div>
      <Footer />
    </>
  );
}

export default Login;
