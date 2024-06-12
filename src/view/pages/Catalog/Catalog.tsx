/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Loader from '../../components/Loader/Loader';
import * as classes from './Catalog.module.css';
import { MainProps } from '../../../data/types/main-props';
import Filter from '../../components/common/Filter/filter';
import { AppFilter } from '../../../data/types/interfaces/SearchPriceFilter';
import { ICategory } from '../../../data/types/interfaces/category';
import SortBar from '../../components/SortBar/SortBar';
import Categories from '../../components/common/Categories/categories';
import CardContainer from '../../components/CardContainer/CardContainer';
import FetchCategories from './FetchCategories';
import { ProductProvider, useProductContext } from './ProductContext';
import FetchProducts from './FetchProducts';

const CatalogContent: React.FC<MainProps> = ({ state, setState }) => {
  const { products } = useProductContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [sorting, setSorting] = useState<string>('');
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

  return (
    <>
      <Header state={state} setState={setState} />
      <div className={classes.catalogPage}>
        <h2>Catalog</h2>
        <FetchCategories
          state={state}
          setState={setState}
          setCategories={setCategories}
          setLoading={setLoading}
        />
        <FetchProducts
          state={state}
          setState={setState}
          sorting={sorting}
          price={price}
          categoryId={categoryId}
        />

        {loading ? (
          <Loader />
        ) : (
          <div className={classes.wrapper}>
            <aside className={classes.sidebarMenu}>
              <Categories
                categories={categories}
                setCategoryId={setCategoryId}
                categoryId={categoryId}
              />
              <Filter price={price} setPrice={setPrice} />
            </aside>
            <div className={classes.catalog}>
              <SortBar value={sorting} onChange={(e) => setSorting(e.target.value)} />
              {products ? <CardContainer products={products} goToProduct={goToProduct} /> : null}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default function Catalog({ state, setState }: MainProps) {
  return (
    <ProductProvider>
      <CatalogContent state={state} setState={setState} />
    </ProductProvider>
  );
}
