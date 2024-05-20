import CTP from '../types/ctp';
/* eslint-disable no-console */
export const bearerToken = { token: null };

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
    bearerToken.token = tokenData.access_token;
    console.log('Anonymous token:', bearerToken);
  } catch (error) {
    console.error('Error:', error);
  }
}
