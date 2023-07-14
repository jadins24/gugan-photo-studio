import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-content1'>
                <div className='footer-icons'>
                    <a href='/'><i className='fab fa-whatsapp'></i></a>
                    <a href='/'><i className='fab fa-facebook'></i></a>
                    <a href='/'><i className='fab fa-instagram'></i></a>
                    <a href='/'><i className='fab fa-facebook'></i></a>
                </div>
            
            </div>
            <div className='footer-content2'>

                <img src={require('../../assets/img/logo.png')} class="logo-img" alt="" />

                
            </div>
            <div className='footer-content3'>
                <p>©2023 GUGAN PHOTO STUDIO</p>
            </div>
            

        </div>
    </div>
  )
}

export default Footer