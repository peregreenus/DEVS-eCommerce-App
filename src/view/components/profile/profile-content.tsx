import React from 'react';
import { CustomerProfileResponse } from '../../../data/types/interfaces/customer.interface';
import * as styles from './profile.content.module.css';

export default function ProfileTabContent({ ...profileData }: CustomerProfileResponse) {
  return (
    <div className={styles.profileTabContent}>
      <div className={styles.profileContent}>
        <p className={styles.profileContentString}>
          <span>Name: </span>
          {profileData?.firstName}
        </p>
        <p className={styles.profileContentString}>
          <span>Last Name: </span>
          {profileData?.lastName}
        </p>
        <p className={styles.profileContentString}>
          <span>Birth Date: </span>
          {profileData?.dateOfBirth}
        </p>
        <p className={styles.profileContentString}>
          <span>Email: </span>
          {profileData?.email}
        </p>
      </div>
      {/* <label htmlFor="firstName">
          Your Name:
          <input type="text" name="firstName" value={customer?.firstName} />
        </label>
        <label htmlFor="lastName">
          Your Last Name:
          <input type="text" name="lastName" value={customer?.lastName} />
        </label>
        <label htmlFor="email">
          Your Email:
          <input type="text" name="email" value={customer?.email} />
        </label>
        <label htmlFor="password">
          Your Password:
          <input type="text" name="password" value={customer?.password} />
        </label> */}
    </div>
  );
}
