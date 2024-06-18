import CTP from '../../types/ctp';

async function createCart(bearerToken: string) {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/carts`;

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
    localStorage.setItem('cart', cart.id);
    return cart.id;
  } catch (error) {
    console.error(error);
    return '';
  }
}

export default createCart;
