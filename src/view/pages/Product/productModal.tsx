import React from 'react';
import Button from '../../components/common/Button/Button';
import Modal from '../../components/common/modal/modal';
import ArrowLeftIcon from '../../components/common/other/ArrowLeftIcon';
import ArrowRightIcon from '../../components/common/other/ArrowRightIcon';
import * as classes from './productModal.module.css';
import { ProductModalParam } from '../../../data/types/interfaces/productModalParam';
import ViewImages from './viewImages';

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
  return (
    <Modal visible={modal} setVisible={setModal}>
      {isImage ? (
        <div className={classes.modalWrapper}>
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
