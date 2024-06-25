import React, { useState } from 'react';
import Button from '../common/Button/Button';
import Modal from '../common/modal/modal';
import ArrowLeftIcon from '../common/icons/ArrowLeftIcon';
import ArrowRightIcon from '../common/icons/ArrowRightIcon';
import * as classes from './productmodal.module.css';
import { ProductModalParam } from '../../../data/types/interfaces/productModalParam';
import ViewImages from '../ViewImages/ViewImages';

function ProductModal(param: ProductModalParam) {
  const {
    modal,
    numImage,
    setModal,
    product,
    isImage,
    leftVisible,
    rightVisible,
    slideLeft,
    slideRight,
    modalShow
  } = param;
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);

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
    <Modal visible={modal} setVisible={setModal}>
      {isImage ? (
        <div
          className={classes.modalWrapper}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}>
          {leftVisible ? (
            <Button
              type="button"
              className={`${classes.modalBtn} ${classes.modalBtnLeft}`}
              onClick={() => slideLeft()}>
              <ArrowLeftIcon width="6rem" height="6rem" />
            </Button>
          ) : null}
          <ViewImages
            key={0}
            numImage={numImage}
            onClick={() => modalShow()}
            alt="product"
            product={product}
          />
          <button
            className={classes.btnClose}
            type="button"
            onClick={() => setModal(false)}
            aria-label="Close modal"
          />
          {rightVisible ? (
            <Button
              type="button"
              className={`${classes.modalBtn} ${classes.modalBtnRight}`}
              onClick={() => slideRight()}>
              <ArrowRightIcon width="6rem" height="6rem" />
            </Button>
          ) : null}
        </div>
      ) : null}
    </Modal>
  );
}

export default ProductModal;
