import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import PaginationBlock from '../components/PaginationBlock/PaginationBlock';

describe('PaginationBlock', () => {
  const mockOnClickHandler = jest.fn();
  const mockState = {
    showMsg: false,
    userLoggedIn: false,
    productsAmount: 20,
    changesInCart: 0,
    history: []
  };

  it('should render without crashing', () => {
    render(
      <PaginationBlock
        activeId={1}
        itemsPerPage={5}
        onClickHandler={mockOnClickHandler}
        state={mockState}
      />
    );
  });

  it('should call onClickHandler when a button is clicked', () => {
    const { getByText } = render(
      <PaginationBlock
        activeId={1}
        itemsPerPage={5}
        onClickHandler={mockOnClickHandler}
        state={mockState}
      />
    );

    fireEvent.click(getByText('1'));

    expect(mockOnClickHandler).toHaveBeenCalled();
  });

  it('should render the correct number of pages', () => {
    const { getAllByRole } = render(
      <PaginationBlock
        activeId={1}
        itemsPerPage={5}
        onClickHandler={mockOnClickHandler}
        state={mockState}
      />
    );

    const buttons = getAllByRole('button');

    expect(buttons).toHaveLength(4);
  });
});
