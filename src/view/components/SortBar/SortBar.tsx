import React from 'react';
import { SortBarProps } from '../../../data/types/interfaces/sortBarProps';
import * as classes from './SortBar.module.css';

function SortBar({ value, onChange }: SortBarProps) {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="sort">
        Sort by:&nbsp;
        <select className={classes.select} id="sort" value={value} onChange={onChange}>
          <option value="">none</option>
          <option value="name.en asc">name(a-z)</option>
          <option value="name.en desc">name(z-a)</option>
          <option value="price asc">price(a-z)</option>
          <option value="price desc">price(z-a)</option>
        </select>
      </label>
    </div>
  );
}

export default SortBar;
