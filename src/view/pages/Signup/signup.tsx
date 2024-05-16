/* eslint-disable no-console */
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import FormSingup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';
import * as SignupStyles from './signup.module.css';
import Footer from '../../components/common/footer/footer';
import { MainProps } from '../../../data/types/main-props';

export default function Singup({ showMsg, setShowMsg }: MainProps) {
  const handleRegistrationSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = new FormData(e.currentTarget);
    console.log(Object.fromEntries(userDetails.entries()));
  };
  return (
    <>
      <Header showMsg={showMsg} setShowMsg={setShowMsg} />
      <div className={SignupStyles.signup}>
        <FormSingup onSubmit={handleRegistrationSubmit} />
      </div>
      <p className={SignupStyles.link}>
        Already have an account?<Link to="/login">Login</Link>
      </p>
      <Footer />
    </>
  );
}
