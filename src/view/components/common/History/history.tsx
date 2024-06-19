import React from 'react';
import { IProductInfo } from '../../../../data/types/interfaces/product';
import * as classes from './history.module.css';

interface HistoryComponentProps {
  history: IProductInfo[];
}
function sortHistoryByDate(history: IProductInfo[]): IProductInfo[] {
  return history.slice().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

function HistoryComponent({ history }: HistoryComponentProps) {
  const sortedHistory = sortHistoryByDate(history);
  // eslint-disable-next-line no-console
  console.log(sortedHistory);
  return (
    <div className={classes.ribbon}>
      {sortedHistory.map((item) => (
        <div className={classes.imgBlock} key={item.id}>
          <div className={classes.title}>{item.name}</div>
          <img className={classes.img} src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default HistoryComponent;
