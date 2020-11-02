import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    // 고차함수!
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <a href={`/restaurants/${id}`} onClick={() => handleClick(restaurants)}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
