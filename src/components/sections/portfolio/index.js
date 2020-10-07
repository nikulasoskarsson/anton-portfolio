import React, { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const apiEndpoint = 'https://anton-portfolio.cdn.prismic.io/api/v2';

  const [portfolioItems, setPortfolioItems] = useState([]);

  const getPortfolioItems = () => {
    Prismic.getApi(apiEndpoint)
      .then(function (api) {
        return api.query(''); // An empty query will return all the documents
      })
      .then(
        function (response) {
          setPortfolioItems(response.results);
        },
        function (err) {
          console.log('Something went wrong: ', err);
        }
      );
  };

  useEffect(() => {
    !portfolioItems.length && getPortfolioItems();
  }, [portfolioItems]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1 className='heading-h1'>Projects</h1>
      {portfolioItems.length ? (
        <div>
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div>Not working</div>
      )}
    </div>
  );
};

export default Portfolio;
