import React from 'react';
import { AddInfoItem } from './AddInfoItem';

//Создание блока с дополнительной информацией

const itemData = [
  {
    id:1,
    title: "Погода",
    link: '#',
    text: "+17",
  },
  {
    id:2,
    title: "Посещаемое",
    link: '#',
    text: "Недвижимость",
  },
  {
    id:3,
    title: "Карта Германии",
    link: '#',
    text: "Расписание",
  },
  {
    id:4,
    title: "Телепрограмма",
    link: '#',
    text: "02:00 ТНТ",
  },
  {
    id:3,
    title: "Эфир",
    link: '#',
    text: "Управление как искусство",
  }
]

export const AddInfo = () => {
  return (
    <ul className="info-block">
      {itemData.map((data) => (
        <AddInfoItem {...data} key={data.id}/>
      ))}
    </ul>
  );
};
