import { ICart } from '../../types/interfaces/ICart';
import { IProduct } from '../../types/interfaces/product';
import getProduct from '../getProduct';
import AddToCart from './AddToCart';
import getCart from './GetCart';

async function isProductInCart(productId: string): Promise<boolean> {
  const userCart: ICart = await getCart();
  return userCart.lineItems.some((lineItem) => lineItem.productId === productId);
}

function mergeAnonCartsToUser(anonCart: ICart) {
  const { lineItems } = anonCart;
  lineItems.map(async (lineItem) => {
    const product: IProduct | null = await getProduct(lineItem.productId);
    if (product) {
      if (await isProductInCart(lineItem.productId)) {
        await AddToCart(product, lineItem.quantity);
      }
    }
  });
}

export default mergeAnonCartsToUser;
