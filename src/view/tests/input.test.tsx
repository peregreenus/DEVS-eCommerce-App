import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputLabelButton from '../components/common/input/input';

describe('InputLabelButton', () => {
  it('should render without crashing', () => {
    const mockOnClick = jest.fn();
    render(<InputLabelButton label="Test Label" onClick={mockOnClick} />);
  });

  it('should call onClick with the input value when the button is clicked', () => {
    const mockOnClick = jest.fn();
    const { getByLabelText, getByText } = render(
      <InputLabelButton label="Test Label" onClick={mockOnClick} />
    );

    fireEvent.change(getByLabelText('Test Label'), { target: { value: 'test value' } });
    fireEvent.click(getByText('Apply'));

    expect(mockOnClick).toHaveBeenCalledWith('test value');
  });

  it('should clear the input after the button is clicked', () => {
    const mockOnClick = jest.fn();
    const { getByLabelText, getByText } = render(
      <InputLabelButton label="Test Label" onClick={mockOnClick} />
    );

    const input = getByLabelText('Test Label');
    fireEvent.change(input, { target: { value: 'test value' } });
    fireEvent.click(getByText('Apply'));

    expect((input as HTMLInputElement).value).toBe('');
  });
});
