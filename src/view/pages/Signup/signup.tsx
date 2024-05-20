/* eslint-disable no-console */
import React, { FormEvent, useState } from 'react';
import FormSignup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';
import * as styles from './signup.module.css';
import Footer from '../../components/common/footer/footer';
import SuccessSignupMessage from '../../components/common/SuccessSignupMessage/SuccessSignupMessage';
import { MainProps } from '../../../data/types/main-props';
import { SignupState } from '../../../data/types/signup-props';
import CustomerSignup from '../../../data/api/customerSignup';
import ErrorSignupMessage, {
  setErrorMessage
} from '../../components/common/SuccessSignupMessage/ErrorSignupMessage';
import {
  CustomerResponse,
  ErrorCustomerResponse
} from '../../../data/types/interfaces/customer.interface';

export default function Singup({ state, setState }: MainProps) {
  const [showSignupState, setShowSignupState] = useState<SignupState>({
    showSignupSuccess: false,
    showSignupError: false
  });

  const showSuccessSignupMessage = (res: CustomerResponse | ErrorCustomerResponse) => {
    if (res.message && res.statusCode && res.statusCode >= 400) {
      console.log(res);
      switch (res.statusCode) {
        case 400:
          setErrorMessage('Customer with this email is already exist', res.statusCode);
          break;
        default:
          setErrorMessage('Internal server error', res.statusCode);
          break;
      }
      setShowSignupState((prevState) => ({
        ...prevState,
        showSignupError: true,
        showSignupSuccess: false
      }));
    } else {
      console.log(res);
      setShowSignupState((prevState) => ({
        ...prevState,
        showSignupSuccess: true,
        showSignupError: false
      }));
    }
  };

  const handleRegistrationSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = new FormData(e.currentTarget);
    const customer = JSON.stringify(Object.fromEntries(userDetails.entries()));
    await CustomerSignup(customer).then((res) => showSuccessSignupMessage(res));
  };

  return (
    <>
      <Header state={state} setState={setState} />
      <div className={styles.signup}>
        <div
          className={` ${showSignupState.showSignupSuccess || showSignupState.showSignupError ? styles.disableForm : styles.showForm} `}>
          <FormSignup onSubmit={handleRegistrationSubmit} />
        </div>
        <div
          className={` ${showSignupState.showSignupSuccess ? styles.showMessage : styles.hideMessage} `}>
          <SuccessSignupMessage
            showSignupState={showSignupState}
            setShowSignupState={setShowSignupState}
          />
        </div>
        <div
          className={` ${showSignupState.showSignupError ? styles.showMessage : styles.hideMessage} `}>
          <ErrorSignupMessage
            showSignupState={showSignupState}
            setShowSignupState={setShowSignupState}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
