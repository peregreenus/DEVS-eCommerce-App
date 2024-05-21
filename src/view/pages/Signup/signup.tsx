/* eslint-disable no-console */
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormSignup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';
import * as styles from './signup.module.css';
import Footer from '../../components/common/footer/footer';
import { MainProps } from '../../../data/types/main-props';
import { SignupState } from '../../../data/types/signup-props';
import CustomerSignup from '../../../data/api/customerSignup';
import ErrorSignupMessage, {
  setErrorMessage
} from '../../components/common/SignupMessage/ErrorSignupMessage';
import { CustomerResponse } from '../../../data/types/interfaces/customer.interface';
import getTokenForLogin from '../../../data/api/getTokenForLogin';
import logInCustomer from '../../../data/api/logInCustomer';

const userPass = { pass: '' };

export default function Singup({ state, setState }: MainProps) {
  const [showSignupState, setShowSignupState] = useState<SignupState>({
    showSignupSuccess: false,
    showSignupError: false
  });
  const navigate = useNavigate();
  const signupProcess = (res: CustomerResponse) => {
    if (res.message && res.statusCode && res.statusCode >= 400) {
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
        showSignupError: true
      }));
    } else if (res.customer?.email) {
      getTokenForLogin(res.customer?.email, userPass.pass)
        .then((token) => {
          if (res.customer?.email && userPass.pass) {
            logInCustomer(res.customer?.email, userPass.pass, `${token}`, '', {
              state,
              setState
            }).catch((err) => {
              throw new Error(err);
            });
          }
          return token;
        })
        .then(() => navigate('/'))
        .catch((err) => console.error(err));
      userPass.pass = '';
    }
  };

  const handleRegistrationSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = new FormData(e.currentTarget);
    userPass.pass = String(userDetails.get('password'));
    const customer = JSON.stringify(Object.fromEntries(userDetails.entries()));
    await CustomerSignup(customer).then((res) => signupProcess(res));
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
