/* eslint-disable no-nested-ternary */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line no-restricted-globals
import { IProductInfo } from '../../../../data/types/interfaces/product';
import SimpleCarousel from '../Slider/simpleCarousel';
import * as classes from './history.module.css';

interface HistoryComponentProps {
  history: IProductInfo[];
}
function sortHistoryByDate(array: IProductInfo[]): IProductInfo[] {
  return array.slice().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

function calcSlidesToShow() {
  // eslint-disable-next-line no-restricted-globals
  if (history.length < 7) {
    // eslint-disable-next-line no-restricted-globals
    return history.length;
  }
  return 7;
}

const settings = {
  swipe: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: calcSlidesToShow(),
  slidesToScroll: 1,
  className: `${classes.slide}`,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function HistoryComponent({ history }: HistoryComponentProps) {
  const sortedHistory = sortHistoryByDate(history);
  return (
    <div
      style={{
        padding: '1rem',
        width: '90%',
        margin: '0 auto',
        background: 'var(--gray-bg-color)'
      }}>
      <h2 className={classes.title}>You were watching</h2>
      <SimpleCarousel history={sortedHistory} settings={settings} />
    </div>
  );
}

export default HistoryComponent;
