import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from '../components/Description/Description';

test('renders description content', () => {
  const htmlContent = '<p>Some description content</p>';
  render(<Description htmlContent={htmlContent} />);
  const descriptionElement = screen.getByText('Some description content');
  expect(descriptionElement).toBeInTheDocument();
});
