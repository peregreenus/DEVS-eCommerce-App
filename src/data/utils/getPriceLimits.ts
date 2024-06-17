import { IProduct } from '../types/interfaces/product';

function getPriceLimits(products: IProduct[]) {
  let minPrice = Infinity;
  let maxPrice = -Infinity;
  if (products) {
    products.forEach((product) => {
      const allVariants = [product.masterVariant, ...product.variants];
      allVariants.forEach((variant) => {
        variant.prices.forEach(
          (price: { value: { centAmount: number; fractionDigits: number } }) => {
            const priceValue = price.value.centAmount / 10 ** price.value.fractionDigits;
            if (priceValue < minPrice) minPrice = priceValue;
            if (priceValue > maxPrice) maxPrice = priceValue;
          }
        );
      });
    });
  }

  return [minPrice, maxPrice];
}

export default getPriceLimits;
