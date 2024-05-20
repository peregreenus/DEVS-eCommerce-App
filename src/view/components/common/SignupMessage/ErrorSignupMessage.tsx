import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './SignupMessage.module.css';
import { SignupProps } from '../../../../data/types/signup-props';

const signupErrorMessage = { message: '' };
export function setErrorMessage(message: string) {
  signupErrorMessage.message = message;
}

export default function ErrorSignupMessage({ showSignupState, setShowSignupState }: SignupProps) {
  const OkClick = () => {
    setShowSignupState((prevState) => ({ ...prevState, showSignupError: false }));
  };
  const loginClick = () => {
    setShowSignupState((prevState) => ({ ...prevState, showSignupError: false }));
  };
  return (
    <div className={`${showSignupState.showSignupError ? styles.successLink : ''}`}>
      <p>{signupErrorMessage.message}</p>
      <div className={styles.buttonContainer}>
        <button type="button" className={styles.button} onClick={OkClick}>
          Change Form
        </button>
        <Link to="/login">
          <button type="button" className={styles.button} onClick={loginClick}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
