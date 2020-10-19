import React from 'react'
import DropdownIcon from './DropdownIcon'
import ScrollAnimation from 'react-animate-on-scroll'

const Header = () => {
  return (
    <div className='header section' id='header'>
      <ScrollAnimation animateIn='fadeIn'>
        <h1 className='heading-h1'>
          Hello my name is Anton & <span>I'm a designer.</span> I like to make
          minimalistic products on the internet
        </h1>
      </ScrollAnimation>
      <ScrollAnimation delay={500} animateIn='fadeIn'>
        <img style={{ width: '300px' }} src={require('./video.gif')} alt='' />
      </ScrollAnimation>
      <DropdownIcon />
    </div>
  )
}

export default Header
