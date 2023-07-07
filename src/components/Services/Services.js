import React from 'react';
import './Services.scss';
import { useNavigate } from 'react-router-dom';



const Services = () => {
    
    const navigate = useNavigate() ;

  return (
    <div className='service' >
        <div className='service-container'>
            <div className='service-head'>
                <h1>SERVICES</h1>

            </div>
            <div className='services'>
                <div className='service-padding'>
                    <div className='service-card1' onClick={ () => navigate ("/kitchen-design")} >
                        
                        <div className='service-img'>
                            <img src={require('../../assets/img/wedding.jpg')}  alt="" />
                        </div>
                        <div className='service-title'>
                            <p> WEDDING PHOTOGRAPHY</p>
                        </div>
                        
                    </div>
                    

                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Services