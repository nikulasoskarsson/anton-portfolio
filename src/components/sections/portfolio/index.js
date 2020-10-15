import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DribbleIcon from './DribbleIcon'
import ScrollAnimation from 'react-animate-on-scroll'

import PortfolioItem from './PortfolioItem'

const Portfolio = ({ portfolioItems }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpandSection = () => setIsExpanded(!isExpanded)

  let animationsDelay = 800

  return (
    <div className='portfolio section' id='portfolio'>
      <h1 className='heading-h1'>
        <ScrollAnimation animateIn='fadeIn'>Projects </ScrollAnimation>
      </h1>
      <div className='portfolio__container'>
        {portfolioItems.length ? (
          portfolioItems.map((item, index) => {
            if (index <= 2) {
              animationsDelay = animationsDelay - 150
              return (
                <ScrollAnimation
                  style={{ display: 'inline' }}
                  animateIn='fadeIn'
                  delay={animationsDelay}
                  key={index}
                >
                  <PortfolioItem item={item} />
                </ScrollAnimation>
              )
            }
          })
        ) : (
          <div>...</div>
        )}
        <ScrollAnimation
          animateIn='fadeIn'
          delay={1000}
          onClick={toggleExpandSection}
          className='portfolio__button'
        >
          <Link to='/portfolio'>
            See more <DribbleIcon />
          </Link>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Portfolio
