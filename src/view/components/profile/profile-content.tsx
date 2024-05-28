import React from 'react';
import { CustomerProfileResponse } from '../../../data/types/interfaces/customer.interface';
// import * as styles from './profile-components.module.css';

export default function ProfileTabContent({ ...profileData }: CustomerProfileResponse) {
  return (
    <div className="tab__container ">
      <div className="tab__content">
        <p>Your Name: {profileData?.firstName}</p>
        <p>Your Last Name: {profileData?.lastName}</p>
        <p>Your Email: {profileData?.email}</p>
        <p>Your Password: {profileData?.password}</p>
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
