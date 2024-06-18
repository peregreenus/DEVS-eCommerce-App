import CTP from '../../types/ctp';
import { getLSAnonToken, getLSToken } from '../../utils/getLS';

async function applyPromo(cartId: string, cartVersion: number, promo: string) {
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/carts/${cartId}`;
  const data = {
    version: cartVersion,
    actions: [
      {
        action: 'addDiscountCode',
        code: `${promo}`
      }
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('Failed to update discount code:', error);
  }
  return null;
}

export default applyPromo;
