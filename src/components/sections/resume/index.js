import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Resume = ({ resume }) => {
  if (resume.img) {
    return (
      <div className='resume section' id='resume'>
        <div className='resume__left'>
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <h1 className='heading-h1'>
              Looking to hire me? Check out my resume
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animateIn='fadeIn' delay={1000}>
            <a href={resume.link.url} className='button'>
              Download
            </a>
          </ScrollAnimation>
        </div>

        <ScrollAnimation
          animateIn='fadeIn'
          delay={500}
          animateOut='fadeOut'
          className='resume__right'
        >
          <img src={resume.img.url} alt={resume.img.alt} />
        </ScrollAnimation>
      </div>
    )
  } else return <div />
}

export default Resume
