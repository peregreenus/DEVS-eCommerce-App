import CTP from '../types/ctp';
import { IProduct } from '../types/interfaces/product';
import { getLSToken, getLSAnonToken } from '../utils/getLS';

async function getProductsAll(): Promise<IProduct[] | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections/search`;
  const token = getLSToken();
  const BEARER_TOKEN = token || getLSAnonToken();

  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  const fullUrl = `${url}?limit=10000`;

  try {
    const response = await fetch(fullUrl, { method: 'GET', headers });
    const productsData = await response.json();
    return productsData.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getProductsAll;
