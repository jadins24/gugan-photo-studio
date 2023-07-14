import React from 'react';
import './Gallery.scss';

const Gallery = () => {

  return (
    <div className='gallery'>
        <div className='gallery-head'>

        </div>
        <div className='gallery-container'>
            
            <div className='gallery-images'>
              <div className='image'>
                <img src={require('../../assets/img/wedding1.jpg')} class="logo-img" alt="" />
                
              </div>
              <div className='image'>
                <img src={require('../../assets/img/wedding2.jpg')} class="logo-img" alt="" />
                
              </div>
              <div className='image'>
                <img src={require('../../assets/img/wedding3.jpg')} class="logo-img" alt="" />
                
              </div>

            </div>
        </div>
        
    </div>
  )
}

export default Gallery