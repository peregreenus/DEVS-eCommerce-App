/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Range, getTrackBackground } from 'react-range';
import * as classes from './price-range-slider.module.css';
import { procentToValue } from '../../../data/utils/priceRangeConv';

interface PriceRangeSliderProps {
  realMin: number;
  realMax: number;
  values: number[];
  step: number;
  setValues: (values: number[]) => void;
}

function PriceRangeSlider({ step, realMin, realMax, values, setValues }: PriceRangeSliderProps) {
  const min: number = 0;
  const max: number = 100;
  const handleChange = (value: number[]) => {
    setValues(value);
  };

  return (
    <div className={classes.priceRangeSlider}>
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className={classes.track}
            style={{
              ...props.style,
              background: getTrackBackground({
                values,
                colors: ['#ccc', 'var(--accent-color)', '#ccc'],
                min,
                max
              })
            }}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className={classes.thumb}>
            <div className={classes.thumbInner} />
          </div>
        )}
      />
      <output className={classes.output}>
        <div>${Math.floor(procentToValue(values[0], realMin, realMax) / 100)}</div>
        <div>${Math.floor(procentToValue(values[1], realMin, realMax) / 100)}</div>
      </output>
    </div>
  );
}

export default PriceRangeSlider;
