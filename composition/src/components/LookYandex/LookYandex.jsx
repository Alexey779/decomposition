import React from 'react';

const lookYdx = {
  src: '#',
  title: 'Работа над ошибками',
  text: 'Смотрите на Яндексе и запоминайте',
  link: '#',
};

// Создание блока Смотрите на Яндексе

export const LookYandex = () => {
  return (
    <div className="look-yandex">
      <img className="look-yandex__img" src={lookYdx.src} alt="" />
      <h2 className="look-yandex__title">
        <a className="look-yandex__title-link" href={lookYdx.link}>
          {lookYdx.title}
        </a>
      </h2>
      <p className="look-yandex__text">{lookYdx.text}</p>
    </div>
  );
};
