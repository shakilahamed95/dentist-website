import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bannerimg1 from '../../../images/banner/bannerimg1.jpg'
import bannerimg2 from '../../../images/banner/bannerimg2.jpeg'
import bannerimg3 from '../../../images/banner/bannerimg3.jpeg'

const Banner = () => {

    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={bannerimg1}
                    alt="First slide"
                />
                <Carousel.Caption className='text-dark'>
                    <h3>I Am Here</h3>
                    <h5>To protect your teeth</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={bannerimg2}
                    alt="Second slide"
                />
                <Carousel.Caption className='text-dark'>
                    <h3>I Am Here</h3>
                    <h5>To make your smile gorgious</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerimg3}
                    alt="Third slide"
                />
                <Carousel.Caption className='text-dark'>
                    <h3>I Am Here</h3>
                    <h5>To keep your clean and safe</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;