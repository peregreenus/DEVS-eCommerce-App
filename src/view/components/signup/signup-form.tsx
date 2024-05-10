/* eslint-disable no-console */
import React, { FormEvent, useState } from 'react';
import { RegistrationFieldsType } from '../../../data/types/registration-type';
import InputField from '../common/input/input';
import './signup-form.css';
import ButtonElement from '../common/button/button';

export default function FormSingup() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: new Date(),
    country: '',
    city: '',
    postalCode: '',
    street: '',
    password: '',
    password2: ''
  };

  // function handleChange(e: ChangeEvent) {
  //   console.log(e.target);
  // }
  function handleRegistrationSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(e.target);
  }

  const [newCostumer] = useState<RegistrationFieldsType>(initialState);

  return (
    <div className="singup-form-container">
      <form className="signup-form" onSubmit={handleRegistrationSubmit}>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={newCostumer.email}
          placeholder="one@example.com"
          required
        />
        <InputField
          label="First Name"
          type="text"
          name="email"
          value={newCostumer.firstName}
          placeholder="enter your name"
          required
        />
        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="enter your last name"
          value={newCostumer.lastName}
          required={false}
        />
        <InputField
          label="Date of birth"
          name="dateOfBirth"
          type="date"
          required
          placeholder=""
          value=""
        />
        <InputField
          label="Country"
          name="country"
          type="text"
          placeholder="enter your country"
          value={newCostumer.country}
          required={false}
        />
        <InputField
          label="City"
          name="city"
          type="text"
          placeholder="enter your cty"
          value={newCostumer.city}
          required={false}
        />
        <InputField
          label="Postal Code"
          name="postalCode"
          type="text"
          placeholder=""
          required={false}
          value={newCostumer.postalCode}
        />
        <InputField
          label="Street"
          name="street"
          type="text"
          placeholder="your street"
          required={false}
          value={newCostumer.street}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          required
          placeholder="min 8 characters"
          value={newCostumer.password}
        />
        <InputField
          label="Retype password"
          name="password2"
          type="password"
          required
          placeholder="min 8 characters"
          value={newCostumer.password}
        />
        <ButtonElement
          type="submit"
          label="Signup"
          name="signup-button"
          disabled={false}
          className="button"
        />
      </form>
    </div>
  );
}
