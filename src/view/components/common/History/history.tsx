/* eslint-disable no-nested-ternary */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { IProductInfo } from '../../../../data/types/interfaces/product';
import SimpleCarousel from '../Slider/simpleCarousel';

interface HistoryComponentProps {
  history: IProductInfo[];
}
function sortHistoryByDate(array: IProductInfo[]): IProductInfo[] {
  return array.slice().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
function duplicateSingleElement(array: IProductInfo[]): IProductInfo[] {
  if (array.length === 1) {
    array.push(array[0], array[0]);
  }
  return array;
}

function removeDuplicatesIfMoreThanThree(array: IProductInfo[]): IProductInfo[] {
  if (array.length > 3) {
    return [...new Set(array)];
  }
  return array;
}

const settings = {
  swipe: true,
  arrows: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

function HistoryComponent({ history }: HistoryComponentProps) {
  const sortedHistory = sortHistoryByDate(history);
  const duplicateHistory = duplicateSingleElement(sortedHistory);
  const historyArr = removeDuplicatesIfMoreThanThree(duplicateHistory);

  return (
    <div style={{ padding: '1rem', width: '90%', margin: '0 auto' }}>
      <SimpleCarousel history={historyArr} settings={settings} />
    </div>
  );
}

export default HistoryComponent;
