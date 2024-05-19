import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RegistrationFieldsType } from '../../../data/types/registration-type';
import { setCostumerCountry, validationField } from '../../../data/utils/validate-signup-form';
import InputField from './signup-form-input';
import * as styles from './signup-form.module.css';
import Country from '../../../data/types/country';

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
const errorInitialState = {
  firstName: 'should not be a empty!',
  lastName: 'should not be a empty!',
  email: 'should not be a empty!',
  dateOfBirth: 'should not be a empty!',
  city: 'should not be a empty!',
  postalCode: 'should not be a empty!',
  street: 'should not be a empty!',
  password: 'should not be a empty!'
};

function FormSignup(props: IFormProps) {
  const validationErrors: { [key: string]: string } = errorInitialState;
  const [newCustomer, setNewCustomer] = useState<RegistrationFieldsType>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>(validationErrors);
  const [selectedCountry, setSelectedCountry] = useState('null country');
  const [countryError, setCountryError] = useState('should be select');
  const [confirmError, setConfirmError] = useState('should not be a empty!');

  const [emailWrong, setEmailWrong] = useState(false);
  const [firstNameWrong, setFirstNameWrong] = useState(false);
  const [lastNameWrong, setLastNameWrong] = useState(false);
  const [birthdayWrong, setBirthdayWrong] = useState(false);
  const [cityWrong, setCityWrong] = useState(false);
  const [postalCodeWrong, setPostalCodeWrong] = useState(false);
  const [streetWrong, setStreetWrong] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [confirmWrong, setConfirmWrong] = useState(false);

  const [formValid, setFormValid] = useState(false);
  const [postalCodeEnable, setPostalCodeEnable] = useState(false);
  const { onSubmit } = props;

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      countryError !== 'should be select' &&
      confirmError === ' '
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [errors, countryError, confirmError]);

  useEffect(() => {
    if (countryError === ' ') {
      setPostalCodeEnable(true);
    } else {
      setPostalCodeEnable(false);
    }
  }, [countryError]);

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedCountry(value);
    setCountryError(' ');
    setCostumerCountry(value);
    newCustomer.postalCode = '';
    validationErrors.postalCode = 'should not be a empty!';
    setErrors({ ...validationErrors });
    setNewCustomer({
      ...newCustomer,
      [name]: value
    });
  };

  function checkConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (!newCustomer.password || value !== newCustomer.password) {
      setConfirmError('Passwords do not match!');
    } else {
      setConfirmError(' ');
    }
    setNewCustomer({
      ...newCustomer,
      [name]: value
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (validationField(name, value) === 'empty') {
      delete validationErrors[name];
    } else {
      validationErrors[name] = validationField(name, value);
    }
    setErrors({ ...validationErrors });

    if (name === 'password') {
      if (value !== newCustomer.confirmPassword) {
        setConfirmError('Passwords do not match!');
      } else {
        setConfirmError(' ');
      }
    }

    setNewCustomer({
      ...newCustomer,
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
    <div className={styles.container}>
      <h2>Register</h2>
      <p className={styles.link}>
        OR if you already have an account<Link to="/login">Login</Link>
      </p>
      <form className={styles.form} onSubmit={onSubmit}>
        <InputField
          label="Email"
          type="email"
          name="email"
          classes={styles.input}
          placeholder="one@example.com"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
          value={newCustomer.email}
          wrong={emailWrong}
          error={errors.email}
          disabled={false}
        />
        <div className={styles.block}>
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            classes={styles.input}
            placeholder="enter your name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCustomer.firstName}
            wrong={firstNameWrong}
            error={errors.firstName}
            disabled={false}
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastName"
            classes={styles.input}
            placeholder="enter your last name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCustomer.lastName}
            wrong={lastNameWrong}
            error={errors.lastName}
            disabled={false}
          />
        </div>
        <InputField
          label="Date of birth"
          type="date"
          name="dateOfBirth"
          classes={styles.input}
          placeholder=""
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
          value={newCustomer.dateOfBirth}
          wrong={birthdayWrong}
          error={errors.dateOfBirth}
          disabled={false}
        />
        <div className={styles.block}>
          <label htmlFor="country" className={styles.label}>
            Country:
            <select
              value={selectedCountry}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => handleDropdownChange(e)}
              name="country"
              className={styles.input}>
              <option value="null country" disabled hidden>
                select country
              </option>
              {Object.entries(Country).map(([key, value]) => (
                <option aria-selected="true" value={value} key={key}>
                  {value}
                </option>
              ))}
            </select>
            {countryError && <span className={styles.error}>{countryError}</span>}
          </label>
          <InputField
            label="Postal Code"
            type="text"
            name="postalCode"
            classes={styles.input}
            placeholder=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCustomer.postalCode}
            wrong={postalCodeWrong}
            error={errors.postalCode}
            disabled={!postalCodeEnable}
          />
        </div>
        <div className={styles.block}>
          <InputField
            label="City"
            type="text"
            name="city"
            classes={styles.input}
            placeholder="enter your city"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCustomer.city}
            wrong={cityWrong}
            error={errors.city}
            disabled={false}
          />
          <InputField
            label="Street"
            type="text"
            name="street"
            classes={styles.input}
            placeholder="your street"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCustomer.street}
            wrong={streetWrong}
            error={errors.street}
            disabled={false}
          />
        </div>
        <div className={styles.block}>
          <InputField
            label="Password"
            type="password"
            name="password"
            classes={styles.input}
            placeholder=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCustomer.password}
            wrong={passwordWrong}
            error={errors.password}
            disabled={false}
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            classes={styles.input}
            placeholder=""
            onChange={(e: ChangeEvent<HTMLInputElement>) => checkConfirmPassword(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCustomer.confirmPassword}
            wrong={confirmWrong}
            error={confirmError}
            disabled={false}
          />
        </div>
        <button disabled={!formValid} type="submit" className={styles.button}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default FormSignup;
