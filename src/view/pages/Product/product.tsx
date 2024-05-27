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

function Product({ state, setState }: MainProps) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const [numImage, setNumImage] = useState<number>(0);
  const [modal, setModal] = useState(false);

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

  return (
    <div>
      <Header state={state} setState={setState} />
      <section className={classes.product}>
        <h2>{product.name.en}</h2>
        <div className={classes.wrapper}>
          <div className={classes.card}>
            <div className={classes.slider}>
              <div
                className={classes.btn}
                onClick={slideLeft}
                onKeyDown={slideLeft}
                role="button"
                tabIndex={0}
                aria-label="left scrool">
                <svg
                  width="80px"
                  height="80px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.75 16.25C13.6515 16.2505 13.5538 16.2313 13.4628 16.1935C13.3718 16.1557 13.2893 16.1001 13.22 16.03L9.72001 12.53C9.57956 12.3894 9.50067 12.1988 9.50067 12C9.50067 11.8013 9.57956 11.6107 9.72001 11.47L13.22 8.00003C13.361 7.90864 13.5285 7.86722 13.6958 7.88241C13.8631 7.89759 14.0205 7.96851 14.1427 8.08379C14.2649 8.19907 14.3448 8.35203 14.3697 8.51817C14.3946 8.68431 14.363 8.85399 14.28 9.00003L11.28 12L14.28 15C14.4205 15.1407 14.4994 15.3313 14.4994 15.53C14.4994 15.7288 14.4205 15.9194 14.28 16.06C14.1353 16.1907 13.9448 16.259 13.75 16.25Z"
                    fill="#000000"
                  />
                </svg>
              </div>
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
              <div
                className={classes.btn}
                onClick={slideRight}
                onKeyDown={slideRight}
                role="button"
                tabIndex={0}
                aria-label="right scrool">
                <svg
                  width="80px"
                  height="80px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.25 16.25C10.1493 16.2466 10.0503 16.2227 9.95921 16.1797C9.86807 16.1367 9.78668 16.0756 9.72001 16C9.57956 15.8594 9.50067 15.6688 9.50067 15.47C9.50067 15.2713 9.57956 15.0806 9.72001 14.94L12.72 11.94L9.72001 8.94002C9.66069 8.79601 9.64767 8.63711 9.68277 8.48536C9.71786 8.33361 9.79933 8.19656 9.91586 8.09322C10.0324 7.98988 10.1782 7.92538 10.3331 7.90868C10.4879 7.89198 10.6441 7.92391 10.78 8.00002L14.28 11.5C14.4205 11.6407 14.4994 11.8313 14.4994 12.03C14.4994 12.2288 14.4205 12.4194 14.28 12.56L10.78 16C10.7133 16.0756 10.6319 16.1367 10.5408 16.1797C10.4497 16.2227 10.3507 16.2466 10.25 16.25Z"
                    fill="#000000"
                  />
                </svg>
              </div>
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
          <div className={classes.price}>
            <sub>{product.masterVariant.prices[0].value.centAmount}</sub>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.description}>{product.description.en}</div>
        </div>
      </section>
      <Modal visible={modal} setVisible={setModal}>
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
      </Modal>
      <Footer />
    </div>
  );
}

export default Product;
