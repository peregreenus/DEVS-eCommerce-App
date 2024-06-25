import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CustomerProfileResponse } from '../../../../data/types/interfaces/customer.interface';
import * as styles from './profile-content.module.css';
import ProfileContentElement from './profile-content-element';
import setCustomerInfo from '../../../../data/api/profile/setProfile';
import EditingProfileContent from './editing-content';
import { setLSVersionProfileCustomer } from '../../../../data/utils/setLS';
import { validationField } from '../../../../data/utils/validate-form';
import { ProfileUpdateProps } from '../../../../data/types/profile-props';
import { errorInitialProfileState } from '../initial-state';

const initialStatEditing = {
  firstName: false,
  lastName: false,
  dateOfBirth: false,
  email: false
};

export default function ProfileTabContent({ ...profileData }: ProfileUpdateProps) {
  const validationErrors: { [key: string]: string } = errorInitialProfileState;
  const [editing, setEditing] = useState<{ [key: string]: boolean }>(initialStatEditing);
  const [newProfileInfo, setNewProfileInfo] = useState<CustomerProfileResponse>({ ...profileData });
  const [errors, setErrors] = useState<{ [key: string]: string }>(validationErrors);

  const setEditingContent = (name: string) => {
    setEditing((prev) => ({
      ...prev,
      [name]: !editing[name]
    }));
  };

  const handleSave = async (e: FormEvent<HTMLFormElement>, name: string) => {
    e.preventDefault();
    const userInfo = new FormData(e.currentTarget);
    const updateInfo = JSON.stringify(Object.fromEntries(userInfo.entries()));
    await setCustomerInfo(updateInfo)
      .then((response) => setLSVersionProfileCustomer(response.version))
      .then(() => {
        setEditingContent(name);
        profileData.setUpdate((prev) => !prev);
      });
  };

  const handleChangeProfileInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (validationField(name, value) === 'empty') {
      validationErrors[name] = '';
    } else {
      validationErrors[name] = validationField(name, value);
    }
    setErrors({ ...validationErrors });

    setNewProfileInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div className={styles.profileTabContent}>
      <div className={styles.profileContent}>
        <p className={styles.fieldName}>Name: </p>
        {!editing.firstName ? (
          <ProfileContentElement
            name="firstName"
            data={`${profileData.firstName}`}
            onClick={() => setEditingContent('firstName')}
          />
        ) : (
          <EditingProfileContent
            type="text"
            name="firstName"
            value={`${newProfileInfo?.firstName}`}
            onChange={handleChangeProfileInfo}
            error={errors.firstName}
            onSubmit={(e: FormEvent<HTMLFormElement>) => handleSave(e, 'firstName')}
            onClick={() => setEditingContent('firstName')}
          />
        )}
      </div>

      <div className={styles.profileContent}>
        <p className={styles.fieldName}>Last Name: </p>
        {!editing.lastName ? (
          <ProfileContentElement
            name="lastName"
            data={`${profileData.lastName}`}
            onClick={() => setEditingContent('lastName')}
          />
        ) : (
          <EditingProfileContent
            type="text"
            name="lastName"
            value={`${newProfileInfo?.lastName}`}
            onChange={handleChangeProfileInfo}
            error={errors.lastName}
            onSubmit={(e: FormEvent<HTMLFormElement>) => handleSave(e, 'lastName')}
            onClick={() => setEditingContent('lastName')}
          />
        )}
      </div>

      <div className={styles.profileContent}>
        <p className={styles.fieldName}>Birth Date: </p>
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
            value={`${newProfileInfo.dateOfBirth}`}
            onChange={handleChangeProfileInfo}
            error={errors.dateOfBirth}
            onSubmit={(e: FormEvent<HTMLFormElement>) => handleSave(e, 'dateOfBirth')}
            onClick={() => setEditingContent('dateOfBirth')}
          />
        )}
      </div>
      <div className={styles.profileContent}>
        <p className={styles.fieldName}>Email: </p>
        {!editing.email ? (
          <ProfileContentElement
            name="email"
            data={`${newProfileInfo.email}`}
            onClick={() => setEditingContent('email')}
          />
        ) : (
          <EditingProfileContent
            type="text"
            name="email"
            value={`${newProfileInfo?.email}`}
            onChange={handleChangeProfileInfo}
            error={errors.email}
            onSubmit={(e: FormEvent<HTMLFormElement>) => handleSave(e, 'email')}
            onClick={() => setEditingContent('email')}
          />
        )}
      </div>
    </div>
  );
}
