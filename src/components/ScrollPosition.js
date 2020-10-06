import React from 'react';

const ScrollPosition = ({ activeSection }) => {
  return (
    <div className='scroll-position'>
      <div className='scroll-position__content'>
        <div
          className={
            activeSection === 1
              ? 'scroll-position__item scroll-position__item-active'
              : 'scroll-position__item'
          }
        />
        <div
          className={
            activeSection === 2
              ? 'scroll-position__item scroll-position__item-active'
              : 'scroll-position__item'
          }
        />
        <div
          className={
            activeSection === 3
              ? 'scroll-position__item scroll-position__item-active'
              : 'scroll-position__item'
          }
        />
        <div
          className={
            activeSection === 4
              ? 'scroll-position__item scroll-position__item-active'
              : 'scroll-position__item'
          }
        />
      </div>
    </div>
  );
};

export default ScrollPosition;
