/* eslint-disable array-callback-return */
import React from 'react';
import * as classes from './product.module.css';
import { IProduct } from '../../../data/types/interfaces/product';

interface ImageProps {
  numImage: number;
  product: IProduct;
  setModal: (f: boolean) => void;
}

function PreviewImages({ numImage, product, setModal }: ImageProps) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className={classes.preview}>
      <div className={classes.lenta} style={{ left: `${-Math.floor(numImage * 100)}vw ` }}>
        {product.masterVariant.images.map((img) => (
          <div className={classes.imgContainer}>
            <img
              className={classes.previewImg}
              src={img.url}
              onKeyDown={() => setModal(true)}
              onClick={() => setModal(true)}
              alt={img.label}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role="button"
              tabIndex={0}
              aria-label="Toggle modal"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviewImages;
