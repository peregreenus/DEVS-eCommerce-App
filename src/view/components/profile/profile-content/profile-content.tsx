/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CustomerProfileResponse } from '../../../../data/types/interfaces/customer.interface';
import * as styles from './profile-content.module.css';
import ProfileContentElement from './profile-content-element';
import setCustomerInfo from '../../../../data/api/profile/setProfile';
import EditingProfileContent from './editing-content';
import { setLSVersionProfileCustomer } from '../../../../data/utils/setLS';

const initialStatEditing = {
  firstName: false,
  lastName: false,
  dateOfBirth: false,
  email: false
};

export default function ProfileTabContent({ ...profileData }: CustomerProfileResponse) {
  const [editing, setEditing] = useState<{ [key: string]: boolean }>(initialStatEditing);
  const [newProfileInfo, setNewProfileInfo] = useState<CustomerProfileResponse>({ ...profileData });
  const setEditingContent = (name: string) => {
    setEditing((prev) => ({
      ...prev,
      [name]: !editing[name]
    }));
    console.log(newProfileInfo);
  };
  const handleSave = async (e: FormEvent<HTMLFormElement>, name: string) => {
    e.preventDefault();
    const userInfo = new FormData(e.currentTarget);
    const updateInfo = JSON.stringify(Object.fromEntries(userInfo.entries()));
    await setCustomerInfo(updateInfo)
      .then((response) => setLSVersionProfileCustomer(response.version))
      .then(() => setEditingContent(name));
  };

  const handleChangeProfileInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setNewProfileInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div className={styles.profileTabContent}>
      <div className={styles.profileContent}>
        <div className={styles.profileContentString}>
          <span>Name: </span>
          {!editing.firstName ? (
            <ProfileContentElement
              name="firstName"
              data={`${newProfileInfo?.firstName}`}
              onClick={() => setEditingContent('firstName')}
            />
          ) : (
            <EditingProfileContent
              type="text"
              name="firstName"
              value={`${newProfileInfo?.firstName}`}
              onChange={handleChangeProfileInfo}
              onSubmit={(e: FormEvent<HTMLFormElement>) => handleSave(e, 'firstName')}
            />
          )}
        </div>

        <div className={styles.profileContentString}>
          <span>Last Name: </span>
          {!editing.lastName ? (
            <ProfileContentElement
              name="lastName"
              data={`${newProfileInfo?.lastName}`}
              onClick={() => setEditingContent('lastName')}
            />
          ) : (
            <EditingProfileContent
              type="text"
              name="lastName"
              value={`${newProfileInfo?.lastName}`}
              onChange={handleChangeProfileInfo}
              onSubmit={(e: FormEvent<HTMLFormElement>) => handleSave(e, 'lastName')}
            />
          )}
        </div>

        <div className={styles.profileContentString}>
          <span>Birth Date: </span>
          {!editing.dateOfBirth ? (
            <ProfileContentElement
              name="dateOfBirth"
              data={`${newProfileInfo?.dateOfBirth}`}
              onClick={() => setEditingContent('dateOfBirth')}
            />
          ) : (
            <EditingProfileContent
              type="date"
              name="dateOfBirth"
              value={`${newProfileInfo?.dateOfBirth}`}
              onChange={handleChangeProfileInfo}
              onSubmit={(e: FormEvent<HTMLFormElement>) => handleSave(e, 'dateOfBirth')}
            />
          )}
        </div>

        <div className={styles.profileContentString}>
          <span>Email: </span>
          {!editing.email ? (
            <ProfileContentElement
              name="email"
              data={`${newProfileInfo?.email}`}
              onClick={() => setEditingContent('email')}
            />
          ) : (
            <EditingProfileContent
              type="text"
              name="email"
              value={`${newProfileInfo?.email}`}
              onChange={handleChangeProfileInfo}
              onSubmit={(e: FormEvent<HTMLFormElement>) => handleSave(e, 'email')}
            />
          )}
        </div>
      </div>
    </div>
  );
}
