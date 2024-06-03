/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { ProductCardProps } from '../../../data/types/interfaces/productCardProps';
import * as classes from './ProductCard.module.css';

function ProductCard({ product, goToProduct }: ProductCardProps) {
  const discountedPrice = product.masterVariant.prices[0].discounted?.value.centAmount;

  return (
    <div id={product.id} className={classes.card} onClick={() => goToProduct(product.id)}>
      <div className={classes.imageWrapper}>
        <img
          className={classes.cardImage}
          src={product.masterVariant.images[0].url}
          alt={product.name.en}
        />
      </div>
      <h4 className={classes.cardTitle}>{product.name.en}</h4>
      <div
        className={classes.cardDesc}
        dangerouslySetInnerHTML={{
          __html: product.description.en.split(';').join(', ')
        }}
      />
      <span
        className={
          discountedPrice ? `${classes.cardPrice} ${classes.cancelPrice}` : classes.cardPrice
        }>
        {`$${product.masterVariant.prices[0].value.centAmount}`}
      </span>
      {discountedPrice ? (
        <span className={`${classes.cardPrice} ${classes.discountPrice}`}>
          {`$${discountedPrice}`}
        </span>
      ) : (
        ''
      )}
    </div>
  );
}

export default ProductCard;
