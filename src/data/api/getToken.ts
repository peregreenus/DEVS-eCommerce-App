import CTP from '../types/ctp';
import createCart from './createCart';
/* eslint-disable no-console */
export const bearerAnonToken = { token: null };

export async function getAnonToken() {
  const url = `${CTP.AUTH_URL}oauth/${CTP.PROJECT_KEY}/anonymous/token`;
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');
  data.append(
    'scope',
    `view_published_products:${CTP.PROJECT_KEY} manage_my_orders:${CTP.PROJECT_KEY} manage_my_profile:${CTP.PROJECT_KEY}`
  );

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${CTP.ANON_CLIENT_ID}:${CTP.ANON_CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    });

    const tokenData = await response.json();
    bearerAnonToken.token = tokenData.access_token;
    createCart(`${bearerAnonToken.token}`);
    console.log('Anonymous token:', bearerAnonToken);
  } catch (error) {
    console.error('Error:', error);
  }
}
