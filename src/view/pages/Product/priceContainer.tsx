import React from 'react';
import * as classes from './product.module.css';
import PriceContainerProps from '../../../data/types/interfaces/priceContainerProps';

function PriceContainer({ discounted, value }: PriceContainerProps) {
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
    </div>
  );
}

export default PriceContainer;
