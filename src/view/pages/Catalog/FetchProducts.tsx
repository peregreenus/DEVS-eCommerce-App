import { useEffect } from 'react';
import getProducts from '../../../data/api/getProducts';
import { AppFilter } from '../../../data/types/interfaces/SearchPriceFilter';
import { MainProps } from '../../../data/types/main-props';
import { useProductContext } from './ProductContext';

interface FetchProductsProps extends MainProps {
  sorting: string;
  price: AppFilter;
  categoryId: string;
}

function FetchProducts({ sorting, price, categoryId, state, setState }: FetchProductsProps) {
  const { setProducts } = useProductContext();

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getProducts(sorting, price, categoryId, { state, setState });
      if (fetchedProducts) {
        setProducts(fetchedProducts);
      }
    }
    fetchProducts();
  }, [sorting, price, categoryId, state, setState, setProducts]);

  return null;
}

export default FetchProducts;
