/* eslint-disable no-console */
import React, { FormEvent } from 'react';
import FormSingup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';
import * as SignupStyles from './signup.module.css';
import Footer from '../../components/common/footer/footer';

export default function Singup() {
  const handleRegistrationSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(userDetails.entries()));
  };
  return (
    <>
      <Header />
      <div className={SignupStyles.signup}>
        <FormSingup onSubmit={handleRegistrationSubmit} />
      </div>
      <Footer />
    </>
  );
}
