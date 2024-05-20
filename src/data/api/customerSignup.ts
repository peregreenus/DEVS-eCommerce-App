/* eslint-disable no-console */

import Country from '../types/country';
import {
  Customer,
  CustomerResponse,
  ErrorCustomerResponse
} from '../types/interfaces/customer.interface';
import { RegistrationFieldsType } from '../types/registration-type';
import { bearerToken } from './getToken';

export default async function CustomerSignup(
  formCustomer: string
): Promise<CustomerResponse | ErrorCustomerResponse> {
  const newCustomer: RegistrationFieldsType = JSON.parse(formCustomer);
  const url = `${process.env.CTP_API_URL}${process.env.CTP_PROJECT_KEY}/customers`;
  const data: Customer = {
    email: newCustomer.email,
    firstName: newCustomer.firstName,
    lastName: newCustomer.lastName,
    password: newCustomer.password,
    dateOfBirth: newCustomer.dateOfBirth,
    addresses: [
      {
        country:
          Object.keys(Country)[Object.values(Country).indexOf(newCustomer.country as Country)],
        streetName: newCustomer.street,
        postalCode: newCustomer.postalCode,
        city: newCustomer.city
      }
    ]
  };
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
