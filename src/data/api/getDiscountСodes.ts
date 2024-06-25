import CTP from '../types/ctp';
import { PromoRequest } from '../types/interfaces/PromoRequest';
import { getLSAnonToken, getLSToken } from '../utils/getLS';

async function getDiscountCodes() {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/discount-codes`;
  const BEARER_TOKEN = getLSToken() || getLSAnonToken();

  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data: PromoRequest = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
  return null;
}

export default getDiscountCodes;
