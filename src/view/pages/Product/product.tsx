import React, { useEffect, useState } from 'react';
import { MainProps } from '../../../data/types/main-props';
import CTP from '../../../data/types/ctp';
import { getLSToken } from '../../../data/utils/getLS';

// Визначення типу даних продукту
interface ProductData {
  id: string;
  name: string;
  description: string;
  // Додайте інші поля за потреби
}

async function getProduct(productId: string, { state }: MainProps): Promise<ProductData | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/products/${productId}`;
  // eslint-disable-next-line no-console
  console.log(state);
  const BEARER_TOKEN = getLSToken();
  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  let data: ProductData | null = null;

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    data = await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
  }
  return data;
}

// Компонент Product
// eslint-disable-next-line import/prefer-default-export
export function Product({ state, setState }: MainProps) {
  // eslint-disable-next-line no-console
  console.log('Sdddddd', state);

  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const fetchedProduct = await getProduct('5484cdbf-c8c5-408a-8ba4-8ba32ff52cdc', {
        state,
        setState
      });
      setProduct(fetchedProduct);
      setLoading(false);
      // eslint-disable-next-line no-console
      console.log('product=>', fetchedProduct);
    }

    fetchProduct();
  }, [state, setState]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Відобразіть інші поля продукту */}
    </div>
  );
}
