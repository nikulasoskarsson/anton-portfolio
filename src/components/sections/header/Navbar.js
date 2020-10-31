import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = ({ activeSection, setActiveSection }) => {
  const [navActive, setNavActive] = useState(false)

  const toggleNav = () => {
    window.innerWidth <= 600 && setNavActive(!navActive)
  }

  // const [currentSection, setCurrentSection] = useState('header')
  // const [nextSection, setNextSection] = useState('portfolio')
  // const [previousSection, setPreviousSection] = useState('header')

  // const [scrollTop, setScrollTop] = useState(window.pageYOffset)
  // const [isScrollLocked, setIsScrollLocked] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!isScrollLocked) {
  //       // document.getElementById(nextSection).scrollIntoView()
  //       window.location.replace(`/#${nextSection}`)
  //       document.querySelector('body').classList.add('overflow-hidden')

  //       setIsScrollLocked(true)
  //       setTimeout(() => {
  //         document.querySelector('body').classList.remove('overflow-hidden')
  //         setIsScrollLocked(false)
  //       }, 1500)
  //     }
  //   }

  //   document.addEventListener('scroll', handleScroll)

  //   return () => document.removeEventListener('scroll', handleScroll)
  // }, [nextSection, isScrollLocked])

  return (
    <nav className={!navActive ? 'navbar' : 'navbar navbar-active'}>
      <div className='navbar__content'>
        <Link to='/#header' className='navbar__logo-link'>
          <img
            src={require('./logo.svg')}
            alt='Logo'
            className='navbar__logo'
          />
        </Link>
        <Scrollspy
          items={['header', 'portfolio', 'resume', 'contact']}
          offset={-80.4}
          onUpdate={(section) => {
            if (typeof section !== 'undefined') {
              if (section.id === 'header') {
                setActiveSection(1)
              } else if (section.id === 'portfolio') {
                setActiveSection(2)
              } else if (section.id === 'resume') {
                setActiveSection(3)
              } else {
                setActiveSection(4)
              }
            }
          }}
        >
          <ul
            className={
              !navActive ? 'navbar__list display-hidden-sm' : 'navbar__list'
            }
          >
            <li className='navbar__list-item' onClick={toggleNav}>
              <Link
                to='/#header'
                className={
                  activeSection === 1
                    ? 'navbar__link navbar__link-active'
                    : 'navbar__link'
                }
              >
                About me
              </Link>
            </li>
            <li className='navbar__list-item' onClick={toggleNav}>
              <Link
                to='/#portfolio'
                className={
                  activeSection === 2
                    ? 'navbar__link navbar__link-active'
                    : 'navbar__link'
                }
              >
                Projects
              </Link>
            </li>
            <li className='navbar__list-item' onClick={toggleNav}>
              <Link
                to='/#resume'
                className={
                  activeSection === 3
                    ? 'navbar__link navbar__link-active'
                    : 'navbar__link'
                }
              >
                Resume
              </Link>
            </li>
            <li className='navbar__list-item' onClick={toggleNav}>
              <Link
                to='/#contact'
                className={
                  activeSection === 4
                    ? 'navbar__link navbar__link-active'
                    : 'navbar__link'
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </Scrollspy>
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
  )
}

export default Navbar
