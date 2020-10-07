import React from 'react';

const PortfolioItem = ({ item }) => {
  console.log(item);
  return (
    <a href={item.data.link.url} className='project'>
      <img
        className='project__image'
        src={item.data.image.url}
        alt={item.data.image.alt}
      />
    </a>
  );
};

export default PortfolioItem;
