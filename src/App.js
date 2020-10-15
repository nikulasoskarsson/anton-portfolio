import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Prismic from 'prismic-javascript'
import ReactFullpage from '@fullpage/react-fullpage'
import 'animate.css/animate.min.css'

import './App.scss'

import Navbar from './components/sections/header/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  const apiEndpoint = 'https://anton-portfolio.cdn.prismic.io/api/v2'

  const [portfolioItems, setPortfolioItems] = useState([])
  const [resume, setResume] = useState({})

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    !portfolioItems.length &&
      Prismic.getApi(apiEndpoint)
        .then(function (api) {
          return api.query('') // An empty query will return all the documents
        })
        .then(
          function (response) {
            setPortfolioItems(response.results[2].data.portfolio_item)
            setResume({
              ...resume,
              img: response.results[2].data.resume_image,
              link: response.results[2].data.resume_link,
            })
          },
          function (err) {
            console.log('Something went wrong: ', err)
          }
        )
  }, [portfolioItems, resume])

  const [activeSection, setActiveSection] = useState(1)

  return (
    <Router>
      <div className='App'>
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Switch>
          <Route path='/' exact>
            <Home
              portfolioItems={portfolioItems}
              resume={resume}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </Route>
          <Route path='/portfolio' exact>
            <PortfolioPage portfolioItems={portfolioItems} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
