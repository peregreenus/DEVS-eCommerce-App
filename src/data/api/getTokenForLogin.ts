import CTP from '../types/ctp';
import { ErrorProps } from '../types/errorProps';
import { ICart } from '../types/interfaces/ICart';
import { MainProps } from '../types/main-props';
import getCart from './Cart/GetCart';
import createCart from './Cart/createCart';
import mergeAnonCartsToUser from './Cart/mergeAnonCartsToUser';

async function getTokenForLogin(
  email: FormDataEntryValue,
  password: FormDataEntryValue,
  { state, setState }: MainProps
): Promise<ErrorProps | string> {
  // get anonCart
  const anonCart: ICart | null = !state.userLoggedIn ? await getCart() : null;

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

    const { access_token: bearerToken } = tokenData;
    localStorage.setItem('bearerToken', bearerToken);
    localStorage.removeItem('bearerAnonToken');

    // Fetch existing cart
    const cartUrl = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/active-cart`;
    const cartResponse = await fetch(cartUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    });

    if (!cartResponse.ok) {
      await createCart(tokenData.access_token);
    }

    setState((prevState) => ({ ...prevState, userLoggedIn: true, showMsg: false }));

    if (anonCart && anonCart.lineItems.length > 0) {
      mergeAnonCartsToUser(anonCart);
    }
    setState((prevState) => ({ ...prevState, changesInCart: prevState.changesInCart + 1 }));

    return bearerToken;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export default getTokenForLogin;
