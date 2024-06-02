import React from 'react';
import Button from '../../components/common/Button/Button';
import Modal from '../../components/common/modal/modal';
import ArrowLeftIcon from '../../components/common/other/ArrowLeftIcon';
import ArrowRightIcon from '../../components/common/other/ArrowRightIcon';
import * as classes from './product.module.css';
import { ProductModalParam } from '../../../data/types/interfaces/productModalParam';

function ProductModal(param: ProductModalParam) {
  const { modal, setModal, imagesUrl, isImage, slideLeft, slideRight, modalShow } = param;
  return (
    <Modal visible={modal} setVisible={setModal}>
      {isImage ? (
        <div className={classes.modalWrapper}>
          <Button
            type="button"
            className={`${classes.modalBtn} ${classes.modalBtnLeft}`}
            onClick={() => slideLeft()}>
            <ArrowLeftIcon width="6rem" height="6rem" />
          </Button>
          <img
            className={classes.modalImg}
            src={imagesUrl}
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
      ) : null}
    </Modal>
  );
}

export default ProductModal;
