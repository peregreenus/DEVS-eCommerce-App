/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainProps } from '../../../data/types/main-props';
import { getProduct } from '../../../data/api/getProduct';
import * as classes from './product.module.css';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import { IProduct } from '../../../data/types/interfaces/product';
import PreviewImageComponent from './ImageComponent';
import Modal from '../../components/common/modal/modal';
// import MyButton from '../../components/common/Button/MyButton';
import ArrowRightIcon from '../../components/common/other/ArrowRightIcon';
import ArrowLeftIcon from '../../components/common/other/ArrowLeftIcon';
import Button from '../../components/common/Button/Button';
import PriceContainer from './priceContainer';

function Product({ state, setState }: MainProps) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const imgCount: number = product.masterVariant.images.length;
  const isImage = product.masterVariant.images && imgCount > 0;

  function slideLeft() {
    if (numImage > 0) {
      setNumImage(numImage - 1);
    }
  }

  function slideRight() {
    if (numImage < imgCount - 1) {
      setNumImage(numImage + 1);
    }
  }

  const selectImage = (index: number) => {
    setNumImage(index);
  };

  function modalShow() {
    setModal(true);
  }

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const addToCard = () => {
    // eslint-disable-next-line no-console
    console.log('add to card');
  };

  return (
    <div>
      <Header state={state} setState={setState} />
      <section className={classes.product}>
        <h2>{product.name.en}</h2>
        <div className={classes.wrapper}>
          <div className={classes.card}>
            <div className={classes.slider}>
              <Button type="button" className={classes.btn} onClick={() => slideLeft()}>
                <ArrowLeftIcon width="6rem" height="6rem" />
              </Button>
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
              <Button type="button" className={classes.btn} onClick={() => slideRight()}>
                <ArrowRightIcon width="6rem" height="6rem" />
              </Button>
            </div>
            {isImage ? (
              <div className={classes.preview}>
                <img
                  className={classes.previewImg}
                  src={product.masterVariant.images[numImage].url}
                  onKeyDown={() => modalShow()}
                  onClick={() => modalShow()}
                  alt="product"
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                  role="button"
                  tabIndex={0}
                  aria-label="Toggle modal"
                />
              </div>
            ) : (
              <p>No images available</p>
            )}
          </div>
          <PriceContainer
            discounted={product.masterVariant.prices[0].discounted}
            value={product.masterVariant.prices[0].value}
            onClick={() => addToCard()}
          />
        </div>
        <div className={classes.wrapperDescription}>
          <div
            className={`${classes.description} ${showFullDescription ? classes.show : classes.hide}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: product.description.en }}
          />
          <button onClick={toggleDescription} className={classes.readMoreBtn}>
            {showFullDescription ? 'Read less...' : 'Read more...'}
          </button>
        </div>
      </section>
      <Modal visible={modal} setVisible={setModal}>
        <div className={classes.modalWrapper}>
          <Button
            type="button"
            className={`${classes.modalBtn} ${classes.modalBtnLeft}`}
            onClick={() => slideLeft()}>
            <ArrowLeftIcon width="6rem" height="6rem" />
          </Button>
          <img
            className={classes.modalImg}
            src={product.masterVariant.images[numImage].url}
            onKeyDown={() => modalShow()}
            onClick={() => modalShow()}
            alt="product"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            tabIndex={0}
            aria-label="Toggle modal"
          />
          <Button
            type="button"
            className={`${classes.modalBtn} ${classes.modalBtnRight}`}
            onClick={() => slideRight()}>
            <ArrowRightIcon width="6rem" height="6rem" />
          </Button>
        </div>
      </Modal>
      <Footer />
    </div>
  );
}

export default Product;
