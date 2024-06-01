import React from 'react';
import * as classes from './product.module.css';
import PriceContainerProps from '../../../data/types/interfaces/priceContainerProps';
import Button from '../../components/common/Button/Button';

function PriceContainer({ discounted, value, onClick }: PriceContainerProps) {
  return (
    <div className={classes.price}>
      {discounted ? (
        <>
          <div className={classes.priceOld}>{value.centAmount}</div>
          <div className={classes.priceNew}>{discounted.value.centAmount}</div>
        </>
      ) : (
        <div className={classes.priceNew}>{value.centAmount}</div>
      )}
      <Button className={`${classes.buyButton}`} onClick={onClick}>
        Add to cart
      </Button>
    </div>
  );
}

export default PriceContainer;
