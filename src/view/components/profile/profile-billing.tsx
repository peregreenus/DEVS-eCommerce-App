/* eslint-disable no-console */
import React from 'react';
import {
  CustomerAddresses,
  CustomerProfileResponse
} from '../../../data/types/interfaces/customer.interface';
import * as styles from './profile.content.module.css';

function BillingTabContent({
  addresses,
  billingAddressIds,
  defaultBillingAddressId
}: CustomerProfileResponse) {
  const billingAddresses: CustomerAddresses[] = [];
  let defaultBillingAddress: string | undefined = '';
  if (billingAddressIds && addresses) {
    billingAddressIds.forEach((bilEl) => {
      addresses.forEach((adEl) => {
        if (adEl.id === bilEl) {
          billingAddresses.push(adEl);
          console.log(adEl);
        }
        if (adEl.id === defaultBillingAddressId) {
          defaultBillingAddress = defaultBillingAddressId;
        }
      });
    });
  }

  return (
    <div>
      {billingAddresses.map((value) => (
        <div
          key={value.id}
          className={`${defaultBillingAddress === value.id ? styles.defaultAddress : ''}`}>
          <span>
            <input type="checkbox" checked={defaultBillingAddress === value.id} />
            Default
          </span>
          <p>Your Country: {value.country}</p>
          <p>Postal Code:: {value.postalCode}</p>
          <p>Your City: {value.city}</p>
          <p>Your Street: {value.streetName}</p>
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
  );
}

export default BillingTabContent;
