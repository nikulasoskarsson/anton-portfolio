import React from 'react';

import PortfolioItem from './PortfolioItem';

const Portfolio = ({ portfolioItems }) => {
  return (
    <div className='portfolio' id='portfolio'>
      <h1 className='heading-h1'>Projects</h1>
      {portfolioItems.length ? (
        portfolioItems.map((item, index) => (
          <PortfolioItem key={index} item={item} />
        ))
      ) : (
        <div>Not working</div>
      )}
    </div>
  );
};

export default Portfolio;
