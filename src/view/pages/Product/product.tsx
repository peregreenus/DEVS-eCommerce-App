import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainProps } from '../../../data/types/main-props';
// import { ProductProjectionsData } from '../../../data/types/interfaces/ProductProjectionsData';
import { getProduct } from '../../../data/api/getProduct';
import * as classes from './product.module.css';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import { IProduct } from '../../../data/types/interfaces/product';

// Компонент Product
// eslint-disable-next-line import/prefer-default-export
function Product({ state, setState }: MainProps) {
  const [product, setProduct] = useState<IProduct | null>(null);
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

  return (
    <div>
      <Header state={state} setState={setState} />
      <section className={classes.product}>
        <h2>{product.name.en}</h2>
        <div className={classes.wrapper}>
          <div className={classes.card}>
            {product.masterVariant.images && product.masterVariant.images.length > 0 ? (
              <div>
                <img src={product.masterVariant.images[0].url} alt="product" />
              </div>
            ) : (
              <p>No images available</p>
            )}
          </div>
          <div className={classes.price}>card</div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.description}>{product.description.en}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Product;
