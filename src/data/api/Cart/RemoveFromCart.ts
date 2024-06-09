/* eslint-disable no-console */
import CTP from '../../types/ctp';
import Cart, { LineItem } from '../../types/interfaces/cart';
import { IProduct } from '../../types/interfaces/product';
import { getLSAnonToken, getLSToken } from '../../utils/getLS';

async function RemoveFromCart(product: IProduct, cart: Cart) {
  const BEARER_TOKEN = getLSToken() || getLSAnonToken();

  const lineItem: LineItem | undefined = cart.lineItems.find(
    (item: LineItem) => item.productId === product.id
  );
  console.log('LineItem');
  console.log(lineItem);

  if (lineItem) {
    const lineItemId = lineItem.id;
    const requestBody = {
      version: cart.version,
      actions: [
        {
          action: 'removeLineItem',
          lineItemId,
          quantity: 1
        }
      ]
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`
    };

    const cartId = cart.id;

    try {
      const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/carts/${cartId}`;
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody)
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

export default RemoveFromCart;