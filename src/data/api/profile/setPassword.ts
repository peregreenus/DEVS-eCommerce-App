import CTP from '../../types/ctp';
import { CostumerUpdatePassword, Customer } from '../../types/interfaces/customer.interface';
import { getLSToken, getLSVersionProfileCustomer } from '../../utils/getLS';

export default async function setCustomerPassword(dataString: string) {
  const bearerToken: string | null = getLSToken();
  const versionProfileCustomer: number = Number(getLSVersionProfileCustomer());
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/password`;
  const updatePassword: CostumerUpdatePassword = JSON.parse(dataString);
  const data: Customer = {
    version: versionProfileCustomer,
    currentPassword: updatePassword.currentPassword,
    newPassword: updatePassword.newPassword
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
