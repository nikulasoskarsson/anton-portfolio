import React from 'react'

const PortfolioPageItem = ({ item }) => {
  return (
    <a href={item.link.url} className='portfolio-page-item' target='blank'>
      <img
        className='portfolio-page-item__image'
        src={item.image.url}
        alt={item.image.alt}
      />
    </a>
  )
}

export default PortfolioPageItem
