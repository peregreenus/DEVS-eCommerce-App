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
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: Math.min(2, calcSlidesToShow()),
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: Math.min(1, calcSlidesToShow()),
        slidesToScroll: 1
      }
    }
  ]
};

function HistoryComponent({ history }: HistoryComponentProps) {
  const sortedHistory = sortHistoryByDate(history);
  return (
    <div style={{ padding: '1rem', width: '90%', margin: '0 auto' }}>
      <h2 className={classes.title}>You were watching</h2>
      <SimpleCarousel history={sortedHistory} settings={settings} />
    </div>
  );
}

export default HistoryComponent;
