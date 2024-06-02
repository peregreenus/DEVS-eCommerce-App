/* eslint-disable no-console */
import CTP from '../../types/ctp';
import { Customer } from '../../types/interfaces/customer.interface';
import { getLSToken, getLSVersionProfileCustomer } from '../../utils/getLS';

export default async function setCustomerInfo(dataString: string) {
  const bearerToken: string | null = getLSToken();
  const versionProfileCustomer: number = Number(getLSVersionProfileCustomer());
  let actionType: string = '';
  let actionData: string = '';
  let fieldName: string = '';
  const updateInfo: Customer = JSON.parse(dataString);

  switch (true) {
    case dataString.includes('firstName'):
      actionType = 'setFirstName';
      actionData = `${updateInfo.firstName}`;
      fieldName = 'firstName';
      break;
    case dataString.includes('lastName'):
      actionType = 'setLastName';
      actionData = `${updateInfo.lastName}`;
      fieldName = 'lastName';
      break;
    case dataString.includes('email'):
      actionType = 'changeEmail';
      actionData = `${updateInfo.email}`;
      fieldName = 'email';
      break;
    case dataString.includes('dateOfBirth'):
      actionType = 'setDateOfBirth';
      console.log(updateInfo.dateOfBirth);
      actionData = `${updateInfo.dateOfBirth}`;
      fieldName = 'dateOfBirth';
      break;
    default:
      break;
  }
  console.log(actionType);
  console.log(actionData);
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me`;
  const data: Customer = {
    version: versionProfileCustomer,
    actions: [
      {
        action: actionType
      }
    ]
  };
  switch (fieldName) {
    case 'firstName':
      if (data.actions) {
        data.actions[0].firstName = actionData;
      }
      break;
    case 'email':
      if (data.actions) {
        data.actions[0].email = actionData;
      }
      break;
    case 'lastName':
      if (data.actions) {
        data.actions[0].lastName = actionData;
      }
      break;
    case 'dateOfBirth':
      if (data.actions) {
        data.actions[0].dateOfBirth = actionData;
      }
      break;
    default:
      break;
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
