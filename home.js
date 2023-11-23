
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import img1 from './harley-davidson-eeTJKC_wz34-unsplash.jpg';
import img2 from './ibrahim-mushan-sEIjI8ZJ4lY-unsplash.jpg'
import img3 from './rikas-rasheed-iq5jLDMVXZQ-unsplash.jpg'

const home = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to Ride Pro Wheels</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Drive safe</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Drive Responsible</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
    </div>
  )
}

export default home
