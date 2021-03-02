import React from 'react';
import Carousel from './Carousel';
import CountDown from './CountDown';

const Featured = () => {
    return (
        <div className={{ position: 'relative' }}>
            <Carousel />
            <div className='artist_name'>
                <div className='wrapper'>
                    Iron Man
                </div>
            </div>
            <CountDown />
        </div>
    )
}

export default Featured
