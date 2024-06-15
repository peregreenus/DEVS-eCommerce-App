import React from 'react';
import * as classes from './product.module.css';

interface ImageProps {
  index: number;
  imgUrl: string;
  isSelected: boolean;
  onClick: (index: number) => void;
}

function PreviewImageComponent({ index, imgUrl, isSelected, onClick }: ImageProps) {
  const handleClick = () => {
    onClick(index);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`${classes.sliderImgContainer} ${isSelected ? classes.active : ''}`}
      onClick={handleClick}>
      <img className={classes.sliderImg} src={imgUrl} alt="product" />
    </div>
  );
}

export default PreviewImageComponent;
