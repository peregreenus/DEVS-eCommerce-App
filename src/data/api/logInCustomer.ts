import CTP from '../types/ctp';

/* eslint-disable no-console */
async function logInCustomer(
  email: FormDataEntryValue,
  password: FormDataEntryValue,
  bearerToken: string,
  cartId: string
) {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/login`;
  const data = {
    email,
    password,
    anonymousCart: {
      id: `${cartId}`,
      typeId: 'cart'
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const customer = await response.json();
    console.log('Customer:', customer);
    console.log(url);

    return customer;
  } catch (err) {
    console.error(`LogIn: ${err}`);
    return false;
  }
}

export default logInCustomer;
