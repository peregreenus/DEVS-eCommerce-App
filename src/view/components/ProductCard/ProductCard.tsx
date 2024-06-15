/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { ProductCardProps } from '../../../data/types/interfaces/productCardProps';
import * as classes from './ProductCard.module.css';
import formatPrice from '../../../data/utils/formatPrice';
import Button from '../common/Button/Button';
// import AddToCart from '../../../data/api/Cart/AddToCart';

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
          __html: product.description.en
        }}
      />
      <span
        className={
          discountedPrice ? `${classes.cardPrice} ${classes.cancelPrice}` : classes.cardPrice
        }>
        {`${formatPrice(product.masterVariant.prices[0].value.centAmount)}`}
      </span>
      {discountedPrice ? (
        <span className={`${classes.cardPrice} ${classes.discountPrice}`}>
          {`${formatPrice(discountedPrice)}`}
        </span>
      ) : (
        ''
      )}
      <Button className={classes.cardBtn} onClick={() => console.log()} />
      {/* <button className={classes.cardBtn} type="button" aria-label="Add To Cart" disabled /> */}
    </div>
  );
}

export default ProductCard;
