import CTP from '../types/ctp';
import createCart from './createCart';

export default async function getAnonToken() {
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
    localStorage.setItem('bearerAnonToken', tokenData.access_token);
    createCart(tokenData.access_token);
  } catch (error) {
    console.error('Error:', error);
  }
}
