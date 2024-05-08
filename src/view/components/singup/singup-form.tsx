/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent, useState } from 'react';

export default function FormSingup() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    country: '',
    city: '',
    postalCode: '',
    street: '',
    password: '',
    password2: ''
  };

  const [newCostumer] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    country: string;
    city: string;
    postalCode: string;
    street: string;
    password: string;
    password2: string;
  }>(initialState);

  function handleChange(e: ChangeEvent) {
    console.log(e.target);
  }
  function handleRegistrationSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <div className="singup-form-container">
      <form onSubmit={handleRegistrationSubmit}>
        <input
          name="email"
          type="email"
          required
          placeholder="one@example.com"
          onChange={handleChange}
          value={newCostumer.email}
        />
        <input
          name="firstName"
          type="text"
          required
          placeholder="First Name"
          onChange={handleChange}
          value={newCostumer.firstName}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          value={newCostumer.lastName}
        />
        <input
          name="dateOfBirth"
          type="date"
          required
          placeholder=""
          onChange={handleChange}
          value={newCostumer.dateOfBirth}
        />
        <input
          name="country"
          type="text"
          placeholder="your country"
          onChange={handleChange}
          value={newCostumer.country}
        />
        <input
          name="city"
          type="text"
          placeholder="your cty"
          onChange={handleChange}
          value={newCostumer.city}
        />
        <label htmlFor="postalCode">
          Postal Code
          <input
            name="postalCode"
            type="text"
            placeholder=""
            onChange={handleChange}
            value={newCostumer.postalCode}
          />
        </label>
        <input
          name="street"
          type="text"
          placeholder="your street"
          onChange={handleChange}
          value={newCostumer.street}
        />
        <label htmlFor="password">
          Password
          <input
            name="password"
            type="password"
            minLength={8}
            required
            placeholder="min 8 characters"
            onChange={handleChange}
            value={newCostumer.password}
          />
        </label>
        <label htmlFor="password2">
          Confirm Password
          <input
            name="password2"
            type="password"
            required
            placeholder=""
            onChange={handleChange}
            value={newCostumer.password2}
          />
        </label>
        <button type="submit">add to menu</button>
      </form>
    </div>
  );
}
