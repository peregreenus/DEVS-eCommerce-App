/* eslint-disable no-console */
import React, { ChangeEvent, useState } from 'react';
import {
  CustomerAddresses,
  CustomerProfileResponse
} from '../../../data/types/interfaces/customer.interface';
import * as styles from './profile.content.module.css';

function AddressesTabContent({
  addresses,
  shippingAddressIds,
  defaultShippingAddressId,
  billingAddressIds,
  defaultBillingAddressId
}: CustomerProfileResponse) {
  const [defShipping, setDefShipping] = useState('');
  const [defBilling, setDefBilling] = useState('');
  const shippingAddresses: CustomerAddresses[] = [];
  const billingAddresses: CustomerAddresses[] = [];

  if (shippingAddressIds && billingAddressIds && addresses) {
    shippingAddressIds.forEach((shipEl) => {
      addresses.forEach((addressEl) => {
        if (addressEl.id === shipEl) {
          shippingAddresses.push(addressEl);
        }
        if (addressEl.id === defaultShippingAddressId) {
          setDefShipping(`${defaultShippingAddressId}`);
        }
      });
    });
    billingAddressIds.forEach((bilEl) => {
      addresses.forEach((addressEl) => {
        if (addressEl.id === bilEl) {
          billingAddresses.push(addressEl);
        }
        if (addressEl.id === defaultBillingAddressId) {
          setDefShipping(`${defaultBillingAddressId}`);
        }
      });
    });
  }

  function changeDefShippingValue(e: ChangeEvent) {
    setDefShipping(e.currentTarget.id);
    console.log(defShipping);
  }

  function chengDefBillingValue(e: ChangeEvent) {
    setDefBilling(e.currentTarget.id);
    console.log(defBilling);
  }

  return (
    <div className={styles.addressesTabContent}>
      <div className={styles.addressContent}>
        <div className={styles.addressHead}>
          <h5>Shipping Addresses</h5>
          <button type="button">+</button>
        </div>

        {shippingAddresses.map((value) => (
          <div
            key={value.id}
            className={`${styles.address} ${defShipping === value.id ? styles.defaultAddress : ''}`}>
            <div className={styles.addressControl}>
              <span>
                <input
                  type="radio"
                  name="shippingRadio"
                  id={value.id}
                  checked={defShipping === value.id}
                  onChange={changeDefShippingValue}
                />
                set default
              </span>
              <button type="button">edit</button>
            </div>
            <div className={styles.addressBlock}>
              <p className={styles.profileContentString}>
                <span>Country: </span>
                {value.country}
              </p>
              <p className={styles.profileContentString}>
                <span>Postal Code: </span>
                {value.postalCode}
              </p>
            </div>
            <div className={styles.addressBlock}>
              <p className={styles.profileContentString}>
                <span>City: </span>
                {value.city}
              </p>
              <p className={styles.profileContentString}>
                <span>Street: </span>
                {value.streetName}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.addressContent}>
        <div className={styles.addressHead}>
          <h5>Billing Addresses</h5>
          <button type="button">+</button>
        </div>
        {billingAddresses.map((value) => (
          <div
            key={value.id}
            className={`${styles.address} ${defBilling === value.id ? styles.defaultAddress : ''}`}>
            <div className={styles.addressControl}>
              <span>
                <input
                  type="radio"
                  name="billingRadio"
                  id={value.id}
                  checked={defBilling === value.id}
                  onChange={chengDefBillingValue}
                />
                set default
              </span>
              <button type="button">edit</button>
            </div>
            <div className={styles.addressBlock}>
              <p className={styles.profileContentString}>
                <span>Country: </span>
                {value.country}
              </p>
              <p className={styles.profileContentString}>
                <span>Postal Code: </span>
                {value.postalCode}
              </p>
            </div>
            <div className={styles.addressBlock}>
              <p className={styles.profileContentString}>
                <span>City: </span>
                {value.city}
              </p>
              <p className={styles.profileContentString}>
                <span>Street: </span>
                {value.streetName}
              </p>
            </div>
          </div>
        ))}
        {/* <label htmlFor="country">
            Your Country:
            <input type="text" name="country" value={address1.country} />
          </label>
          <label htmlFor="postal">
            Postal Code:
            <input type="text" name="postalCode" value={address1.postalCode} />
          </label>
          <label htmlFor="city">
            Your City:
            <input type="text" name="city" value={address1.city} />
          </label>
          <label htmlFor="street">
            Your Street:
            <input type="text" name="street" value={address1.streetName} />
          </label> */}
      </div>
    </div>
  );
}

export default AddressesTabContent;
