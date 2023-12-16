import React from 'react';

// Создание одной ссылки навигации меню новостей

export const NewsNavLink = (props) => {
  return (
    <li className="news-block-nav__item">
      <a className="news-block-nav__item-link" href={props.link}>
        {props.title}
      </a>
    </li>
  );
};
