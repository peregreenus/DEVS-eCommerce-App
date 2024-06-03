/* eslint-disable no-console */
import React, { FormEvent } from 'react';
import * as styles from './profile-password.module.css';
import SaveMarkIcon from '../../common/icons/saveMarcIcon';

export default function ChangePasswordTabContent() {
  const handlePasswordChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };
  const textb = '';
  return (
    <div className={styles.profilePasswordContent}>
      <div className={styles.passwordContent}>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => handlePasswordChange(e)}
          className={styles.editInfoContainer}>
          <label htmlFor="oldPassword">
            <p>Old Password: </p>
            <input type="password" name="oldPassword" className={styles.inputAddressField} />
          </label>
        </form>
        <div className={styles.editInfoContainer}>
          <label htmlFor="newPassword">
            <p>New Password: </p>
            <input type="password" name="newPassword" className={styles.inputAddressField} />
          </label>
        </div>
        <div className={styles.editInfoContainer}>
          <label htmlFor="confirmNewPassword">
            <p>Confirm New Password: </p>
            <input type="password" name="confirmNewPassword" className={styles.inputAddressField} />
          </label>
        </div>
        <button type="submit" className={styles.controlProfileButton}>
          <SaveMarkIcon width="1.5rem" height="1.5rem" />
          {textb}
        </button>
      </div>
    </div>
  );
}
