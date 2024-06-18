import CTP from '../types/ctp';
import { MainProps } from '../types/main-props';

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
    },
    anonymousCartSignInMode: 'MergeWithExistingCustomerCart'
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
    localStorage.setItem('cart', customer.cart.id);
    setState((prevState) => ({ ...prevState, userLoggedIn: true, showMsg: false }));

    return customer;
  } catch (err) {
    console.error(`LogIn: ${err}`);
    return false;
  }
}

export default logInCustomer;
