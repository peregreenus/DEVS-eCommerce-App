import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './ErrorSignupMessage.module.css';
import { SignupProps } from '../../../../data/types/signup-props';

const signupErrorMessage = { message: '', statusCode: 0 };
export function setErrorMessage(message: string, statusCode: number) {
  signupErrorMessage.message = message;
  signupErrorMessage.statusCode = statusCode;
}

export default function ErrorSignupMessage({ showSignupState, setShowSignupState }: SignupProps) {
  const OkClick = () => {
    setShowSignupState(false);
  };
  return (
    <div className={`${showSignupState ? styles.successLink : ''}`}>
      <p>Signup Failed</p>
      <p>{signupErrorMessage.message}</p>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={`${styles.button} ${signupErrorMessage.statusCode === 400 ? '' : styles.hideButton}`}
          onClick={OkClick}>
          Change Form
        </button>
        <Link to="/">
          <button
            type="button"
            className={`${styles.button} ${signupErrorMessage.statusCode === 400 ? styles.hideButton : ''}`}
            onClick={OkClick}>
            Try Later
          </button>
        </Link>
        <Link to="/login">
          <button type="button" className={styles.button} onClick={OkClick}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
