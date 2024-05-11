/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './signup-form.css';
import { RegistrationFieldsType } from '../../../data/types/registration-type';
import validationField from '../../../data/utils/validate-signup-form';

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

  const { onSubmit } = props;

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setSelectedCountry(target.value);
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
        setPostalCodeError('should be ');
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
      <h2>Registration</h2>
      <form className="signup-form" onSubmit={onSubmit}>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="email"
            className="input-field"
            placeholder="one@example.com"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.email}
          />
          {emailWrong && emailError && <span className="error-span">{emailError}</span>}
        </label>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            className="input-field"
            placeholder="enter your name"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.firstName}
          />
          {firstNameWrong && firstNameError && <span className="error-span">{firstNameError}</span>}
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            className="input-field"
            placeholder="enter your last name"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.lastName}
          />
          {lastNameWrong && lastNameError && <span className="error-span">{lastNameError}</span>}
        </label>
        <label htmlFor="dateOfBirth">
          Date of birth
          <input
            type="date"
            name="dateOfBirth"
            className="input-field"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.dateOfBirth}
          />
          {birthdayWrong && birthdayError && <span className="error-span">{birthdayError}</span>}
        </label>
        <label htmlFor="country">
          Country:
          <select
            value={selectedCountry}
            onChange={handleDropdownChange}
            name="country"
            className="input-field">
            <option value="null country" disabled hidden>
              select country
            </option>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
          </select>
          {countryError && <span className="error-span">{countryError}</span>}
        </label>
        <label htmlFor="city">
          City
          <input
            type="text"
            name="city"
            className="input-field"
            placeholder="enter your city"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.city}
          />
          {cityWrong && cityError && <span className="error-span">{cityError}</span>}
        </label>
        <label htmlFor="postalCode">
          Postal Code
          <input
            type="text"
            name="postalCode"
            className="input-field"
            placeholder=""
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.postalCode}
          />
          {postalCodeWrong && postalCodeError && (
            <span className="error-span">{postalCodeError}</span>
          )}
        </label>
        <label htmlFor="street">
          Street
          <input
            type="text"
            name="street"
            className="input-field"
            placeholder="your street"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.street}
          />
          {streetWrong && streetError && <span className="error-span">{streetError}</span>}
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            className="input-field"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.password}
          />
          {passwordWrong && passwordError && <span className="error-span">{passwordError}</span>}
        </label>
        <label htmlFor="password">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            className="input-field"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => checkConfirm(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            value={newCostumer.confirmPassword}
          />
          {confirmWrong && confirmError && <span className="error-span">{confirmError}</span>}
        </label>
        <button type="submit" className="button btn-signup">
          Signup
        </button>
      </form>
    </div>
  );
}

export default FormSingup;
