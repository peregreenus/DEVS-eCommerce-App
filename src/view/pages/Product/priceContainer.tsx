import React from 'react';
import * as classes from './product.module.css';
import PriceContainerProps from '../../../data/types/interfaces/priceContainerProps';
import Button from '../../components/common/Button/Button';

function formatted(amount: number) {
  const formattedAmount: string = (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return formattedAmount;
}
function PriceContainer({ discounted, value, onClick }: PriceContainerProps) {
  return (
    <div className={classes.price}>
      {discounted ? (
        <>
          <div className={classes.priceOld}>{formatted(value.centAmount)}</div>
          <div className={classes.priceNew}>{formatted(discounted.value.centAmount)}</div>
        </>
      ) : (
        <div className={classes.priceNew}>{formatted(value.centAmount)}</div>
      )}
      <Button className={`${classes.buyButton}`} onClick={onClick}>
        Add to cart
      </Button>
    </div>
  );
}

export default PriceContainer;
