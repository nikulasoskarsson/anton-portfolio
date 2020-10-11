import React, { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';


import './App.scss';

import ScrollPosition from './components/ScrollPosition';
import Header from './components/sections/header/Header';
import Navbar from './components/sections/header/Navbar';
import Portfolio from './components/sections/portfolio';
import Resume from './components/sections/resume';
import Contact from './components/sections/contact';
import Footer from './components/Footer';

function App() {
  const apiEndpoint = 'https://anton-portfolio.cdn.prismic.io/api/v2';

  const [portfolioItems, setPortfolioItems] = useState([]);
  const [resume, setResume] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    !portfolioItems.length &&
      Prismic.getApi(apiEndpoint)
        .then(function (api) {
          return api.query(''); // An empty query will return all the documents
        })
        .then(
          function (response) {
            setPortfolioItems(response.results[2].data.portfolio_item);
            setResume({
              ...resume,
              img: response.results[2].data.resume_image,
              link: response.results[2].data.resume_link,
            });
          },
          function (err) {
            console.log('Something went wrong: ', err);
          }
        );
  }, [portfolioItems, resume]);

  const [activeSection, setActiveSection] = useState(1);

  document.addEventListener('scroll',(e) =>console.log(e))

  return (
    <div className='App' >
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ScrollPosition
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <Header />
    
      <Portfolio portfolioItems={portfolioItems} />

      
      <Resume resume={resume} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
