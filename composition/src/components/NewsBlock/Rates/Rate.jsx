import React from 'react';

// Создание одного элемента курсов валют

export const Rate = (props) => {
  return (
    <li className="rates-list__item">
      <span className="rates-list__item-span">{props.currency}</span>
      <span className="rates-list__item-span">{props.rate}</span>
      <span className="rates-list__item-span">{props.change}</span>
    </li>
  );
};
