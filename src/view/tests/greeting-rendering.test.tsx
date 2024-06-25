import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fetch from 'jest-fetch-mock';
import Greeting from '../pages/Main/greeting';

fetch.mockResponseOnce(JSON.stringify(0));

describe('Greeting component', () => {
  test('renders the "Greeting" message', () => {
    render(
      <BrowserRouter>
        <Greeting />
      </BrowserRouter>
    );
    const helloWorldText: HTMLElement = screen.getByText('Welcome to "Galactic Exclusive"');
    expect(helloWorldText).toBeInTheDocument();
  });
});
