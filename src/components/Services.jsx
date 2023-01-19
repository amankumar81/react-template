import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpg";
const Services = () => {
  return <div className="services">
    <Carousel infiniteLoop autoPlay showStatus = {false}    showArrows = {false} interval = {1000} showThumbs = {false}>
        <div>
            <img src={item1} alt="Full stack dev" />
            <p className='legend'>Full Stack</p>

        </div>
        <div>
        <img src={item2} alt="Full stack dev" />
        <p className='legend'>Need support ?</p>

        </div>
    </Carousel>
  </div>
}

export default Services
