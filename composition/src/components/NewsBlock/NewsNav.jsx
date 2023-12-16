import React from 'react';
import { NewsNavLink } from './NewsNavLink';

const newsNavData = [
  {
    id: 1,
    title: 'Сейчас в СМИ',
    link: '#',
  },
  {
    id: 2,
    title: 'в Германии',
    link: '#',
  },
  {
    id: 3,
    title: 'Рекомендуем',
    link: '#',
  },
];

// Создание меню навигации новостей

export const NewsNav = () => {
  return (
    <ul className="news-block-nav">
      {newsNavData.map((data) => (
        <NewsNavLink {...data} key={data.id} />
      ))}
    </ul>
  );
};
