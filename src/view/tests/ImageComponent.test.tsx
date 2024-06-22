import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import PreviewImageComponent from '../pages/Product/ImageComponent';

describe('PreviewImageComponent', () => {
  const mockOnClick = jest.fn();

  it('should render without crashing', () => {
    render(
      <PreviewImageComponent index={0} imgUrl="test.jpg" isSelected={false} onClick={mockOnClick} />
    );
  });

  it('should call onClick when the image is clicked', () => {
    const { getByAltText } = render(
      <PreviewImageComponent index={0} imgUrl="test.jpg" isSelected={false} onClick={mockOnClick} />
    );

    fireEvent.click(getByAltText('product'));

    expect(mockOnClick).toHaveBeenCalledWith(0);
  });
});
