import React from 'react';
import * as styles from './profile.content.module.css';
import SaveMarkIcon from '../common/icons/saveMarcIcon';

export default function ChangePasswordTabContent() {
  const textb = '';
  return (
    <div className={styles.profilePasswordContent}>
      <div className={styles.passwordContent}>
        <label htmlFor="oldPassword">
          Old Password:
          <input type="password" name="oldPassword" />
        </label>
        <label htmlFor="newPassword">
          New Password:
          <input type="password" name="newPassword" />
        </label>
        <label htmlFor="confirmNewPassword">
          Confirm New Password:
          <input type="password" name="confirmNewPassword" />
        </label>
      </div>
      <button type="submit" className={styles.controlProfileButton}>
        <SaveMarkIcon width="1.5rem" height="1.5rem" />
        {textb}
      </button>
    </div>
  );
}
