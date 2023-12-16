import React from 'react';
import { MenuLink } from './MenuLink';

const menuData = [
  {
    id: 1,
    title: 'Видео',
    link: '#',
  },
  {
    id: 2,
    title: 'Картинки',
    link: '#',
  },
  {
    id: 3,
    title: 'Новости',
    link: '#',
  },
  {
    id: 4,
    title: 'Карты',
    link: '#',
  },
  {
    id: 5,
    title: 'Маркет',
    link: '#',
  },
  {
    id: 6,
    title: 'Переводчик',
    link: '#',
  },
  {
    id: 7,
    title: 'Эфир',
    link: '#',
  },
  {
    id: 8,
    title: 'ещё',
    link: '#',
  },
];

//Создание списка навигации меню

export const Menu = () => {
  return (
    <ul className="menu-nav">
      {menuData.map((data) => (
        <MenuLink {...data} key={data.id} />
      ))}
    </ul>
  );
};
