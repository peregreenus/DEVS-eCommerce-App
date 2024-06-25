import CTP from '../types/ctp';
import { IProduct } from '../types/interfaces/product';
import { getLSAnonToken, getLSToken } from '../utils/getLS';

async function getProduct(productId: string | undefined): Promise<IProduct | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections/${productId}`;
  const BEARER_TOKEN = getLSToken() || getLSAnonToken();
  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  let data: IProduct | null = null;

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    data = await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
  }
  return data;
}

export default getProduct;
