import React from 'react';
import Slider from 'react-slick';


import ImageOne from '../../resources/images/slide_one.jpg';
import ImageTwo from '../../resources/images/slide_two.jpg';
import ImageThree from '../../resources/images/slide_three.jpg';

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div
            className='carrousel_wrapper'
            style={{
                overflow: 'hidden',
                height: `${window.innerHeight}px`,
                background: 'red'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${ImageOne})`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${ImageTwo})`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${ImageThree})`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel
