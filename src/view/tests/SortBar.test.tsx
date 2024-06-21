import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import SortBar from '../components/SortBar/SortBar';

describe('SortBar', () => {
  const mockOnChange = jest.fn();

  it('should render without crashing', () => {
    render(<SortBar value="" onChange={mockOnChange} />);
  });

  it('should call onChange when a selection is made', () => {
    const { getByLabelText } = render(<SortBar value="" onChange={mockOnChange} />);

    fireEvent.change(getByLabelText('Sort by:'), { target: { value: 'name.en asc' } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should reflect the correct value when a selection is made', () => {
    const { getByLabelText } = render(<SortBar value="name.en asc" onChange={mockOnChange} />);
    const select = getByLabelText('Sort by:') as HTMLSelectElement;

    expect(select.value).toBe('name.en asc');
  });
});
