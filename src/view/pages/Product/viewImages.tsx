/* eslint-disable array-callback-return */
import React from 'react';
import * as classes from './productModal.module.css';
import { IProduct } from '../../../data/types/interfaces/product';

interface ImageProps {
  numImage: number;
  product: IProduct;
  alt: string;
  onClick: () => void;
}

function ViewImages({ numImage, product, alt, onClick }: ImageProps) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className={classes.preview}>
      <div className={classes.lenta} style={{ left: `${-Math.floor(numImage * 85)}vw ` }}>
        {product.masterVariant.images.map((img) => (
          <div className={classes.imgContainer} key={img.url}>
            <img
              className={classes.previewImg}
              src={img.url}
              onClick={() => onClick()}
              onKeyDown={() => onClick()}
              alt={alt}
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

export default ViewImages;
