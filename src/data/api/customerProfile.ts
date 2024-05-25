import CTP from '../types/ctp';
import { Customer } from '../types/interfaces/customer.interface';

export default async function getCustomerProfile(bearerToken: string): Promise<Customer> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me`;

  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
}
