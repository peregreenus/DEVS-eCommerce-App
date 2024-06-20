import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Greeting from '../pages/Main/greeting';
import * as classes from '../pages/Main/greeting.module.css';

describe('Greeting component', () => {
  it('should test something related to CSS classes', () => {
    expect(classes.greeting).toBeDefined();
  });

  it('renders the welcome message and subtitle', () => {
    render(<Greeting />, { wrapper: MemoryRouter });

    const welcomeHeader = screen.getByRole('heading', { name: /Welcome to "Galactic Exclusive"/i });
    const subtitle = screen.getByText(/Your ultimate destination for premium stuff!/i);

    expect(welcomeHeader).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('navigates to the catalog page when the button is clicked', () => {
    const { container } = render(<Greeting />, { wrapper: MemoryRouter });

    const exploreButton = screen.getByRole('button', { name: /Explore our offers/i });
    fireEvent.click(exploreButton);

    expect(container.querySelector('.catalogButton')).toBeInTheDocument();
  });

  it('copies the promo code to the clipboard when the promo button is clicked', () => {
    render(<Greeting />, { wrapper: MemoryRouter });

    const promoButton = screen.getByRole('button', { name: /Get promo code:/i });
    fireEvent.click(promoButton);
  });
});
