import React from 'react';

const PortfolioItem = ({ item }) => {
  return (
    <a href={item.link.url} className='project'>
      <img
        className='project__image'
        src={item.image.url}
        alt={item.image.alt}
      />
    </a>
  );
};

export default PortfolioItem;
