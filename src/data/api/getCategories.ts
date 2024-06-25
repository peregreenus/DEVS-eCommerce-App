import CTP from '../types/ctp';
import { ICategory } from '../types/interfaces/category';
import { getLSAnonToken, getLSToken } from '../utils/getLS';
import getAnonToken from './getToken';

let cachedCategories: ICategory[] | null = null;

async function getCategories(force = false): Promise<ICategory[] | null> {
  if (!cachedCategories || force) {
    const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/categories`;
    const BEARER_TOKEN = getLSToken() || getLSAnonToken();

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
      cachedCategories = data.results;
      return data.results;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }
  return cachedCategories;
}

export default getCategories;
