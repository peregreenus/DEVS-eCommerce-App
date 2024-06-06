import CTP from '../../types/ctp';
import { Customer } from '../../types/interfaces/customer.interface';
import { getLSToken, getLSVersionProfileCustomer } from '../../utils/getLS';

export default async function SetDefAddress(idAddress: string, typeAddress: string) {
  const bearerToken: string | null = getLSToken();
  const versionProfileCustomer: number = Number(getLSVersionProfileCustomer());
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me`;
  let actionType: string = 'setDefaultShippingAddress';
  if (typeAddress === 'billing') {
    actionType = 'setDefaultBillingAddress';
  }

  const data: Customer = {
    version: versionProfileCustomer,
    actions: [
      {
        action: actionType,
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
