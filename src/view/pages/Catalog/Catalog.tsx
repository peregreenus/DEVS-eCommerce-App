/* eslint-disable react/no-danger */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../../data/types/interfaces/product';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import getProducts from '../../../data/api/getProducts';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader';
import * as classes from './Catalog.module.css';
// import getPriceLimits from '../../../data/utils/getPriceLimits';
import searchProducts from '../../../data/api/searchProducts';
import { MainProps } from '../../../data/types/main-props';
import { SearchPriceFilter } from '../../../data/types/interfaces/SearchPriceFilter';

export default function Catalog({ state, setState }: MainProps) {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [priceFilter] = useState<SearchPriceFilter>({
    minPrice: 0,
    maxPrice: 1000000
  });
  // const [limitsPrices, setlimitsPrices] = useState<number[]>([0, 0]);
  const navigate = useNavigate();

  const goToProduct = (id: string) => {
    navigate(`product/${id}`);
  };

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const fetchedProducts = await getProducts(priceFilter, { state, setState });
      if (fetchedProducts) {
        setProducts(fetchedProducts);
        setLoading(false);
        console.log(fetchedProducts);
      }
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, setState]);
  if (products) {
    // const { minPrice, maxPrice } = getPriceLimits(products);
    console.log('searchProducts');
    console.log(searchProducts({ minPrice: 0, maxPrice: 1000000 }));
  }

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Header state={state} setState={setState} />
      <div>filters</div>

      <div className={classes.catalog}>
        <h2>Catalog</h2>
        <div className={classes.cardContainer}>
          {products?.map((product: IProduct) => {
            return <ProductCard key={product.id} product={product} goToProduct={goToProduct} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
