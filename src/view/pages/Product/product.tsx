/* eslint-disable react/jsx-no-bind */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainProps } from '../../../data/types/main-props';
import getProduct from '../../../data/api/getProduct';
import * as classes from './product.module.css';
import Header from '../../components/common/header/header';
import { IProduct } from '../../../data/types/interfaces/product';
import PreviewImageComponent from './ImageComponent';
import ArrowRightIcon from '../../components/common/other/ArrowRightIcon';
import ArrowLeftIcon from '../../components/common/other/ArrowLeftIcon';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/common/Button/Button';
import PriceContainer from './priceContainer';
import noImage from '../../../assets/img/no-image.png';
import ProductModal from './productModal';
import Notfound from '../NotFound/not-found';
import PreviewImages from './previewImages';

function Product({ state, setState }: MainProps) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [leftVisible, setLeftVisible] = useState<boolean>(false);
  const [rightVisible, setRightVisible] = useState<boolean>(true);
  const { id } = useParams();

  const [numImage, setNumImage] = useState<number>(0);
  const [modal, setModal] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const fetchedProduct = await getProduct(id, {
        state,
        setState
      });
      setProduct(fetchedProduct);
      setLoading(false);
      if (fetchedProduct && fetchedProduct.masterVariant.images.length > 0) {
        setNumImage(0);
      }
      // eslint-disable-next-line no-console
      console.log('product=>', fetchedProduct);
    }

    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, state, setState]);

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

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log('add to cart');
  };

  return (
    <div>
      <Header state={state} setState={setState} />
      <section className={classes.product}>
        <h2>{product.name.en}</h2>
        <div className={classes.wrapper}>
          <div className={classes.card}>
            {isImage ? (
              <div className={classes.slider}>
                {leftVisible ? (
                  <Button type="button" className={classes.btn} onClick={() => slideLeft()}>
                    <ArrowLeftIcon width="6rem" height="6rem" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    className={`${classes.btn} ${classes.btnDisabled}`}
                    disabled>
                    <ArrowLeftIcon width="6rem" height="6rem" fill="gray" />
                  </Button>
                )}

                <div className={classes.prevWrapper}>
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
                  <Button type="button" className={classes.btn} onClick={() => slideRight()}>
                    <ArrowRightIcon width="6rem" height="6rem" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    className={`${classes.btn} ${classes.btnDisabled}`}
                    disabled>
                    <ArrowRightIcon width="6rem" height="6rem" fill="gray" />
                  </Button>
                )}
              </div>
            ) : null}

            {isImage ? (
              <PreviewImages
                numImage={numImage}
                product={product}
                setModal={() => setModal(true)}
              />
            ) : (
              <div className={classes.preview}>
                <img className={classes.previewNoimage} src={noImage} alt="no aviable" />
              </div>
            )}
          </div>
          <PriceContainer
            discounted={product.masterVariant.prices[0].discounted}
            value={product.masterVariant.prices[0].value}
            onClick={() => addToCart()}
          />
        </div>
        <div className={classes.wrapperDescription}>
          <div
            className={`${classes.description} ${showFullDescription ? classes.show : classes.hide}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: product.description.en }}
          />
          <button onClick={toggleDescription} className={classes.readMoreBtn} type="button">
            {showFullDescription ? 'Read less...' : 'Read more...'}
          </button>
        </div>
      </section>
      {isImage ? (
        <ProductModal
          modal={modal}
          setModal={setModal}
          imagesUrl={product.masterVariant.images[numImage].url}
          isImage={isImage}
          leftVisible={leftVisible}
          rightVisible={rightVisible}
          slideLeft={slideLeft}
          slideRight={slideRight}
          modalShow={() => setModal(true)}
        />
      ) : null}
    </div>
  );
}

export default Product;
