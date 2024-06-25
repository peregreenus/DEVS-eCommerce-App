import React from 'react';
import { render } from '@testing-library/react';
import CallToAction from '../pages/Main/call-to-action';

describe('CallToAction component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<CallToAction />);

    const titleText = getByText('Your exclusive space awaits!');
    expect(titleText).toBeInTheDocument();

    const subtitleText = getByText(/Browse our catalog and contact us today/i);
    expect(subtitleText).toBeInTheDocument();
  });
});
