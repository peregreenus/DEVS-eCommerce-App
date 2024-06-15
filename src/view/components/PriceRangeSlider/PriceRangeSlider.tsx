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
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              background: getTrackBackground({
                values,
                colors: ['#ccc', 'var(--accent-color)', '#ccc'],
                min,
                max
              }),
              borderRadius: '4px'
            }}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '24px',
              width: '24px',
              borderRadius: '50%',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA'
            }}>
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: 'var(--accent-color)'
              }}
            />
          </div>
        )}
      />
      <output
        style={{
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          fontSize: '1.5rem',
          fontFamily: 'monospace'
        }}>
        <div>${Math.floor(procentToValue(values[0], realMin, realMax) / 100)}</div>
        <div>${Math.floor(procentToValue(values[1], realMin, realMax) / 100)}</div>
      </output>
    </div>
  );
}

export default PriceRangeSlider;
