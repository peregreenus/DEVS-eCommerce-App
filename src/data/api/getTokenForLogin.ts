/* eslint-disable no-console */

import CTP from '../types/ctp';
import { ErrorProps } from '../types/errorProps';
import { MainProps } from '../types/main-props';
import createCart from './Cart/createCart';

async function getTokenForLogin(
  email: FormDataEntryValue,
  password: FormDataEntryValue,
  { setState }: MainProps
): Promise<ErrorProps | string> {
  const url = `${CTP.AUTH_URL}oauth/${CTP.PROJECT_KEY}/customers/token`;
  const data = new URLSearchParams();

  data.append('grant_type', 'password');
  data.append('username', `${email}`);
  data.append('password', `${password}`);
  data.append('scope', `manage_project:${CTP.PROJECT_KEY}`);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${CTP.CLIENT_ID}:${CTP.CLIENT_SECRET}`)}`
      },
      body: data
    });

    const tokenData = await response.json();
    if (!response.ok) return tokenData;

    const { access_token: bearerToken, refresh_token: refreshToken } = tokenData;
    localStorage.setItem('bearerToken', bearerToken);
    localStorage.removeItem('bearerAnonToken');
    console.log('bearerToken:', bearerToken);
    console.log('refreshToken:', refreshToken);

    // Fetch existing cart
    const cartUrl = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/active-cart`;
    const cartResponse = await fetch(cartUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    });

    if (cartResponse.ok) {
      const cartData = await cartResponse.json();
      console.log('Existing cart:', cartData);
    } else {
      // If no active cart exists, create a new one
      console.log('No active cart found, creating a new one.');
      await createCart(tokenData.access_token);
    }

    setState((prevState) => ({ ...prevState, userLoggedIn: true, showMsg: false }));

    return bearerToken;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export default getTokenForLogin;
