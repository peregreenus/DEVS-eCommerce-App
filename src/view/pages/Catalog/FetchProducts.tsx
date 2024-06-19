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

function FetchProducts({ sorting, price, categoryId, state }: FetchProductsProps) {
  const { setProducts } = useProductContext();
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProducts(sorting, price, categoryId);
        if (fetchedProducts) {
          setProducts(fetchedProducts);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting, categoryId, state, price, setProducts]);

  return null;
}

export default FetchProducts;
