import React from 'react';
import { Link } from 'react-router-dom';
import * as SuccessSignupStyles from './SuccessSignupMessage.module.css';
import { SignupSuccessProps } from '../../../../data/types/signup-props';

export default function SuccessSignupMessage({ showSucceed, setShowSucceed }: SignupSuccessProps) {
  const onclickLink = () => {
    setShowSucceed((prevState) => ({ ...prevState, showSignupSuccess: false }));
  };
  return (
    <div className={`${showSucceed.showSignupSuccess ? SuccessSignupStyles.successLink : ''}`}>
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
