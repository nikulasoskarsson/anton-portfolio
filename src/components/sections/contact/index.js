import React, { useState } from 'react'
import IconRight from './IconRight'
import ScrollAnimation from 'react-animate-on-scroll'
import Scroll from 'react-scroll'

const Contact = () => {
  const Element = Scroll.Element
  const [formData] = useState([
    {
      label: 'What is your name?',
      for: 'name',
      placement: 1,
    },
    {
      label: 'What is your email?',
      for: 'email',
      placement: 2,
    },
    {
      label: 'What is your subject?',
      for: 'subject',
      placement: 3,
    },
    {
      label: 'What is your message?',
      for: 'message',
      placement: 4,
    },
  ])

  const [formPlacement, setFormPlacement] = useState(0)

  const [error, setError] = useState(null)

  const handleFormChange = () => {
    const formField = formData[formPlacement].for

    const text = document.getElementById(formField).value

    if (formField === 'name') {
      if (text.length >= 3) {
        setFormPlacement(formPlacement + 1)
        setError(null)
      } else {
        setError('Name must be at lest 3 Characters')
      }
    } else if (formField === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
        setError('Not a valid email address')
      } else {
        setFormPlacement(formPlacement + 1)
        setError(null)
      }
    } else if (formField === 'subject') {
      if (text.length > 3) {
        setFormPlacement(formPlacement + 1)
        setError(null)
      } else {
        setError('Subject must be at lest 3 Characters')
      }
    }
  }

  return (
    <Element className='contact section' id='contact' name='contact'>
      <h1 className='heading-h1'>
        <ScrollAnimation animateIn='fadeIn'>
          Got a project, or do you just want to say hi?
        </ScrollAnimation>
      </h1>

      <ScrollAnimation
        animateIn='fadeIn'
        delay={500}
        className='contact__form-container'
      >
        <form
          className='contact__form'
          id='contact-form'
          name='contact-us'
          method='POST'
          data-netlify='true'
        >
          <input type='hidden' value='contact-us' name='form-name' />
          <div className='contact__form-input-container contact-border'>
            <input
              placeholder={formData[formPlacement].label}
              type='text'
              id='name'
              name='name'
              className={
                formData[formPlacement].for === 'name' ? '' : 'display-hidden'
              }
            />
            <input
              placeholder={formData[formPlacement].label}
              type='text'
              id='email'
              name='email'
              className={
                formData[formPlacement].for === 'email' ? '' : 'display-hidden'
              }
            />
            <input
              placeholder={formData[formPlacement].label}
              type='text'
              id='subject'
              name='subject'
              className={
                formData[formPlacement].for === 'subject'
                  ? ''
                  : 'display-hidden'
              }
            />

            <input
              placeholder={formData[formPlacement].label}
              type='text'
              id='message'
              name='message'
              className={
                formData[formPlacement].for === 'message'
                  ? ''
                  : 'display-hidden'
              }
            />
            {formPlacement < 3 ? (
              <div className='contact__form-icon' onClick={handleFormChange}>
                <IconRight />
              </div>
            ) : (
              <button class='button'>Send</button>
            )}
          </div>
          {error && <p className='contact__error'>{error}</p>}
          <p className='contact__form-placement'>
            {formData[formPlacement].placement} / 4
          </p>
        </form>
      </ScrollAnimation>
    </Element>
  )
}

export default Contact
