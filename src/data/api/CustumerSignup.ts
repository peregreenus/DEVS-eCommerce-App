/* eslint-disable no-console */
import { Country, CustomerRegistration, RegistrationFieldsType } from '../types/registration-type';
import { baseURL, bearerToken, projectKey } from './api';

export default async function CostumerSignup(formCustomer: string) {
  const newCustomer: RegistrationFieldsType = JSON.parse(formCustomer);
  const url = `${baseURL}${projectKey}/me/signup`;
  const data: CustomerRegistration = {
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
    console.log('response from create costumer', responseData);
  } catch (error) {
    console.error('error response:', error);
  }
}
