/* eslint-disable no-console */
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import FormSingup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';
import './signup.css';
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
      <div className="signup-page">
        <FormSingup onSubmit={handleRegistrationSubmit} />
        <p className="link-to">
          Already have an account?<Link to="/login"> Login</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
