/* eslint-disable no-console */
import CTP from '../types/ctp';
import { PromoRequest } from '../types/interfaces/PromoRequest';
import { getLSAnonToken, getLSToken } from '../utils/getLS';

async function getDiscountCodes() {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/discount-codes`;
  // eslint-disable-next-line no-console
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();

  // eslint-disable-next-line no-console
  console.log('BEARER_TOKEN=>', BEARER_TOKEN);

  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data: PromoRequest = await response.json();
    console.log('getDiscountCodes', data);
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
  return null;
}

export default getDiscountCodes;
