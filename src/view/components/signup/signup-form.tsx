/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RegistrationFieldsType } from '../../../data/types/registration-type';
import { validationField, setCostumerCountry } from '../../../data/utils/validate-signup-form';
import InputField from './signup-form-input';
import * as FormStyles from './signup-form.module.css';

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
const ErrorField = {
  firstName: 'should not be a empty!',
  lastName: 'should not be a empty!',
  email: 'should not be a empty!',
  dateOfBirth: 'should not be a empty!',
  city: 'should not be a empty!',
  postalCode: 'should not be a empty!',
  street: 'should not be a empty!',
  password: 'should not be a empty!'
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
  const validationErrors: { [key: string]: string } = ErrorField;
  const [newCostumer, setNewCostumer] = useState<RegistrationFieldsType>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedCountry, setSelectedCountry] = useState('null country');
  const [emailWrong, setEmailWrong] = useState(false);
  const [firstNameWrong, setFirstNameWrong] = useState(false);
  const [lastNameWrong, setLastNameWrong] = useState(false);
  const [birthdayWrong, setBirthdayWrong] = useState(false);
  const [countryError, setCountryError] = useState('should be select');
  const [cityWrong, setCityWrong] = useState(false);
  const [postalCodeWrong, setPostalCodeWrong] = useState(false);
  const [streetWrong, setStreetWrong] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [confirmError, setConfirmError] = useState('should not be a empty!');
  const [confirmWrong, setConfirmWrong] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [postalCodeEnable, setPostalCodeEnable] = useState(false);
  const { onSubmit } = props;

  useEffect(() => {
    if (Object.keys(errors).length !== 0 || countryError || confirmError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors, countryError, confirmError]);

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
    setCostumerCountry(target.value);
    switch (validationField(target.name, target.value)) {
      case 'errorCountry':
        setCountryError('should be select');
        break;
      case 'cleanErrorCountry':
        setCountryError('');
        break;
      default:
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
    if (validationField(name, value)) {
      if (validationField(name, value) === 'empty') {
        delete validationErrors[name];
      } else {
        validationErrors[name] = validationField(name, value);
      }
    }
    setErrors(validationErrors);
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
    <div className={FormStyles.container}>
      <h2>Register</h2>
      <p className={FormStyles.link}>
        OR if you already have an account<Link to="/login">Login</Link>
      </p>
      <form className={FormStyles.form} onSubmit={onSubmit}>
        <InputField
          label="Email"
          type="email"
          name="email"
          classes={FormStyles.input}
          placeholder="one@example.com"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
          value={newCostumer.email}
          wrong={emailWrong}
          error={errors.email}
          disabled={false}
        />
        <div className={FormStyles.block}>
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            classes={FormStyles.input}
            placeholder="enter your name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.firstName}
            wrong={firstNameWrong}
            error={errors.firstName}
            disabled={false}
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastName"
            classes={FormStyles.input}
            placeholder="enter your last name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.lastName}
            wrong={lastNameWrong}
            error={errors.lastName}
            disabled={false}
          />
        </div>
        <InputField
          label="Date of birth"
          type="date"
          name="dateOfBirth"
          classes={FormStyles.input}
          placeholder=""
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
          value={newCostumer.dateOfBirth}
          wrong={birthdayWrong}
          error={errors.dateOfBirth}
          disabled={false}
        />
        <div className={FormStyles.block}>
          <label htmlFor="country" className={FormStyles.label}>
            Country:
            <select
              value={selectedCountry}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => handleDropdownChange(e)}
              name="country"
              className={FormStyles.input}>
              <option value="null country" disabled hidden>
                select country
              </option>
              {Object.entries(Country).map(([key, value]) => (
                <option aria-selected="true" value={value} key={key}>
                  {value}
                </option>
              ))}
            </select>
            {countryError && <span className={FormStyles.error}>{countryError}</span>}
          </label>
          <InputField
            label="Postal Code"
            type="text"
            name="postalCode"
            classes={FormStyles.input}
            placeholder=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.postalCode}
            wrong={postalCodeWrong}
            error={errors.postalCode}
            disabled={!postalCodeEnable}
          />
        </div>
        <div className={FormStyles.block}>
          <InputField
            label="City"
            type="text"
            name="city"
            classes={FormStyles.input}
            placeholder="enter your city"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.city}
            wrong={cityWrong}
            error={errors.city}
            disabled={false}
          />
          <InputField
            label="Street"
            type="text"
            name="street"
            classes={FormStyles.input}
            placeholder="your street"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.street}
            wrong={streetWrong}
            error={errors.street}
            disabled={false}
          />
        </div>
        <div className={FormStyles.block}>
          <InputField
            label="Password"
            type="password"
            name="password"
            classes={FormStyles.input}
            placeholder=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.password}
            wrong={passwordWrong}
            error={errors.password}
            disabled={false}
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            classes={FormStyles.input}
            placeholder=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => checkConfirm(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.confirmPassword}
            wrong={confirmWrong}
            error={confirmError}
            disabled={false}
          />
        </div>
        <button disabled={!formValid} type="submit" className={FormStyles.button}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default FormSingup;
