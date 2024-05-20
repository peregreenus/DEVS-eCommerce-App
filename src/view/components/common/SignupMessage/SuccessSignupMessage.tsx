import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './SignupMessage.module.css';
import { SignupProps } from '../../../../data/types/signup-props';

export default function SuccessSignupMessage({ showSignupState, setShowSignupState }: SignupProps) {
  const onclickLink = () => {
    setShowSignupState((prevState) => ({ ...prevState, showSignupSuccess: false }));
  };
  return (
    <div className={`${showSignupState.showSignupSuccess ? styles.successLink : ''}`}>
      <p>create user is Succeed!</p>
      <p>
        Now you can
        <Link to="/login" onClick={onclickLink}>
          Login
        </Link>
      </p>
    </div>
  );
}
