import CTP from '../../types/ctp';
import { getLSAnonToken, getLSToken } from '../../utils/getLS';

async function getCartById(cartId: string) {
  const BEARER_TOKEN = getLSToken() || getLSAnonToken();
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  };

  try {
    const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/carts/${cartId}`;
    const response = await fetch(url, { method: 'GET', headers });
    const cartResponse = await response.json();
    return cartResponse;
  } catch (error) {
    return null;
  }
}

export default getCartById;
