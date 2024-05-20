import React from 'react';
import * as styles from './SignupMessage.module.css';
import { SignupProps } from '../../../../data/types/signup-props';

const signupErrorMessage = { message: '' };
export function setErrorMessage(message: string) {
  signupErrorMessage.message = message;
}

export default function ErrorSignupMessage({ showSignupState, setShowSignupState }: SignupProps) {
  const onclickLink = () => {
    setShowSignupState((prevState) => ({ ...prevState, showSignupError: false }));
  };
  return (
    <div className={`${showSignupState.showSignupError ? styles.successLink : ''}`}>
      <p>{signupErrorMessage.message}</p>
      <p>
        <button type="button" onClick={onclickLink}>
          OK
        </button>
      </p>
    </div>
  );
}
