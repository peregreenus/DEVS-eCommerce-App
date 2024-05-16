import React, { useEffect, useRef, useState, useId } from 'react';
import FormInput from '../FormInput/FormInput';
import handleSubmit from './handleSubmit';
import inputPropsArr from '../FormInput/inputPropsData';
import handleChange from '../FormInput/handleChange';
import * as classes from './LoginForm.module.css';

function LoginForm() {
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const key = useId();

  const resetErrorMessages = (): void => {
    setEmailErrorMessage('');
    setPasswordErrorMessage('');
  };

  useEffect(() => {
    if (emailErrorMessage === ' ' && passwordErrorMessage === ' ') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [emailErrorMessage, passwordErrorMessage]);

  const inputs = inputPropsArr.map((input, i) => (
    <FormInput
      id={i}
      ref={i === 0 ? inputRef : null}
      onChange={(e) =>
        input.name === 'email'
          ? setEmailErrorMessage(handleChange(e))
          : setPasswordErrorMessage(handleChange(e))
      }
      errorMessage={input.name === 'email' ? emailErrorMessage : passwordErrorMessage}
      key={key + input.name}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...input}
    />
  ));

  return (
    <form
      className={classes.loginForm}
      onSubmit={(e) => {
        handleSubmit(e);
        resetErrorMessages();

        if (inputRef.current) inputRef.current.focus();
      }}>
      {inputs}
      <button type="submit" disabled={isDisabled}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
