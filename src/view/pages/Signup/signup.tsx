import React from 'react';
import FormSingup from '../../components/signup/signup-form';
import Header from '../../components/common/header/header';

export default function Singup() {
  return (
    <div>
      <Header />
      <h1>This is Registration Page</h1>
      <FormSingup />
    </div>
  );
}
