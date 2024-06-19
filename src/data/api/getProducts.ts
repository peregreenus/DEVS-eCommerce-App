import CTP from '../types/ctp';
import { AppFilter } from '../types/interfaces/SearchPriceFilter';
import { IProduct } from '../types/interfaces/product';
import { getLSToken, getLSAnonToken } from '../utils/getLS';

interface ProductResponse {
  count: number;
  limit: number;
  offset: number;
  results: IProduct[];
  total: number;
}

async function getProducts(
  sortingType: string,
  { min, max }: AppFilter,
  categoryId: string,
  limit: number,
  offset: number
): Promise<ProductResponse | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections/search`;
  const token = getLSToken();
  const BEARER_TOKEN = token || getLSAnonToken();

  const params = new URLSearchParams();
  params.append('filter', `variants.price.centAmount:range (${min} to ${max})`);
  const paramsCat = new URLSearchParams();
  paramsCat.append('filter', `categories.id:"${categoryId}"`);

  if (sortingType) params.append('sort', `${sortingType}`);

  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  const fullUrl =
    categoryId === ''
      ? `${url}?limit=${limit}&offset=${offset}&${params.toString()}`
      : `${url}?limit=${limit}&offset=${offset}&${paramsCat.toString()}&${params.toString()}`;

  try {
    const response = await fetch(fullUrl, { method: 'GET', headers });
    const productsData = await response.json();

    return productsData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getProducts;
