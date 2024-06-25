// eslint-disable-next-line import/no-extraneous-dependencies
import { Settings } from 'react-slick';
import { IProductInfo } from './product';

export interface SimpleCarouselProps {
  history: IProductInfo[];
  settings: Settings;
}
