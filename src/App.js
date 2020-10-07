import React, { useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import ScrollPosition from './components/ScrollPosition';
import Header from './components/sections/header/Header';
import Navbar from './components/sections/header/Navbar';
import Portfolio from './components/sections/portfolio';

function App() {
  const updateScrollPosition = () => console.log('scrolled');
  const [activeSection, setActiveSection] = useState(1);

  // document.addEventListener('scroll', () => {
  //   // console.log(document.body.getBoundingClientRect());
  //   if (document.body.getBoundingClientRect().top < -300) {
  //     setActiveSection(2);
  //   }
  // });

  return (
    <div className='App' onScrollCapture={updateScrollPosition}>
      <Navbar />
      <ScrollPosition activeSection={activeSection} />
      <Header />
      <Portfolio />

      <Footer />
    </div>
  );
}

export default App;
