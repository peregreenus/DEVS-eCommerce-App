import React from 'react';
import { AppState } from '../../../data/types/main-props';
import * as classes from './PaginationBlock.module.css';

interface PaginationProps {
  activeId: number;
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  state: AppState;
  itemsPerPage: number;
}

function PaginationBlock({ activeId, itemsPerPage, onClickHandler, state }: PaginationProps) {
  const { productsAmount } = state;
  const pagesAmount = Math.ceil(productsAmount / itemsPerPage);

  return (
    <div className={classes.paginationWrapper}>
      {Array.from({ length: pagesAmount }, (_, i) => {
        return (
          <button
            disabled={activeId === i}
            className={classes.paginationBtn}
            key={`pagin-btn-${i}`}
            onClick={onClickHandler}
            id={`${i}`}
            type="button">
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}

export default PaginationBlock;
