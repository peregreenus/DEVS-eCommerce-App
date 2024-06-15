/* eslint-disable no-console */
import React, { useState } from 'react';
import * as classes from './filter.module.css';
import { SearchPriceFilter } from '../../../../data/types/interfaces/SearchPriceFilter';
import PriceRangeSlider from '../../PriceRangeSlider/PriceRangeSlider';
import { procentToValue } from '../../../../data/utils/priceRangeConv';

function Filter({ price, limit, setPrice }: SearchPriceFilter) {
  const [values, setValues] = useState([0, 100]);

  function applyFilter(): void {
    setPrice({
      min: procentToValue(values[0], limit.min, limit.max),
      max: procentToValue(values[1], limit.min, limit.max)
    });
    console.log('price', price);
  }

  function resetFilter(): void {
    setPrice({ min: limit.min, max: limit.max });
    setValues([0, 100]);
  }

  return (
    <div className={classes.filter}>
      <sub className={classes.caption}>Filter</sub>
      <div className={classes.wrapper}>
        <PriceRangeSlider
          realMin={limit.min}
          realMax={limit.max}
          step={1}
          values={values}
          setValues={setValues}
        />

        <button type="button" className={classes.btn} onClick={() => applyFilter()}>
          Apply
        </button>
        <button type="button" className={classes.btn} onClick={() => resetFilter()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Filter;
