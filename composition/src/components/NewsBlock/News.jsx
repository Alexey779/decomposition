import React from 'react';

// Создание одной новости

export const News = (props) => {
  return (
    <li className="news-block-list__item">
      <img className="news-block-list__item-img" src={props.src} alt="" />
      <a className="news-block-list__item-link" href={props.link}>
        {props.text}
      </a>
    </li>
  );
};
