/* eslint-disable no-console */
import CTP from '../types/ctp';
import { getLSAnonToken, getLSToken } from '../utils/getLS';

async function getCategories() {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/categories`;
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();

  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('getCategories', data);
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
  return null;
}

export default getCategories;
