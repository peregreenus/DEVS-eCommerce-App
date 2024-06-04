/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import * as classes from './filter.module.css';
import { SearchPriceFilter } from '../../../../data/types/interfaces/SearchPriceFilter';

function Filter(priceFilter: SearchPriceFilter, setPriceFilter: () => void) {
  return (
    <div className={classes.filter}>
      <sub className={classes.caption}>Filter</sub>
      <sub>Price from</sub>
      <input type="text" name="minValue" value={priceFilter.minPrice} />
      <sub>to</sub>
      <input type="text" name="maxValue" value={priceFilter.maxPrice} />
    </div>
  );
}

export default Filter;
