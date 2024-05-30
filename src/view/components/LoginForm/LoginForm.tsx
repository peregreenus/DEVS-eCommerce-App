/* eslint-disable no-console */
import React, { useEffect, useRef, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import handleSubmit from './handleSubmit';
import inputPropsArr from '../FormInput/inputPropsData';
import handleChange from '../FormInput/handleChange';
import * as classes from './LoginForm.module.css';
import { MainProps } from '../../../data/types/main-props';

function LoginForm({ state, setState }: MainProps) {
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [failAuthMessage, setFailAuthMessage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const resetErrorMessages = (): void => {
    setEmailErrorMessage('');
    setPasswordErrorMessage('');
  };

  const skipFailMessage = (e: FormEvent) => {
    e.preventDefault();
    setFailAuthMessage('');
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [failAuthMessage]);

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
      key={input.name}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...input}
    />
  ));

  return (
    <form
      className={classes.loginForm}
      onSubmit={(e) => {
        handleSubmit(e, { state, setState }).then((res) => {
          if (res instanceof Object) {
            const { message } = res;
            setFailAuthMessage(`${message}`);
          }
          resetErrorMessages();
          if (localStorage.getItem('bearerToken')) {
            navigate('/');
          }
          localStorage.removeItem('bearerAnonToken');
        });

        if (inputRef.current) inputRef.current.focus();
      }}>
      {failAuthMessage ? (
        <div className={classes.failMessage}>
          <h4 className={classes.failMessageTitle}>Wrong Email or Password!</h4>
          {failAuthMessage}
          <button onClick={skipFailMessage} type="button">
            Skip
          </button>
        </div>
      ) : (
        <>
          {inputs}
          <button type="submit" disabled={isDisabled}>
            Login
          </button>
        </>
      )}
    </form>
  );
}

export default LoginForm;
