import { IProductInfo } from './product';

export interface CarouselSettings {
  swipe: boolean;
  arrows: boolean;
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

export interface SimpleCarouselProps {
  history: IProductInfo[];
  settings: CarouselSettings;
  // eslint-disable-next-line prettier/prettier
}
