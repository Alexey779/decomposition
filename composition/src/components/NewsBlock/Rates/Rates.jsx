import React from 'react';
import { Rate } from './Rate';

const ratesData = [
  {
    id: 1,
    currency: 'USD MOEX',
    rate: 63.52,
    change: '+0.09',
  },
  {
    id: 2,
    currency: 'EUR MOEX',
    rate: 70.86,
    change: '+0.14',
  },
  {
    id: 3,
    currency: 'НЕФТЬ',
    rate: 64.90,
    change: '+1.63%',
  },

];

// Создание списка курсов валют

export const Rates = () => {
  return (
    <ul className="rates-list">
      {ratesData.map((data) => (
        <Rate {...data} key={data.id} />
      ))}
    </ul>
  );
};
