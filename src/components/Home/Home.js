import React from 'react';
import './Home.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };


  return (
    <div className='home'>
        <div className='home-container'>
            <Slider {...settings} >
                <div >
                    <div className='slide1'>
                        <div className='slide-text'>
                            <h1>slide</h1>
                         
                        </div>
                    </div>
                </div>
                <div >
                    <div className='slide2'>
                       
                    </div>
                </div>
                <div >
                    <div className='slide3'>
                        
                    </div>
                </div>
                
            </Slider>
        </div>

    </div>
  )
}

export default Home