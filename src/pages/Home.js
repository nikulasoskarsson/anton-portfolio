import React from 'react'
import ScrollPosition from '../components/ScrollPosition'
import Header from '../components/sections/header/Header'
import Portfolio from '../components/sections/portfolio'
import Resume from '../components/sections/resume'
import Contact from '../components/sections/contact'
import ReactFullpage from '@fullpage/react-fullpage'

const Home = ({ portfolioItems, resume, activeSection, setActiveSection }) => {
  return (
    <ReactFullpage.Wrapper>
      <ScrollPosition
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Header />
      <Portfolio portfolioItems={portfolioItems} />
      <Resume resume={resume} />
      <Contact />
    </ReactFullpage.Wrapper>
  )
}

export default Home
