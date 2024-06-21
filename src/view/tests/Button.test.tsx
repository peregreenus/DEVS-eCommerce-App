import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/common/Button/Button';

describe('Button component', () => {
  it('renders without crashing', () => {
    const mockClassName = 'my-button';

    const { getByText } = render(<Button className={mockClassName}>Click me</Button>);

    const buttonText = getByText('Click me');
    expect(buttonText).toBeInTheDocument();
  });
});
