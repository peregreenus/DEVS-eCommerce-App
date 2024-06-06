/* eslint-disable no-console */
import CTP from '../types/ctp';
import { AppFilter } from '../types/interfaces/SearchPriceFilter';
import { IProduct } from '../types/interfaces/product';
import { MainProps } from '../types/main-props';
import { getLSToken, getLSAnonToken } from '../utils/getLS';

async function getProducts(
  sortingType: string,
  { minPrice, maxPrice }: AppFilter,
  categoryId: string,
  { state }: MainProps
): Promise<IProduct[] | null> {
  // const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections?limit=42`;
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections/search`;
  const token = getLSToken();
  const BEARER_TOKEN = token || getLSAnonToken();
  console.log(`token => ${BEARER_TOKEN}`, state);

  const params = new URLSearchParams();
  params.append('filter', `variants.price.centAmount:range (${minPrice} to ${maxPrice})`);
  const paramsCat = new URLSearchParams();
  paramsCat.append('filter', `categories.id:"${categoryId}"`);

  if (sortingType) params.append('sort', `${sortingType}`);

  console.log(`variants.scopedPrice.currentValue.centAmount:range (${minPrice} to ${maxPrice})`);

  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  const fullUrl =
    categoryId === ''
      ? `${url}?limit=42&${params.toString()}`
      : `${url}?limit=42&${paramsCat.toString()}&${params.toString()}`;

  try {
    const response = await fetch(fullUrl, { method: 'GET', headers });
    const productsData = await response.json();
    return productsData.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getProducts;
