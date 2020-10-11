import React,{useState} from 'react';
import DribbleIcon from './DribbleIcon';
import ScrollAnimation from 'react-animate-on-scroll';

import PortfolioItem from './PortfolioItem';

const Portfolio = ({ portfolioItems }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpandSection = () =>setIsExpanded(!isExpanded);
  
  return (
    <div className='portfolio' id='portfolio'>
    <ScrollAnimation  animateIn="fadeIn">
    <h1 className='heading-h1'>Projects</h1>
 
 </ScrollAnimation>
      
      <ScrollAnimation animateIn="fadeIn" delay={500} className='portfolio__container'>
        {portfolioItems.length ? (
          portfolioItems.map((item, index) => index <= 2 && (
            <PortfolioItem key={index} item={item} />
          ))
        ) : (
          <div>Not working</div>
        )}
        <div onClick={toggleExpandSection}className="portfolio__button">See More <DribbleIcon /></div>
   
      </ScrollAnimation>
     
    </div>
  );
};

export default Portfolio;
