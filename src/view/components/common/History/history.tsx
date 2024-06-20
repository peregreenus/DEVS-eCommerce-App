/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IProductInfo } from '../../../../data/types/interfaces/product';
import * as classes from './history.module.css';
import Button from '../Button/Button';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

interface HistoryComponentProps {
  history: IProductInfo[];
}
function sortHistoryByDate(history: IProductInfo[]): IProductInfo[] {
  return history.slice().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

function HistoryComponent({ history }: HistoryComponentProps) {
  const sortedHistory = sortHistoryByDate(history).slice(0);
  const [leftRibbon, setLeftRibbon] = useState<number>(0);
  function setPositionRibbon(value: number): void {
    if (history.length === 1) {
      setLeftRibbon(-500);
    } else {
      setLeftRibbon(value);
    }
  }

  function slideLeft(): void {
    if (leftRibbon > -history.length * (15 + 2)) {
      setPositionRibbon(leftRibbon - 15);
    }
  }

  function slideRight(): void {
    if (leftRibbon < 15) {
      setPositionRibbon(leftRibbon + 15);
    }
  }

  return (
    <div className={classes.container}>
      <Button
        type="button"
        className={`${classes.sliderBtn} ${classes.item}`}
        onClick={() => slideLeft()}>
        <ArrowLeftIcon width="6rem" height="6rem" />
      </Button>
      <div className={`${classes.window} ${classes.item}`}>
        <div
          className={`${classes.ribbon}`}
          style={
            history.length < 3 || leftRibbon === 0
              ? { left: '50%', transform: 'translateX(-50%)' }
              : { left: `${leftRibbon}rem` }
          }>
          {sortedHistory.map((item) => (
            <div className={classes.imgBlock} key={item.id}>
              <Link to={`/catalog/product/${item.id}`}>
                <div className={classes.img} style={{ backgroundImage: `url('${item.image}')` }} />
              </Link>
              <div className={classes.title}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <Button
        type="button"
        className={`${classes.sliderBtn} ${classes.item}`}
        onClick={() => slideRight()}>
        <ArrowRightIcon width="6rem" height="6rem" />
      </Button>
    </div>
  );
}

export default HistoryComponent;
