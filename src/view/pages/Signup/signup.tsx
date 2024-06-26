import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/common/header/header';
import * as styles from './signup.module.css';
import Footer from '../../components/common/footer/footer';
import { MainProps } from '../../../data/types/main-props';
import CustomerSignup from '../../../data/api/customerSignup';
import ErrorSignupMessage, {
  setErrorMessage
} from '../../components/common/SignupMessage/ErrorSignupMessage';

import AutoLoginProcess from '../../../data/utils/autoLoginProcess';
import FormSignup from '../../components/Signup/signup-form';

const userPass = { pass: '' };

export default function Signup({ state, setState }: MainProps) {
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

      <div className={styles.signupPage}>
        <h2>Register</h2>
        <p className={styles.link}>
          OR if you already have an account<Link to="/login">Login</Link>
        </p>
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
