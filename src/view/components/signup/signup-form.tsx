import React, { FormEvent } from 'react';
import InputField from '../common/input/input';
import './signup-form.css';
import ButtonElement from '../common/button/button';

export default function FormSingup() {
  // function handleChange(e: ChangeEvent) {
  //   console.log(e.target);
  // }
  function handleRegistrationSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="singup-form-container">
      <form className="signup-form" onSubmit={handleRegistrationSubmit}>
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="one@example.com"
          required
        />
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          placeholder="enter your name"
          required
        />
        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="enter your last name"
          required={false}
        />
        <InputField label="Date of birth" name="dateOfBirth" type="date" required placeholder="" />
        <InputField
          label="Country"
          name="country"
          type="text"
          placeholder="enter your country"
          required={false}
        />
        <InputField
          label="City"
          name="city"
          type="text"
          placeholder="enter your cty"
          required={false}
        />
        <InputField
          label="Postal Code"
          name="postalCode"
          type="text"
          placeholder=""
          required={false}
        />
        <InputField
          label="Street"
          name="street"
          type="text"
          placeholder="your street"
          required={false}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          required
          placeholder="min 8 characters"
        />
        <InputField
          label="Retype password"
          name="password2"
          type="password"
          required
          placeholder="min 8 characters"
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
