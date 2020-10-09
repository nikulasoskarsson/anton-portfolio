import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive(!navActive);

  return (
    <nav className={!navActive ? 'navbar' : 'navbar navbar-active'}>
      <div className='navbar__content'>
        <img src={require('./logo.svg')} alt='Logo' className='navbar__logo' />

        <ul
          className={
            !navActive ? 'navbar__list display-hidden-sm' : 'navbar__list'
          }
        >
          <Scrollspy
            items={['header', 'portfolio', 'resume', 'contact']}
            onUpdate={(section) => {
              if (section.id === 'header') {
                setActiveSection(1);
              } else if (section.id === 'portfolio') {
                setActiveSection(2);
              } else if (section.id === 'resume') {
                setActiveSection(3);
              } else {
                setActiveSection(4);
              }
            }}
            style={{ display: 'flex' }}
          >
            <li className='navbar__list-item'>
              <a
                href='#header'
                className={
                  activeSection === 1
                    ? 'navbar__link navbar__link-active'
                    : 'navbar__link'
                }
              >
                About me
              </a>
            </li>
            <li className='navbar__list-item'>
              <a
                href='#portfolio'
                className={
                  activeSection === 2
                    ? 'navbar__link navbar__link-active'
                    : 'navbar__link'
                }
              >
                Projects
              </a>
            </li>
            <li className='navbar__list-item'>
              <a
                href='#resume'
                className={
                  activeSection === 3
                    ? 'navbar__link navbar__link-active'
                    : 'navbar__link'
                }
              >
                Resume
              </a>
            </li>
            <li className='navbar__list-item'>
              <a
                href='#contact'
                className={
                  activeSection === 4
                    ? 'navbar__link navbar__link-active'
                    : 'navbar__link'
                }
              >
                Contact
              </a>
            </li>
          </Scrollspy>
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
