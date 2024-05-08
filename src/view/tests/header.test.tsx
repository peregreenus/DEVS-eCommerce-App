import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Header from '../components/common/header/header';

describe('Header component', () => {
  it('Should render the Header component correctly', async () => {
    render(<Header />);
  });
});
