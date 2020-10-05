import React from 'react';
import './App.scss';
import Header from './components/sections/header/Header';
import Navbar from './components/sections/header/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
