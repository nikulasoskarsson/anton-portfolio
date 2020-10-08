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
        action=''
      >
        <input type='hidden' value='contact-us' name='form-name' />
        <label className='contact__label' htmlFor={'input'}>
          {formData[formPlacement].label}
          {formPlacement < 3 && (
            <div onClick={() => setFormPlacement(formPlacement + 1)}>
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

        <p className='contact__form-placement'>
          {formData[formPlacement].placement} / 4
        </p>
        {formPlacement === 3 && <button class='button'>Send</button>}
      </form>
    </div>
  );
};

export default Contact;
