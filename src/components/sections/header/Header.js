import React from 'react';
import DropdownIcon from './DropdownIcon';

const Header = () => {
  return (
    <div className='header' id='header'>
      <h1 className='heading-h1'>Hello my name is Anton & I'M a designer</h1>
      <video
        width='300px'
        height='300px'
        loop
        autoPlay
        style={{ background: 'white' }}
      >
        <source src={require('./video.mp4')} type='video/mp4' />
      </video>
      <DropdownIcon />
    </div>
  );
};

export default Header;
