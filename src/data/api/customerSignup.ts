/* eslint-disable no-console */
// import Country from '../types/country';
import { Customer } from '../types/interfaces/customer.interface';
import { RegistrationFieldsType } from '../types/registration-type';
import { bearerToken } from './getToken';

export default async function CustomerSignup(formCustomer: string) {
  const newCustomer: RegistrationFieldsType = JSON.parse(formCustomer);
  const url = `${process.env.CTP_API_URL}${process.env.CTP_PROJECT_KEY}/me/signup`;
  const data: Customer = {
    email: newCustomer.email,
    firstName: newCustomer.firstName,
    lastName: newCustomer.lastName,
    password: newCustomer.password,
    dateOfBirth: newCustomer.dateOfBirth,
    addresses: [
      {
        country: newCustomer.country,
        // Object.keys(Country)[Object.values(Country).indexOf(newCustomer.country as Country)],
        streetName: newCustomer.street,
        postalCode: newCustomer.postalCode,
        city: newCustomer.city
      }
    ]
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${bearerToken.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    console.error('error response:', responseData);
    console.error('error response:', responseData.customer);
    return responseData.customer;
  } catch (error) {
    console.error('error response:', error);
  }
}
