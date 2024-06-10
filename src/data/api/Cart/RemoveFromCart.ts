/* eslint-disable no-console */
import CTP from '../../types/ctp';
import { LineItem } from '../../types/interfaces/ICart';
import { IProduct } from '../../types/interfaces/product';
import { getLSAnonToken, getLSToken } from '../../utils/getLS';
import getCart from './GetCart';

async function RemoveFromCart(product: IProduct, quantity = 1) {
  const BEARER_TOKEN = getLSToken() || getLSAnonToken();
  const cart = await getCart();
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
          quantity
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
