/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './profile-password.module.css';
import SaveMarkIcon from '../../common/icons/saveMarcIcon';
import { validationField } from '../../../../data/utils/validate-form';
import { errorInitialPasswordState, initialPasswordState } from '../initial-state';
import { ProfilePasswordType } from '../../../../data/types/profile-props';
import setCustomerPassword from '../../../../data/api/profile/setPassword';
import { setLSVersionProfileCustomer } from '../../../../data/utils/setLS';
import { CustomerResponse } from '../../../../data/types/interfaces/customer.interface';
import { MainProps } from '../../../../data/types/main-props';
import getTokenForLogin from '../../../../data/api/getTokenForLogin';
import logInCustomer from '../../../../data/api/logInCustomer';
import { SignupState } from '../../../../data/types/signup-props';
import getAnonToken from '../../../../data/api/getToken';

const userPassChange = { pass: '' };
const signupErrorMessage = { message: '', statusCode: 0 };

export function setErrorMessage(message: string, statusCode: number) {
  signupErrorMessage.message = message;
  signupErrorMessage.statusCode = statusCode;
}

export default function ChangePasswordTabContent({ state, setState }: MainProps) {
  const validationErrors: { [key: string]: string } = errorInitialPasswordState;
  const [showSignupState, setShowSignupState] = useState<SignupState>({
    showSignupSuccess: false,
    showSignupError: false
  });
  const [newPassword, setNewPassword] = useState<ProfilePasswordType>({
    ...initialPasswordState
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>(validationErrors);
  const [isValid, setFormValid] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(errors);
    if (Object.values(errors).every((str) => str === '')) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [errors]);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setShowSignupState((prevState) => ({
      ...prevState,
      showSignupError: false
    }));
    switch (name) {
      case 'currentPassword':
        if (!value) {
          validationErrors[name] = 'should not be empty';
        } else {
          validationErrors[name] = '';
        }
        break;
      case 'confirmNewPassword':
        if (!newPassword.newPassword || value !== newPassword.newPassword) {
          validationErrors[name] = 'Passwords do not match!';
        } else {
          validationErrors[name] = '';
        }
        break;
      default:
        if (validationField(name, value) === 'empty') {
          validationErrors[name] = '';
        } else {
          validationErrors[name] = validationField(name, value);
        }
        break;
    }

    setErrors({ ...validationErrors });

    setNewPassword((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const signupProcess = (res: CustomerResponse) => {
    if (res.message && res.statusCode && res.statusCode >= 400) {
      console.log(res);
      switch (res.statusCode) {
        case 400:
          setErrorMessage(res.message, res.statusCode);
          break;
        default:
          setErrorMessage('Internal server error', res.statusCode);
          break;
      }
      setShowSignupState((prevState) => ({
        ...prevState,
        showSignupError: true
      }));
    } else if (res?.email && res?.version) {
      console.log(res?.version);
      setLSVersionProfileCustomer(res?.version);
      localStorage.removeItem('bearerToken');
      localStorage.removeItem('cart');
      localStorage.removeItem('bearerAnonToken');
      getAnonToken();
      getTokenForLogin(res?.email, userPassChange.pass, { state, setState })
        .then((token) => {
          if (res?.email && userPassChange.pass) {
            logInCustomer(res?.email, userPassChange.pass, `${token}`, '', {
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
      userPassChange.pass = '';
    }
  };

  const setPasswordChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userPassword = new FormData(e.currentTarget);
    userPassChange.pass = String(userPassword.get('newPassword'));
    const userPasswordData = JSON.stringify(Object.fromEntries(userPassword.entries()));
    await setCustomerPassword(userPasswordData).then((response) => {
      console.log(response);
      signupProcess(response);
    });
  };
  const textb = '';
  return (
    <div className={styles.profilePasswordContent}>
      <form
        className={styles.passwordContent}
        onSubmit={(e: FormEvent<HTMLFormElement>) => setPasswordChange(e)}>
        <div className={styles.editPasswordForm}>
          <label htmlFor="currentPassword">
            <p>Current Password: </p>
            <input
              type="password"
              name="currentPassword"
              value={newPassword.currentPassword}
              className={`${styles.inputAddressField} ${errors.currentPassword ? styles.errorBorder : ''}`}
              onChange={handlePasswordChange}
            />
            {errors.currentPassword && (
              <span className={styles.error}>{errors.currentPassword}</span>
            )}
          </label>
        </div>
        <div className={styles.editPasswordForm}>
          <label htmlFor="newPassword">
            <p>New Password: </p>
            <input
              type="password"
              name="newPassword"
              value={newPassword.newPassword}
              className={`${styles.inputAddressField} ${errors.newPassword ? styles.errorBorder : ''}`}
              onChange={handlePasswordChange}
            />
            {errors.newPassword && <span className={styles.error}>{errors.newPassword}</span>}
          </label>
        </div>
        <div className={styles.editPasswordForm}>
          <label htmlFor="confirmNewPassword">
            <p>Confirm New Password: </p>
            <input
              type="password"
              name="confirmNewPassword"
              value={newPassword.confirmNewPassword}
              className={`${styles.inputAddressField} ${errors.confirmNewPassword ? styles.errorBorder : ''}`}
              onChange={handlePasswordChange}
            />
            {errors.confirmNewPassword && (
              <span className={styles.error}>{errors.confirmNewPassword}</span>
            )}
          </label>
        </div>
        <button type="submit" className={styles.controlProfileButton} disabled={!isValid}>
          <SaveMarkIcon width="1.5rem" height="1.5rem" fill={!isValid ? 'grey' : 'green'} />
          {textb}
        </button>
      </form>
      <div
        className={` ${showSignupState.showSignupError ? styles.showMessage : styles.hideMessage} `}>
        <div>
          <p>Error: :{signupErrorMessage.statusCode}</p>
          <p>Message: {signupErrorMessage.message}</p>
        </div>
      </div>
    </div>
  );
}
