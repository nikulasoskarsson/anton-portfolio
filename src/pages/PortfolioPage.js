import React from 'react'
import { withRouter } from 'react-router-dom'
import PortfolioItem from '../components/sections/portfolio/PortfolioItem'

const PortfolioPage = ({ history, portfolioItems }) => {
  return (
    <div className='portfolio-page'>
      <div className='portfolio-page__button' onClick={() => history.goBack()}>
        &#8592; Go back
      </div>
      <div className='portfolio-page__container'>
        {portfolioItems.map((item) => (
          <PortfolioItem item={item} />
        ))}
      </div>
    </div>
  )
}

export default withRouter(PortfolioPage)
