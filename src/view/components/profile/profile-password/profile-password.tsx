/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './profile-password.module.css';
import SaveMarkIcon from '../../common/icons/saveMarcIcon';
import { validationField } from '../../../../data/utils/validate-form';
import { errorInitialPasswordState, initialPasswordState } from '../initial-state';
import { ProfilePasswordType } from '../../../../data/types/profile-props';
import setCustomerPassword from '../../../../data/api/profile/setPassword';
import { MainProps } from '../../../../data/types/main-props';
import AutoLoginProcess from '../../../../data/utils/autoLoginProcess';

const userPassChange = { pass: '' };

export default function ChangePasswordTabContent({ state, setState }: MainProps) {
  const validationErrors: { [key: string]: string } = errorInitialPasswordState;
  const autoLoginErrorMessage = { message: '', statusCode: 0 };
  const [changePasswordState, setChangePasswordState] = useState(false);
  const [newPassword, setNewPassword] = useState<ProfilePasswordType>({
    ...initialPasswordState
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>(validationErrors);
  const [isValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.values(errors).every((str) => str === '')) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [errors]);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setChangePasswordState(false);
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

  const setPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userPassword = new FormData(e.currentTarget);
    userPassChange.pass = String(userPassword.get('newPassword'));
    const userPasswordData = JSON.stringify(Object.fromEntries(userPassword.entries()));
    await setCustomerPassword(userPasswordData).then((response) => {
      AutoLoginProcess(userPassChange.pass, response, { state, setState }).then((res) => {
        if (res?.autoLoginState) {
          navigate('/');
        } else {
          setChangePasswordState(true);
          autoLoginErrorMessage.statusCode = res?.errorMessage.statusCode;
          autoLoginErrorMessage.message = res?.errorMessage.message;
        }
      });
    });
    userPassChange.pass = '';
  };
  const textb = '';
  return (
    <div className={styles.profilePasswordContent}>
      <form
        className={styles.passwordContent}
        onSubmit={(e: FormEvent<HTMLFormElement>) => setPassword(e)}>
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
      <div className={` ${changePasswordState ? styles.showMessage : styles.hideMessage} `}>
        <div>
          <p>Error: :{autoLoginErrorMessage.statusCode}</p>
          <p>Message: {autoLoginErrorMessage.message}</p>
        </div>
      </div>
    </div>
  );
}
