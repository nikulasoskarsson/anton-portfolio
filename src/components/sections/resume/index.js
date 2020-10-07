import React from 'react';

const Resume = ({ resume }) => {
  if (resume.img) {
    console.log(resume);
    return (
      <div className='resume' id='resume'>
        <div className='resume__left'>
          <h1 className='heading-h1'>
            Looking to hire me? Check out my resume
          </h1>
          <a href={resume.link.url} className='button'>
            Download
          </a>
        </div>

        <div className='resume__right'>
          <img src={resume.img.url} alt={resume.img.alt} />
        </div>
      </div>
    );
  } else return <div />;
};

export default Resume;
