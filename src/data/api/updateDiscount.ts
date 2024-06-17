/* eslint-disable no-console */
import CTP from '../types/ctp';
import { getLSAnonToken, getLSToken } from '../utils/getLS';

async function updateDiscount() {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/discount-codes`;
  // eslint-disable-next-line no-console
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();

  // eslint-disable-next-line no-console
  console.log('BEARER_TOKEN=>', BEARER_TOKEN);

  const data = {
    version: 1,
    actions: [
      {
        action: 'setName',
        name: {
          en: 'New Name'
        }
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
    console.log('Discount code updated successfully:', result);
  } catch (error) {
    console.error('Failed to update discount code:', error);
  }
}

export default updateDiscount;
