/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import * as classes from './categories.module.css';
import { ICategory } from '../../../../data/types/interfaces/category';

// Якщо ви використовуєте новий тип CategoriesProps
interface CategoriesProps {
  categories: ICategory[];
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
  categoryId: string;
}

function Categories({ categories, setCategoryId }: CategoriesProps) {
  const handleCategoryClick = (id: string) => {
    setCategoryId(id);
  };

  return (
    <ul className={classes.list}>
      <li>
        <button onClick={() => handleCategoryClick('*')} className={classes.button}>
          All categories
        </button>
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <button onClick={() => handleCategoryClick(category.id)} className={classes.button}>
            {category.metaTitle.en}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
