/* eslint-disable no-console */
import React, { FormEvent } from 'react';
import FormSingup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';
import { MainProps } from '../../../data/types/main-props';

export default function Singup({ showMsg, setShowMsg }: MainProps) {
  const handleRegistrationSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(userDetails.entries()));
  };
  return (
    <div>
      <Header showMsg={showMsg} setShowMsg={setShowMsg} />
      <FormSingup onSubmit={handleRegistrationSubmit} />
    </div>
  );
}
