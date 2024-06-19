import { useEffect } from 'react';
import getProducts from '../../../data/api/getProducts';
import { AppFilter } from '../../../data/types/interfaces/SearchPriceFilter';
import { MainProps } from '../../../data/types/main-props';
import { useProductContext } from './ProductContext';

interface FetchProductsProps extends MainProps {
  sorting: string;
  price: AppFilter;
  categoryId: string;
  limit: number;
  offset: number;
}

function FetchProducts({
  sorting,
  price,
  categoryId,
  limit,
  offset,
  setState
}: FetchProductsProps) {
  const { setProducts } = useProductContext();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProducts(sorting, price, categoryId, limit, offset);
        if (fetchedProducts) {
          setProducts(fetchedProducts.results);
          setState((prevState) => ({
            ...prevState,
            productsAmount: fetchedProducts.total
          }));
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting, categoryId, price, offset, setProducts]);

  return null;
}

export default FetchProducts;
