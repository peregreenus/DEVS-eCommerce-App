/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './signup-form.css';
import { RegistrationFieldsType } from '../../../data/types/registration-type';
import { validationField, setCostumerCountry } from '../../../data/utils/validate-signup-form';
import InputField from './form-input';

interface IFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

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
  confirmPassword: ''
};

enum Country {
  'Austria' = 'Austria',
  'Belarus' = 'Belarus',
  'Germany' = 'Germany',
  'Russia' = 'Russia',
  'Ukraine' = 'Ukraine',
  'United States' = 'United States'
}

function FormSingup(props: IFormProps) {
  const [newCostumer, setNewCostumer] = useState<RegistrationFieldsType>(initialState);
  const [selectedCountry, setSelectedCountry] = useState('null country');
  const [emailError, setEmailError] = useState('should not be a empty!');
  const [emailWrong, setEmailWrong] = useState(false);
  const [firstNameError, setFirstNameError] = useState('should not be a empty!');
  const [firstNameWrong, setFirstNameWrong] = useState(false);
  const [lastNameError, setLastNameError] = useState('should not be a empty!');
  const [lastNameWrong, setLastNameWrong] = useState(false);
  const [birthdayError, setBirthdayError] = useState('should not be a empty!');
  const [birthdayWrong, setBirthdayWrong] = useState(false);
  const [countryError, setCountryError] = useState('should be select');
  const [cityError, setCityError] = useState('should not be a empty!');
  const [cityWrong, setCityWrong] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState('should not be a empty!');
  const [postalCodeWrong, setPostalCodeWrong] = useState(false);
  const [streetError, setStreetError] = useState('should not be a empty!');
  const [streetWrong, setStreetWrong] = useState(false);
  const [passwordError, setPasswordError] = useState('should not be a empty!');
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [confirmError, setConfirmError] = useState('should not be a empty!');
  const [confirmWrong, setConfirmWrong] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [postalCodeEnable, setPostalCodeEnable] = useState(false);
  const { onSubmit } = props;

  useEffect(() => {
    if (
      birthdayError ||
      emailError ||
      passwordError ||
      countryError ||
      firstNameError ||
      lastNameError ||
      confirmError ||
      postalCodeError ||
      cityError ||
      streetError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    birthdayError,
    emailError,
    passwordError,
    countryError,
    firstNameError,
    lastNameError,
    confirmError,
    postalCodeError,
    cityError,
    streetError
  ]);
  useEffect(() => {
    if (countryError) {
      setPostalCodeEnable(false);
    } else {
      setPostalCodeEnable(true);
    }
  }, [countryError]);

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.currentTarget;
    setSelectedCountry(target.value);
    setCostumerCountry(target.value as string);
    switch (validationField(target.name, target.value)) {
      case 'errorCountry':
        setCountryError('should be select');
        break;
      case 'cleanErrorCountry':
        setCountryError('');
        break;
      default:
        console.log('nothing');
        break;
    }
  };
  function checkConfirm(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (!newCostumer.password || value !== newCostumer.password) {
      setConfirmError('Passwords do not match!');
    } else {
      setConfirmError('');
    }
    setNewCostumer({
      ...newCostumer,
      [name]: value
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    switch (validationField(name, value)) {
      case 'errorEmail':
        setEmailError('should be a valid email address');
        break;
      case 'cleanErrorEmail':
        setEmailError('');
        break;
      case 'errorFirstName':
        setFirstNameError(
          'first name should be 3-16 characters and should not include any special character'
        );
        break;
      case 'cleanErrorFirstName':
        setFirstNameError('');
        break;
      case 'errorLastName':
        setLastNameError(
          'last name should be 3-16 characters and should not include any special character'
        );
        break;
      case 'cleanErrorLastName':
        setLastNameError('');
        break;
      case 'errorBirthday':
        setBirthdayError('you must be > 13 y.o');
        break;
      case 'cleanErrorBirthday':
        setBirthdayError('');
        break;
      case 'errorCity':
        setCityError('should be 3-16 characters and should not include any special character');
        break;
      case 'cleanErrorCity':
        setCityError('');
        break;
      case 'errorPostalCode':
        setPostalCodeError('postal code not valid for this country ');
        break;
      case 'cleanErrorPostalCode':
        setPostalCodeError('');
        break;
      case 'errorStreet':
        setStreetError('should be 3-16 characters and should not include any special character');
        break;
      case 'cleanErrorStreet':
        setStreetError('');
        break;
      case 'errorPassword':
        setPasswordError(
          'minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number. (allowed char: latin char and @#$^+=)'
        );
        break;
      case 'cleanErrorPassword':
        setPasswordError('');
        break;
      default:
        console.log('nothing');
        break;
    }
    setNewCostumer({
      ...newCostumer,
      [name]: value
    });
  }
  const handlerBlur = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        setEmailWrong(true);
        break;
      case 'firstName':
        setFirstNameWrong(true);
        break;
      case 'lastName':
        setLastNameWrong(true);
        break;
      case 'dateOfBirth':
        setBirthdayWrong(true);
        break;
      case 'city':
        setCityWrong(true);
        break;
      case 'postalCode':
        setPostalCodeWrong(true);
        break;
      case 'street':
        setStreetWrong(true);
        break;
      case 'password':
        setPasswordWrong(true);
        break;
      case 'confirmPassword':
        setConfirmWrong(true);
        break;
      default:
        break;
    }
  };
  return (
    <div className="singup-form-container">
      <h2>Register</h2>
      <form className="signup-form" onSubmit={onSubmit}>
        <InputField
          label="Email"
          type="email"
          name="email"
          classes="input-field"
          placeholder="one@example.com"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
          value={newCostumer.email}
          wrong={emailWrong}
          error={emailError}
          disabled={false}
        />
        <div className="signup-block">
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            classes="input-field"
            placeholder="enter your name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.firstName}
            wrong={firstNameWrong}
            error={firstNameError}
            disabled={false}
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastName"
            classes="input-field"
            placeholder="enter your last name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.lastName}
            wrong={lastNameWrong}
            error={lastNameError}
            disabled={false}
          />
        </div>
        <InputField
          label="Date of birth"
          type="date"
          name="dateOfBirth"
          classes="input-field"
          placeholder=""
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
          value={newCostumer.dateOfBirth}
          wrong={birthdayWrong}
          error={birthdayError}
          disabled={false}
        />
        <div className="signup-block">
          <label htmlFor="country">
            Country:
            <select
              value={selectedCountry}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => handleDropdownChange(e)}
              name="country"
              className="input-field">
              <option value="null country" disabled hidden>
                select country
              </option>
              {Object.entries(Country).map(([key, value]) => (
                <option aria-selected="true" value={value} key={key}>
                  {value}
                </option>
              ))}
            </select>
            {countryError && <span className="error-span">{countryError}</span>}
          </label>
          <InputField
            label="Postal Code"
            type="text"
            name="postalCode"
            classes="input-field"
            placeholder=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.postalCode}
            wrong={postalCodeWrong}
            error={postalCodeError}
            disabled={!postalCodeEnable}
          />
        </div>
        <div className="signup-block">
          <InputField
            label="City"
            type="text"
            name="city"
            classes="input-field"
            placeholder="enter your city"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.city}
            wrong={cityWrong}
            error={cityError}
            disabled={false}
          />
          <InputField
            label="Street"
            type="text"
            name="street"
            classes="input-field"
            placeholder="your street"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.street}
            wrong={streetWrong}
            error={streetError}
            disabled={false}
          />
        </div>
        <div className="signup-block">
          <InputField
            label="Password"
            type="password"
            name="password"
            classes="input-field"
            placeholder=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.password}
            wrong={passwordWrong}
            error={passwordError}
            disabled={false}
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            classes="input-field"
            placeholder=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => checkConfirm(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.confirmPassword}
            wrong={confirmWrong}
            error={confirmError}
            disabled={false}
          />
        </div>
        <button disabled={!formValid} type="submit" className="button btn-signup">
          Signup
        </button>
      </form>
    </div>
  );
}

export default FormSingup;
