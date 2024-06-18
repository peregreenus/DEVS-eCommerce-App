import React from 'react';
import { IProduct } from '../../../data/types/interfaces/product';
import ProductCard from '../ProductCard/ProductCard';
import NoProductImg from '../../../assets/img/no-product.png';
import * as classes from './cardcontainer.module.css';
import { AppState } from '../../../data/types/main-props';

interface CardContainesProps {
  products: IProduct[];
  goToProduct: (id: string) => void;
  // eslint-disable-next-line react/no-unused-prop-types
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

function CardContaines({ products, goToProduct, setState }: CardContainesProps) {
  return (
    <div className={classes.cardContainer}>
      {products.length > 0 ? (
        products.map((product: IProduct) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              goToProduct={() => goToProduct(product.id)}
              setState={setState}
            />
          );
        })
      ) : (
        <div className={classes.noProduct}>
          <img src={NoProductImg} alt="no products" />
          <h2>NO PRODUCTS FOUND</h2>
        </div>
      )}
    </div>
  );
}

export default CardContaines;
