import React, { useState, useEffect } from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from 'react-scroll'

const Navbar = ({ activeSection, setActiveSection }) => {
  const scroller = Scroll.scroller
  const [navActive, setNavActive] = useState(false)

  const toggleNav = () => setNavActive(!navActive)

  const [currentSection, setCurrentSection] = useState('header')
  const [nextSection, setNextSection] = useState('portfolio')
  const [previousSection, setPreviousSection] = useState('header')

  const [scrollTop, setScrollTop] = useState(window.pageYOffset)
  const [isScrollLocked, setIsScrollLocked] = useState(false)

  const handleScroll = (section, isScrollLocked, handler) => {
    if (!isScrollLocked) {
      document.getElementById(section).scrollIntoView()

      // window.scrollBy(0, window.innerHeight * 2)
      document.querySelector('body').classList.add('overflow-hidden')

      setIsScrollLocked(true)
      document.removeEventListener('scroll', handler)
      setTimeout(() => {
        // document.querySelector('body').classList.remove('overflow-hidden')
        // setIsScrollLocked(false)
      }, 1500)
    }
  }

  useEffect(() => {
    // Either one of those will scroll to the desired location
    // document.getElementById('portfolio').scrollIntoView()

    // // window.scrollBy(0, window.innerHeight * 2)
    // document.querySelector('body').classList.add('overflow-hidden')

    const handler = (e) => handleScroll(nextSection, isScrollLocked, handler)
    document.addEventListener('scroll', handler)

    // // cleanup callback, that will be called before the effect runs again
    //  return () => document.removeEventListener('scroll', handler)
  }, [nextSection, isScrollLocked])

  return (
    <nav className={!navActive ? 'navbar' : 'navbar navbar-active'}>
      <div className='navbar__content'>
        <a href='#header'>
          <img
            src={require('./logo.svg')}
            alt='Logo'
            className='navbar__logo'
          />
        </a>
        <Scrollspy
          items={['header', 'portfolio', 'resume', 'contact']}
          offset={-80.4}
          onUpdate={(section) => {
            if (typeof section !== 'undefined') {
              setCurrentSection(section.id)
              if (section.id === 'header') {
                setActiveSection(1)
                setNextSection('portfolio')
              } else if (section.id === 'portfolio') {
                setActiveSection(2)
                setPreviousSection('header')
                setNextSection('resume')
              } else if (section.id === 'resume') {
                setActiveSection(3)
                setPreviousSection('portfolio')
                setNextSection('contact')
              } else {
                setActiveSection(4)
                setPreviousSection('resume')
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
            <li className='navbar__list-item' onClick={toggleNav}>
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
            <li className='navbar__list-item' onClick={toggleNav}>
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
            <li className='navbar__list-item' onClick={toggleNav}>
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
