import CTP from '../types/ctp';

/* eslint-disable no-console */
async function createCart(bearerToken: string) {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/carts`;

  const data = {
    currency: 'USD'
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const cart = await response.json();
    // console.log('Cart:', cart);
    return cart;
  } catch (error) {
    console.error(error);
    return '';
  }
}

export default createCart;
