import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import * as styles from './profile-addresses.module.css';
import { CustomerAddresses } from '../../../../data/types/interfaces/customer.interface';
import SaveMarkIcon from '../../common/icons/saveMarcIcon';
import Country from '../../../../data/types/country';
import { checkingCountry, validationField } from '../../../../data/utils/validate-form';
import { errorInitialAddressNewState, errorInitialAddressState } from '../initial-state';
import CloseXIcon from '../../common/icons/closeXIcon';

type EditingAddressFormProps = {
  id: string;
  addressData: CustomerAddresses;
  onClick: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>, typeAddress: string, idAddress: string) => void;
  isNew: boolean;
};

export default function EditingAddresses({
  onClick,
  onSubmit,
  id,
  addressData,
  isNew
}: EditingAddressFormProps) {
  let validationErrors: { [key: string]: string };
  let currentSelectCountry: string;
  if (isNew) {
    validationErrors = errorInitialAddressNewState;
    currentSelectCountry = '';
  } else {
    validationErrors = errorInitialAddressState;
    currentSelectCountry =
      Object.values(Country)[Object.keys(Country).indexOf(addressData.country as Country)];
  }

  const [newAddressData, setAddressData] = useState<CustomerAddresses>(addressData);
  const [selectedCountry, setSelectedCountry] = useState(currentSelectCountry);
  const [errors, setErrors] = useState<{ [key: string]: string }>(validationErrors);
  const [isValid, setFormValid] = useState(false);

  const idArray = id.split('-');
  const typeAddress = idArray[0];
  const idAddress = idArray[1];
  const textb = '';
  useEffect(() => {
    if (Object.values(errors).every((str) => str === '')) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [errors]);

  function handleChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    if (validationField(name, value) === 'empty') {
      validationErrors[name] = '';
    } else {
      validationErrors[name] = validationField(name, value);
    }
    setErrors({ ...validationErrors });
    setAddressData({
      ...newAddressData,
      [name]: value
    });
  }

  const handleDropdownChangeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    checkingCountry.address = value;
    setSelectedCountry(value);
    newAddressData.postalCode = '';
    validationErrors.postalCode = 'should not be a empty!';
    validationErrors.country = '';
    setErrors({ ...validationErrors });
    setAddressData({
      ...newAddressData,
      [name]: value
    });
  };

  return (
    <form
      name={id}
      className={styles.addressForm}
      onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e, typeAddress, idAddress)}>
      <div className={styles.controlBlock}>
        <button type="submit" className={styles.controlAddressButton} disabled={!isValid}>
          <SaveMarkIcon width="1.5rem" height="1.5rem" fill={!isValid ? 'grey' : 'green'} />
          {textb}
        </button>
        <button type="button" className={styles.controlAddressButton} onClick={onClick}>
          <CloseXIcon width="1.5rem" height="1.5rem" />
          {textb}
        </button>
      </div>
      <div className={styles.editAddressContainer}>
        <label className={styles.label} htmlFor="country">
          <p>Country: </p>
          <select
            defaultValue={isNew ? 'select country' : selectedCountry}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleDropdownChangeCountry(e)}
            name="country"
            className={styles.inputAddressField}>
            {isNew && (
              <option disabled value="select country">
                select country
              </option>
            )}
            {Object.entries(Country).map(([key, value]) => (
              <option aria-selected="true" value={value} key={key}>
                {value}
              </option>
            ))}
          </select>
        </label>
        {errors.country && <span className={styles.error}>{errors.country}</span>}
      </div>
      <div className={styles.editAddressContainer}>
        <label className={styles.label} htmlFor="postalCode">
          <p>Postal Code: </p>
          <input
            id={newAddressData.id}
            type="text"
            value={newAddressData.postalCode}
            name="postalCode"
            onChange={handleChangeAddress}
            className={styles.inputAddressField}
          />
        </label>
        {errors.postalCode && <span className={styles.error}>{errors.postalCode}</span>}
      </div>

      <div className={styles.editAddressContainer}>
        <label className={styles.label} htmlFor="city">
          <p>City: </p>
          <input
            id={newAddressData.id}
            type="text"
            value={newAddressData.city}
            name="city"
            onChange={handleChangeAddress}
            className={styles.inputAddressField}
          />
        </label>
        {errors.city && <span className={styles.error}>{errors.city}</span>}
      </div>
      <div className={styles.editAddressContainer}>
        <label className={styles.label} htmlFor="streetName">
          <p>Street: </p>
          <input
            id={newAddressData.id}
            type="text"
            value={newAddressData.streetName}
            name="streetName"
            onChange={handleChangeAddress}
            className={styles.inputAddressField}
          />
        </label>
        {errors.streetName && <span className={styles.error}>{errors.streetName}</span>}
      </div>
    </form>
  );
}
