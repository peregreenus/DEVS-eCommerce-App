import React from 'react';
import * as classes from './product.module.css';

interface ImageProps {
  imgUrl: string;
  imgLabel: string;
  setModal: (f: boolean) => void;
}

function PreviewImg({ imgUrl, imgLabel, setModal }: ImageProps) {
  return (
    <div className={classes.preview}>
      <img
        className={classes.previewImg}
        src={imgUrl}
        onKeyDown={() => setModal(true)}
        onClick={() => setModal(true)}
        alt={imgLabel}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        tabIndex={0}
        aria-label="Toggle modal"
      />
    </div>
  );
}

export default PreviewImg;
