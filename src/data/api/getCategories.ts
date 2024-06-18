/* eslint-disable no-console */
import CTP from '../types/ctp';
import { ICategory } from '../types/interfaces/category';
import { MainProps } from '../types/main-props';
import { getLSAnonToken, getLSToken } from '../utils/getLS';
import getAnonToken from './getToken';
// import refreshToken from './refreshToken';

async function getCategories({ state }: MainProps): Promise<ICategory[] | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/categories`;
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();

  if (!BEARER_TOKEN) {
    await getAnonToken();
  }

  console.log(`token => ${BEARER_TOKEN}`, state);
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  try {
    const response = await fetch(`${url}?limit=100`, { method: 'GET', headers });
    if (!response.ok) {
      await getAnonToken();
      window.location.reload();
      // if (BEARER_TOKEN) {
      //   console.log('refresh token');
      //   await refreshToken(BEARER_TOKEN);
      // }
    }
    const data = await response.json();
    console.log('getCategories', data);
    return data.results;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default getCategories;
