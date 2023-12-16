import React from 'react';
//import { AddInfo } from './AddInfo';
//Создание одного элемента с дополнительной информацией

export const AddInfoItem = (props) => {
  return (
    <div>
    <li className="info-block__item">
      <a href={props.link}>{props.title}</a>
      <p>{props.text}</p>
    </li>
    </div>
  );
};
