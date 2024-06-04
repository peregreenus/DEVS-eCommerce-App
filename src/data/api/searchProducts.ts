import CTP from '../types/ctp';
import { SearchPriceFilter } from '../types/interfaces/SearchPriceFilter';
import { IProduct } from '../types/interfaces/product';
import { getLSAnonToken, getLSToken } from '../utils/getLS';

export default async function searchProducts({
  minPrice,
  maxPrice
}: SearchPriceFilter): Promise<IProduct[]> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections/search`;
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();
  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  const params = new URLSearchParams();
  params.append('filter', `variants.price.centAmount:range (${minPrice} to ${maxPrice})`);
  // eslint-disable-next-line no-console
  console.log(`variants.scopedPrice.currentValue.centAmount:range (${minPrice} to ${maxPrice})`);

  const fullUrl = `${url}?${params.toString()}`;

  try {
    const response = await fetch(fullUrl, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // eslint-disable-next-line no-console
    console.log(data.results);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// const projectKey = 'your_project_key';
// const minPrice = 1000;
// const maxPrice = 2000;

// searchProducts({ projectKey, minPrice, maxPrice })
//   .then((data) => {
//     console.log('data:', data);
//   })
//   .catch((error) => {
//     console.error('error:', error);
//   });
