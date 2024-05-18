/* eslint-disable no-console */
import React, { FormEvent } from 'react';
import FormSingup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';
import * as SignupStyles from './signup.module.css';
import Footer from '../../components/common/footer/footer';
import { MainProps } from '../../../data/types/main-props';
import CostumerSignup from '../../../data/api/CustumerSignup';

export default function Singup({ state, setState }: MainProps) {
  const handleRegistrationSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = new FormData(e.currentTarget);
    const costumer = JSON.stringify(Object.fromEntries(userDetails.entries()));
    CostumerSignup(costumer);
  };
  return (
    <>
      <Header state={state} setState={setState} />
      <div className={SignupStyles.signup}>
        <FormSingup onSubmit={handleRegistrationSubmit} />
      </div>
      <Footer />
    </>
  );
}
