import React, { ChangeEvent } from 'react';
import * as classes from './filter.module.css';
import { SearchPriceFilter } from '../../../../data/types/interfaces/SearchPriceFilter';

function Filter({ price, setPrice }: SearchPriceFilter) {
  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = event.currentTarget.value;
    setPrice((prevPrice) => ({ ...prevPrice, minPrice: parseInt(newMinPrice, 10) }));
  };

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = event.currentTarget.value;
    setPrice((prevPrice) => ({ ...prevPrice, maxPrice: parseInt(newMaxPrice, 10) }));
  };

  return (
    <div className={classes.filter}>
      <sub className={classes.caption}>Filter</sub>
      <div className={classes.wrapper}>
        <sub className={classes.label}>Price from</sub>
        <input
          className={classes.field}
          type="text"
          name="minValue"
          value={price.minPrice}
          onChange={handleMinPriceChange}
        />
        <sub className={classes.label}>to</sub>
        <input
          className={classes.field}
          type="text"
          name="maxValue"
          value={price.maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
}

export default Filter;
