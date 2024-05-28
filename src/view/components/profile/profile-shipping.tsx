/* eslint-disable no-console */
import React from 'react';
import {
  CustomerAddresses,
  CustomerProfileResponse
} from '../../../data/types/interfaces/customer.interface';

function ShippingTabContent({ addresses, shippingAddressIds }: CustomerProfileResponse) {
  const shippingAddresses: CustomerAddresses[] = [];

  if (shippingAddressIds && addresses) {
    shippingAddressIds.forEach((shipEl) => {
      addresses.forEach((adEl) => {
        if (adEl.id === shipEl) {
          shippingAddresses.push(adEl);
          console.log(adEl);
        }
      });
    });
  }
  return (
    <div>
      <p>Your Country: {shippingAddresses[0].country}</p>
      <p>Postal Code:: {shippingAddresses[0].postalCode}</p>
      <p>Your City: {shippingAddresses[0].city}</p>
      <p>Your Street: {shippingAddresses[0].streetName}</p>
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

export default ShippingTabContent;
