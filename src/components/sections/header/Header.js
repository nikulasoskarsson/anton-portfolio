import React from 'react';
import DropdownIcon from './DropdownIcon';

const Header = () => {
  return (
    <div className='header' id='header'>
      <h1 className='heading-h1'>Hello my name is Anton & I'M a designer</h1>
      <img style={{ width: '300px' }} src={require('./video.gif')} alt='' />
      <DropdownIcon />
    </div>
  );
};

export default Header;
