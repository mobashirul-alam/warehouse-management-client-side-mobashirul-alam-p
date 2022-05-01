import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1-home.png';
import banner2 from '../../../images/banner/banner-2-strength.png';
import banner3 from '../../../images/banner/banner-3-cardio.png';
import banner4 from '../../../images/banner/banner-4-boxing.png';
import banner5 from '../../../images/banner/banner-5-flooring.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-dark my-0 pb-2 border-bottom border-secondary'>Home Gym Equipment</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='text-dark my-0 pb-2 border-bottom border-secondary'>Strength Training Equipment</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='text-dark my-0 pb-2 border-bottom border-secondary'>Cardio Equipment</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='text-dark my-0 pb-2 border-bottom border-secondary'>Boxing Equipment</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner5}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='text-dark my-0 pb-2 border-bottom border-secondary'>Rubber Flooring</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;