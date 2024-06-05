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
import { MainProps } from '../../../data/types/main-props';
import Filter from '../../components/common/Filter/filter';
import { AppFilter } from '../../../data/types/interfaces/SearchPriceFilter';
import Categories from '../../components/common/Categories/categories';
import getCategories from '../../../data/api/getCategories';
import { ICategory } from '../../../data/types/interfaces/category';

export default function Catalog({ state, setState }: MainProps) {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [price, setPrice] = useState<AppFilter>({
    minPrice: 0,
    maxPrice: 100000000000000
  });
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();
  const goToProduct = (id: string) => {
    navigate(`product/${id}`);
  };

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const fetchedProducts = await getProducts(price, { state, setState });
      if (fetchedProducts) {
        setProducts(fetchedProducts);
        setLoading(false);
        console.log(fetchedProducts);
      }
    }
    async function fetchCategiries() {
      setLoading(true);
      const fetchedCategories = await getCategories();
      if (fetchedCategories) {
        setCategories(fetchedCategories);
        setLoading(false);
        console.log(fetchedCategories);
      }
    }

    fetchCategiries();
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, price]);

  console.log(categories);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Header state={state} setState={setState} />
      <Categories categories={categories} setCategories={setCategories} />
      <Filter price={price} setPrice={setPrice} />

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
