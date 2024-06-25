/* eslint-disable array-callback-return */
import React from 'react';
import * as classes from './ribbonImages.module.css';
import { IProduct } from '../../../data/types/interfaces/product';

interface ImageProps {
  imgCount: number;
  numImage: number;
  product: IProduct;
  setModal: (f: boolean) => void;
}

export default function RibbonImages({ imgCount, numImage, product, setModal }: ImageProps) {
  return (
    <div className={classes.ribbonContainer} style={{ minWidth: `${imgCount * 100}% ` }}>
      <div
        className={classes.ribbon}
        style={{ marginLeft: `${-Math.floor((100 / imgCount) * numImage)}%` }}>
        {product.masterVariant.images.map((img) => (
          <div className={classes.ribbonImgContainer} key={img.url}>
            <div className={classes.ribbonImg}>
              <img
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
          </div>
        ))}
      </div>
    </div>
  );
}

// left: `${-Math.floor(100 / (numImage + 1))}%} `,
