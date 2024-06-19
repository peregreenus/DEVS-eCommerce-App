import CTP from '../../types/ctp';
import { ICart } from '../../types/interfaces/ICart';
import { getLSAnonToken, getLSToken } from '../../utils/getLS';

let cachedCart: ICart | null = null;

async function getCart(force = false) {
  if (!cachedCart || force) {
    const BEARER_TOKEN = getLSToken() || getLSAnonToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`
    };

    try {
      const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/active-cart`;
      const response = await fetch(url, { method: 'GET', headers });
      const cartResponse = await response.json();
      if (cartResponse.statusCode >= 400) {
        // eslint-disable-next-line no-console
        console.log('rrrrrrrrrrrrrrrrrrrr');
      }
      cachedCart = cartResponse;
      return cartResponse;
    } catch (error) {
      return null;
    }
  }
  return cachedCart;
}

export default getCart;
