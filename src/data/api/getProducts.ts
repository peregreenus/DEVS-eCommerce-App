/* eslint-disable no-console */
import CTP from '../types/ctp';
import { IProduct } from '../types/interfaces/product';
import { MainProps } from '../types/main-props';
import { getLSToken, getLSAnonToken } from '../utils/getLS';

async function getProducts({ state }: MainProps): Promise<IProduct[] | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections?limit=42`;

  const token = getLSToken();
  const BEARER_TOKEN = token || getLSAnonToken();
  console.log(`token => ${BEARER_TOKEN}`, state);
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`
      }
    });

    const productsData = await response.json();
    return productsData.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getProducts;
