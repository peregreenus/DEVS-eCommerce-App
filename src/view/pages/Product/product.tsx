import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainProps } from '../../../data/types/main-props';
import { ProductProjectionsData } from '../../../data/types/interfaces/ProductProjectionsData';
import { getProduct } from '../../../data/api/getProduct';

// Компонент Product
// eslint-disable-next-line import/prefer-default-export
export function Product({ state, setState }: MainProps) {
  const [product, setProduct] = useState<ProductProjectionsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // const { productId } = useParams();
  // eslint-disable-next-line no-console
  console.log('--------------------');
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const fetchedProduct = await getProduct(id, {
        state,
        setState
      });
      setProduct(fetchedProduct);
      setLoading(false);
      // eslint-disable-next-line no-console
      console.log('product=>', fetchedProduct);
    }

    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {/* <p>{productId}</p> */}
      <h1>{product.name.en}</h1>
      <pre>{product.description.en}</pre>
      {/* <p>{JSON.stringify(product.masterData)}</p> */}
      {/* Відобразіть інші поля продукту */}
    </div>
  );
}
