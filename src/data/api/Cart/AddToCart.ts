import CTP from '../../types/ctp';
import Cart from '../../types/interfaces/cart';
import { IProduct } from '../../types/interfaces/product';
import { getLSAnonToken, getLSToken } from '../../utils/getLS';
// import getCart from './GetCart';

async function AddToCart(product: IProduct, cart: Cart) {
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();

  const requestBody = {
    version: cart.version,
    actions: [
      {
        action: 'addLineItem',
        productId: product.id,
        variantId: product.masterVariant.id,
        quantity: 1
      }
    ]
  };
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  };

  // const data: Cart = await getCart();
  const cartId = cart.id;

  try {
    const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/carts/${cartId}`;
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export default AddToCart;
