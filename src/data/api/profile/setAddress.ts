/* eslint-disable no-console */
import Country from '../../types/country';
import CTP from '../../types/ctp';
import { Customer, CustomerAddresses } from '../../types/interfaces/customer.interface';
import { getLSToken, getLSVersionProfileCustomer } from '../../utils/getLS';

export default async function setCustomerAddress(dataString: string, idAddress: string) {
  const bearerToken: string | null = getLSToken();
  const versionProfileCustomer: number = Number(getLSVersionProfileCustomer());
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me`;
  const updateAddress: CustomerAddresses = JSON.parse(dataString);
  let actionType: string = 'changeAddress';
  if (idAddress === 'new') {
    actionType = 'addAddress';
  }

  const data: Customer = {
    version: versionProfileCustomer,
    actions: [
      {
        action: actionType,
        address: {
          streetName: updateAddress.streetName,
          postalCode: updateAddress.postalCode,
          city: updateAddress.city,
          country:
            Object.keys(Country)[Object.values(Country).indexOf(updateAddress.country as Country)]
        }
      }
    ]
  };
  if (idAddress !== 'new' && data.actions) {
    data.actions[0].addressId = idAddress;
  }
  console.log(data);
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
