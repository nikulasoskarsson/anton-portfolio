import React,{useState} from 'react';
import DribbleIcon from './DribbleIcon';

import PortfolioItem from './PortfolioItem';

const Portfolio = ({ portfolioItems }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpandSection = () =>setIsExpanded(!isExpanded);
  
  return (
    <div className='portfolio' id='portfolio'>
      <h1 className='heading-h1'>Projects</h1>
      <div className='portfolio__container'>
        {portfolioItems.length ? (
          portfolioItems.map((item, index) => index <= 2 && (
            <PortfolioItem key={index} item={item} />
          ))
        ) : (
          <div>Not working</div>
        )}
        <div onClick={toggleExpandSection}className="portfolio__button">See More <DribbleIcon /></div>
      </div>
     
    </div>
  );
};

export default Portfolio;
