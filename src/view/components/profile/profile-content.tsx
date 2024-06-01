/* eslint-disable no-console */
import React, { useState } from 'react';
import { CustomerProfileResponse } from '../../../data/types/interfaces/customer.interface';
import * as styles from './profile.content.module.css';
import ProfileContentElement from './profile-content-element';
import SaveMarkIcon from '../common/icons/saveMarcIcon';

const initialStatEditing = {
  firstName: false,
  lastName: false,
  dateOfBirth: false,
  email: false
};

export default function ProfileTabContent({ ...profileData }: CustomerProfileResponse) {
  const [editing, setEditing] = useState<{ [key: string]: boolean }>(initialStatEditing);
  const textb = '';
  const setEditingContent = (name: string) => {
    console.log(name);
    setEditing((prev) => ({
      ...prev,
      [name]: !editing[name]
    }));
    console.log(editing);
  };
  const handleSave = (name: string) => {
    setEditingContent(name);
    console.log('click');
  };
  return (
    <div className={styles.profileTabContent}>
      <div className={styles.profileContent}>
        <div className={styles.profileContentString}>
          <span>Name: </span>
          {!editing.firstName ? (
            <ProfileContentElement
              name="firstName"
              data={`${profileData?.firstName}`}
              onClick={() => setEditingContent('firstName')}
            />
          ) : (
            <>
              <input type="text" name="firstName" value={profileData?.firstName} />
              <button
                type="button"
                className={styles.controlProfileButton}
                onClick={() => handleSave('firstName')}>
                <SaveMarkIcon width="1.5rem" height="1.5rem" />
                {textb}
              </button>
            </>
          )}
        </div>

        <div className={styles.profileContentString}>
          <span>Last Name: </span>
          {!editing.lastName ? (
            <ProfileContentElement
              name="lastName"
              data={`${profileData?.lastName}`}
              onClick={() => setEditingContent('lastName')}
            />
          ) : (
            <>
              <input type="text" name="lastName" value={profileData?.lastName} />
              <button
                type="button"
                className={styles.controlProfileButton}
                onClick={() => handleSave('lastName')}>
                <SaveMarkIcon width="1.5rem" height="1.5rem" />
                {textb}
              </button>
            </>
          )}
        </div>

        <div className={styles.profileContentString}>
          <span>Birth Date: </span>
          {!editing.dateOfBirth ? (
            <ProfileContentElement
              name="dateOfBirth"
              data={`${profileData?.dateOfBirth}`}
              onClick={() => setEditingContent('dateOfBirth')}
            />
          ) : (
            <>
              <input type="date" name="dateOfBirth" value={profileData?.dateOfBirth} />
              <button
                type="button"
                className={styles.controlProfileButton}
                onClick={() => handleSave('dateOfBirth')}>
                <SaveMarkIcon width="1.5rem" height="1.5rem" />
                {textb}
              </button>
            </>
          )}
        </div>

        <div className={styles.profileContentString}>
          <span>Email: </span>
          {!editing.email ? (
            <ProfileContentElement
              name="email"
              data={`${profileData?.email}`}
              onClick={() => setEditingContent('email')}
            />
          ) : (
            <>
              <input type="text" name="email" value={profileData?.email} />
              <button
                type="button"
                className={styles.controlProfileButton}
                onClick={() => handleSave('email')}>
                <SaveMarkIcon width="1.5rem" height="1.5rem" />
                {textb}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
