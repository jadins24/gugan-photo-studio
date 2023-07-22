import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-head'>
        <div className='contact-head-text'>
          
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className='contact-container'>
        <div className='contact-form'>
          <h1> GET IN TOUCH US</h1>


          <form>
            <input type='text' placeholder='NAME'/>

          </form>

        </div>
        
      </div>
      

    </div>
  )
}

export default Contact