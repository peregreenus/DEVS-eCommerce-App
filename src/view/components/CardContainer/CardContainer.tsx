import React from 'react';
import { IProduct } from '../../../data/types/interfaces/product';
import ProductCard from '../ProductCard/ProductCard';
import NoProductImg from '../../../assets/img/no-product.png';
import * as classes from './cardcontainer.module.css';

interface CardContainesProps {
  products: IProduct[];
  goToProduct: (id: string) => void;
}

function CardContaines({ products, goToProduct }: CardContainesProps) {
  return (
    <div className={classes.cardContainer}>
      {products.length > 0 ? (
        products.map((product: IProduct) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              goToProduct={() => goToProduct(product.id)}
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
