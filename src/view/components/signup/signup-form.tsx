/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RegistrationFieldsType } from '../../../data/types/registration-type';
import InputField from './signup-form-input';
import * as styles from './signup-form.module.css';
import AddressForm from './address-form';
import { validationField } from '../../../data/utils/validate-form';
import {
  errorInitialState,
  initialErrorCountry,
  initialState,
  initialStateCountry
} from './initial-state';
import { CustomerAddressesOptionsProps } from '../../../data/types/signup-props';

interface IFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const customerAddressesOption: CustomerAddressesOptionsProps = {
  billingAddresses: [0],
  shippingAddresses: [1]
};

function FormSignup(props: IFormProps) {
  const validationErrors: { [key: string]: string } = errorInitialState;
  const currentSelectCountry: { [key: string]: string } = initialStateCountry;
  const currentErrorCountry: { [key: string]: string } = initialErrorCountry;

  const [newCustomer, setNewCustomer] = useState<RegistrationFieldsType>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>(validationErrors);
  const [selectedCountry, setSelectedCountry] = useState<{ [key: string]: string }>(
    currentSelectCountry
  );
  const [errorCountry, setErrorCountry] = useState<{ [key: string]: string }>(currentErrorCountry);
  const [confirmError, setConfirmError] = useState('should not be a empty!');

  const [defBilling, setDefBilling] = useState(false);
  const [defShipping, setDefShipping] = useState(false);
  const [shippingToo, setShippingToo] = useState(false);
  const [disableAddress, setDisableAddress] = useState(false);

  const [emailWrong, setEmailWrong] = useState(false);
  const [firstNameWrong, setFirstNameWrong] = useState(false);
  const [lastNameWrong, setLastNameWrong] = useState(false);
  const [birthdayWrong, setBirthdayWrong] = useState(false);
  const [cityShippingWrong, setCityShippingWrong] = useState(false);
  const [postalCodeShippingWrong, setPostalCodeShippingWrong] = useState(false);
  const [streetShippingWrong, setStreetShippingWrong] = useState(false);
  const [cityBillingWrong, setCityBillingWrong] = useState(false);
  const [postalCodeBillingWrong, setPostalCodeBillingWrong] = useState(false);
  const [streetBillingWrong, setStreetBillingWrong] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [confirmWrong, setConfirmWrong] = useState(false);

  const [formValid, setFormValid] = useState(false);
  const { onSubmit } = props;

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      Object.keys(errorCountry).length === 0 &&
      confirmError === ' '
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [errors, errorCountry, confirmError]);

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
  function handleChecked(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case 'defaultShipping':
        setDefShipping((prev) => !prev);
        if (!defShipping) {
          customerAddressesOption.defaultShipping = 2;
        } else delete customerAddressesOption.defaultShipping;
        console.log(customerAddressesOption);
        break;
      case 'defaultBilling':
        setDefBilling((prev) => !prev);
        if (!defBilling) {
          customerAddressesOption.defaultBilling = 1;
        } else delete customerAddressesOption.defaultBilling;
        if (shippingToo) {
          if (customerAddressesOption.defaultBilling) {
            customerAddressesOption.defaultShipping = customerAddressesOption.defaultBilling;
          }
        }
        console.log(customerAddressesOption);
        break;
      default:
        setShippingToo((prev) => !prev);
        setDisableAddress((prev) => !prev);
        if (!shippingToo) {
          customerAddressesOption.shippingAddresses = [0];
          if (customerAddressesOption.defaultBilling) {
            customerAddressesOption.defaultShipping = customerAddressesOption.defaultBilling;
          }
          delete validationErrors.cityShipping;
          delete validationErrors.postalCodeShipping;
          delete validationErrors.streetShipping;
          delete currentErrorCountry.countryShipping;
          setErrors({ ...validationErrors });
          setErrorCountry({ ...currentErrorCountry });
        } else {
          delete customerAddressesOption.defaultShipping;
          customerAddressesOption.shippingAddresses = [1];
          setDefShipping(false);
          validationErrors.cityShipping = errorInitialState.cityShipping;
          validationErrors.postalCodeShipping = errorInitialState.postalCodeShipping;
          validationErrors.streetShipping = errorInitialState.streetShipping;
          currentErrorCountry.countryShipping = errorCountry.countryShipping;
          setErrors({ ...validationErrors });
          setErrorCountry({ ...currentErrorCountry });
        }
        console.log(customerAddressesOption);
        break;
    }
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
      case 'cityShipping':
        setCityShippingWrong(true);
        break;
      case 'postalCodeShipping':
        setPostalCodeShippingWrong(true);
        break;
      case 'streetShipping':
        setStreetShippingWrong(true);
        break;
      case 'cityBilling':
        setCityBillingWrong(true);
        break;
      case 'postalCodeBilling':
        setPostalCodeBillingWrong(true);
        break;
      case 'streetBilling':
        setStreetBillingWrong(true);
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
        <div className={`${styles.addressForm} `}>
          <p className={styles.addressFormName}>billing address</p>
          <div className={styles.controlAddressForm}>
            <div className={styles.checkBoxForm}>
              <input
                type="checkbox"
                name="defaultBilling"
                checked={defBilling}
                onChange={handleChecked}
              />
              <p>default billing address</p>
            </div>
            <div className={styles.checkBoxForm}>
              <input
                type="checkbox"
                name="alsoShipping"
                checked={shippingToo}
                onChange={handleChecked}
              />
              <p>also shipping address too</p>
            </div>
          </div>
          <AddressForm
            setName="Billing"
            selectedCountry={selectedCountry.countryBilling}
            setSelectedCountry={setSelectedCountry}
            setErrors={setErrors}
            validationErrors={validationErrors}
            setNewCustomer={setNewCustomer}
            countryError={errorCountry.countryBilling}
            currentErrorCountry={currentErrorCountry}
            setCountryError={setErrorCountry}
            newCustomer={newCustomer}
            cityError={errors.cityBilling}
            streetError={errors.streetBilling}
            postalCodeError={errors.postalCodeBilling}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            cityWrong={cityBillingWrong}
            postalCodeWrong={postalCodeBillingWrong}
            streetWrong={streetBillingWrong}
            valuePostalCode={newCustomer.postalCodeBilling}
            valueCity={newCustomer.cityBilling}
            valueStreet={newCustomer.streetBilling}
          />
        </div>
        <div className={`${styles.addressForm} ${disableAddress ? styles.disableAddress : ''}`}>
          <div className={styles.addressFormName}>shipping address</div>
          <div className={styles.controlAddressForm}>
            <div className={styles.checkBoxForm}>
              <input
                type="checkbox"
                name="defaultShipping"
                checked={defShipping}
                onChange={handleChecked}
              />
              <p>default shipping address</p>
            </div>
          </div>
          <AddressForm
            setName="Shipping"
            selectedCountry={selectedCountry.countryShipping}
            setSelectedCountry={setSelectedCountry}
            setErrors={setErrors}
            validationErrors={validationErrors}
            currentErrorCountry={currentErrorCountry}
            setNewCustomer={setNewCustomer}
            countryError={errorCountry.countryShipping}
            setCountryError={setErrorCountry}
            newCustomer={newCustomer}
            cityError={errors.cityShipping}
            streetError={errors.streetShipping}
            postalCodeError={errors.postalCodeShipping}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handlerBlur(e)}
            cityWrong={cityShippingWrong}
            postalCodeWrong={postalCodeShippingWrong}
            streetWrong={streetShippingWrong}
            valuePostalCode={newCustomer.postalCodeShipping ? newCustomer.postalCodeShipping : ''}
            valueCity={newCustomer.cityShipping ? newCustomer.cityShipping : ''}
            valueStreet={newCustomer.streetShipping ? newCustomer.streetShipping : ''}
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
