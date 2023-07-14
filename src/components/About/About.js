import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className='about'>
        <div className='about-container'>
            <div className='about-content1' >
              <div className='about-text'>
                <h2>About</h2>

                <p>hi gccgfg fjjf</p>

              </div>

            </div>
            <div className='about-content2'>
              
              <div className='about-img'>
                <img src={require('../../assets/img/about.jpg')}  alt="" />
              
              </div>

              


            </div>

        </div>
    </div>
  )
}

export default About