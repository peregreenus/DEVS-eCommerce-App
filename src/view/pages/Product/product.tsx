import React, { useEffect, useState } from 'react';
import { MainProps } from '../../../data/types/main-props';
import CTP from '../../../data/types/ctp';
import { getLSToken } from '../../../data/utils/getLS';

// Визначення типу даних продукту
interface ProductData {
  id: string;
  version: number;
  masterData: {
    current: {
      categories: [
        {
          id: string;
          typeId: string;
        }
      ];
      description: {
        en: string;
        ru: string;
      };
      masterVariant: {
        attributes: [];
        id: number;
        images: [
          {
            dimensions: {
              h: number;
              w: number;
            };
            url: string;
          }
        ];
        prices: [
          {
            value: {
              type: string;
              fractionDigits: number;
              centAmount: number;
              currencyCode: string;
            };
            id: string;
          }
        ];
        sku: string;
      };
      name: {
        en: string;
        ru: string;
      };
      slug: {
        en: string;
      };
      variants: [];
      // searchKeywords: {};
    };
    hasStagedChanges: boolean;
    published: boolean;
    staged: {
      categories: [
        {
          id: string;
          typeId: string;
        }
      ];
      description: {
        en: string;
      };
      masterVariant: {
        attributes: [];
        id: number;
        images: [
          {
            dimensions: {
              h: number;
              w: number;
            };
            url: string;
          }
        ];
        prices: [
          {
            value: {
              type: string;
              fractionDigits: number;
              centAmount: number;
              currencyCode: string;
            };
            id: string;
          }
        ];
        sku: string;
      };
      name: {
        en: string;
      };
      slug: {
        en: string;
      };
      variants: [];
      // searchKeywords: {};
    };
  };
  productType: {
    id: string;
    typeId: string;
  };
  taxCategory: {
    id: string;
    typeId: string;
  };
  createdAt: string;
  lastModifiedAt: string;
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
      <h1>{product.id}</h1>
      <h1>{product.masterData.current.name.ru}</h1>
      <p>{product.masterData.current.description.ru}</p>
      {/* <p>{JSON.stringify(product.masterData)}</p> */}
      {/* Відобразіть інші поля продукту */}
    </div>
  );
}
