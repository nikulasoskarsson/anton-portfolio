import React from 'react'
import ScrollPosition from '../components/ScrollPosition'
import Header from '../components/sections/header/Header'
import Portfolio from '../components/sections/portfolio'
import Resume from '../components/sections/resume'
import Contact from '../components/sections/contact'

const Home = ({ portfolioItems, resume, activeSection, setActiveSection }) => {
  return (
    <>
      <ScrollPosition
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Header />
      <Portfolio portfolioItems={portfolioItems} />
      <Resume resume={resume} />
      <Contact />
    </>
  )
}

export default Home
