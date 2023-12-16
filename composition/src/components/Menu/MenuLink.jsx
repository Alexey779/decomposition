import React from 'react';

// Создание одной ссылки навигации меню

export const MenuLink = (props) => {
  return (
    <li className="menu-nav__item">
      <a className="menu-nav__item-link" href={props.link}>
        {props.title}
      </a>
    </li>
  );
};
