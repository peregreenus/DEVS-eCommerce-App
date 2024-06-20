/* eslint-disable no-nested-ternary */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
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

function calcSlidesToShow(length: number) {
  if (length < 7) {
    return length;
  }
  return 7;
}

const settings = {
  swipe: true,
  dots: true,
  infinite: false,
  speed: 500,
  // eslint-disable-next-line no-restricted-globals
  slidesToShow: calcSlidesToShow(history.length),
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
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
    <div style={{ padding: '1rem', width: '100%', margin: '0 auto' }}>
      <h2 className={classes.title}>You were watching</h2>
      <SimpleCarousel history={sortedHistory} settings={settings} />
    </div>
  );
}

export default HistoryComponent;
