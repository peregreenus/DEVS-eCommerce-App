import React, { FormEvent, useState } from 'react';
import FormSignup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';
import * as styles from './signup.module.css';
import Footer from '../../components/common/footer/footer';
import SuccessSignupMessage from '../../components/common/SuccessSignupMessage/SuccessSignupMessage';
import { MainProps } from '../../../data/types/main-props';
import { SignupSuccessState } from '../../../data/types/signup-props';
import CustomerSignup from '../../../data/api/customerSignup';

export default function Singup({ state, setState }: MainProps) {
  const [showSucceed, setShowSucceed] = useState<SignupSuccessState>({
    showSignupSuccess: false
  });

  const showSuccessSignupMessage = () => {
    setShowSucceed((prevState) => ({ ...prevState, showSignupSuccess: true }));
  };

  const handleRegistrationSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = new FormData(e.currentTarget);
    const customer = JSON.stringify(Object.fromEntries(userDetails.entries()));
    await CustomerSignup(customer).then(() => showSuccessSignupMessage());
  };

  return (
    <>
      <Header state={state} setState={setState} />
      <div className={styles.signup}>
        <div
          className={` ${showSucceed.showSignupSuccess ? styles.disableForm : styles.showForm} `}>
          <FormSignup onSubmit={handleRegistrationSubmit} />
        </div>
        <div
          className={` ${showSucceed.showSignupSuccess ? styles.showMessage : styles.hideMessage} `}>
          <SuccessSignupMessage showSucceed={showSucceed} setShowSucceed={setShowSucceed} />
        </div>
      </div>

      <Footer />
    </>
  );
}
