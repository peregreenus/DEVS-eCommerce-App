/* eslint-disable no-console */

import CTP from '../types/ctp';
import { ErrorProps } from '../types/errorProps';

async function getTokenForLogin(
  email: FormDataEntryValue,
  password: FormDataEntryValue
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
    // eslint-disable-next-line no-alert
    if (!response.ok) return tokenData;

    const { access_token: bearerToken, refresh_token: refreshToken } = tokenData;
    localStorage.setItem('bearerToken', bearerToken);
    console.log('bearerToken:', bearerToken);
    console.log('refreshToken:', refreshToken);

    return bearerToken;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export default getTokenForLogin;
