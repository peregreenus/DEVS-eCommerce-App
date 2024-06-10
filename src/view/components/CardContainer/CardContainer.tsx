import React from 'react';
import { IProduct } from '../../../data/types/interfaces/product';
import ProductCard from '../ProductCard/ProductCard';
import * as classes from './cardcontainer.module.css';

interface CardContainesProps {
  products: IProduct[];
  goToProduct: (id: string) => void;
}

function CardContaines({ products, goToProduct }: CardContainesProps) {
  return (
    <div className={classes.cardContainer}>
      {products.map((product: IProduct) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            goToProduct={() => goToProduct(product.id)}
          />
        );
      })}
    </div>
  );
}

export default CardContaines;