/* eslint-disable react/button-has-type */
import React, { ChangeEvent, useState } from 'react';
import * as classes from './filter.module.css';
import { SearchPriceFilter } from '../../../../data/types/interfaces/SearchPriceFilter';

function Filter({ price, setPrice }: SearchPriceFilter) {
  const [minVal, setMinValue] = useState(price.minPrice / 100);
  const [maxVal, setMaxValue] = useState(price.maxPrice / 100);

  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = event.currentTarget.value;
    setMinValue(+newMinPrice);
  };

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = event.currentTarget.value;
    setMaxValue(+newMaxPrice);
  };

  function applyFilter() {
    // setPrice({ minPrice: minValue, maxPrice: maxValue });
    setPrice({ minPrice: minVal * 100, maxPrice: maxVal * 100 });
  }

  return (
    <div className={classes.filter}>
      <sub className={classes.caption}>Filter</sub>
      <div className={classes.wrapper}>
        <div>
          <sub className={classes.label}>Price from</sub>
          <input
            className={classes.field}
            type="text"
            name="minValue"
            value={minVal}
            onChange={handleMinPriceChange}
          />
        </div>
        <div>
          <sub className={classes.label}>to</sub>
          <input
            className={classes.field}
            type="text"
            name="maxVal"
            value={maxVal}
            onChange={handleMaxPriceChange}
          />
        </div>

        <button className={classes.btn} onClick={() => applyFilter()}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filter;
