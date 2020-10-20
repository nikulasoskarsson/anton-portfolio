import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PortfolioPageItem from './PortfolioPageItem'

const PortfolioPage = ({ portfolioItems, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.getElementById('container').classList.remove('App')
    document.getElementById('container').classList.add('portfolio-container')
  }, [])

  history.listen(() => {
    document.getElementById('container').classList.add('App')
    document.getElementById('container').classList.remove('portfolio-container')
  })

  return (
    <div className='portfolio-page'>
      <div className='portfolio-page__button' onClick={() => history.goBack()}>
        &#8592; Go back
      </div>
      <div className='portfolio-page__container'>
        {portfolioItems.map((item, index) => (
          <PortfolioPageItem item={item} key={index} />
        ))}
        {portfolioItems.map((item, index) => (
          <PortfolioPageItem item={item} key={index} />
        ))}
        {portfolioItems.map((item, index) => (
          <PortfolioPageItem item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default withRouter(PortfolioPage)
