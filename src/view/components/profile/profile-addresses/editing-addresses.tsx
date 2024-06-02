/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import * as styles from './profile-addresses.module.css';
import { CustomerAddresses } from '../../../../data/types/interfaces/customer.interface';
import SaveMarkIcon from '../../common/icons/saveMarcIcon';
import Country from '../../../../data/types/country';

interface EditingAddressFormProps {
  id: string;
  addressData: CustomerAddresses;
  onSubmit: (e: FormEvent<HTMLFormElement>, typeAddress: string, idAddress: string) => void;
}

export default function EditingAddresses({ onSubmit, id, addressData }: EditingAddressFormProps) {
  const currentSelectCountry: string =
    Object.values(Country)[Object.keys(Country).indexOf(addressData.country as Country)];
  const [newAddressData, setAddressData] = useState<CustomerAddresses>(addressData);
  const [selectedCountry, setSelectedCountry] = useState(currentSelectCountry);

  const textb = '';
  function handleChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setAddressData({
      ...newAddressData,
      [name]: value
    });
  }

  const idArray = id.split('-');
  const typeAddress = idArray[0];
  const idAddress = idArray[1];
  const handleDropdownChangeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedCountry(value);
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
        <button type="submit" className={styles.controlProfileButton}>
          <SaveMarkIcon width="1.5rem" height="1.5rem" />
          {textb}
        </button>
      </div>
      <div className={styles.block}>
        <label htmlFor="country" className={styles.label}>
          Country:
          <select
            value={selectedCountry}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleDropdownChangeCountry(e)}
            name="country"
            className={styles.inputAddressField}>
            {Object.entries(Country).map(([key, value]) => (
              <option
                aria-selected="true"
                value={value}
                key={key}
                selected={value === currentSelectCountry}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="postalCode">
          Postal Code:
          <input
            id={newAddressData.id}
            type="text"
            value={newAddressData.postalCode}
            name="postalCode"
            onChange={handleChangeAddress}
            className={styles.inputAddressField}
          />
        </label>
      </div>
      <div className={styles.block}>
        <label htmlFor="city">
          City:
          <input
            id={newAddressData.id}
            type="text"
            value={newAddressData.city}
            name="city"
            onChange={handleChangeAddress}
            className={styles.inputAddressField}
          />
        </label>
        <label htmlFor="streetName">
          Street:
          <input
            id={newAddressData.id}
            type="text"
            value={newAddressData.streetName}
            name="streetName"
            onChange={handleChangeAddress}
            className={styles.inputAddressField}
          />
        </label>
      </div>
    </form>
  );
}
