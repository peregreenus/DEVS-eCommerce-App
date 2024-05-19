/* eslint-disable no-console */

import CTP from '../types/ctp';

async function getTokenForLogin(
  email: FormDataEntryValue,
  password: FormDataEntryValue
): Promise<string> {
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
    const { access_token: bearerToken, refresh_token: refreshToken } = tokenData;
    console.log('bearerToken:', bearerToken);
    console.log('refreshToken:', refreshToken);
    console.log(url);
    return bearerToken;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export default getTokenForLogin;
