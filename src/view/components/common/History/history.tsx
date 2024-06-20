import React from 'react';
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
  function slideLeft(): void {
    throw new Error('Function not implemented.');
  }

  function slideRight(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={classes.container}>
      <Button type="button" className={classes.sliderBtn} onClick={() => slideLeft()}>
        <ArrowLeftIcon width="6rem" height="6rem" />
      </Button>
      <div className={classes.ribbon}>
        {sortedHistory.map((item) => (
          <div className={classes.imgBlock}>
            <Link to={`/catalog/product/${item.id}`} key={item.id}>
              <div className={classes.img} style={{ backgroundImage: `url('${item.image}')` }} />
            </Link>
            <div className={classes.title}>{item.name}</div>
          </div>
        ))}
      </div>
      <Button type="button" className={classes.sliderBtn} onClick={() => slideRight()}>
        <ArrowRightIcon width="6rem" height="6rem" />
      </Button>
    </div>
  );
}

export default HistoryComponent;
