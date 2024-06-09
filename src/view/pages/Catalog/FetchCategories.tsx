/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import getCategories from '../../../data/api/getCategories';
import { ICategory } from '../../../data/types/interfaces/category';
import { MainProps } from '../../../data/types/main-props';

interface FetchCategoriesProps extends MainProps {
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const FetchCategories: React.FC<FetchCategoriesProps> = ({
  state,
  setState,
  setCategories,
  setLoading
}) => {
  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories = await getCategories({ state, setState });
      if (fetchedCategories) {
        setCategories(fetchedCategories);
        setLoading(false);
      }
    }
    fetchCategories();
  }, [state, setState, setCategories, setLoading]);

  return null;
};

export default FetchCategories;
