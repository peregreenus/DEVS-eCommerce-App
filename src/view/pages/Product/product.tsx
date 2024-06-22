/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainProps } from '../../../data/types/main-props';
import getProduct from '../../../data/api/getProduct';
import Header from '../../components/common/header/header';
import { IProduct } from '../../../data/types/interfaces/product';
import PreviewImageComponent from './ImageComponent';
import ArrowRightIcon from '../../components/common/icons/ArrowRightIcon';
import ArrowLeftIcon from '../../components/common/icons/ArrowLeftIcon';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/common/Button/Button';
import noImage from '../../../assets/img/no-image.png';
import Notfound from '../NotFound/not-found';
import ProductModal from '../../components/ProductModal/ProductModal';
import PriceContainer from '../../components/PriceContainer/PriceContainer';
import * as classes from './product.module.css';
import AddToCart from '../../../data/api/Cart/AddToCart';
import RemoveFromCart from '../../../data/api/Cart/RemoveFromCart';
import productInCart from '../../../data/utils/productInCart';
import HistoryComponent from '../../components/common/History/history';
import Footer from '../../components/common/footer/footer';
import RibbonImages from '../../components/RibbonImages/ribbonImages';

function Product({ state, setState }: MainProps) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [leftVisible, setLeftVisible] = useState<boolean>(false);
  const [rightVisible, setRightVisible] = useState<boolean>(true);
  const { id } = useParams();

  const [numImage, setNumImage] = useState<number>(0);
  const [modal, setModal] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const fetchedProduct = await getProduct(id);

      setProduct(fetchedProduct);
      setLoading(false);
      if (fetchedProduct && fetchedProduct.masterVariant.images.length > 0) {
        setNumImage(0);
      }
      setInCart(await productInCart(fetchedProduct));
    }

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      setState((prevState) => {
        const newHistory = [...prevState.history];
        const newEntry = {
          id: product.id,
          name: product.name.en,
          image: product.masterVariant.images[0].url,
          date: new Date(),
          productData: product
        };
        const existingIndex = newHistory.findIndex((entry) => entry.id === product.id);
        if (existingIndex !== -1) {
          newHistory[existingIndex].date = new Date();
        } else {
          newHistory.push(newEntry);
        }
        newHistory.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return {
          ...prevState,
          history: newHistory
        };
      });
    }
  }, [product, setState]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <Notfound state={state} setState={setState} />;
  }

  const imgCount: number = product.masterVariant.images.length;
  const isImage = product.masterVariant.images && imgCount > 0;

  const selectImage = (index: number) => {
    setNumImage(index);
    setLeftVisible(index !== 0);
    setRightVisible(index < imgCount - 1);
  };

  function slideLeft() {
    if (numImage > 0) {
      selectImage(numImage - 1);
    }
  }

  function slideRight() {
    if (numImage < imgCount - 1) {
      selectImage(numImage + 1);
    }
  }

  const addToCart = async () => {
    if (!inCart) {
      await AddToCart(product);
      setInCart(true);
    } else {
      await RemoveFromCart(product);
      setInCart(false);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      slideRight();
    }

    if (touchEndX - touchStartX > 50) {
      slideLeft();
    }
  };

  return (
    <div>
      <Header state={state} setState={setState} />
      <section className={classes.product}>
        <h2>{product.name.en}</h2>
        <div className={classes.wrapper}>
          <div className={classes.card}>
            {isImage ? (
              <div
                className={classes.slider}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}>
                {leftVisible ? (
                  <Button type="button" className={classes.sliderBtn} onClick={() => slideLeft()}>
                    <ArrowLeftIcon width="6rem" height="6rem" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    className={`${classes.sliderBtn} ${classes.sliderBtnDisabled}`}
                    disabled>
                    <ArrowLeftIcon width="6rem" height="6rem" fill="gray" />
                  </Button>
                )}
                <div className={classes.sliderWrapper}>
                  {product.masterVariant.images.map((img, index) => (
                    <PreviewImageComponent
                      key={img.url}
                      index={0}
                      isSelected={numImage === index}
                      onClick={() => selectImage(index)}
                      imgUrl={img.url}
                    />
                  ))}
                </div>
                {rightVisible ? (
                  <Button type="button" className={classes.sliderBtn} onClick={() => slideRight()}>
                    <ArrowRightIcon width="6rem" height="6rem" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    className={`${classes.sliderBtn} ${classes.sliderBtnDisabled}`}
                    disabled>
                    <ArrowRightIcon width="6rem" height="6rem" fill="gray" />
                  </Button>
                )}
              </div>
            ) : null}
            <div className={classes.preview}>
              {isImage ? (
                <RibbonImages
                  numImage={numImage}
                  imgCount={imgCount}
                  product={product}
                  setModal={() => setModal(true)}
                />
              ) : (
                <img className={classes.previewNoimage} src={noImage} alt="no aviable" />
              )}
            </div>
          </div>
          <div className={classes.priceContainer}>
            <PriceContainer
              product={product}
              htmlContent={product.description.en}
              discounted={product.masterVariant.prices[0].discounted}
              value={product.masterVariant.prices[0].value}
              inCart={inCart}
              onClick={() => addToCart()}
            />
          </div>
        </div>
      </section>
      {isImage ? (
        <ProductModal
          product={product}
          modal={modal}
          setModal={setModal}
          imagesUrl={product.masterVariant.images[numImage].url}
          isImage={isImage}
          leftVisible={leftVisible}
          rightVisible={rightVisible}
          slideLeft={slideLeft}
          slideRight={slideRight}
          modalShow={() => setModal(true)}
          numImage={numImage}
        />
      ) : null}
      <HistoryComponent history={state.history} />
      <Footer />
    </div>
  );
}

export default Product;
