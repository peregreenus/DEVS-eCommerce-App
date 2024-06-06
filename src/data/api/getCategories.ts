/* eslint-disable no-console */
import CTP from '../types/ctp';
import { ICategory } from '../types/interfaces/category';
import { MainProps } from '../types/main-props';
import { getLSAnonToken, getLSToken } from '../utils/getLS';

async function getCategories({ state }: MainProps): Promise<ICategory[] | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/categories`;
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();
  console.log(`token => ${BEARER_TOKEN}`, state);
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  try {
    const response = await fetch(`${url}?limit=100`, { method: 'GET', headers });
    if (!response.ok) {
      throw new Error('Network response was not ok');
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
