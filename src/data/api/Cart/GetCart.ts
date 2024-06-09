import CTP from '../../types/ctp';
import { getLSAnonToken, getLSToken } from '../../utils/getLS';

async function getCart() {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/active-cart`;
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  };

  try {
    const response = await fetch(url, { method: 'GET', headers });
    const cartResponse = await response.json();
    return cartResponse;
  } catch (error) {
    return null;
  }
}

export default getCart;
