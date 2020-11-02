import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: RESTAURANT,
    }));
  });

  function renderRestaurantPage() {
    return render((
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantPage />
      </MemoryRouter>
    ));
  }

  it('renders links of restaurants', () => {
    const { container } = renderRestaurantPage();

    expect(dispatch).toBeCalled();

    expect(container).toHaveTextContent(RESTAURANT.name);
    expect(container).toHaveTextContent(RESTAURANT.address);
  });
});
