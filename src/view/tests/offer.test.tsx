import React from 'react';
import { render } from '@testing-library/react';
import Offer from '../pages/Main/offer';

describe('Offer component', () => {
  it('renders without crashing', () => {
    jest.spyOn(React, 'useState').mockReturnValue([0, jest.fn()]);

    const { getByText, getByAltText } = render(<Offer />);

    const islandsSubtitle = getByText(/Your dream of a private paradise/i);
    const corporationSubtitle = getByText(/Change the world by purchasing a corporation/i);
    const massMediaSubtitle = getByText(/Influence people’s minds through your own media/i);
    const islandImage = getByAltText('beautiful island');

    expect(islandsSubtitle).toBeInTheDocument();
    expect(corporationSubtitle).toBeInTheDocument();
    expect(massMediaSubtitle).toBeInTheDocument();
    expect(islandImage).toBeInTheDocument();
  });
});
