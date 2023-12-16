import React from 'react';

const randomArticle = {
  title: 'фаза луны сегодня',
  link: '#',
};

// Создаёт поле поиска

export const Search = () => {
  return (
    <div className="search">
      <input className="search__input" type="text" />
      <button className="search__btn" type="button">
        Найти
      </button>
      <p className="search__text">
        Найдётся всё. Например,
        <a className="search__link" href={randomArticle.link}>
          {randomArticle.title}
        </a>
      </p>
    </div>
  );
};
