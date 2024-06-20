/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';
import * as classes from './simpleSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';
import { SimpleCarouselProps } from '../../../../data/types/interfaces/SimpleCarouselProps';

export default function SimpleCarousel({ history, settings }: SimpleCarouselProps) {
  return (
    <Slider className={classes.container} {...settings}>
      {history.map((item) => (
        <div className={classes.imgBlock} key={item.id}>
          <Link to={`/catalog/product/${item.id}`}>
            <div className={classes.img} style={{ backgroundImage: `url('${item.image}')` }} />
            <div className={classes.title}>{item.name}</div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
