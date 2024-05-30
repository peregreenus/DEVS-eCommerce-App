import React from 'react';
import * as styles from './profile.content.module.css';

export default function ChangePasswordTabContent() {
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
    </div>
  );
}
