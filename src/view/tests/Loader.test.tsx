import { render } from '@testing-library/react';
import React from 'react';
import Loader from '../components/Loader/Loader';

describe('Loader', () => {
  it('should render without crashing', () => {
    render(<Loader />);
  });

  it('should render the SVG element', () => {
    const { getByRole } = render(<Loader />);
    expect(getByRole('img')).toBeInTheDocument();
  });
});
