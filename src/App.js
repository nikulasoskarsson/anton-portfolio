import React, { useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import ScrollPosition from './components/ScrollPosition';
import Header from './components/sections/header/Header';
import Navbar from './components/sections/header/Navbar';
import Portfolio from './components/sections/portfolio';

function App() {
  // const updateScrollPosition = () => console.log('scrolled');
  // const [activeSection, setActiveSection] = useState(1);

  // document.addEventListener('scroll', () => {
  //   if (document.body.getBoundingClientRect().top < -300) {
  //     setActiveSection(2);
  //   }
  // });

  return (
    <div className='App'>
      <Navbar />
      <ScrollPosition activeSection={1} />
      <Header />
      <Portfolio />

      <Footer />
    </div>
  );
}

export default App;
