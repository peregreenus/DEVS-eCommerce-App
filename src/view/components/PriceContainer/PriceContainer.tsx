import React from 'react';
import PriceContainerProps from '../../../data/types/interfaces/priceContainerProps';
import formatPrice from '../../../data/utils/formatPrice';
import * as classes from './PriceContainer.module.css';
import Button from '../common/Button/Button';

function PriceContainer({ discounted, value, inCart, onClick }: PriceContainerProps) {
  return (
    <div className={classes.price}>
      {discounted ? (
        <>
          <div className={classes.priceOld}>{formatPrice(value.centAmount)}</div>
          <div className={classes.priceNew}>{formatPrice(discounted.value.centAmount)}</div>
        </>
      ) : (
        <div className={classes.priceNew}>{formatPrice(value.centAmount)}</div>
      )}
      <Button className={`${classes.buyButton}`} onClick={onClick}>
        {!inCart ? <>Add to cart</> : <>Remove from cart</>}
      </Button>
    </div>
  );
}

export default PriceContainer;
