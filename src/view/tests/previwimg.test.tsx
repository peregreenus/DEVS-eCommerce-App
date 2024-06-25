import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import PreviewImg from '../components/PreviewImg/previewImg';

describe('PreviewImg', () => {
  const mockSetModal = jest.fn();

  it('should render without crashing', () => {
    render(<PreviewImg imgUrl="test.jpg" imgLabel="Test Image" setModal={mockSetModal} />);
  });

  it('should call setModal when the image is clicked', () => {
    const { getByAltText } = render(
      <PreviewImg imgUrl="test.jpg" imgLabel="Test Image" setModal={mockSetModal} />
    );

    fireEvent.click(getByAltText('Test Image'));

    expect(mockSetModal).toHaveBeenCalledWith(true);
  });

  it('should call setModal when a key is pressed', () => {
    const { getByAltText } = render(
      <PreviewImg imgUrl="test.jpg" imgLabel="Test Image" setModal={mockSetModal} />
    );

    fireEvent.keyDown(getByAltText('Test Image'));

    expect(mockSetModal).toHaveBeenCalledWith(true);
  });
});
