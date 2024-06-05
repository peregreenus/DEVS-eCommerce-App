import React from 'react';
import * as classes from './categories.module.css';
import { CategoryFilter } from '../../../../data/types/interfaces/category';

function Categories({ categories }: CategoryFilter) {
  return (
    <ul className={classes.list}>
      <li>All categories</li>
      {categories.map((category) => (
        <li>{category.name.en}</li>
      ))}
    </ul>
  );
}

export default Categories;
