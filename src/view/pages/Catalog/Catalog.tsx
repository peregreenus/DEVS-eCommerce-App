/* eslint-disable react/jsx-no-bind */
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
  const [categoryId, setCategoryId] = useState<string>('');
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();
  const goToProduct = (id: string) => {
    navigate(`product/${id}`);
  };

  useEffect(() => {
    async function fetchCategoriesAndProducts() {
      setLoading(true);
      try {
        const fetchedCategories = await getCategories({ state, setState });
        if (fetchedCategories) {
          setCategories(fetchedCategories);
          console.log(fetchedCategories);

          const fetchedProducts = await getProducts(price, categoryId, { state, setState });
          if (fetchedProducts) {
            setProducts(fetchedProducts);
            console.log(fetchedProducts);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoriesAndProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, categoryId]);

  return loading ? (
    <>
      <Header state={state} setState={setState} />
      <Loader />
      <Footer />
    </>
  ) : (
    <div>
      <Header state={state} setState={setState} />
      <Categories categories={categories} setCategoryId={setCategoryId} categoryId={categoryId} />
      <Filter price={price} setPrice={setPrice} />

      <div className={classes.catalog}>
        <h2>Catalog</h2>
        <Filter price={price} setPrice={setPrice} />
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
