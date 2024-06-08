/* eslint-disable no-console */
import CTP from '../../types/ctp';
import { Customer } from '../../types/interfaces/customer.interface';
import { getLSToken, getLSVersionProfileCustomer } from '../../utils/getLS';

export default async function removeAddress(idAddress: string) {
  const bearerToken: string | null = getLSToken();
  const versionProfileCustomer: number = Number(getLSVersionProfileCustomer());
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me`;
  // typeAddress: string
  // let actionTypeForIds: string = 'removeShippingAddressId';
  // if (typeAddress === 'billing') {
  //   actionTypeForIds = 'removeBillingAddressId';
  // }
  const data: Customer = {
    version: versionProfileCustomer,
    actions: [
      {
        action: 'removeAddress',
        addressId: idAddress
      }
    ]
  };
  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
}
