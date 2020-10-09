import React, { useState } from 'react';
import IconRight from './IconRight';

const Contact = () => {
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
  ]);

  const [formPlacement, setFormPlacement] = useState(0);

  const [error, setError] = useState(null);

  const handleFormChange = () => {
    const formField = formData[formPlacement].for;

    const text = document.getElementById(formField).value;

    if (formField === 'name') {
      if (text.length >= 3) {
        setFormPlacement(formPlacement + 1);
        setError(null);
      } else {
        setError('Name must be at lest 3 Characters');
      }
    } else if (formField === 'email') {
      console.log('email');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
        setError('Not a valid email address');
      } else {
        setFormPlacement(formPlacement + 1);
        setError(null);
      }
    } else if (formField === 'subject') {
      if (text.length > 3) {
        setFormPlacement(formPlacement + 1);
        setError(null);
      } else {
        setError('Subject must be at lest 3 Characters');
      }
    }
    //  else {
    //   if (text.length > 12) {
    //     setFormPlacement(formPlacement + 1);
    //     setError(null);
    //   } else {
    //     setError('Message must be at lest 12 Characters');
    //   }
    // }
  };

  return (
    <div className='contact' id='contact'>
      <h1 className='heading-h1'>
        Got a project, or do you just want to say hi?
      </h1>
      <form
        className='contact__form'
        id='contact-form'
        name='contact-us'
        method='POST'
        data-netlify='true'
      >
        <input type='hidden' value='contact-us' name='form-name' />
        <label className='contact__label' htmlFor={'input'}>
          {formData[formPlacement].label}
          {formPlacement < 3 && (
            <div onClick={handleFormChange}>
              <IconRight />
            </div>
          )}
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className={
            formData[formPlacement].for === 'name'
              ? 'contact__border'
              : 'display-hidden'
          }
        />
        <input
          type='text'
          id='email'
          name='email'
          className={
            formData[formPlacement].for === 'email'
              ? 'contact__border'
              : 'display-hidden'
          }
        />
        <input
          type='text'
          id='subject'
          name='subject'
          className={
            formData[formPlacement].for === 'subject'
              ? 'contact__border'
              : 'display-hidden'
          }
        />

        <input
          type='text'
          id='message'
          name='message'
          className={
            formData[formPlacement].for === 'message'
              ? 'contact__border'
              : 'display-hidden'
          }
        />
        {error && <p className='contact__error'>{error}</p>}
        <p className='contact__form-placement'>
          {formData[formPlacement].placement} / 4
        </p>
        {formPlacement === 3 && <button class='button'>Send</button>}
      </form>
    </div>
  );
};

export default Contact;
