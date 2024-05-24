/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { MainProps } from '../../../data/types/main-props';
import CTP from '../../../data/types/ctp';
import { getLSToken } from '../../../data/utils/getLS';
// import { bearerToken, getAnonToken } from '../../../data/api/getToken';
// import { setLSToken } from '../../../data/utils/setLS';

// Визначення типу даних продукту
interface ProductProjectionsData {
  id: string;
  version: number;
  productType: {
    typeId: string;
    id: string;
  };
  name: {
    en: string;
  };
  description: {
    en: string;
  };
  categories: [];
  slug: {
    en: string;
  };
  masterVariant: {
    id: 1;
    prices: [];
    images: [];
    attributes: [
      {
        name: string;
        value: {
          it: string;
          de: string;
          en: string;
        };
      }
    ];
  };
  variants: [];
  searchKeywords: {};
  hasStagedChanges: boolean;
  published: boolean;
  createdAt: string;
  lastModifiedAt: string;
}

// interface ProductData {
//   id: string;
//   version: number;
//   name: {
//     us: string;
//   };
//   masterData: {
//     current: {
//       categories: [
//         {
//           id: string;
//           typeId: string;
//         }
//       ];
//       description: {
//         en: string;
//         ru: string;
//       };
//       masterVariant: {
//         attributes: [];
//         id: number;
//         images: [
//           {
//             dimensions: {
//               h: number;
//               w: number;
//             };
//             url: string;
//           }
//         ];
//         prices: [
//           {
//             value: {
//               type: string;
//               fractionDigits: number;
//               centAmount: number;
//               currencyCode: string;
//             };
//             id: string;
//           }
//         ];
//         sku: string;
//       };
//       name: {
//         en: string;
//         ru: string;
//       };
//       slug: {
//         en: string;
//         ru: string;
//       };
//       variants: [];
//       // searchKeywords: {};
//     };
//     hasStagedChanges: boolean;
//     published: boolean;
//     staged: {
//       categories: [
//         {
//           id: string;
//           typeId: string;
//         }
//       ];
//       description: {
//         en: string;
//         ru: string;
//       };
//       masterVariant: {
//         attributes: [];
//         id: number;
//         images: [
//           {
//             dimensions: {
//               h: number;
//               w: number;
//             };
//             url: string;
//           }
//         ];
//         prices: [
//           {
//             value: {
//               type: string;
//               fractionDigits: number;
//               centAmount: number;
//               currencyCode: string;
//             };
//             id: string;
//           }
//         ];
//         sku: string;
//       };
//       name: {
//         en: string;
//         ru: string;
//       };
//       slug: {
//         en: string;
//         ru: string;
//       };
//       variants: [];
//       // searchKeywords: {};
//     };
//   };
//   productType: {
//     id: string;
//     typeId: string;
//   };
//   taxCategory: {
//     id: string;
//     typeId: string;
//   };
//   createdAt: string;
//   lastModifiedAt: string;
// }

async function getProduct(
  productId: string,
  { state }: MainProps
): Promise<ProductProjectionsData | null> {
  const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/product-projections/${productId}`;
  // eslint-disable-next-line no-console
  console.log(state);
  const BEARER_TOKEN = getLSToken();

  // eslint-disable-next-line no-console
  console.log('BEARER_TOKEN=>', BEARER_TOKEN);

  const headers = new Headers({
    Authorization: `Bearer ${BEARER_TOKEN}`
  });

  let data: ProductProjectionsData | null = null;

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
  const [product, setProduct] = useState<ProductProjectionsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line no-console
  console.log('--------------------');

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const fetchedProduct = await getProduct('fa925d2c-e043-44d8-aff0-e5c810f6111a', {
        state,
        setState
      });
      setProduct(fetchedProduct);
      setLoading(false);
      // eslint-disable-next-line no-console
      console.log('product=>', fetchedProduct);
    }

    fetchProduct();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // eslint-disable-next-line no-console

  return (
    <div>
      <p>{product.id}</p>
      <h1>{product.name.en}</h1>
      <pre>{product.description.en}</pre>
      {/* <p>{JSON.stringify(product.masterData)}</p> */}
      {/* Відобразіть інші поля продукту */}
    </div>
  );
}
