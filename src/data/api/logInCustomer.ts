import CTP from '../types/ctp';
import { MainProps } from '../types/main-props';

/* eslint-disable no-console */
async function logInCustomer(
  email: FormDataEntryValue,
  password: FormDataEntryValue,
  bearerToken: string,
  cartId: string,
  { setState }: MainProps
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
    localStorage.setItem('cart', JSON.stringify(customer.cart));
    setState((prevState) => ({ ...prevState, userLoggedIn: true, showMsg: false }));

    return customer;
  } catch (err) {
    console.error(`LogIn: ${err}`);
    return false;
  }
}

export default logInCustomer;
