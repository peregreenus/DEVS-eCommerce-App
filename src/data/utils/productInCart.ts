import getCart from '../api/Cart/GetCart';
import { IProduct } from '../types/interfaces/product';
import { getLSCart } from './getLS';

interface LineItemProp {
  id: string;
  productId: string;
}

async function productInCart(product: IProduct | null) {
  if (!product) return false;
  const cartId: string | null = getLSCart();
  if (cartId) {
    const cart = await getCart();
    if (cart.lineItems.some((item: LineItemProp) => item.productId === product.id)) {
      return true;
    }
  }
  return false;
}

export default productInCart;
