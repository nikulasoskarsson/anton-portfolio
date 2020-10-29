import React from 'react'

const PortfolioItem = ({ item }) => {
  console.log(item)
  return (
    <a href={item.link.url} className='project' target='blank'>
      <img
        className='project__image'
        src={item.image.url}
        alt={item.image.alt}
      />
    </a>
  )
}

export default PortfolioItem
