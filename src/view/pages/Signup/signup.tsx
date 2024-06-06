/* eslint-disable no-console */
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormSignup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';
import * as styles from './signup.module.css';
import Footer from '../../components/common/footer/footer';
import { MainProps } from '../../../data/types/main-props';
import CustomerSignup from '../../../data/api/customerSignup';
import ErrorSignupMessage, {
  setErrorMessage
} from '../../components/common/SignupMessage/ErrorSignupMessage';

import AutoLoginProcess from '../../../data/utils/autoLoginProcess';

const userPass = { pass: '' };

export default function Singup({ state, setState }: MainProps) {
  const [showSignupState, setShowSignupState] = useState(false);
  const navigate = useNavigate();

  const handleRegistrationSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = new FormData(e.currentTarget);
    userPass.pass = String(userDetails.get('password'));
    const customer = JSON.stringify(Object.fromEntries(userDetails.entries()));
    await CustomerSignup(customer).then((response) =>
      AutoLoginProcess(userPass.pass, response, { state, setState }).then((res) => {
        if (res?.autoLoginState) {
          navigate('/');
        } else {
          setShowSignupState(true);
          setErrorMessage(res?.errorMessage.message, res?.errorMessage.statusCode);
        }
      })
    );
    userPass.pass = '';
  };

  return (
    <>
      <Header state={state} setState={setState} />
      <div className={styles.signup}>
        <div className={` ${showSignupState ? styles.disableForm : styles.showForm} `}>
          <FormSignup onSubmit={handleRegistrationSubmit} />
        </div>
        <div className={` ${showSignupState ? styles.showMessage : styles.hideMessage} `}>
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
