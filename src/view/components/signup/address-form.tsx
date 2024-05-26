/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import React, { ChangeEvent } from 'react';
import * as styles from './signup-form.module.css';
import InputField from './signup-form-input';
import Country from '../../../data/types/country';
import { checkingCountry } from '../../../data/utils/validate-signup-form';
import { AddressFormProps } from '../../../data/types/signup-props';

export default function AddressForm({
  setName,
  validationErrors,
  selectedCountry,
  setSelectedCountry,
  countryError,
  setCountryError,
  newCustomer,
  setNewCustomer,
  cityError,
  postalCodeError,
  streetError,
  onChange,
  onBlur,
  cityWrong,
  currentErrorCountry,
  postalCodeWrong,
  streetWrong,
  valuePostalCode,
  valueCity,
  valueStreet
}: AddressFormProps) {
  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedCountry({ [name]: value });
    delete currentErrorCountry[name];
    setCountryError({ ...currentErrorCountry });
    if (name === 'countryBilling') {
      checkingCountry.billing = value;
      newCustomer.postalCodeBilling = '';
      validationErrors.postalCodeBilling = 'should not be a empty!';
    } else {
      checkingCountry.shipping = value;
      newCustomer.postalCodeShipping = '';
      validationErrors.postalCodeShipping = 'should not be a empty!';
    }
    setNewCustomer({
      ...newCustomer,
      [name]: value
    });
    console.log(newCustomer);
  };
  return (
    <div className={`${'addressForm'} ${setName}`}>
      <div className={styles.block}>
        <label htmlFor={`${'country'}${setName}`} className={styles.label}>
          Country:
          <select
            value={selectedCountry}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleDropdownChange(e)}
            name={`${'country'}${setName}`}
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
          name={`${'postalCode'}${setName}`}
          classes={styles.input}
          placeholder=""
          onChange={onChange}
          onBlur={onBlur}
          value={valuePostalCode}
          wrong={postalCodeWrong}
          error={postalCodeError}
          disabled={false}
        />
      </div>
      <div className={styles.block}>
        <InputField
          label="City"
          type="text"
          name={`${'city'}${setName}`}
          classes={styles.input}
          placeholder="enter your city"
          onChange={onChange}
          onBlur={onBlur}
          value={valueCity}
          wrong={cityWrong}
          error={cityError}
          disabled={false}
        />
        <InputField
          label="Street"
          type="text"
          name={`${'street'}${setName}`}
          classes={styles.input}
          placeholder="your street"
          onChange={onChange}
          onBlur={onBlur}
          value={valueStreet}
          wrong={streetWrong}
          error={streetError}
          disabled={false}
        />
      </div>
    </div>
  );
}
