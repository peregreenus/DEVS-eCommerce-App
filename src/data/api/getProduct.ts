import CTP from '../types/ctp';
import { IProduct } from '../types/interfaces/product';
// import { ProductProjectionsData } from '../types/interfaces/ProductProjectionsData';
import { MainProps } from '../types/main-props';
import { getLSAnonToken, getLSToken } from '../utils/getLS';

// eslint-disable-next-line import/prefer-default-export
export async function getProduct(
  productId: string | undefined,
  { state }: MainProps
): Promise<IProduct | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections/${productId}`;
  // eslint-disable-next-line no-console
  console.log(state);
  const BEARER_TOKEN = state.userLoggedIn ? getLSToken() : getLSAnonToken();

  // eslint-disable-next-line no-console
  console.log('BEARER_TOKEN=>', BEARER_TOKEN);

  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
    // 'Content-Type': 'text/html'
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
