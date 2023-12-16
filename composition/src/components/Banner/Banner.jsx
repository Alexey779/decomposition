import React from 'react';

const bannerData = {
  src: '#',
  link: '#',
};

// Создаёт баннер рекламы

export const Banner = () => {
  return (
    <a className="banner-link" href={bannerData.link}>
      <img className="banner-img" src={bannerData.src} alt="" />
    </a>
  );
};
