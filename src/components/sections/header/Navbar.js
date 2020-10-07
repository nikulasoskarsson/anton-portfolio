import React, { useState } from 'react';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive(!navActive);

  return (
    <nav className={!navActive ? 'navbar' : 'navbar navbar-active'}>
      <div className='navbar__content'>
        <img src={require('./logo.png')} alt='Logo' className='navbar__logo' />

        <ul
          className={
            !navActive ? 'navbar__list display-hidden-sm' : 'navbar__list'
          }
        >
          <li className='navbar__list-item'>
            <a href='#later' className='navbar__link navbar__link-active'>
              About me
            </a>
          </li>
          <li className='navbar__list-item'>
            <a href='#portfolio' className='navbar__link'>
              Projects
            </a>
          </li>
          <li className='navbar__list-item'>
            <a href='#later' className='navbar__link'>
              Resume
            </a>
          </li>
          <li className='navbar__list-item'>
            <a href='#later' className='navbar__link'>
              Contact
            </a>
          </li>
        </ul>
        <div
          className={
            !navActive
              ? 'navbar__icon display-hidden-above-sm'
              : 'navbar__icon navigation__icon-active display-hidden-above-sm'
          }
          onClick={toggleNav}
        >
          <div className='bar1 navbar__icon-bar'></div>
          <div className='bar3 navbar__icon-bar'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
