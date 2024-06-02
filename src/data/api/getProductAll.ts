import CTP from '../types/ctp';
import { IProductAll } from '../types/interfaces/productall';
import { getLSAnonToken, getLSToken } from '../utils/getLS';

export async function getProductAll(): Promise<IProductAll | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections`;
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();

  // eslint-disable-next-line no-console
  console.log('BEARER_TOKEN=>', BEARER_TOKEN);

  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  let data: IProductAll | null = null;

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    data = await response.json();
    // eslint-disable-next-line no-console
    console.log(data);
  } catch (error) {
    console.error('Error fetching product:', error);
  }
  return data;
}

export default getProductAll;
