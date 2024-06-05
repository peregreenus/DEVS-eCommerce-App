/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import * as classes from './categories.module.css';
import CategoriesProps from '../../../../data/types/interfaces/CategoriesProps';

function Categories({ categories, categoryId, setCategoryId }: CategoriesProps) {
  const handleCategoryClick = (id: string) => {
    setCategoryId(id);
  };

  return (
    <ul className={classes.list}>
      <li>
        <button
          onClick={() => handleCategoryClick('')}
          className={
            categoryId === '' ? `${classes.button} ${classes.active}` : `${classes.button}`
          }>
          All categories
        </button>
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            onClick={() => handleCategoryClick(category.id)}
            className={
              categoryId === category.id
                ? `${classes.button} ${classes.active}`
                : `${classes.button}`
            }>
            {category.metaTitle.en}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
