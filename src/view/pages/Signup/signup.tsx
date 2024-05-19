import React, { FormEvent, useState } from 'react';
import FormSignup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';
import * as SignupStyles from './signup.module.css';
import Footer from '../../components/common/footer/footer';
import CostumerSignup from '../../../data/api/CostumerSignup';
import SuccessSignupMessage from '../../components/common/SuccessSignupMessage/SuccessSignupMessage';
import { MainProps } from '../../../data/types/main-props';
import { SignupSuccessState } from '../../../data/types/signup-props';

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
    const costumer = JSON.stringify(Object.fromEntries(userDetails.entries()));
    await CostumerSignup(costumer).then(showSuccessSignupMessage);
  };

  return (
    <>
      <Header state={state} setState={setState} />
      <div className={SignupStyles.signup}>
        <div
          className={` ${showSucceed.showSignupSuccess ? SignupStyles.disableForm : SignupStyles.showForm} `}>
          <FormSignup onSubmit={handleRegistrationSubmit} />
        </div>
        <div
          className={` ${showSucceed.showSignupSuccess ? SignupStyles.showMessage : SignupStyles.hideMessage} `}>
          <SuccessSignupMessage showSucceed={showSucceed} setShowSucceed={setShowSucceed} />
        </div>
      </div>

      <Footer />
    </>
  );
}
