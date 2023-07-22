import React from 'react';
import './wedding.scss';

const Wedding = () => {
  return (
    <div className='content'>
      <div className='content-head'>
        <div className='content-head-text'>
          <h4>SERVICES</h4>
          <h1>WEDDING PHOTOGRAPHY</h1>
        </div>
      </div>
      <div className='content-container'>
        <div className='content-text'>

        </div>
        <div className='content-imgs'>
          <div className='content-img'>
            <img src={require('../../../assets/img/wedding1.jpg')}  alt="" />
              
          </div>
          <div className='content-img'>
            <img src={require('../../../assets/img/wedding2.jpg')}  alt="" />
              
          </div>
          <div className='content-img'>
            <img src={require('../../../assets/img/wedding3.jpg')}  alt="" />
              
          </div>
        </div>
      </div>

    </div>
  )
}

export default Wedding