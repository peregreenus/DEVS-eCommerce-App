/* eslint-disable no-console */

import Country from '../types/country';
import { Customer, CustomerResponse } from '../types/interfaces/customer.interface';
import CTP from '../types/ctp';
import { RegistrationFieldsType } from '../types/registration-type';
import { bearerToken } from './getToken';
import { customerAddressesOption } from '../../view/components/signup/signup-form';

export default async function CustomerSignup(formCustomer: string): Promise<CustomerResponse> {
  const newCustomer: RegistrationFieldsType = JSON.parse(formCustomer);
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/signup`;
  const data: Customer = {
    email: newCustomer.email,
    firstName: newCustomer.firstName,
    lastName: newCustomer.lastName,
    password: newCustomer.password,
    dateOfBirth: newCustomer.dateOfBirth,
    addresses: [
      {
        key: 'addr1',
        country:
          Object.keys(Country)[
            Object.values(Country).indexOf(newCustomer.countryBilling as Country)
          ],
        streetName: newCustomer.streetBilling,
        postalCode: newCustomer.postalCodeBilling,
        city: newCustomer.cityBilling
      }
    ],
    billingAddresses: customerAddressesOption.billingAddresses,
    shippingAddresses: customerAddressesOption.shippingAddresses
  };
  if (
    newCustomer.countryShipping &&
    newCustomer.streetShipping &&
    newCustomer.postalCodeShipping &&
    newCustomer.cityShipping
  ) {
    data.addresses?.push({
      key: 'addr2',
      country:
        Object.keys(Country)[
          Object.values(Country).indexOf(newCustomer.countryShipping as Country)
        ],
      streetName: newCustomer.streetShipping,
      postalCode: newCustomer.postalCodeShipping,
      city: newCustomer.cityShipping
    });
  }

  if (customerAddressesOption.defaultShipping) {
    data.defaultShippingAddress = customerAddressesOption.defaultShipping;
  }
  if (customerAddressesOption.defaultBilling) {
    data.defaultBillingAddress = customerAddressesOption.defaultBilling;
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${bearerToken.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
}
