/* eslint-disable no-console */
import React from 'react';
import {
  CustomerAddresses,
  CustomerProfileResponse
} from '../../../data/types/interfaces/customer.interface';

function BillingTabContent({ addresses, billingAddressIds }: CustomerProfileResponse) {
  const billingAddresses: CustomerAddresses[] = [];

  if (billingAddressIds && addresses) {
    billingAddressIds.forEach((bilEl) => {
      addresses.forEach((adEl) => {
        if (adEl.id === bilEl) {
          billingAddresses.push(adEl);
          console.log(adEl);
        }
      });
    });
  }

  return (
    <div>
      <p>Your Country: {billingAddresses[0].country}</p>
      <p>Postal Code:: {billingAddresses[0].postalCode}</p>
      <p>Your City: {billingAddresses[0].city}</p>
      <p>Your Street: {billingAddresses[0].streetName}</p>
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
