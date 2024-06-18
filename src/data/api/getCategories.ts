import CTP from '../types/ctp';
import { ICategory } from '../types/interfaces/category';
import { getLSAnonToken, getLSToken } from '../utils/getLS';
import getAnonToken from './getToken';
// import refreshToken from './refreshToken';

async function getCategories(): Promise<ICategory[] | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/categories`;
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();
  if (!BEARER_TOKEN) {
    await getAnonToken();
  }
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  try {
    const response = await fetch(`${url}?limit=100`, { method: 'GET', headers });
    if (!response.ok) {
      await getAnonToken();
      window.location.reload();
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default getCategories;
