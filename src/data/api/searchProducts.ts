import CTP from '../types/ctp';
import { IProduct } from '../types/interfaces/product';

type SearchFilter = {
  projectKey: string;
  minPrice: number;
  maxPrice: number;
};

export default async function searchProducts({
  minPrice,
  maxPrice
}: SearchFilter): Promise<IProduct[]> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections/search`;
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const body = `filter=variants.price.centAmount:range (${minPrice} to ${maxPrice})`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
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
